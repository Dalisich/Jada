import Link from "next/link";
import { LayoutDashboard, FileText, Settings, LogOut, ArrowLeft } from "lucide-react";
import { auth, signOut } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // If not logged in, just render children (for the login page)
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-white flex flex-col md:min-h-screen border-r border-primary/20 shrink-0 shadow-xl z-20">
        <div className="p-6">
          <Link href="/admin/posts" className="inline-block mb-3">
             <img 
              src="/Logo/Logo_Schiftzug_weiss.png?v=3" 
              alt="Jada Logo" 
              className="object-contain h-12 w-auto" 
            />
          </Link>
          <div className="text-xs text-white/50 tracking-widest uppercase font-semibold">Admin Panel</div>
        </div>

        <div className="px-4 py-3 border-y border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
            {session.user?.name?.charAt(0) || "A"}
          </div>
          <div>
            <div className="text-sm font-medium">{session.user?.name}</div>
            <div className="text-xs text-white/40">{(session.user as any)?.role || "Admin"}</div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin/posts"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-accent/10 text-accent font-medium"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            Neuer Artikel
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            Referenzen
          </Link>
          <Link
            href="/admin/categories"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4" />
            Kategorien
          </Link>
        </nav>

        <div className="p-4 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
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
              <LogOut className="w-4 h-4" />
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
