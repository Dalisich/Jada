"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  breadcrumb: { label: string; href: string }[];
  cta?: { label: string; href: string };
}

export default function ServiceHero({
  title,
  description,
  image,
  breadcrumb,
  cta,
}: ServiceHeroProps) {
  return (
    <section className="relative h-[75vh] sm:h-[80vh] lg:h-[85vh] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-end overflow-hidden bg-primary lg:pt-40">
      {/* 1. Base Layer: The Image with subtle Parallax-like scale */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* ... rest of the layers ... */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4facfe 1px, transparent 1px), 
            linear-gradient(to bottom, #4facfe 1px, transparent 1px),
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px, 40px 40px, 20px 20px'
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none transition-opacity duration-1000">
        <defs>
          <pattern id="blueprint-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1.5" fill="white" />
            <circle cx="100" cy="0" r="1.5" fill="white" />
            <circle cx="0" cy="100" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />

      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] w-64 h-64 bg-secondary rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-24 w-full">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-10 shadow-lg">
            <nav className="flex items-center gap-3 text-sm text-surface-white/60 font-medium whitespace-nowrap overflow-x-auto scroller-hide max-w-[85vw]">
              {breadcrumb.map((item, i) => (
                <span key={`bc-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span className="opacity-20 text-[10px]">/</span>}
                  <a
                    href={item.href}
                    className={`transition-all tracking-widest uppercase text-[10px] ${i === breadcrumb.length - 1 ? 'text-accent font-bold' : 'hover:text-white'}`}
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </nav>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl">
          <ScrollReveal delay={0.2}>
            <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.05] md:leading-[0.95] drop-shadow-2xl break-words hyphens-auto">
              {title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em] break-words">
                  {word}
                </span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="max-w-3xl">
            <div className="flex flex-col gap-10 items-start">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-[1px] bg-accent mt-4 shrink-0 hidden md:block" />
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
                  {description}
                </p>
              </div>

              {cta && (
                <a
                  href={cta.href}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-primary font-bold rounded-2xl btn-glow group text-xl hover-lift transition-all"
                >
                  {cta.label}
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Modern bottom flow-line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
