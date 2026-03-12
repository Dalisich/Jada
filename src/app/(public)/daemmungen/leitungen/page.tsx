import { Metadata } from "next";
import Image from "next/image";
import { Thermometer, Shield, Settings, Leaf, CheckCircle2, Flame, Info } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "Leitungsdämmungen | JADA Isolierungen",
  description:
    "Ihr Spezialist für die Dämmung von Kälte-, Heiz-, und Sanitärleitungen. Wir stoppen Energieverluste und verhindern zuverlässig Schwitzwasser.",
};

const trustItems = [
  {
    icon: Thermometer,
    title: "Temperaturbeständig",
    description: "Optimale Isolierung für verschiedene Temperaturbereiche.",
  },
  {
    icon: Shield,
    title: "Normkonform",
    description: "Alle Arbeiten entsprechen den geltenden Schweizer Normen und Vorschriften.",
  },
  {
    icon: Settings,
    title: "Massgeschneidert",
    description: "Wahl der Isolierungsart abhängig von Medium und Kundenwunsch.",
  },
  {
    icon: Leaf,
    title: "Hocheffizient",
    description: "Maximale Energieeffizienz durch professionelle Verarbeitung.",
  },
];

const materialData = [
  {
    area: "Kälteleitungen",
    material: "Synthetischer Kautschuk",
    properties: "Hohe Dampfsperrwirkung.",
  },
  {
    area: "Heizleitungen / Warmwasser (unter 80 Grad C)",
    material: "PIR-Schalen oder Mineralwolleschalen",
    properties: "Guter Wärmeleitwert, dünnere Dämmstärke.",
  },
  {
    area: "Kaltwasserleitungen",
    material: "PIR-Schalen oder Armaflex",
    properties: "Mit Dampfsperranstrich.",
  },
  {
    area: "Dampfleitungen (über 130 Grad C)",
    material: "Mineralwolle (Glas- oder Steinwolle)",
    properties: "Hohe Hitzebeständigkeit.",
  },
];

const coverings = [
  {
    title: "ALU-Blech",
    thickness: "0.6 mm bis 1.0 mm",
    description: "Gilt als bester sowie schönster Schutz. Wird meist in Zentralen eingesetzt.",
    image: "/Fotos/Leitung/AluBlech.svg"
  },
  {
    title: "PVC-Folie",
    description: "Gehört zu den meistverwendeten Umhüllungen. Wichtig: PVC ist nicht UV-beständig.",
    image: "/Fotos/Leitung/PVCFolie.svg"
  },
  {
    title: "ALU-Grobkornfolie",
    thickness: "ca. 0.25 mm",
    description: "Wird meist als PVC-Ersatz eingesetzt. Wir empfehlen diese Umhüllung nur auf druckfeste Isolierungen.",
    image: "/Fotos/Leitung/AluGrobkorn.svg"
  },
  {
    title: "Alufolie",
    description: "Wird meist als Abfaserungsschutz von unsichtbar verlaufenden Isolierungen eingesetzt (z.B. Hohldecken).",
    image: "/Fotos/Leitung/AluFolieThin.svg"
  },
];

