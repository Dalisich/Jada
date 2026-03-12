"use client";

import { useState, useRef } from "react";
import { Download, Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function BackupPage() {
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleExport() {
    const response = await fetch("/api/admin/export");
    if (!response.ok) {
      setResult({ success: false, message: "Export fehlgeschlagen." });
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jada-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setResult(null);

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      const response = await fetch("/api/admin/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      setResult({ success: response.ok, message: json.message || json.error });
    } catch {
      setResult({ success: false, message: "Datei konnte nicht gelesen werden." });
    } finally {
      setImporting(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Backup & Restore</h1>
      <p className="text-gray-500 mb-10">
        Exportiere alle Artikel, Referenzen und Kategorien inkl. Bilder als JSON-Datei.
        Diese Datei kannst du auf der Live-Seite wieder importieren.
      </p>

      <div className="space-y-6">
        {/* Export */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Exportieren</h2>
              <p className="text-gray-500 text-sm mb-6">
                Lädt eine Backup-Datei mit allen Daten herunter (Artikel, Referenzen, Kategorien, Bilder).
              </p>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Backup herunterladen
              </button>
            </div>
          </div>
        </div>

        {/* Import */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Importieren</h2>
              <p className="text-gray-500 text-sm mb-2">
                Lade eine Backup-Datei hoch um Daten wiederherzustellen.
              </p>
              <p className="text-amber-600 text-xs font-medium mb-6">
                Bereits vorhandene Einträge werden nicht überschrieben — nur fehlende werden hinzugefügt.
              </p>
              <label className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors cursor-pointer w-fit">
                {importing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Importiere...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Backup-Datei hochladen
                  </>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={handleImport}
                  disabled={importing}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className={`rounded-2xl p-6 flex items-start gap-4 ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            {result.success
              ? <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              : <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            }
            <p className={`text-sm font-medium ${result.success ? "text-green-800" : "text-red-800"}`}>
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
