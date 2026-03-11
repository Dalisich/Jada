"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: { name: string };
  image: string | null;
  desc: string;
}

export default function ReferenzenClient({ 
  initialProjects, 
  dynamicCategories 
}: { 
  initialProjects: Project[], 
  dynamicCategories: string[] 
}) {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const categories = ["Alle", ...dynamicCategories];

  const filtered = activeFilter === "Alle"
    ? initialProjects
    : initialProjects.filter((p) => p.category?.name === activeFilter);

  return (
    <section className="section-padding bg-surface-white relative">
       {/* Background glow logic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Filter Section - Premium Minimalist */}
        <ScrollReveal className="flex flex-wrap items-center gap-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mr-4">Filtern nach:</span>
          {categories.map((cat, i) => (
            <button
              key={`cat-${i}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-surface-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-surface-warm text-text-secondary hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid Section - Premium Grid with rounded cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2.5rem] overflow-hidden hover-lift bg-surface-white shadow-[0_15px_40px_-20px_rgba(0,0,0,0.15)] border border-gray-100"
              >
                <div className="relative h-[350px] md:h-[400px]">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Content floating at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-accent/90 text-primary text-[10px] font-black rounded-full mb-4 tracking-[0.2em] uppercase">
                      {project.category?.name}
                    </span>
                    <h3 className="text-white text-2xl font-bold tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <div 
                      className="text-white/60 text-sm font-light line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 prose prose-invert prose-sm"
                      dangerouslySetInnerHTML={{ __html: project.desc }} 
                    />
                    
                    <div className="mt-6 flex items-center justify-center w-10 h-10 rounded-full bg-surface-white text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
                       <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filtered.length === 0 && (
           <div className="text-center py-20">
              <p className="text-text-secondary text-lg">Keine Projekte in dieser Kategorie gefunden.</p>
           </div>
        )}
      </div>
    </section>
  );
}
