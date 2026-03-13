import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Dämmungen & Isolierungen",
  description:
    "Hocheffiziente Isolierungslösungen für Leitungen und Lüftungsanlagen. JADA Isolierungen – Ihr Partner für technische Isolierungen in der Schweiz.",
};

const services = [
  {
    title: "Leitungsdämmungen",
    description:
      "Tägliche Isolierungsarbeiten mit PIR, Glasfaserwolle oder Mineralwolleschalen. Die Wahl der Isolierungsart hängt ab von Medium, Temperaturbereich, Vorschriften und Kundenwunsch.",
    image: "/daemmung_leitungen.jpg",
    href: "/daemmungen/leitungen",
  },
  {
    title: "Lüftungsdämmungen",
    description:
      "Ausführung mit Mineralwollprodukten – absolut nicht brennbar und beständig gegen sehr hohe Temperaturen. Hocheffiziente, optimal ausgerüstete Ausführung.",
    image: "/Fotos/Leitung/Titelbild_Leitungsdaemmung.png",
    href: "/daemmungen/lueftung",
  },
  {
    title: "Sanitärisolierungen",
    description: "Kalt- und Warmwasserleitungen sowie Abwasserschutz. Wir decken das gesamte Spektrum der Gebäudetechnik ab.",
    image: "/daemmung_sanitaer.jpg",
    href: "/daemmungen",
  }
];

export default function DaemmungenPage() {
  return (
    <>
      <ServiceHero
        title="Dämmungen"
        description="Hocheffiziente Isolierungslösungen für Leitungen und Lüftungsanlagen – massgeschneidert für jedes Projekt."
        image="/brandschutz_hero_technical.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dämmungen", href: "/daemmungen" },
        ]}
      />

      <section className="section-padding bg-surface-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="max-w-3xl mb-24">
            <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">Expertise</span>
            <p className="text-2xl text-primary font-light leading-relaxed">
              Als einer der grössten Anbieter von Isolierungen in der Schweiz
              bieten wir umfassende Dämmungslösungen für sämtliche Anwendungsbereiche.
              Wir garantieren höchste Energieeffizienz.
            </p>
          </ScrollReveal>

          <div className="grid gap-16 lg:gap-24">
            {services.map((service, i) => (
              <ScrollReveal key={`service-${i}`} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className={`group grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={`relative h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden hover-lift shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>

                  <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight group-hover:text-secondary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-lg font-semibold text-primary group-hover:text-secondary transition-all">
                      <span className="relative">
                        Mehr erfahren
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
