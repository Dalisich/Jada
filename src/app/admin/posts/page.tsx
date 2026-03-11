import { Metadata } from "next";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff, LayoutDashboard, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export const metadata: Metadata = {
  title: "Admin Dashboard | JADA",
};

export default async function AdminDashboardPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true, author: true },
  });

  const published = posts.filter((p: any) => p.status === "PUBLISHED").length;
  const drafts = posts.filter((p: any) => p.status === "DRAFT").length;

  return (
    <>
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-accent" />
            Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">Übersicht aller Blog-Artikel</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#c94f03] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Neuer Artikel
        </Link>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Alle Artikel</p>
            <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
          </div>
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Veröffentlicht</p>
            <p className="text-3xl font-bold text-green-600">{published}</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
            <Eye className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Entwürfe</p>
            <p className="text-3xl font-bold text-gray-400">{drafts}</p>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <EyeOff className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 font-medium">
              <tr>
                <th className="px-6 py-4">Titel</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Kategorie</th>
                <th className="px-6 py-4">Datum</th>
                <th className="px-6 py-4 text-right">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    Noch keine Artikel vorhanden. Erstelle deinen ersten Artikel!
                  </td>
                </tr>
              ) : (
                posts.map((post: any) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-normal min-w-[300px]">
                      {post.title}
                    </td>
                    <td className="px-6 py-4">
                      {post.status === "PUBLISHED" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Eye className="w-3.5 h-3.5" /> Veröffentlicht
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <EyeOff className="w-3.5 h-3.5" /> Entwurf
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {post.category?.name || "—"}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("de-CH")}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors"
                        title="Bearbeiten"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <DeleteButton id={post.id} type="posts" title={post.title} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export {};
