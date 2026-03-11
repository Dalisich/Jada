"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-3 px-8 py-3 font-bold text-sm rounded-2xl transition-all shadow-sm border border-gray-100 ${
        copied 
        ? "bg-green-500 text-white border-green-500" 
        : "bg-surface-warm text-primary hover:bg-primary hover:text-surface-white"
      }`}
    >
      <Share2 className="w-4 h-4" />
      {copied ? "Link kopiert!" : "URL kopieren"}
    </button>
  );
}
