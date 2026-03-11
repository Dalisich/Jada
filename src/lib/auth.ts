import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const log = (msg: string) => {
  console.log(`[AUTH] ${msg}`);
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        log(`🔍 Auth attempt for: ${credentials.email}`);

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          log(`❌ User not found: ${credentials.email}`);
          return null;
        }

        log(`👤 User found: ${user.email}`);

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!passwordMatch) {
          log(`❌ Password mismatch for: ${credentials.email}`);
          return null;
        }

        log(`✅ Auth successful: ${credentials.email}`);
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        log(`🔑 JWT Callback - User: ${user.email}`);
        token.id = user.id;
        token.role = (user as { role: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        log(`📂 Session Callback - User: ${session.user.email}`);
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      } else {
        log(`⚠️ Session Callback - NO USER`);
      }
      return session;
    },
  },
  trustHost: true,
});
