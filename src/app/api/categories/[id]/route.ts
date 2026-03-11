import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if category has posts
    const category = await prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { posts: true } } },
    });

    if (!category) {
      return NextResponse.json({ error: "Kategorie nicht gefunden." }, { status: 404 });
    }

    if (category._count.posts > 0) {
      return NextResponse.json(
        { error: `Diese Kategorie enthält noch ${category._count.posts} Artikel und kann nicht gelöscht werden.` },
        { status: 409 }
      );
    }

    await prisma.category.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Fehler beim Löschen." }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { name } = await request.json();

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name muss mindestens 2 Zeichen lang sein." }, { status: 400 });
    }

    const slug = name
      .trim()
      .toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const category = await prisma.category.update({
      where: { id },
      data: { name: name.trim(), slug },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return NextResponse.json({ error: "Diese Kategorie existiert bereits." }, { status: 409 });
    }
    return NextResponse.json({ error: "Fehler beim Aktualisieren." }, { status: 500 });
  }
}
