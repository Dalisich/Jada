import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

// This route resets or creates the admin user.
// It is protected by a secret token (SETUP_TOKEN env variable).
// CALL: GET /api/setup-admin?token=YOUR_SETUP_TOKEN
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  const setupToken = process.env.SETUP_TOKEN ?? "jada-setup-2026";

  if (token !== setupToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = "admin@jada.ch";
  const password = "jada2026";
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      password: hashedPassword,
      name: "JADA Admin",
      role: "ADMIN",
    },
  });

  return NextResponse.json({
    success: true,
    message: `Admin user '${user.email}' created or updated. Password is now 'jada2026'.`,
  });
}
