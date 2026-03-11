"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    title: "Kantonsspital Winterthur",
    category: "Brandschutz",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80",
  },
  {
    title: "Einkaufszentrum Glatt",
    category: "Entrauchung",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    title: "Bürogebäude Zürich West",
    category: "Dämmungen",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
  },
  {
    title: "Hotel Schweizerhof",
    category: "Brandschutz",
    image:
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80",
  },
  {
    title: "Wohnüberbauung Basel",
    category: "Dämmungen",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    title: "Industriehalle Aargau",
    category: "FireShield®",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
  },
];

export default function ReferencesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);

  return (
    <section className="section-padding bg-surface-white overflow-hidden relative">
      {/* Background glow side effect */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Ausgewählte <br className="hidden md:block" /> Referenzen
            </h2>
          </div>
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-100 bg-surface-warm text-primary font-semibold hover:bg-primary hover:text-white transition-all group"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative z-10">
        <motion.div
          style={{ x }}
          className="flex gap-8 pl-6 md:pl-[calc((100vw-1280px)/2+24px)]"
        >
          {projects.map((project, i) => (
            <Link
              key={i}
              href="/referenzen"
              className="group relative flex-shrink-0 w-[320px] md:w-[480px] h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden hover-lift shadow-[0_15px_45px_-15px_rgba(0,0,0,0.1)] border border-white/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 bg-accent/90 text-primary text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>
                
                <div className="mt-4 flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span>Projekt ansehen</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Decorative background number or text could go here in future */}
    </section>
  );
}
