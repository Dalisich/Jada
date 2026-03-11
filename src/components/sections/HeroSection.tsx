"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center bg-primary">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-primary">
        <video 
          autoPlay 
          muted 
          playsInline 
          loop
          key="hero-video-v2"
          className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
        >
          <source src="/VideoIsolation.mp4" type="video/mp4" />
        </video>
        {/* Adjusted dark overlay for better visibility of the new video */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full pt-32 lg:pt-0 flex flex-col items-center text-center">
        {/* Content Container */}
        <div className="max-w-4xl flex flex-col items-center">

 
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl xl:text-[7rem] font-bold text-surface-white leading-[1.05] mb-8 tracking-tight"
          >
            Wir <span className="text-secondary text-glow">schützen</span> <br />
            was wirklich zählt.
          </motion.h1>
 
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl lg:text-2xl text-surface-white/80 mb-12 max-w-2xl leading-relaxed font-light mx-auto"
          >
            Über 27 Jahre Expertise in Dämmungen und Brandschutz. 
            Massgeschneiderte Isolierungslösungen für höchste Sicherheit und Energieeffizienz.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-primary font-bold rounded-2xl btn-glow group text-xl shadow-2xl shadow-accent/20"
            >
              Projekt starten
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/daemmungen"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 glass-panel-dark text-surface-white font-semibold rounded-2xl hover:bg-white/10 transition-all text-xl"
            >
              Leistungen entdecken
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-surface-white/50 to-surface-white/50 overflow-hidden relative">
          <motion.div 
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
