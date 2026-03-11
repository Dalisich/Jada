import { Metadata } from "next";
import { Flame, Wind, Gauge, Wrench } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Lüftungsdämmungen",
  description:
    "Lüftungsdämmungen mit Mineralwollprodukten – nicht brennbar und beständig gegen sehr hohe Temperaturen. JADA Isolierungen GmbH.",
};

const advantages = [
  {
    icon: Flame,
    title: "Nicht brennbar",
    description: "Mineralwollprodukte sind absolut nicht brennbar und bieten höchsten Brandschutz.",
  },
  {
    icon: Wind,
    title: "Temperaturbeständig",
    description: "Beständig gegen sehr hohe Temperaturen – ideal für Lüftungsanlagen.",
  },
  {
    icon: Gauge,
    title: "Hocheffizient",
    description: "Optimale Dämmwerte durch professionelle Verarbeitung und passgenaue Ausführung.",
  },
  {
    icon: Wrench,
    title: "Optimal ausgerüstet",
    description: "Modernste Werkzeuge und Techniken für eine effiziente, saubere Ausführung vor Ort.",
  },
];

export default function LueftungPage() {
  return (
    <>
      <ServiceHero
        title="Lüftungsdämmungen"
        description="Hocheffiziente Dämmungen mit Mineralwollprodukten – nicht brennbar und temperaturbeständig."
        image="https://images.unsplash.com/photo-1513360492081-3067eb215160?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dämmungen", href: "/daemmungen" },
          { label: "Lüftungsdämmungen", href: "/daemmungen/lueftung" },
        ]}
      />

      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Mineralwolle für maximalen Schutz</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Unsere Lüftungsdämmungen werden ausschliesslich mit hochwertigen
                Mineralwollprodukten ausgeführt. Diese Materialien sind absolut nicht
                brennbar und beständig gegen sehr hohe Temperaturen – ideale
                Eigenschaften für die Isolierung von Lüftungsanlagen.
              </p>
              <p>
                Wir garantieren eine hocheffiziente, optimal ausgerüstete Ausführung.
                Unsere Spezialisten verfügen über langjährige Erfahrung und arbeiten
                mit modernsten Werkzeugen, um beste Ergebnisse zu erzielen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid sm:grid-cols-2 gap-8">
            {advantages.map((advantage, i) => (
              <ScrollRevealItem key={`adv-${i}`}>
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
