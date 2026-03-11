import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const userCount = await prisma.user.count();
    const users = await prisma.user.findMany({
      select: { email: true, name: true, role: true }
    });

    const dbPath = process.env.DATABASE_URL;

    return NextResponse.json({
      status: "Database connected",
      userCount,
      users,
      dbPath: dbPath?.replace(/:.*@/, ":***@"), // Hide sensitive parts if any
      nodeEnv: process.env.NODE_ENV,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "Error connecting to database",
      error: error.message
    }, { status: 500 });
  }
}

// Emergency reset - use with caution!
export async function POST() {
  try {
    const password = await bcrypt.hash("jada2026", 12);
    const admin = await prisma.user.upsert({
      where: { email: "admin@jada.ch" },
      update: { password },
      create: {
        email: "admin@jada.ch",
        name: "JADA Admin",
        password,
        role: "ADMIN",
      },
    });

    return NextResponse.json({
      status: "Admin user reset successful",
      email: admin.email
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "Error resetting admin",
      error: error.message
    }, { status: 500 });
  }
}
