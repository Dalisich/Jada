import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Path to persistent storage depending on environment
    const isProd = process.env.NODE_ENV === "production";
    const primaryDir = isProd ? "/data/uploads" : join(process.cwd(), "public", "uploads");
    const fallbackDir = join(process.cwd(), "public", "uploads");
    
    // Create unique filename to avoid overwrites
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.name.replace(/\s+/g, "-")}`;
    
    let path = join(primaryDir, filename);
    let finalUrl = "";

    try {
      // Create primary directory if it doesn't exist
      if (!existsSync(primaryDir)) {
         await mkdir(primaryDir, { recursive: true });
      }
      
      // Attempt to write to primary location
      await writeFile(path, buffer);
      finalUrl = isProd ? `/api/images/${filename}` : `/uploads/${filename}`;
      console.log(`✅ Uploaded to primary location: ${path}`);
      
    } catch (primaryError: any) {
      console.warn(`⚠️ Failed to write to primary ${primaryDir}:`, primaryError.message);
      console.warn(`🔄 Falling back to local directory...`);
      
      try {
        // Fallback to local public/uploads directory
        if (!existsSync(fallbackDir)) {
          await mkdir(fallbackDir, { recursive: true });
        }
        
        path = join(fallbackDir, filename);
        await writeFile(path, buffer);
        finalUrl = `/uploads/${filename}`;
        
        console.log(`✅ Successfully uploaded to fallback location: ${path}`);
      } catch (fallbackError: any) {
         console.error(`❌ Failed to write to fallback ${fallbackDir}:`, fallbackError.message);
         throw new Error("Local fallback upload also failed.");
      }
    }

    return NextResponse.json({
      url: finalUrl,
      name: file.name,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
