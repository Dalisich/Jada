import { Metadata } from "next";
import { Shield, Layers, Award, CheckCircle } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Brandabschottungen",
  description: "Professionelle Mörtel- und Weichabschottungen für zuverlässigen Feuerwiderstand. JADA Isolierungen GmbH.",
};

const advantages = [
  { icon: Shield, title: "Mörtelabschottungen", description: "Spezieller Brandschutzmörtel, leichter als Zementmörtel, treibt beim Trocknen für lückenlosen Verschluss." },
  { icon: Layers, title: "Weichabschottungen", description: "Beschichtete Steinwolleplatten (~150 kg/m³) mit Brandschutz-Beschichtung – Ablation oder thermische Schichtbildung." },
  { icon: Award, title: "Zertifiziert", description: "Alle Abschottungssysteme sind geprüft und zertifiziert nach den geltenden Schweizer Brandschutznormen." },
  { icon: CheckCircle, title: "Lückenloser Schutz", description: "Fachgerechte Abdichtung aller Durchbrüche in brandabschnittstrennenden Bauteilen." },
];

export default function AbschottungenPage() {
  return (
    <>
      <ServiceHero
        title="Brandabschottungen"
        description="Mörtel- und Weichabschottungen für zuverlässigen Feuerwiderstand in Wänden und Decken."
        image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Brandschutz", href: "/brandschutz" },
          { label: "Brandabschottungen", href: "/brandschutz/abschottungen" },
        ]}
      />
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="max-w-3xl mb-16">
            <h2 className="text-primary mb-6">Zuverlässiger Feuerwiderstand</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Brandabschottungen sind essenziell für den baulichen Brandschutz.
                Sie verhindern die Ausbreitung von Feuer und Rauch durch
                Leitungsdurchführungen in brandabschnittstrennenden Bauteilen.
              </p>
              <p>
                Wir setzen auf zwei bewährte Systeme: Mörtelabschottungen mit
                speziellem Brandschutzmörtel, der leichter ist als herkömmlicher
                Zementmörtel und beim Trocknen treibt, sowie Weichabschottungen
                mit beschichteten Steinwolleplatten von rund 150 kg/m³ Dichte,
                die durch Ablation oder thermische Schichtbildung wirken.
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
