export const dynamic = "force-dynamic";

import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Image,
  Eye,
  EyeOff,
  PlusCircle,
  Tag,
  ArrowRight,
  Edit,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Dashboard | Admin | JADA",
};

export default async function AdminDashboardPage() {
  const [recentPosts, recentProjects, categories, totalPosts, totalProjects, published] =
    await Promise.all([
      prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        include: { category: true },
        take: 5,
      }),
      prisma.project.findMany({
        orderBy: { createdAt: "desc" },
        include: { category: true },
        take: 5,
      }),
      prisma.category.findMany(),
      prisma.post.count(),
      prisma.project.count(),
      prisma.post.count({ where: { status: "PUBLISHED" } }),
    ]);

  const drafts = totalPosts - published;

  return (
    <>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Willkommen im Admin-Bereich</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Artikel</span>
            <div className="w-9 h-9 bg-primary/5 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalPosts}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Veröffentlicht</span>
            <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">{published}</p>
          {drafts > 0 && (
            <p className="text-xs text-gray-400 mt-1">{drafts} Entwurf{drafts !== 1 ? "e" : ""}</p>
          )}
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Referenzen</span>
            <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
              <Image className="w-5 h-5 text-accent" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalProjects}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Kategorien</span>
            <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Tag className="w-5 h-5 text-secondary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{categories.length}</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-[#c94f03] transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Neuer Artikel
        </Link>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Neue Referenz
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent posts */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Letzte Blogartikel
            </h2>
            <Link
              href="/admin/posts"
              className="text-xs text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Alle anzeigen <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentPosts.length === 0 ? (
              <p className="px-5 py-8 text-sm text-gray-400 text-center">
                Noch keine Artikel vorhanden.
              </p>
            ) : (
              recentPosts.map((post: any) => (
                <div
                  key={post.id}
                  className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {post.category?.name || "—"} · {new Date(post.createdAt).toLocaleDateString("de-CH")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {post.status === "PUBLISHED" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                        <Eye className="w-3 h-3" /> Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">
                        <EyeOff className="w-3 h-3" /> Entwurf
                      </span>
                    )}
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent projects */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <Image className="w-4 h-4 text-accent" />
              Letzte Referenzen
            </h2>
            <Link
              href="/admin/projects"
              className="text-xs text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Alle anzeigen <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentProjects.length === 0 ? (
              <p className="px-5 py-8 text-sm text-gray-400 text-center">
                Noch keine Referenzen vorhanden.
              </p>
            ) : (
              recentProjects.map((project: any) => (
                <div
                  key={project.id}
                  className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{project.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {project.category?.name || "—"} · {new Date(project.createdAt).toLocaleDateString("de-CH")}
                    </p>
                  </div>
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors shrink-0"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
