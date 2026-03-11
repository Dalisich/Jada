"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Check, X, ArrowLeft, Save, Loader2 } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";
import RichTextEditor from "@/components/admin/RichTextEditor";

const projectSchema = z.object({
  title: z.string().min(3, "Titel muss mindestens 3 Zeichen lang sein"),
  categoryId: z.string().min(1, "Eine Kategorie ist erforderlich"),
  desc: z.string().min(10, "Beschreibung muss mindestens 10 Zeichen lang sein"),
  image: z.string().min(1, "Ein Bild ist erforderlich"),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [addingCat, setAddingCat] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [catError, setCatError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [projRes, catRes] = await Promise.all([
          fetch(`/api/projects/${id}`),
          fetch("/api/categories")
        ]);
        
        if (!projRes.ok) throw new Error("Failed to fetch project");
        
        const projData = await projRes.json();
        const catData = await catRes.json();
        
        setCategories(catData);
        
        setValue("title", projData.title);
        setValue("categoryId", projData.categoryId); // ensure this maps correctly
        setValue("desc", projData.desc);
        setValue("image", projData.image || "");
      } catch (err) {
        console.error(err);
      } finally {
        setFetching(false);
      }
    }
    fetchData();
  }, [id, setValue]);

  const createCategory = async () => {
    if (!newCatName.trim()) return;
    setCatError("");
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCatName.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setCatError(data.error || "Fehler beim Erstellen der Kategorie.");
        return;
      }
      setCategories((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
      setValue("categoryId", data.id, { shouldValidate: true });
      setNewCatName("");
      setAddingCat(false);
    } catch {
      setCatError("Ein Fehler ist aufgetreten.");
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to save project");

      router.push("/admin/projects");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Fehler beim Speichern der Referenz.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 animate-spin text-accent mb-4" />
        <p className="text-gray-500">Projekt wird geladen...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/projects"
            className="p-2 -ml-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Projekt bearbeiten</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Projekttitel
            </label>
            <input
              type="text"
              {...register("title")}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="z.B. Kantonsspital Winterthur"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Kategorie</label>
              <button
                type="button"
                onClick={() => { setAddingCat(!addingCat); setCatError(""); setNewCatName(""); }}
                className="flex items-center gap-1 text-xs text-accent hover:text-[#c94f03] font-medium transition-colors"
              >
                <Plus className="w-3 h-3" />
                Neue Kategorie
              </button>
            </div>

            {addingCat && (
              <div className="mb-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); createCategory(); }}}
                    placeholder="z.B. Spezialdämmung"
                    autoFocus
                    className="flex-1 px-3 py-2 text-sm border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <button
                    type="button"
                    onClick={createCategory}
                    className="p-2 bg-accent text-white rounded-lg hover:bg-[#c94f03] transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { setAddingCat(false); setCatError(""); setNewCatName(""); }}
                    className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {catError && <p className="text-red-500 text-xs mt-1">{catError}</p>}
              </div>
            )}

            <select
              {...register("categoryId")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
            >
              <option value="" disabled>Bitte wählen...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ausführliche Beschreibung
            </label>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <div className="prose-wrapper">
                  <RichTextEditor content={field.value} onChange={field.onChange} />
                </div>
              )}
            />
            {errors.desc && <p className="text-red-500 text-xs mt-1">{errors.desc.message}</p>}
          </div>

          <div>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  label="Projektbild"
                />
              )}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/projects"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Abbrechen
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-[#c94f03] transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Änderungen speichern
          </button>
        </div>
      </form>
    </div>
  );
}
