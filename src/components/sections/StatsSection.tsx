"use client";

import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CounterAnimation from "@/components/ui/CounterAnimation";

const stats = [
  { value: 27, suffix: "+", label: "Jahre Erfahrung" },
  { value: 65, suffix: "", label: "Mitarbeiter" },
  { value: 500, suffix: "+", label: "Projekte" },
  { value: 100, suffix: "%", label: "Zufriedenheit" },
];

export default function StatsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      {/* Elegant dark background with soft light leaks */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80" />

      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            JADA in Zahlen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-surface-white tracking-tight">
            Fakten, die <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FFB703]">überzeugen</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.15}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative"
        >
          {/* subtle connecting line behind stats */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          {stats.map((stat, i) => (
            <ScrollRevealItem key={`stat-${i}`} className="text-center relative">
              <div className="px-6 py-12 rounded-3xl glass-panel-dark hover:-translate-y-2 transition-transform duration-500 ease-out border border-white/5 relative overflow-hidden group">
                
                {/* Hover glow effect behind content inside card */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
                  <CounterAnimation
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                
                <p className="text-accent text-sm md:text-base uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
