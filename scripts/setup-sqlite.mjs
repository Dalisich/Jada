import fs from 'fs';
import path from 'path';

// Helper to extract the folder path from a DATABASE_URL
// e.g., "file:/data/database.sqlite" -> "/data"
function getDirectoryFromUrl(url) {
  if (!url || !url.startsWith('file:')) return null;
  
  // Remove the "file:" prefix
  let dbPath = url.replace('file:', '');
  
  // Handle relative paths (e.g., "./dev.db") vs absolute ("/data/db.sqlite")
  // If it doesn't start with / or ./ or ../ it's treated as relative by Prisma, but let's just use path.dirname
  
  // If we are given something like /data/database.sqlite
  return path.dirname(dbPath);
}

function generateEnvContent(databaseUrl) {
  return `DATABASE_URL="${databaseUrl}"
`;
}

async function main() {
  console.log('🔄 Running setup-sqlite.mjs...');

  let databaseUrl = process.env.DATABASE_URL || process.env.DB_PATH;
  
  // 1. Determine the database URL based on environment if not explicitly set
  if (!databaseUrl) {
    if (process.env.NODE_ENV === 'production') {
      console.log('📦 Production environment detected (NODE_ENV=production)');
      databaseUrl = 'file:/data/database.sqlite';
    } else {
      console.log('💻 Local development environment detected');
      databaseUrl = 'file:./dev.db';
    }
  } else {
    console.log(`🔌 Using provided DATABASE_URL: ${databaseUrl}`);
  }

  // 2. Ensure the directory exists
  const dbDirectory = getDirectoryFromUrl(databaseUrl);
  
  if (dbDirectory && dbDirectory !== '.') {
    // Only attempt to create if it's an absolute path like /data or a specific subfolder
    // Avoid creating '.'
    const absoluteDbDirectory = path.resolve(dbDirectory);
    
    if (!fs.existsSync(absoluteDbDirectory)) {
      console.log(`📁 Directory ${absoluteDbDirectory} does not exist. Creating it...`);
      try {
        fs.mkdirSync(absoluteDbDirectory, { recursive: true });
        console.log(`✅ Directory created successfully.`);
      } catch (err) {
        console.error(`❌ Failed to create directory ${absoluteDbDirectory}:`, err.message);
        // We don't exit here, maybe it's a permission issue but SQLite can still write? 
        // Usually, Prisma fails if the folder doesn't exist, so this creation is crucial.
      }
    } else {
      console.log(`✅ Directory ${absoluteDbDirectory} already exists.`);
    }

    // Also ensure the uploads directory exists
    const uploadsDir = process.env.NODE_ENV === 'production' 
      ? path.resolve('/data/uploads') 
      : path.resolve(process.cwd(), 'public/uploads');

    if (!fs.existsSync(uploadsDir)) {
      console.log(`📁 Upload directory ${uploadsDir} does not exist. Creating it...`);
      try {
        fs.mkdirSync(uploadsDir, { recursive: true });
        console.log(`✅ Upload directory created successfully.`);
      } catch (err) {
        console.error(`❌ Failed to create upload directory ${uploadsDir}:`, err.message);
      }
    } else {
      console.log(`✅ Upload directory ${uploadsDir} already exists.`);
    }
  }

  // 3. Write or append to .env file to ensure Prisma CLI and Next.js use this URL
  // We write to .env so that `npx prisma generate` and `npm run dev` / `npm start` pick it up automatically.
  // Note: Coolify allows setting env variables in its UI, which would override process.env, 
  // but Prisma CLI relies heavily on the .env file during build time.
  const envFilePath = path.join(process.cwd(), '.env');
  
  try {
    if (fs.existsSync(envFilePath)) {
      let envContent = fs.readFileSync(envFilePath, 'utf8');
      
      // Update existing DATABASE_URL or append it
      if (envContent.includes('DATABASE_URL=')) {
        // Replace existing
        envContent = envContent.replace(/DATABASE_URL=.*(\r?\n|$)/, `DATABASE_URL="${databaseUrl}"\n`);
      } else {
        envContent += `\nDATABASE_URL="${databaseUrl}"\n`;
      }
      
      fs.writeFileSync(envFilePath, envContent);
      console.log('✅ Updated existing .env file with DATABASE_URL.');
    } else {
      // Create new .env
      fs.writeFileSync(envFilePath, generateEnvContent(databaseUrl));
      console.log('✅ Created new .env file with DATABASE_URL.');
    }
  } catch (err) {
    console.error('❌ Failed to write to .env file:', err.message);
  }

  console.log(`🔥 SQLite setup complete. Using DB URL: ${databaseUrl}`);
}

main().catch(console.error);
