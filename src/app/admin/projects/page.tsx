import { Metadata } from "next";
import Link from "next/link";
import { Plus, Edit, Trash2, LayoutDashboard, Image as ImageIcon } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import DeleteButton from "@/components/admin/DeleteButton";

export const metadata: Metadata = {
  title: "Referenzen | Admin Dashboard | JADA",
};

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <>
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-accent" />
            Referenzen
          </h1>
          <p className="text-gray-500 text-sm mt-1">Übersicht aller Projekte</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#c94f03] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Neues Projekt
        </Link>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Alle Referenzen</p>
            <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
          </div>
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Aktive Kategorien</p>
            <p className="text-3xl font-bold text-accent">{new Set(projects.map(p => p.categoryId)).size}</p>
          </div>
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
             <LayoutDashboard className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-500 bg-white border border-gray-200 rounded-xl">
            Noch keine Projekte vorhanden. Erstelle deine erste Referenz!
          </div>
        ) : (
          projects.map((project: any) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                ) : (
                  <ImageIcon className="w-10 h-10 text-gray-300" />
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-primary shadow-sm">
                    {project.category?.name || 'Ohne Kategorie'}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-bold text-gray-900 line-clamp-1 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">{project.desc}</p>
                
                <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="flex-1 inline-flex justify-center items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </Link>
                  <DeleteButton id={project.id} type="projects" title={project.title} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
