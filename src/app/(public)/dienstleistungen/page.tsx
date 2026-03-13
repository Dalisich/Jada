import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import {
  MessageSquare,
  FileText,
  Ruler,
  ClipboardList,
  PhoneCall,
  Users2,
  BadgeCheck,
  TrendingUp,
  Warehouse,
  Truck,
  Wrench,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dienstleistungen | JADA Isolierungen",
  description:
    "Von der Beratung bis zur Abnahme: JADA bietet umfassende Isolierungsdienstleistungen mit erstklassiger Infrastruktur, 50+ Fahrzeugen und 2'500 m² Lager.",
};

const services = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Beratung",
    description:
      "Wir beraten Sie umfassend und kompetent zu allen Fragen rund um Isolierungslösungen. Unsere Fachleute kennen die aktuellen Normen, Materialien und Verfahren – und finden gemeinsam mit Ihnen die optimale Lösung.",
    tags: ["Normenkenntnisse", "Materialberatung", "Projektplanung"],
  },
  {
    number: "02",
    icon: FileText,
    title: "Schnelle Offertstellung",
    description:
      "Wir erstellen Offerten schnell, transparent und nachvollziehbar. So haben Sie frühzeitig Klarheit über Kosten und Umfang Ihres Projekts – damit Sie sicher und informiert planen können.",
    tags: ["Transparente Kalkulation", "Kurze Reaktionszeiten", "Klare Konditionen"],
  },
  {
    number: "03",
    icon: Ruler,
    title: "Ausmasse & Abrechnungen",
    description:
      "Alle Ausmasse und Abrechnungen werden klar und nachvollziehbar dokumentiert. Sie behalten stets den Überblick – von der ersten Aufnahme bis zur Schlussrechnung.",
    tags: ["Präzise Aufmasse", "Revisionsfeste Unterlagen", "Lückenlose Abrechnung"],
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Dokumentation",
    description:
      "Sorgfältige Dokumentation aller ausgeführten Arbeiten für Ihre Unterlagen, Revision und spätere Wartung. Wir liefern vollständige und übersichtliche Abnahmedossiers.",
    tags: ["Abnahmedossier", "Wartungsunterlagen", "Revisionskonform"],
  },
  {
    number: "05",
    icon: PhoneCall,
    title: "Erreichbarkeit",
    description:
      "Unser Büro ist an Werktagen von 06:30 bis 17:00 Uhr persönlich für Sie erreichbar. Direkte Ansprechpartner, kurze Kommunikationswege – ohne Warteschleifen.",
    tags: ["Direkte Ansprechpartner", "Kurze Wege", "Persönlicher Kontakt"],
    badge: "Mo – Fr  ·  06:30 – 17:00",
  },
];

const resources = [
  {
    icon: Users2,
    title: "Mitarbeiter",
    description:
      "Erfahrene Isolierer, Vorarbeiter und Projektleiter. Wir investieren kontinuierlich in Ausbildung und Weiterentwicklung.",
  },
  {
    icon: BadgeCheck,
    title: "Fachkompetenz",
    description:
      "Jahrzehntelange Erfahrung in allen Bereichen technischer Isolierung. Unsere Spezialisten kennen jede Herausforderung.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    stat: "1'800+",
    statUnit: "Aufträge / Jahr",
    title: "Organisation",
    description:
      "Bewährte Prozesse und effiziente Projektorganisation. Vom Kleinauftrag bis zum Grossprojekt – alles läuft reibungslos.",
  },
  {
    icon: Warehouse,
    stat: "2'500 m²",
    statUnit: "2'000+ Lagerartikel",
    title: "Liefersicherheit",
    description:
      "Unser Hochregallager garantiert Liefersicherheit und kurze Reaktionszeiten. Materialengpässe kennen wir nicht.",
    highlight: true,
  },
  {
    icon: Truck,
    stat: "50+",
    statUnit: "Fahrzeuge schweizweit",
    title: "Mobilität",
    description:
      "Täglich unterwegs in der ganzen Schweiz – pünktlich, flexibel und verlässlich an Ihrem Standort.",
  },
  {
    icon: Wrench,
    title: "Ausrüstung",
    description:
      "Modernste Werkzeuge und Maschinen für jede Aufgabe. Von der Handverarbeitung bis zum maschinellen Zuschnitt.",
  },
  {
    icon: ShieldCheck,
    title: "Arbeitssicherheit",
    description:
      "Regelmässige Schulungen, persönliche Schutzausrüstung und konsequente Einhaltung aller Sicherheitsvorschriften.",
    highlight: true,
  },
];

