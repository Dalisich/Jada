import { Metadata } from "next";
import { Factory, Footprints, Truck, Award } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AM FireShield®",
  description: "AM FireShield® – werksgefertigte, begehbare Leichtbeton-Elemente. JADA als lizenzierter Partner in der Schweiz.",
};

const advantages = [
  { icon: Factory, title: "Werksgefertigt", description: "Präzise Fertigung der Elemente nach Projektmassen – für passgenaue Installation auf der Baustelle." },
  { icon: Footprints, title: "Begehbar", description: "Leichtbeton-Konstruktion, die begehbar ist und komplexe Abdichtungsmassnahmen eliminiert." },
  { icon: Truck, title: "Just-in-Time", description: "Lieferung direkt auf die Baustelle nach vereinbartem Terminplan – keine Lagerhaltung nötig." },
  { icon: Award, title: "Lizenzierter Partner", description: "JADA ist lizenzierter AM FireShield® Partner in der Schweiz – geprüfte Qualität und Kompetenz." },
];

export default function FireShieldPage() {
  return (
    <>
      <ServiceHero
        title="AM FireShield®"
        description="Werksgefertigte, begehbare Leichtbeton-Elemente – als lizenzierter Partner."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
          { label: "AM FireShield®", href: "/brandschutz/fireshield" },
        ]}
      />
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Innovation im Brandschutz</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                AM FireShield® steht für innovativen Brandschutz. Die werksgefertigten
                Elemente werden exakt nach Projektmassen hergestellt und als begehbare
                Leichtbeton-Konstruktion geliefert. Das eliminiert komplexe und teure
                Abdichtungsmassnahmen auf der Baustelle.
              </p>
              <p>
                Als lizenzierter AM FireShield® Partner bietet JADA dieses Premiumprodukt
                in der gesamten Schweiz an. Die Lieferung erfolgt direkt auf die Baustelle
                nach vereinbartem Terminplan – Just-in-Time und ohne unnötige Lagerhaltung.
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
