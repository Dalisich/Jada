"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface Props {
  id: string;
  name: string;
  postCount: number;
}

export default function DeleteCategoryButton({ id, name, postCount }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (postCount > 0) {
      alert(`Die Kategorie „${name}" enthält noch ${postCount} Artikel und kann nicht gelöscht werden. Bitte verschieben oder löschen Sie zuerst die Artikel.`);
      return;
    }
    if (!confirm(`Kategorie „${name}" wirklich löschen?`)) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/categories/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Fehler beim Löschen.");
        return;
      }
      router.refresh();
    } catch {
      alert("Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading || postCount > 0}
      title={postCount > 0 ? `Enthält ${postCount} Artikel – nicht löschbar` : "Löschen"}
      className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <Trash2 className={`w-4 h-4 ${loading ? "animate-pulse" : ""}`} />
    </button>
  );
}
