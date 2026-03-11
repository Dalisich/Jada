import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("categoryId");

  const where: Record<string, unknown> = {};
  if (categoryId) {
    where.categoryId = categoryId;
  }

  const projects = await prisma.project.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, categoryId, desc, image } = body;

  const project = await prisma.project.create({
    data: {
      title,
      categoryId,
      desc,
      image,
    },
  });

  return NextResponse.json(project, { status: 201 });
}
