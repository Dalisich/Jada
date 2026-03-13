import { Metadata } from "next";
import Image from "next/image";
import { Heart, Users, Shield, Clock, Lightbulb, HandshakeIcon } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import TimelineSection from "@/components/sections/TimelineSection";

export const metadata: Metadata = {
  title: "Über uns | JADA Isolierungen GmbH",
  description: "Seit 1998 einer der grössten Anbieter von Isolierungen und Brandschutz in der Schweiz. Lernen Sie JADA Isolierungen GmbH kennen.",
};

const values = [
  { icon: Heart, title: "Kundennähe", description: "Persönliche Betreuung und langfristige Partnerschaften." },
  { icon: Lightbulb, title: "Fachkompetenz", description: "Über 27 Jahre Erfahrung und stetige Weiterbildung." },
  { icon: Users, title: "Flexibilität", description: "Flache Hierarchien ermöglichen schnelle, unkomplizierte Lösungen." },
  { icon: Clock, title: "Pünktlichkeit", description: "Termingerechte Ausführung ist für uns selbstverständlich." },
  { icon: Shield, title: "Qualität", description: "Höchste Schweizer Standards in jedem Projekt." },
  { icon: HandshakeIcon, title: "Soziale Verantwortung", description: "Wir übernehmen Verantwortung für Mitarbeiter und Gesellschaft." },
];

const management = {
  name: "Martin Jäger",
  role: "Vorsitzender der Geschäftsleitung",
  phone: "079 696 63 62",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
};

const contacts = [
  { name: "Michael Inderbitzin", role: "Geschäftsleiter Technische Isolierungen, Kalkulation & Technische Planung", phone: "052 203 55 02", dept: "Geschäftsleitung" },
  { name: "Stefano Jud", role: "Geschäftsleiter Lüftung / Brandschutz / FireShield®, Kalkulation & Technische Planung", phone: "052 203 55 02", dept: "Geschäftsleitung" },
  { name: "Markus Maillard", role: "Technische Planung / Kalkulation Lüftung / Brandschutz", phone: "052 203 55 02", dept: "Technische Planung" },
  { name: "Dino Merckling", role: "Technische Planung / Kalkulation Lüftung / Brandschutz", phone: "052 203 55 02", dept: "Technische Planung" },
  { name: "Augustin Ukaj", role: "Projektleiter Lüftungsdämmungen / Brandabschottungen", phone: "078 861 02 02", dept: "Projektleitung" },
  { name: "Matthias Kalusa", role: "Projektleiter Technische Isolierungen", phone: "079 126 26 45", dept: "Projektleitung" },
  { name: "Filip Petronijevic", role: "Montageleiter Technische Isolierungen", phone: "076 345 34 49", dept: "Montage" },
  { name: "Eugen Brander", role: "Montageleiter Brandschutz / FireShield®", phone: "078 861 02 22", dept: "Montage" },
];

export default function UeberUnsPage() {
  return (
    <>
      <ServiceHero
        title="Über uns"
        description="Seit 1998 Ihr vertrauenswürdiger Partner für Isolierungen und Brandschutz in der Schweiz."
        image="/ueber_uns_hero_architecture.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">Tradition trifft Moderne</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">Erfahrung aus über zwei Jahrzehnten.</h2>
              <p className="text-xl text-text-secondary leading-relaxed font-light mb-8">
                JADA Isolierungen GmbH steht seit 1998 für Qualität und Zuverlässigkeit. Was als Zweimannbetrieb begann, hat sich zu einem der führenden Unternehmen in der Schweizer Isolierungsbranche entwickelt.
              </p>
              <p className="text-text-secondary leading-relaxed font-light">
                Mit heute über 65 Mitarbeitern sind wir in der Lage, auch komplexeste Großprojekte termingerecht und in höchster Präzision auszuführen – von Winterthur aus in die ganze Schweiz.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover-lift transition-transform duration-700">
                  <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80" alt="Jada Work" fill className="object-cover" />
               </div>
               {/* Decorative floating element */}
               <div className="absolute -bottom-10 -left-10 w-48 h-48 glass-panel rounded-3xl p-6 hidden md:flex flex-col justify-center border-accent/20">
                  <span className="text-accent text-4xl font-extrabold mb-2">27+</span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">Jahre Erfahrung</span>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TimelineSection />

      {/* Values */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Fundamente</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary tracking-tight">Unsere Kernwerte</h2>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollRevealItem key={`value-${i}`}>
                <div className="group h-full p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-surface-white border border-gray-100 hover:shadow-[0_20px_50px_rgba(45,90,158,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/[0.03] group-hover:bg-primary text-primary group-hover:text-surface-white flex items-center justify-center mb-8 transition-all duration-500 ease-out">
                    <value.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-light">{value.description}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-[#0a1628]" />
        {/* Decorative glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <span className="text-accent tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Unser Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">Ihre Ansprechpartner</h2>
          </ScrollReveal>

          {/* CEO – Martin Jäger */}
          <ScrollReveal className="mb-20">
            <div className="max-w-2xl mx-auto">
              <div className="group flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-accent/30 transition-all duration-500">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-xl">
                  <Image
                    src={management.image}
                    alt={management.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Vorsitz</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">{management.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{management.role}</p>
                  <a
                    href={`tel:${management.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-semibold text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    {management.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact grid */}
          <ScrollReveal staggerChildren={0.07} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((person, i) => {
              const initials = person.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
              const deptColors: Record<string, string> = {
                "Geschäftsleitung": "from-accent to-orange-700",
                "Technische Planung": "from-secondary to-blue-600",
                "Projektleitung": "from-teal-500 to-teal-700",
                "Montage": "from-slate-500 to-slate-700",
              };
              const gradient = deptColors[person.dept] ?? "from-primary to-primary/70";
              return (
                <ScrollRevealItem key={i}>
                  <div className="group h-full p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-400 flex flex-col">
                    {/* Avatar with initials */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shrink-0 shadow-lg`}>
                      <span className="text-white font-black text-sm tracking-wider">{initials}</span>
                    </div>
                    {/* Dept tag */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-2">{person.dept}</span>
                    {/* Name */}
                    <h4 className="text-white font-bold text-base leading-tight mb-2">{person.name}</h4>
                    {/* Role */}
                    <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{person.role}</p>
                    {/* Phone */}
                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-secondary/70 hover:text-accent transition-colors text-xs font-semibold"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      {person.phone}
                    </a>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
