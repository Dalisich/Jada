"use client";

import { Award, Clock, Shield, Users } from "lucide-react";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: Award,
    title: "Fachkompetenz",
    description:
      "Über 27 Jahre Erfahrung in Isolierungen und Brandschutz. Unsere Spezialisten kennen jede Herausforderung und finden die beste Lösung.",
  },
  {
    icon: Users,
    title: "Flexibilität",
    description:
      "65 motivierte Mitarbeiter und flache Hierarchien ermöglichen schnelle Entscheidungen und flexible Einsatzplanung.",
  },
  {
    icon: Shield,
    title: "Qualität",
    description:
      "Wir arbeiten ausschliesslich mit geprüften Materialien und nach den höchsten Schweizer Qualitätsstandards.",
  },
  {
    icon: Clock,
    title: "Pünktlichkeit",
    description:
      "Termingerechte Ausführung ist für uns selbstverständlich. Wir halten unsere Zusagen – immer.",
  },
];

export default function WhyJadaSection() {
  return (
    <section className="section-padding bg-surface-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-24">
          <span className="text-accent tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            Ihre Vorteile
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
            Warum JADA?
          </h2>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.15}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {reasons.map((reason, i) => (
            <ScrollRevealItem key={`reason-${i}`}>
              <div className="group p-6 sm:p-8 md:p-10 rounded-3xl bg-surface-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(45,90,158,0.08)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                
                {/* Decorative top line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/[0.03] group-hover:bg-primary/[0.06] mb-8 transition-colors duration-500 border border-primary/5">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-500 ease-out" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                  {reason.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed font-light">
                  {reason.description}
                </p>
                
                {/* Decorative corner glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
