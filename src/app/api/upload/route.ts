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
    const uploadDir = isProd 
      ? "/data/uploads" 
      : join(process.cwd(), "public", "uploads");
    
    // Create directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Create unique filename to avoid overwrites
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.name.replace(/\s+/g, "-")}`;
    const path = join(uploadDir, filename);

    await writeFile(path, buffer);
    
    // Return the URL for browser access. 
    // In production we need a dynamic route because it's outside the web root.
    // Locally we can also use this dynamic route for consistency, or standard public serving.
    const url = isProd ? `/api/images/${filename}` : `/uploads/${filename}`;

    return NextResponse.json({
      url,
      name: file.name,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
