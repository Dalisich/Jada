import { Metadata } from "next";
import Image from "next/image";
import { Heart, Users, Shield, Clock, Lightbulb, HandshakeIcon } from "lucide-react";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Über uns | JADA Isolierungen GmbH",
  description: "Seit 1998 einer der grössten Anbieter von Isolierungen und Brandschutz in der Schweiz. Lernen Sie JADA Isolierungen GmbH kennen.",
};

const timeline = [
  { 
    year: "1998", 
    title: "Die Geburtsstunde", 
    description: "Martin Jäger und Abramo D'Aversa legen in Winterthur den Grundstein für JADA. Mit Leidenschaft und tiefem Fachwissen startet die Erfolgsgeschichte als spezialisierter Zweimannbetrieb.",
    icon: Lightbulb
  },
  { 
    year: "2005", 
    title: "Expansion der Expertise", 
    description: "Das Vertrauen unserer Kunden wächst – und mit ihm unser Team. Wir erweitern unser Portfolio gezielt um komplexe Brandschutz-Systeme und etablieren uns als Qualitätsinstanz.", 
    icon: Users
  },
  { 
    year: "2015", 
    title: "Innovationspartnerschaft", 
    description: "Als exklusiv lizenzierter Partner von AM FireShield® bringen wir modernste, werksgefertigte Leichtbeton-Elemente auf den Schweizer Markt – ein Quantensprung in der Effizienz.",
    icon: Shield
  },
  { 
    year: "2025", 
    title: "Generationenwechsel", 
    description: "Stefano Jud und Michael Inderbitzin übernehmen die operative Führung. Frischer Wind und modernste Managementstrukturen bereiten den Boden für die nächste Ära.",
    icon: Heart
  },
  { 
    year: "2026", 
    title: "Zukunft im Fokus – Die JADA AG", 
    description: "Gründung der JADA Dämm- und Brandschutz AG. Ein kraftvolles neues Kapitel, das unsere jahrzehntelange Expertise mit modernsten Strukturen vereint, um als Innovationsführer die Sicherheitsstandards der Zukunft zu prägen.",
    icon: Shield
  },
];

const values = [
  { icon: Heart, title: "Kundennähe", description: "Persönliche Betreuung und langfristige Partnerschaften." },
  { icon: Lightbulb, title: "Fachkompetenz", description: "Über 27 Jahre Erfahrung und stetige Weiterbildung." },
  { icon: Users, title: "Flexibilität", description: "Flache Hierarchien ermöglichen schnelle, unkomplizierte Lösungen." },
  { icon: Clock, title: "Pünktlichkeit", description: "Termingerechte Ausführung ist für uns selbstverständlich." },
  { icon: Shield, title: "Qualität", description: "Höchste Schweizer Standards in jedem Projekt." },
  { icon: HandshakeIcon, title: "Soziale Verantwortung", description: "Wir übernehmen Verantwortung für Mitarbeiter und Gesellschaft." },
];

