import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Brandschutz | JADA Isolierungen GmbH",
  description:
    "Umfassender Brandschutz für maximale Sicherheit. Brandabschottungen, Verkleidungen, Entrauchungen, AM FireShield® und Installationsschacht.",
};

const services = [
  {
    title: "Brandabschottungen",
    description: "Mörtel- und Weichabschottungen für zuverlässigen Feuerwiderstand in Wänden und Decken. Wir sichern Ihre Durchführungen professionell ab.",
    image: "/brandschutz_hero_technical.png",
    href: "/brandschutz/abschottungen",
  },
  {
    title: "Brandschutzverkleidungen",
    description: "Verkleidungen von Stahlkonstruktionen und Bauteilen zur Erhöhung der Feuerwiderstandsklasse nach SIA-Normen.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80",
    href: "/brandschutz/verkleidungen",
  },
  {
    title: "Entrauchungen",
    description: "Selbsttragende Kanäle aus Feuerschutzplatten für Hochrisiko-Objekte wie Flughäfen, Spitäler und Hotels.",
    image: "https://images.unsplash.com/photo-1513360492081-3067eb215160?w=1000&q=80",
    href: "/brandschutz/entrauchungen",
  },
  {
    title: "AM FireShield®",
    description: "Werksgefertigte, begehbare Leichtbeton-Elemente. JADA ist Ihr lizenzierter Partner für dieses innovative System.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=80",
    href: "/brandschutz/fireshield",
  },
  {
    title: "Installationsschacht",
    description: "EI90 feuerbeständige und wasserdichte Komplettlösung für vertikale Zonen in der Gebäudetechnik.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80",
    href: "/brandschutz/installationsschacht",
  },
];

export default function BrandschutzPage() {
  return (
    <>
      <ServiceHero
        title="Brandschutz"
        description="Umfassender Brandschutz für maximale Sicherheit – von Abschottungen bis zu hocheffizienten Entrauchungsanlagen."
        image="/brandschutz_hero_technical.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
        ]}
      />

      <section className="section-padding bg-surface-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full translate-x-1/2" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="max-w-3xl mb-24">
            <span className="text-accent tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">Sicherheit</span>
            <p className="text-2xl text-primary font-light leading-relaxed">
              Als Spezialisten für baulichen Brandschutz sichern wir Gebäude in der ganzen Schweiz.
              Unsere Lösungen erfüllen alle gesetzlichen Anforderungen und bieten maximalen Schutz für Mensch und Sachwerte.
            </p>
          </ScrollReveal>

          <div className="grid gap-16 lg:gap-24">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group grid lg:grid-cols-2 gap-12 items-center"
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
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-lg font-semibold text-primary group-hover:text-accent transition-all">
                      <span className="relative">
                        Mehr erfahren
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
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
