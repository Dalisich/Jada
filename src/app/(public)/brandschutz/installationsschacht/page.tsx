import { Metadata } from "next";
import { ShieldCheck, Droplets, Layers, Lock } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Installationsschacht",
  description: "EI90 feuerbeständige und wasserdichte Installationsschacht-Komplettlösung. JADA Isolierungen GmbH.",
};

const advantages = [
  { icon: ShieldCheck, title: "EI90 Feuerbeständig", description: "90 Minuten Feuerwiderstand – zertifizierte Komplettlösung für maximale Sicherheit." },
  { icon: Droplets, title: "Wasserdicht", description: "Vollständig wasserdichte Ausführung schützt vor Feuchtigkeit und Wasserschäden." },
  { icon: Layers, title: "Weichabschottung", description: "Beschichtete Steinwolleplatten für die zuverlässige Abdichtung vertikaler Zonen." },
  { icon: Lock, title: "Komplettlösung", description: "Alles aus einer Hand – von der Planung bis zur fachgerechten Installation." },
];

export default function InstallationsschachtPage() {
  return (
    <>
      <ServiceHero
        title="Installationsschacht"
        description="EI90 feuerbeständige und wasserdichte Komplettlösung für vertikale Installationszonen."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
          { label: "Installationsschacht", href: "/brandschutz/installationsschacht" },
        ]}
      />
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Die EI90 Komplettlösung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Unser Installationsschacht-System bietet eine feuerbeständige und
                wasserdichte Komplettlösung mit der Feuerwiderstandsklasse EI90.
                Es schützt vertikale Installationszonen zuverlässig gegen Feuer-
                und Rauchausbreitung.
              </p>
              <p>
                Die Abdichtung erfolgt mittels Weichabschottung mit beschichteten
                Steinwolleplatten. Diese bewährte Technik garantiert einen lückenlosen
                Schutz aller Durchdringungen. JADA plannt und installiert die gesamte
                Lösung aus einer Hand.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal staggerChildren={0.15} className="grid sm:grid-cols-2 gap-8">
            {advantages.map((a, i) => (
              <ScrollRevealItem key={`adv-${i}`}>
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
