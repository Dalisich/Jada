"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  breadcrumb: { label: string; href: string }[];
}

export default function ServiceHero({
  title,
  description,
  image,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-primary pt-32">
      {/* Premium Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

      {/* Decorative Glows to match Homepage */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20 w-full">
        {/* Breadcrumb - Clean Premium Style */}
        <ScrollReveal delay={0.1}>
          <nav className="flex items-center gap-3 text-sm text-surface-white/40 mb-8 font-medium">
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-3">
                {i > 0 && <span className="opacity-30">/</span>}
                <a
                  href={item.href}
                  className="hover:text-accent transition-colors tracking-widest uppercase text-xs"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="max-w-2xl">
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
            {description}
          </p>
        </ScrollReveal>
      </div>

      {/* Modern bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
    </section>
  );
}
