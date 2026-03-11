"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface-white">
      {/* Container with premium visual treatment */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        <div className="relative rounded-[3rem] overflow-hidden bg-primary px-8 md:px-12 py-12 md:py-16 text-left shadow-[0_40px_100px_rgba(45,90,158,0.2)] border border-white/10">
          {/* Subtle decorative elements for premium feel */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
 
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <ScrollReveal className="flex-1 lg:max-w-2xl">
              <h2 className="text-surface-white text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.05]">
                Wir <span className="text-secondary italic text-glow">rennen</span> <br />
                für Sie.
              </h2>
              <p className="text-surface-white/80 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-xl">
                Ihr Projekt verdient den besten Schutz. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-primary font-bold text-xl rounded-2xl hover-lift btn-glow group transition-all duration-300"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
 
            {/* Video Mascot Container - Resized to prevent clipping */}
            <ScrollReveal 
              className="w-full lg:w-1/3 flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-[2rem] overflow-hidden bg-white shadow-2xl p-2">
                <video 
                  autoPlay 
                  muted 
                  playsInline 
                  loop
                  className="w-full h-full object-contain relative z-10"
                >
                  <source src="/Logorennend.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
