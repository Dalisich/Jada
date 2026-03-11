import { Metadata } from "next";
import { Thermometer, Shield, Settings, CheckCircle } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Leitungsdämmungen",
  description:
    "Professionelle Leitungsdämmungen mit PIR, Glasfaserwolle und Mineralwolleschalen. JADA Isolierungen – Ihr Spezialist für Leitungsisolierungen.",
};

const advantages = [
  {
    icon: Thermometer,
    title: "Temperaturbeständig",
    description: "Optimale Isolierung für verschiedene Temperaturbereiche – von Kälte- bis Hochtemperaturanwendungen.",
  },
  {
    icon: Shield,
    title: "Normkonform",
    description: "Alle Arbeiten entsprechen den geltenden Schweizer Normen und Vorschriften.",
  },
  {
    icon: Settings,
    title: "Massgeschneidert",
    description: "Wahl der Isolierungsart abhängig von Medium, Temperaturbereich und Kundenwunsch.",
  },
  {
    icon: CheckCircle,
    title: "Hocheffizient",
    description: "Maximale Energieeffizienz durch professionelle Verarbeitung und hochwertige Materialien.",
  },
];

export default function LeitungenPage() {
  return (
    <>
      <ServiceHero
        title="Leitungsdämmungen"
        description="Professionelle Isolierungsarbeiten mit PIR, Glasfaserwolle oder Mineralwolleschalen."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dämmungen", href: "/daemmungen" },
          { label: "Leitungsdämmungen", href: "/daemmungen/leitungen" },
        ]}
      />

      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Isolierungslösungen für jede Anforderung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Unsere täglichen Isolierungsarbeiten umfassen den Einsatz von PIR
                (Polyisocyanurat), Glasfaserwolle und Mineralwolleschalen. Jedes Material
                hat seine spezifischen Stärken – und wir wissen genau, welches Material
                für Ihren Anwendungsfall die beste Wahl ist.
              </p>
              <p>
                Die Wahl der Isolierungsart hängt ab von mehreren Faktoren: dem Medium,
                das durch die Leitung fliesst, dem Temperaturbereich, den geltenden
                Vorschriften sowie Ihren individuellen Anforderungen. Unsere erfahrenen
                Spezialisten beraten Sie umfassend und führen die Arbeiten termingerecht aus.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid sm:grid-cols-2 gap-8">
            {advantages.map((advantage) => (
              <ScrollRevealItem key={advantage.title}>
                <div className="flex gap-5 p-6 rounded-xl bg-surface-warm group hover:bg-primary transition-colors duration-500">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <advantage.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary group-hover:text-white transition-colors mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-text-secondary group-hover:text-white/70 transition-colors leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
