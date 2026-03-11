import { Metadata } from "next";
import { Wind, Building, ShieldCheck, Zap } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Entrauchungen",
  description: "Entrauchungsanlagen für Hochrisiko-Objekte. Selbsttragende Kanäle aus speziellen Feuerschutzplatten. JADA Isolierungen.",
};

const advantages = [
  { icon: Wind, title: "Rauchgasabführung", description: "Effiziente Absaugung giftiger, lebensgefährlicher Rauchgase im Brandfall." },
  { icon: Building, title: "Hochrisiko-Objekte", description: "Spezialisiert auf Einkaufszentren, Flughäfen, Hotels und Tiefgaragen." },
  { icon: ShieldCheck, title: "Selbsttragende Kanäle", description: "Einsatz wo konventionelle Dämmungen an ihre Grenzen stossen – aus speziellen Feuerschutzplatten." },
  { icon: Zap, title: "Maximale Sicherheit", description: "Zuverlässiger Schutz für Personen durch effektive Entrauchung im Ernstfall." },
];

export default function EntrauchungenPage() {
  return (
    <>
      <ServiceHero
        title="Entrauchungen"
        description="Selbsttragende Kanäle aus Feuerschutzplatten für Hochrisiko-Objekte."
        image="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
          { label: "Entrauchungen", href: "/brandschutz/entrauchungen" },
        ]}
      />
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Schutz für Hochrisiko-Objekte</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                In Einkaufszentren, Flughäfen, Hotels und Tiefgaragen ist eine
                zuverlässige Entrauchungsanlage überlebenswichtig. Im Brandfall
                müssen giftige, lebensgefährliche Rauchgase schnell und effektiv
                abgesaugt werden.
              </p>
              <p>
                JADA setzt auf selbsttragende Kanäle aus speziellen Feuerschutzplatten.
                Diese kommen dort zum Einsatz, wo konventionelle Dämmungen an ihre
                Grenzen stossen. Unsere Lösung garantiert maximale Sicherheit und
                zuverlässige Funktion im Ernstfall.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal staggerChildren={0.15} className="grid sm:grid-cols-2 gap-8">
            {advantages.map((a) => (
              <ScrollRevealItem key={a.title}>
                <div className="flex gap-5 p-6 rounded-xl bg-surface-warm group hover:bg-primary transition-colors duration-500">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <a.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary group-hover:text-white transition-colors mb-2">{a.title}</h3>
                    <p className="text-sm text-text-secondary group-hover:text-white/70 transition-colors leading-relaxed">{a.description}</p>
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
