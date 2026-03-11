"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: string;
  type: "posts" | "projects";
  title?: string;
}

export default function DeleteButton({ id, type, title }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmMessage = title 
      ? `Möchten Sie "${title}" wirklich löschen?` 
      : "Möchten Sie diesen Eintrag wirklich löschen?";

    if (!confirm(confirmMessage)) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/${type}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Fehler beim Löschen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="inline-flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
      title="Löschen"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Trash2 className="w-4 h-4" />
      )}
    </button>
  );
}
