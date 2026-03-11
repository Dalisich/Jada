"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, Send, Link2, Lock, Unlock, Plus, Check, X, Loader2 } from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";

const postSchema = z.object({
  title: z.string().min(3, "Titel muss mindestens 3 Zeichen lang sein"),
  slug: z.string().min(3, "Slug muss mindestens 3 Zeichen lang sein"),
  categoryId: z.string().min(1, "Bitte wählen Sie eine Kategorie"),
  excerpt: z.string().min(10, "Auszug muss mindestens 10 Zeichen lang sein"),
  content: z.string().min(10, "Inhalt darf nicht leer sein"),
  coverImage: z.string().min(1, "Ein Titelbild ist erforderlich"),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
});

type PostFormData = z.infer<typeof postSchema>;

export default function NewPostPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [savingAs, setSavingAs] = useState<"DRAFT" | "PUBLISHED" | null>(null);
  const [slugLocked, setSlugLocked] = useState(true);
  const [addingCat, setAddingCat] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [catError, setCatError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      slug: "",
      categoryId: "",
      excerpt: "",
      content: "",
      coverImage: "",
      metaTitle: "",
      metaDesc: "",
    },
  });

  const title = watch("title");

  // Auto-generate slug from title (always, unless user has manually unlocked and edited it)
  useEffect(() => {
    if (title && slugLocked) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setValue("slug", generatedSlug, { shouldValidate: true });
    }
  }, [title, setValue, slugLocked]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) {
          setValue("categoryId", data[0].id);
        }
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    }
    fetchCategories();
  }, [setValue]);

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
      // Add to list and select the new category
      setCategories((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
      setValue("categoryId", data.id, { shouldValidate: true });
      setNewCatName("");
      setAddingCat(false);
    } catch {
      setCatError("Ein Fehler ist aufgetreten.");
    }
  };

  const onSubmit = async (data: PostFormData, status: "DRAFT" | "PUBLISHED") => {
    setLoading(true);
    setSavingAs(status);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, status }),
      });

      if (!res.ok) throw new Error("Failed to save post");

      router.push("/admin/posts");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Fehler beim Speichern des Artikels.");
    } finally {
      setLoading(false);
      setSavingAs(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/posts"
            className="p-2 -ml-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Neuer Artikel</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleSubmit((data) => onSubmit(data, "DRAFT"))()}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {savingAs === "DRAFT" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Als Entwurf
          </button>
          <button
            onClick={() => handleSubmit((data) => onSubmit(data, "PUBLISHED"))()}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-[#c94f03] transition-colors disabled:opacity-50"
          >
            {savingAs === "PUBLISHED" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            Veröffentlichen
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titel
              </label>
              <input
                type="text"
                {...register("title")}
                className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
                placeholder="Artikel Titel..."
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Auszug (Excerpt)
              </label>
              <textarea
                {...register("excerpt")}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent resize-none"
                placeholder="Kurze Zusammenfassung für die Blog-Übersicht..."
              />
              {errors.excerpt && <p className="text-red-500 text-xs mt-1">{errors.excerpt.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inhalt
              </label>
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <RichTextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content.message}</p>}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Einstellungen</h2>
            
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
                      placeholder="z.B. Energieeffizienz"
                      autoFocus
                      className="flex-1 px-3 py-2 text-sm border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    <button
                      type="button"
                      onClick={createCategory}
                      className="p-2 bg-accent text-white rounded-lg hover:bg-[#c94f03] transition-colors"
                      title="Speichern"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => { setAddingCat(false); setCatError(""); setNewCatName(""); }}
                      className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Abbrechen"
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
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Webadresse des Artikels
                </label>
                <button
                  type="button"
                  onClick={() => setSlugLocked(!slugLocked)}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-accent transition-colors"
                  title={slugLocked ? "Manuell bearbeiten" : "Automatisch generieren"}
                >
                  {slugLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  {slugLocked ? "Automatisch" : "Manuell"}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Link2 className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...register("slug")}
                  readOnly={slugLocked}
                  className={`w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-accent focus:border-accent ${
                    slugLocked ? "bg-gray-50 text-gray-500 cursor-default" : "bg-white"
                  }`}
                />
              </div>
              {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>}
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <span>Adresse: jada.ch/blog/</span>
                <span className="font-mono text-accent">{watch("slug") || "..."}</span>
              </p>
            </div>

            <div>
              <Controller
                name="coverImage"
                control={control}
                render={({ field }) => (
                  <ImageUpload
                    value={field.value}
                    onChange={field.onChange}
                    label="Titelbild"
                  />
                )}
              />
              {errors.coverImage && <p className="text-red-500 text-xs mt-1">{errors.coverImage.message}</p>}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">SEO</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Title
              </label>
              <input
                type="text"
                {...register("metaTitle")}
                placeholder="Optional: abweichender SEO Titel"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              />
              <p className="text-xs text-gray-500 mt-1">Lassen Sie dieses Feld leer, um den Beitragstitel zu verwenden.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Description
              </label>
              <textarea
                {...register("metaDesc")}
                rows={3}
                placeholder="Optionale SEO Beschreibung"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-accent focus:border-accent resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">Lassen Sie dieses Feld leer, um den Auszug zu verwenden.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
