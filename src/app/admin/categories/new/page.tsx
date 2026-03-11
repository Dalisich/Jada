"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Fehler beim Erstellen.");
        return;
      }

      router.push("/admin/categories");
      router.refresh();
    } catch {
      setError("Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/categories" className="p-2 -ml-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Neue Kategorie</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Kategoriename</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent text-lg"
            placeholder="z.B. Energieeffizienz"
            autoFocus
            required
            minLength={2}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-xs text-gray-400 mt-2">
            Die URL wird automatisch generiert: <span className="font-mono text-accent">/blog/kategorie/{name ? name.toLowerCase().replace(/\s+/g, "-") : "..."}</span>
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/admin/categories" className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Abbrechen
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-[#c94f03] transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {loading ? "Speichern..." : "Erstellen"}
          </button>
        </div>
      </form>
    </div>
  );
}