export default function LeitungenPage() {
  return (
    <div className="bg-surface-warm min-h-screen">
      {/* Sektion 1: Hero-Bereich */}
      <ServiceHero
        title="Energie bewahren. Anlagen schützen."
        description="Ihr Spezialist für die Dämmung von Kälte-, Heiz-, und Sanitärleitungen. Wir stoppen Energieverluste und verhindern zuverlässig Schwitzwasser – mit massgeschneiderten Dämmsystemen und fachgerechter Montage."
        image="/Fotos/Leitung/Titelbild_Leitungsdaemmung.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dämmungen", href: "/daemmungen" },
          { label: "Leitungsdämmungen", href: "/daemmungen/leitungen" },
        ]}
        cta={{
          label: "Jetzt Fachberatung anfordern",
          href: "/kontakt",
        }}
      />

      {/* Sektion 2: Einleitung & Trust-Elemente */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal>
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
                Effizienz durch <br />
                professionelle Isolierung.
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl">
                Heiz- und Kälte-Energie ist ein sehr flüchtiges Gut. Bereits nach der Erzeugung verliert das Medium durch Abstrahlverluste kontinuierlich an Energie. Zum sorgsamen Umgang unserer Ressourcen hat der Gesetzgeber Mindest-Dämm-Vorschriften erlassen. Wir sorgen mit optimaler Isolierung dafür, dass möglichst viel der erzeugten Energie am Bestimmungsort ankommt.
              </p>
            </ScrollReveal>

            <ScrollReveal staggerChildren={0.1}>
              <div className="grid sm:grid-cols-2 gap-6">
                {trustItems.map((item, i) => (
                  <ScrollRevealItem key={i}>
                    <div className="p-6 rounded-2xl bg-surface-warm border border-black/5 hover:border-accent/30 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sektion 3: Anwendungsbereiche (Tabs) */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Anwendungsbereiche</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Für jede Anforderung die passende technologische Lösung. Entdecken Sie unsere Spezialgebiete.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Tabs defaultValue="kaelte" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
                  <TabsTrigger value="kaelte" className="px-8 py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary font-bold transition-all">
                    Kältedämmungen
                  </TabsTrigger>
                  <TabsTrigger value="heizung" className="px-8 py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary font-bold transition-all">
                    Heizung & Sanitär
                  </TabsTrigger>
                  <TabsTrigger value="dampf" className="px-8 py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary font-bold transition-all">
                    Dampfleitungen
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                <TabsContent value="kaelte" className="focus-visible:outline-none">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Zuverlässiger Schutz vor Kondenswasser</h3>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Kälteführende Anlagenteile sind oft akut schwitzwassergefährdet. Um eine stetige Anreicherung von Kondenswasser im Dämmstoff zu verhindern, benötigen Kältedämmsysteme eine effektive Dampfsperre.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                          <span><strong className="text-white">Synthetischer Kautschuk:</strong> Geschlossenzellig und in hohem Masse dampfsperrend.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                          <span><strong className="text-white">PIR-Schalen:</strong> Hervorragender Wärmeleitwert von 0.023 W/(mK). Auch als mehrlagiger Aufbau verfügbar.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                      <Image src="/Fotos/Leitung/Kaeltedaemmung.svg" alt="Kältedämmung synthetischer Kautschuk" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="heizung" className="focus-visible:outline-none">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Effizienz für Wärme und Trinkwasser</h3>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Wir führen täglich Isolierungen mit PIR-, Glaswoll- oder Steinwollschalen aus. Jedes System wird exakt auf die Betriebstemperaturen und Hygieneanforderungen abgestimmt.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                          <span><strong className="text-white">Heizleitungen:</strong> Neuere Anlagen arbeiten mit Betriebstemperaturen bis ca. 80 Grad Celsius.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                          <span><strong className="text-white">Sanitär-Kaltwasser:</strong> TemperaturGebäudeeintritt ca. 6 Grad Celsius. Hier steht die Schwitzwasserverhinderung im Vordergrund.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                      <Image src="/Fotos/Leitung/HeizungSanitaer.svg" alt="Heizungs- und Sanitärleitungen PIR-Dämmung" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dampf" className="focus-visible:outline-none">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Hochleistungsdämmung für extreme Temperaturen</h3>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Dampfleitungen werden mit Temperaturen ab ca. 130 Grad bis über 250 Grad betrieben. Je höher die Temperaturdifferenz, desto extremer ist der Wärmeverlust durch Abstrahlung. Dementsprechend dimensionieren wir die Isolierung exakt.
                      </p>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-center">
                        <Flame className="w-10 h-10 text-accent" />
                        <p className="text-sm font-medium italic">Spezial-dimensionierte Dämmstärken für maximale Prozesssicherheit und Energieeinsparung.</p>
                      </div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                      <Image src="/Fotos/Leitung/Dampfleitung.svg" alt="Dampfleitung Hochtemperatur Mineralwolledämmung" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Sektion 4: Entscheidungshilfe zur Materialwahl (Tabelle) */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Entscheidungshilfe</h2>
            <p className="text-text-secondary text-lg">Wählen Sie das passende Material für Ihren spezifischen Einsatzbereich.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-3xl border border-black/5 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-8 py-6 font-bold text-lg">Anwendungsbereich</th>
                    <th className="px-8 py-6 font-bold text-lg">Empfohlenes Material</th>
                    <th className="px-8 py-6 font-bold text-lg">Eigenschaften</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {materialData.map((row, i) => (
                    <tr key={i} className="bg-white hover:bg-surface-warm transition-colors duration-300">
                      <td className="px-8 py-6 font-semibold text-primary">{row.area}</td>
                      <td className="px-8 py-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-[#1A365D] font-bold text-sm border border-primary/10">
                          {row.material}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-text-secondary">{row.properties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sektion 5: Umhüllungen für Leitungsdämmungen (Bilder-Grid) */}
      <section className="section-padding bg-surface-warm">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Umhüllungen & Schutz</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Die Umhüllung schützt die eigentliche Dämmung vor mechanischen Einflüssen und sorgt für ein ästhetisches Erscheinungsbild.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverings.map((item, i) => (
              <ScrollRevealItem key={i} delay={i * 0.1}>
                <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5">
                  <div className="relative h-48 overflow-hidden bg-primary/5">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{item.title}</h3>
                    {item.thickness && (
                      <span className="inline-block text-xs font-black uppercase tracking-widest text-[#1A1A2E]/50 mb-4">
                        Stärke: {item.thickness}
                      </span>
                    )}
                    <p className="text-[#1A1A2E]/80 text-sm leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>
                    <div className="h-1 w-0 bg-[#1A1A2E]/20 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 6: Brandschutz-Durchführungsisolierungen (Farbige Info-Box) */}
      <section className="section-padding py-0">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[#E85D04] rounded-[3rem] p-12 md:p-16 text-primary shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 transform group-hover:rotate-12 transition-transform duration-700">
                <Info className="w-24 h-24 text-primary/10" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <Flame className="w-10 h-10 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Brandschutz bei Durchführungen</h2>
                </div>
                <p className="text-primary text-lg md:text-xl font-bold leading-relaxed">
                  Sobald Installationen durch brandabschnittsbildende Decken oder Wände geführt werden, benötigen Rohre eine zugelassene Brandschutz-Durchführungsisolierung. Das Abschottungssystem sowie die verwendeten Durchführungsisolierungen müssen zusammen geprüft und zugelassen sein!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sektion 7: Footer-CTA */}
      <CTASection />
    </div>
  );
}