export default function DienstleistungenPage() {
  return (
    <>
      <ServiceHero
        title="Dienstleistungen"
        description="Von der ersten Beratung bis zur letzten Schraube – wir begleiten Ihr Projekt mit Fachkompetenz, Verlässlichkeit und einer Infrastruktur, die keine Wünsche offen lässt."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dienstleistungen", href: "/dienstleistungen" },
        ]}
      />

      {/* ─── EDITORIAL OPENER ─────────────────────────────────────── */}
      <section className="section-padding bg-surface-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-secondary/10 blur-[160px]" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <ScrollReveal>
              <span className="block text-[#B8960C] tracking-[0.25em] text-xs font-black uppercase mb-6 border border-[#B8960C]/30 inline-flex px-3 py-1 rounded-full bg-[#B8960C]/5">
                Was wir bieten
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-black text-primary leading-[0.9] tracking-tighter">
                Rundum-<br />
                <span className="text-[#E05A00]">Service</span><br />
                aus einer Hand.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:pb-2">
              <div className="w-12 h-[2px] bg-[#E05A00] mb-8" />
              <p className="text-[1.15rem] text-text-secondary leading-relaxed font-light mb-8">
                Als einer der führenden Isolierungs-Spezialisten der Schweiz bieten wir weit mehr als handwerkliche Ausführung.
                Unser Anspruch ist es, Sie in{" "}
                <strong className="font-semibold text-primary">jedem Schritt Ihres Projekts</strong>{" "}
                kompetent zu begleiten – von der Planung über die Ausführung bis zur Abnahme.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-[#E05A00] group"
              >
                Jetzt anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Stats Band */}
          <ScrollReveal delay={0.25} className="mt-20">
            <div className="bg-primary rounded-[2rem] overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
                {[
                  { value: "1'800+", label: "Aufträge / Jahr", sub: "Projektorganisation" },
                  { value: "50+", label: "Fahrzeuge", sub: "Schweizweit mobil" },
                  { value: "2'500 m²", label: "Lagerfläche", sub: "Liefersicherheit" },
                  { value: "2'000+", label: "Lagerartikel", sub: "Immer verfügbar" },
                ].map((s) => (
                  <div key={s.label} className="px-8 py-10 flex flex-col gap-1">
                    <span className="text-2xl sm:text-3xl xl:text-5xl font-black text-white tracking-tight leading-none">
                      {s.value}
                    </span>
                    <span className="text-white/90 font-semibold text-sm mt-2">{s.label}</span>
                    <span className="text-white/40 text-xs">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES: SPLIT LAYOUT ───────────────────────────────── */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[140px] translate-x-1/2" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          {/* Section Header */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-5 mb-5">
              <div className="flex-none w-14 h-[2px] bg-[#E05A00]" />
              <span className="text-[#E05A00] tracking-[0.25em] text-xs font-black uppercase">Unsere Leistungen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-primary tracking-tight leading-none">
              Dienstleistungen
            </h2>
          </ScrollReveal>

          {/* Two-col: sticky image left, list right */}
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 xl:gap-20 items-start">

            {/* LEFT: Sticky visual panel */}
            <div className="lg:sticky lg:top-32 space-y-5">
              {/* Main photo */}
              <ScrollReveal direction="right">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85"
                    alt="JADA Isolierer bei der Arbeit"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

                  {/* Floating badge bottom-left */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <Star className="w-5 h-5 text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-primary uppercase tracking-wide">Qualitätsgarantie</div>
                        <div className="text-xs text-gray-500 mt-0.5">Jedes Projekt – termingerecht & normkonform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Erreichbarkeit card */}
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl bg-primary p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-wider text-white/70">Erreichbarkeit</span>
                    </div>
                    <div className="text-2xl font-black text-white mb-1">Mo – Fr</div>
                    <div className="text-3xl font-black text-white mb-3">06:30 – 17:00</div>
                    <div className="text-white/50 text-sm leading-relaxed">
                      Persönliche Ansprechpartner, direkte Kommunikation – keine Warteschleifen.
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: Numbered list */}
            <div className="divide-y divide-gray-200">
              {services.filter(s => s.number !== "05").map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <ScrollReveal key={svc.title} delay={i * 0.07}>
                    <div className="group py-10 hover:bg-white hover:rounded-2xl hover:px-8 hover:-mx-8 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-start gap-5 mb-4">
                        {/* Number */}
                        <span className="hidden md:block text-5xl font-black text-gray-100 group-hover:text-primary/10 transition-colors leading-none select-none pt-1 w-12 shrink-0 text-center">
                          {svc.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-[#E05A00] transition-colors duration-300">
                              {svc.title}
                            </h3>
                          </div>
                          <p className="text-text-secondary leading-relaxed mb-4">
                            {svc.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {svc.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-600 rounded-full group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT IMAGE BANNER ───────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        {/* Left: dark with quote */}
        <div className="bg-primary relative overflow-hidden flex items-center order-2 lg:order-1">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
          <div className="relative z-10 px-12 py-16 xl:px-16">
            <ScrollReveal direction="right">
              <p className="text-white/40 text-xs font-black uppercase tracking-[0.25em] mb-6">Unsere Überzeugung</p>
              <blockquote className="text-white text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-8">
                „Qualität entsteht nicht durch Zufall – sondern durch kompetente Menschen, klare Prozesse und die richtige Ausrüstung."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white font-black text-sm shrink-0">
                  MJ
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Martin Jäger</div>
                  <div className="text-white/40 text-xs">Geschäftsführer, JADA Isolierungen GmbH</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[380px] lg:min-h-0 order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85"
            alt="Technische Isolierungsarbeiten"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border border-white/50">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <div>
                <div className="text-sm font-black text-primary">Zertifizierte Qualität</div>
                <div className="text-xs text-gray-500">SIA · EN 13162 konform</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RESSOURCEN: DARK SECTION ─────────────────────────────── */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-white/5 rounded-full blur-[100px]" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-5 mb-5">
              <div className="flex-none w-14 h-[2px] bg-white/30" />
              <span className="text-white/50 tracking-[0.25em] text-xs font-black uppercase">Was uns auszeichnet</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                Ressourcen &<br />Kapazität
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed lg:pb-2">
                Die Infrastruktur, die wir über Jahrzehnte aufgebaut haben, erlaubt uns, auch anspruchsvollste Projekte termingerecht und in höchster Qualität umzusetzen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.07} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <ScrollRevealItem key={r.title}>
                  <div className={`group relative rounded-2xl p-6 border transition-all duration-500 h-full flex flex-col overflow-hidden ${
                    r.highlight
                      ? "bg-white/10 border-white/20 hover:bg-white/15"
                      : "bg-white/5 border-white/8 hover:bg-white/10 hover:border-white/15"
                  }`}>
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(76,199,242,0.12) 0%, transparent 65%)" }}
                    />

                    <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 shrink-0 group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {r.stat && (
                      <div className="relative z-10 mb-2">
                        <div className="text-3xl font-black text-white leading-none">{r.stat}</div>
                        <div className="text-white/40 text-[10px] font-semibold mt-0.5 uppercase tracking-wider">{r.statUnit}</div>
                      </div>
                    )}

                    <h3 className="relative z-10 text-sm font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300 uppercase tracking-wide">
                      {r.title}
                    </h3>
                    <p className="relative z-10 text-white/45 text-sm leading-relaxed flex-grow group-hover:text-white/60 transition-colors duration-300">
                      {r.description}
                    </p>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-50 shadow-xl transition-all hover:scale-[1.02] active:scale-95 group"
            >
              Projekt besprechen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#E05A00]" />
            </Link>
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-white/15 transition-all"
            >
              Unsere Referenzen
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
