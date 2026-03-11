import { Metadata } from "next";
import { Shield, HardHat, Layers, TrendingUp } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Brandschutzverkleidungen",
  description: "Fachgerechte Brandschutzverkleidungen für Stahlkonstruktionen und Bauteile. Erhöhung der Feuerwiderstandsklasse. JADA Isolierungen.",
};

const advantages = [
  { icon: Shield, title: "Erhöhter Feuerwiderstand", description: "Gezielte Erhöhung der Feuerwiderstandsklasse von Stahlkonstruktionen und Bauteilen." },
  { icon: HardHat, title: "Professionelle Ausführung", description: "Erfahrene Spezialisten für fachgerechte Montage – termingerecht und zuverlässig." },
  { icon: Layers, title: "Vielfältige Materialien", description: "Einsatz geprüfter Brandschutzmaterialien, abgestimmt auf die jeweilige Anforderung." },
  { icon: TrendingUp, title: "Normkonform", description: "Alle Arbeiten entsprechen den geltenden Schweizer Brandschutzvorschriften." },
];

export default function VerkleidungenPage() {
  return (
    <>
      <ServiceHero
        title="Brandschutzverkleidungen"
        description="Verkleidungen von Stahlkonstruktionen und Bauteilen zur Erhöhung der Feuerwiderstandsklasse."
        image="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
          { label: "Brandschutzverkleidungen", href: "/brandschutz/verkleidungen" },
        ]}
      />
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Stahlbau sicher verkleidet</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Stahlkonstruktionen verlieren bei hohen Temperaturen ihre Tragfähigkeit.
                Brandschutzverkleidungen schützen diese Bauteile und erhöhen die
                Feuerwiderstandsklasse – entscheidend für die Sicherheit von Personen
                und die Standfestigkeit von Gebäuden.
              </p>
              <p>
                JADA führt Brandschutzverkleidungen professionell und termingerecht aus.
                Wir arbeiten mit geprüften Materialien und beraten Sie umfassend zur
                optimalen Lösung für Ihr Bauprojekt.
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
