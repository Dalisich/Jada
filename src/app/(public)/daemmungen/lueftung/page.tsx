import { Metadata } from "next";
import { Info, ShieldCheck } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Materialien & Umhüllungen | Lüftungsdämmung | JADA",
  description:
    "Technische Details und Umhüllungen für Lüftungsdämmungen nach Schweizer Standard. Alufolie-Rabitz, Glasvliese und Blechumhüllungen.",
};

const materialRows = [
  {
    title: "Alufolie-Rabitz V2a (Standard-Ausführung)",
    text: "Als Standard-Umhüllung wird ein 6-eck Drahtgeflecht aus Chromstahl 0.7 mm verwendet. Wichtiger Hinweis: Bis auf sehr wenige Ausnahmen ist bei Feuerschutzisolierungen das Drahtgeflecht Teil des Systems, denn es muss die Isolierungsstruktur im Brandfall zusammenhalten.",
    image: "/Fotos/Lueftung/AlufolieRabitz.svg",
  },
  {
    title: "Alufolie (ohne Drahtgeflecht)",
    text: "In Zentralen und gut zugänglichen Räumen ist das Drahtgeflecht vielfach ein Störungsfaktor, da es oft vorkommt, dass man mit den Kleidern hängenbleibt. Zudem wirkt es optisch oft wie ein Fremdkörper. Da heutige Reinaluklebebänder sehr gute Klebeeigenschaften haben, kann bei sauberer Montage bei thermischen Isolierungen problemlos auf das Drahtgeflecht verzichtet werden.",
    image: "/Fotos/Lueftung/AlufolieOhneDraht.svg",
  },
  {
    title: "Glasvliese",
    text: "Bei thermischen Isolierungen besteht die Möglichkeit, die Isolierung mit einem Glasvlies-Gewebe zu umhüllen. Diese Ausführung ist mechanisch gut belastbar und ideal bei Sichtdecken im Ladenbau. Die Standardfarbe ist schwarz; je nach Menge sind die Vliese auch eingefärbt oder alubedampft erhältlich.",
    image: "/Fotos/Lueftung/Glasvliese.svg",
  },
  {
    title: "Blechumhüllungen",
    text: "Erhältlich in Aluman, Chromstahl, Kupfer oder verzinktem Stahlblech. Diese werden meist dort angebracht, wo die Standardausführungen den mechanischen oder optischen Anforderungen nicht genügen (z.B. im Aussenbereich). In der Regel wird Aluman-Blech verwendet. Technisches Detail: Wird die Isolierung mit Blech umhüllt, kann das Drahtgeflecht auch bei Feuerschutzisolierungen weggelassen werden.",
    image: "/Fotos/Lueftung/Blechumhuellung.svg",
  },
];

export default function LueftungPage() {
  return (
    <div className="bg-surface-warm min-h-screen">
      {/* Sektion 1: Hero-Bereich */}
      <ServiceHero
        title="Materialien und Umhüllungen für Lüftungsdämmungen"
        description="Die in der Schweiz verwendeten Materialien für Lüftungsdämmungen sind bis auf sehr wenige Ausnahmen mit einer aufkaschierten Reinaluminiumfolie versehen."
        image="/daemmung_lueftung.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dämmungen", href: "/daemmungen" },
          { label: "Lüftungsdämmungen", href: "/daemmungen/lueftung" },
        ]}
        cta={{
          label: "Jetzt Kontakt aufnehmen",
          href: "/kontakt",
        }}
      />

      {/* Sektion 2: Der Schweizer Standard */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-5 sm:p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-black/5 shrink-0">
                <Info className="w-8 h-8 text-primary" />
              </div>
              <div className="max-w-3xl">
                <h2 className="text-xl font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  Der Schweizer Standard
                </h2>
                <p className="text-primary text-lg md:text-xl font-medium leading-relaxed">
                  Standardmässig verwenden wir Reinaluminium-Folie: 2-lagig à je 0.02 mm, dazwischen mit polyethylener Gitterverstärkung ca. 54 gr/m2.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sektion 3: Die Umhüllungen (Zig-Zag Layout) */}
      <section className="bg-surface-white">
        {materialRows.map((row, i) => (
          <div 
            key={i} 
            className={`py-20 md:py-32 ${i % 2 === 0 ? "bg-surface-warm/30" : "bg-white"}`}
          >
            <div className="max-w-[1280px] mx-auto px-6">
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}>
                {/* Image Component */}
                <ScrollReveal 
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="w-full md:w-1/2"
                >
                  <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                    <img 
                      src={row.image} 
                      alt={row.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]" />
                  </div>
                </ScrollReveal>

                {/* Text Component */}
                <ScrollReveal 
                  direction={i % 2 === 0 ? "right" : "left"}
                  className="w-full md:w-1/2"
                >
                  <div className="flex flex-col">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="h-px w-12 bg-secondary" />
                      <span className="text-secondary font-bold uppercase tracking-widest text-sm">Umhüllung {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight break-words hyphens-auto">
                      {row.title}
                    </h3>
                    <p className="text-text-secondary text-lg md:text-xl leading-relaxed whitespace-pre-line">
                      {row.text}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sektion 4: Footer-CTA */}
      <CTASection />
    </div>
  );
}