const team = [
  { name: "Stefano Jud", role: "Geschäftsführer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Michael Inderbitzin", role: "Geschäftsführer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function UeberUnsPage() {
  return (
    <>
      <ServiceHero
        title="Über uns"
        description="Seit 1998 Ihr vertrauenswürdiger Partner für Isolierungen und Brandschutz in der Schweiz."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">Tradition trifft Moderne</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">Erfahrung aus über zwei Jahrzehnten.</h2>
              <p className="text-xl text-text-secondary leading-relaxed font-light mb-8">
                JADA Isolierungen GmbH steht seit 1998 für Qualität und Zuverlässigkeit. Was als Zweimannbetrieb begann, hat sich zu einem der führenden Unternehmen in der Schweizer Isolierungsbranche entwickelt.
              </p>
              <p className="text-text-secondary leading-relaxed font-light">
                Mit heute über 65 Mitarbeitern sind wir in der Lage, auch komplexeste Großprojekte termingerecht und in höchster Präzision auszuführen – von Winterthur aus in die ganze Schweiz.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover-lift transition-transform duration-700">
                  <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80" alt="Jada Work" fill className="object-cover" />
               </div>
               {/* Decorative floating element */}
               <div className="absolute -bottom-10 -left-10 w-48 h-48 glass-panel rounded-3xl p-6 hidden md:flex flex-col justify-center border-accent/20">
                  <span className="text-accent text-4xl font-extrabold mb-2">27+</span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">Jahre Erfahrung</span>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-surface-warm relative overflow-hidden">
        {/* Technical Blueprint Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px),
              linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px'
          }}
        />

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface-white to-transparent invisible md:visible z-10" />
        <div className="absolute -right-64 top-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -left-64 bottom-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-32">
            <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Unsere Evolution</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
              Vom Pionier zum <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Marktführer</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(240,94,14,0.4)]" />
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* The animated vertical line with glow */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200/50 md:-translate-x-1/2 rounded-full overflow-hidden">
              <ScrollReveal duration={2} className="h-full w-full bg-gradient-to-b from-accent via-primary to-accent origin-top relative">
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(240,94,14,0.5)]" />
              </ScrollReveal>
            </div>

            <div className="space-y-32">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative">
                  {/* Large Parallax Year Background */}
                  <div 
                    className={`absolute hidden lg:flex items-center justify-center inset-0 pointer-events-none z-0 transition-transform duration-1000 ease-out`}
                    style={{ 
                      transform: `translateY(${(i % 2 === 0 ? 50 : -50)}px)`,
                      opacity: 0.03
                    }}
                  >
                    <span className="text-[20rem] font-black text-primary select-none">
                      {item.year}
                    </span>
                  </div>

                  <ScrollReveal 
                    delay={i * 0.1}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} z-10`}
                  >
                    {/* Year Indicator (The center bubble) */}
                    <div className="absolute left-4 md:left-1/2 w-14 h-14 rounded-full bg-white border-4 border-accent shadow-[0_0_30px_rgba(240,94,14,0.4)] md:-translate-x-1/2 z-30 flex items-center justify-center transition-transform group-hover:scale-110">
                      <span className="text-primary font-black text-sm">{item.year}</span>
                    </div>

                    {/* Content Card - Glassmorphism style */}
                    <div className={`w-full md:w-[calc(50%-3.5rem)] group`}>
                      <div className="relative p-10 rounded-[3rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-3 overflow-hidden group">
                        
                        {/* Technical Accent: Decorative corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] -translate-y-8 translate-x-8 group-hover:bg-accent/10 transition-colors" />

                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-8 text-accent group-hover:from-accent group-hover:to-[#c94f03] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-accent/20">
                            <item.icon className="w-7 h-7" strokeWidth={2} />
                          </div>
                          
                          <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-6`}>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="h-0.5 w-8 bg-accent rounded-full" />
                              <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">{item.year}</span>
                            </div>
                            <h3 className="text-3xl font-extrabold text-primary tracking-tight leading-tight">{item.title}</h3>
                          </div>

                          <p className={`text-text-secondary leading-relaxed font-light text-lg ${i % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                            {item.description}
                          </p>

                          {/* Technical Detail Element */}
                          <div className={`mt-8 flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-widest ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                            <span>System-Dokumentation v4.0</span>
                            <div className="w-12 h-px bg-gray-100" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the other side on desktop */}
                    <div className="hidden md:block w-[calc(50%-3.5rem)]" />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Fundamente</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Unsere Kernwerte</h2>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <ScrollRevealItem key={value.title}>
                <div className="group h-full p-10 rounded-[2.5rem] bg-surface-white border border-gray-100 hover:shadow-[0_20px_50px_rgba(45,90,158,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/[0.03] group-hover:bg-primary text-primary group-hover:text-surface-white flex items-center justify-center mb-8 transition-all duration-500 ease-out">
                    <value.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-light">{value.description}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary/90" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <ScrollReveal className="mb-24">
            <span className="text-accent tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-white tracking-tight">Die Geschäftsführung</h2>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.2} className="flex flex-wrap justify-center gap-16 lg:gap-24">
            {team.map((member) => (
              <ScrollRevealItem key={member.name} className="flex flex-col items-center group">
                <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-4 py-2 glass-panel-dark text-xs font-bold uppercase tracking-widest text-white rounded-full">
                       Kontakt aufnehmen
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-surface-white mb-2">{member.name}</h3>
                <p className="text-secondary font-medium uppercase tracking-widest text-xs">{member.role}</p>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
