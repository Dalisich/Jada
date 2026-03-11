const fs = require('fs');
const path = require('path');

async function testUpload() {
  const filePath = path.join(__dirname, 'public/Logo/Logo_Schiftzug_weiss.png');
  const fileBuffer = fs.readFileSync(filePath);
  
  // Create a mock Request
  // But wait, I can just use fetch since this is node 20+ probably
  try {
     const formData = new FormData();
     const blob = new Blob([fileBuffer], { type: 'image/png' });
     formData.append('file', blob, 'test.png');

     console.log('Testing upload to http://localhost:3000/api/upload...');
     const res = await fetch('http://localhost:3000/api/upload', {
       method: 'POST',
       body: formData,
       // We need a session cookie to pass the auth check...
       // This will likely fail with 401.
     });

     console.log('Status:', res.status);
     const data = await res.json();
     console.log('Response:', data);
  } catch (e) {
    console.error('Fetch error:', e.message);
  }
}

testUpload();
