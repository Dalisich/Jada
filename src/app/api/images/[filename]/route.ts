import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  
  // We only serve from /data/uploads in production.
  // Locally, standard /uploads/ handles it.
  const uploadDir = process.env.NODE_ENV === "production" 
    ? "/data/uploads" 
    : join(process.cwd(), "public", "uploads");

  const filePath = join(uploadDir, filename);

  if (!existsSync(filePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const fileBuffer = await readFile(filePath);
    
    // Guess content type from extension
    let contentType = "image/jpeg";
    if (filename.endsWith(".png")) contentType = "image/png";
    if (filename.endsWith(".webp")) contentType = "image/webp";
    if (filename.endsWith(".gif")) contentType = "image/gif";
    if (filename.endsWith(".svg")) contentType = "image/svg+xml";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
