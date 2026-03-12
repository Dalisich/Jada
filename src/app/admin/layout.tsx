import Link from "next/link";
import { LogOut, ArrowLeft } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-60 bg-primary text-white flex flex-col md:min-h-screen border-r border-primary/20 shrink-0 shadow-xl z-20">
        {/* Logo */}
        <div className="px-5 pt-6 pb-4">
          <Link href="/admin" className="inline-block mb-3">
            <img
              src="/Logo/Logo_Schiftzug_weiss.png?v=3"
              alt="Jada Logo"
              className="object-contain h-10 w-auto"
            />
          </Link>
          <div className="text-[10px] text-white/40 tracking-widest uppercase font-bold">
            Admin Panel
          </div>
        </div>

        {/* User info */}
        <div className="mx-3 mb-2 px-3 py-2.5 rounded-xl bg-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center text-accent font-bold text-sm shrink-0">
            {session.user?.name?.charAt(0) || "A"}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">
              {session.user?.name}
            </div>
            <div className="text-xs text-white/40">
              {(session.user as any)?.role || "Admin"}
            </div>
          </div>
        </div>

        {/* Navigation — client component for active state */}
        <AdminNav />

        {/* Footer */}
        <div className="px-3 pb-4 pt-2 border-t border-white/10 space-y-0.5">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Zur Webseite
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
            className="w-full"
          >
            <button
              type="submit"
              className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              Abmelden
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden p-6 md:p-10 w-full min-w-0">
        {children}
      </main>
    </div>
  );
}
