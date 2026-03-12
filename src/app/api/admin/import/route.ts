import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

async function saveBase64Image(base64: string, filename: string): Promise<string> {
  const isProd = process.env.NODE_ENV === "production";
  const dir = isProd ? "/data/uploads" : join(process.cwd(), "public", "uploads");

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  const matches = base64.match(/^data:(.+);base64,(.+)$/);
  if (!matches) throw new Error("Invalid base64 image");

  const buffer = Buffer.from(matches[2], "base64");
  const filePath = join(dir, filename);
  await writeFile(filePath, buffer);

  return isProd ? `/api/images/${filename}` : `/uploads/${filename}`;
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Den aktuell eingeloggten User holen (wird als Author für importierte Posts verwendet)
  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email! },
  });
  if (!currentUser) {
    return NextResponse.json({ error: "Kein Benutzer gefunden" }, { status: 400 });
  }

  try {
    const data = await request.json();

    if (!data.version || !data.categories || !data.posts || !data.projects) {
      return NextResponse.json({ error: "Ungültiges Backup-Format" }, { status: 400 });
    }

    const stats = { categories: 0, posts: 0, projects: 0, skipped: 0 };

    // 1. Kategorien importieren — Mapping von alter ID zu neuer ID aufbauen
    const categoryIdMap: Record<string, string> = {};
    for (const cat of data.categories) {
      const upserted = await prisma.category.upsert({
        where: { slug: cat.slug },
        update: { name: cat.name },
        create: { id: cat.id, name: cat.name, slug: cat.slug },
      });
      categoryIdMap[cat.id] = upserted.id;
      stats.categories++;
    }

    // 2. Artikel (Posts) importieren
    for (const post of data.posts) {
      const existing = await prisma.post.findUnique({ where: { slug: post.slug } });
      if (existing) {
        stats.skipped++;
        continue;
      }

      let coverImage = post.coverImage;
      if (post.coverImageBase64 && post.coverImageFilename) {
        try {
          coverImage = await saveBase64Image(post.coverImageBase64, post.coverImageFilename);
        } catch {
          coverImage = post.coverImage;
        }
      }

      // Kategorie-ID aus Mapping holen, Fallback auf Original
      const resolvedCategoryId = categoryIdMap[post.categoryId] || post.categoryId;

      await prisma.post.create({
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage,
          categoryId: resolvedCategoryId,
          authorId: currentUser.id, // immer den aktuellen User verwenden
          status: post.status,
          metaTitle: post.metaTitle ?? null,
          metaDesc: post.metaDesc ?? null,
          publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
          createdAt: new Date(post.createdAt),
          updatedAt: new Date(post.updatedAt),
        },
      });
      stats.posts++;
    }

    // 3. Referenzen (Projects) importieren
    for (const project of data.projects) {
      const existing = await prisma.project.findFirst({
        where: { title: project.title, categoryId: categoryIdMap[project.categoryId] || project.categoryId },
      });
      if (existing) {
        stats.skipped++;
        continue;
      }

      let image = project.image;
      if (project.imageBase64 && project.imageFilename) {
        try {
          image = await saveBase64Image(project.imageBase64, project.imageFilename);
        } catch {
          image = project.image;
        }
      }

      const resolvedCategoryId = categoryIdMap[project.categoryId] || project.categoryId;

      await prisma.project.create({
        data: {
          title: project.title,
          desc: project.desc,
          image,
          categoryId: resolvedCategoryId,
          createdAt: new Date(project.createdAt),
          updatedAt: new Date(project.updatedAt),
        },
      });
      stats.projects++;
    }

    return NextResponse.json({
      success: true,
      message: `Import erfolgreich: ${stats.categories} Kategorien, ${stats.posts} Artikel, ${stats.projects} Referenzen importiert. ${stats.skipped} bereits vorhanden (übersprungen).`,
      stats,
    });
  } catch (error: any) {
    console.error("Import error:", error);
    return NextResponse.json({
      error: `Import fehlgeschlagen: ${error?.message || "Unbekannter Fehler"}`,
    }, { status: 500 });
  }
}
