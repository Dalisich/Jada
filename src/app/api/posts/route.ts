import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "9");
  const status = searchParams.get("status");
  const category = searchParams.get("category");

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (category) where.categoryId = category;

  // Only show published posts for non-admin requests
  const session = await auth();
  if (!session) {
    where.status = "PUBLISHED";
  }

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      include: { category: true, author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.post.count({ where }),
  ]);

  return NextResponse.json({
    posts,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, slug, excerpt, content, coverImage, categoryId, status, metaTitle, metaDesc } = body;

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      categoryId,
      authorId: (session.user as { id: string }).id || "",
      status: status || "DRAFT",
      metaTitle,
      metaDesc,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
