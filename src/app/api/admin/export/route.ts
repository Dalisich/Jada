import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

function extractFilename(imageUrl: string | null): string | null {
  if (!imageUrl) return null;
  // handles /api/images/filename or /uploads/filename
  const parts = imageUrl.split("/");
  return parts[parts.length - 1] || null;
}

async function readImageAsBase64(imageUrl: string | null): Promise<string | null> {
  const filename = extractFilename(imageUrl);
  if (!filename) return null;

  const isProd = process.env.NODE_ENV === "production";
  const paths = [
    isProd ? `/data/uploads/${filename}` : join(process.cwd(), "public", "uploads", filename),
    join(process.cwd(), "public", "uploads", filename),
  ];

  for (const p of paths) {
    if (existsSync(p)) {
      try {
        const buffer = await readFile(p);
        const ext = filename.split(".").pop()?.toLowerCase() || "jpg";
        const mimeMap: Record<string, string> = {
          jpg: "image/jpeg", jpeg: "image/jpeg",
          png: "image/png", webp: "image/webp",
          gif: "image/gif", svg: "image/svg+xml",
        };
        const mime = mimeMap[ext] || "image/jpeg";
        return `data:${mime};base64,${buffer.toString("base64")}`;
      } catch {
        return null;
      }
    }
  }
  return null;
}

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [categories, posts, projects] = await Promise.all([
    prisma.category.findMany(),
    prisma.post.findMany({ include: { category: true, author: true } }),
    prisma.project.findMany({ include: { category: true } }),
  ]);

  // Attach base64 images
  const postsWithImages = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      coverImageBase64: await readImageAsBase64(post.coverImage),
      coverImageFilename: extractFilename(post.coverImage),
    }))
  );

  const projectsWithImages = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      imageBase64: await readImageAsBase64(project.image),
      imageFilename: extractFilename(project.image),
    }))
  );

  const exportData = {
    exportedAt: new Date().toISOString(),
    version: 1,
    categories,
    posts: postsWithImages,
    projects: projectsWithImages,
  };

  return new NextResponse(JSON.stringify(exportData, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="jada-backup-${new Date().toISOString().split("T")[0]}.json"`,
    },
  });
}
