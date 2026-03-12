"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Image,
  FolderOpen,
  Tag,
  DatabaseBackup,
} from "lucide-react";

const navGroups = [
  {
    label: "Übersicht",
    items: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    ],
  },
  {
    label: "Blogartikel",
    items: [
      { href: "/admin/posts", label: "Alle Artikel", icon: FileText, exact: false },
      { href: "/admin/posts/new", label: "Neuer Artikel", icon: PlusCircle, exact: true },
    ],
  },
  {
    label: "Referenzen",
    items: [
      { href: "/admin/projects", label: "Alle Referenzen", icon: Image, exact: false },
      { href: "/admin/projects/new", label: "Neue Referenz", icon: PlusCircle, exact: true },
    ],
  },
  {
    label: "Verwaltung",
    items: [
      { href: "/admin/categories", label: "Kategorien", icon: Tag, exact: false },
      { href: "/admin/backup", label: "Backup & Restore", icon: DatabaseBackup, exact: true },
    ],
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    // For list pages: active when on the list page itself but NOT on /new or /[id]
    if (href === "/admin/posts") return pathname === "/admin/posts";
    if (href === "/admin/projects") return pathname === "/admin/projects";
    if (href === "/admin/categories") return pathname.startsWith("/admin/categories");
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
            {group.label}
          </p>
          <div className="space-y-0.5">
            {group.items.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent/15 text-accent"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
