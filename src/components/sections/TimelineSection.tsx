"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function Ill1998({ active }: { active: boolean }) {
  const s = active ? "#F0A30E" : "#94a3b8";
  const f = active ? "rgba(240,163,14,0.12)" : "none";
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Bulb body */}
      <path
        d="M60 14C43 14 30 26 30 43C30 54 36 62 42 67.5V79Q42 85 48 85H72Q78 85 78 79V67.5C84 62 90 54 90 43C90 26 77 14 60 14Z"
        stroke={s} strokeWidth="2.5" fill={f}
      />
      {/* Gear inside bulb */}
      <circle cx="60" cy="44" r="11" stroke={s} strokeWidth="2.5" />
      <circle cx="60" cy="44" r="4.5" stroke={s} strokeWidth="2" fill={active ? "rgba(240,163,14,0.25)" : "none"} />
      {/* 8 gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={60 + 11 * Math.cos(r)} y1={44 + 11 * Math.sin(r)}
            x2={60 + 16 * Math.cos(r)} y2={44 + 16 * Math.sin(r)}
            stroke={s} strokeWidth="3.5" strokeLinecap="round"
          />
        );
      })}
      {/* Base plates */}
      <line x1="48" y1="87" x2="72" y2="87" stroke={s} strokeWidth="3" strokeLinecap="round" />
      <line x1="51" y1="93" x2="69" y2="93" stroke={s} strokeWidth="3" strokeLinecap="round" />
      {/* Wrench bottom-left */}
      <line x1="18" y1="112" x2="36" y2="94" stroke={s} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="38" cy="91" rx="5" ry="4" transform="rotate(-45 38 91)" stroke={s} strokeWidth="2.5" />
      {/* Hammer bottom-right */}
      <line x1="102" y1="112" x2="84" y2="94" stroke={s} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="79" y="86" width="14" height="8" rx="2" stroke={s} strokeWidth="2.5" transform="rotate(-45 86 90)" fill={f} />
    </svg>
  );
}

function Ill2005({ active }: { active: boolean }) {
  const s = active ? "#F0A30E" : "#94a3b8";
  const f = active ? "rgba(240,163,14,0.12)" : "none";
  const d = active ? "rgba(240,163,14,0.4)" : "rgba(148,163,184,0.35)";
  const gearTeeth = (cx: number, cy: number, r: number, tr: number, count: number, sw: number) =>
    Array.from({ length: count }, (_, i) => {
      const angle = (i * 360) / count;
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={cx + r * Math.cos(rad)} y1={cy + r * Math.sin(rad)}
          x2={cx + tr * Math.cos(rad)} y2={cy + tr * Math.sin(rad)}
          stroke={s} strokeWidth={sw} strokeLinecap="round"
        />
      );
    });
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central gear */}
      <circle cx="60" cy="58" r="14" stroke={s} strokeWidth="2.5" fill={f} />
      <circle cx="60" cy="58" r="5.5" stroke={s} strokeWidth="2" />
      {gearTeeth(60, 58, 14, 20, 8, 4)}
      {/* Top-left gear */}
      <circle cx="26" cy="26" r="10" stroke={s} strokeWidth="2" fill={f} />
      <circle cx="26" cy="26" r="4" stroke={s} strokeWidth="1.5" />
      {gearTeeth(26, 26, 10, 15, 6, 3)}
      {/* Top-right gear */}
      <circle cx="94" cy="26" r="10" stroke={s} strokeWidth="2" fill={f} />
      <circle cx="94" cy="26" r="4" stroke={s} strokeWidth="1.5" />
      {gearTeeth(94, 26, 10, 15, 6, 3)}
      {/* Connecting shafts */}
      <line x1="36" y1="36" x2="46" y2="46" stroke={d} strokeWidth="2" />
      <line x1="84" y1="36" x2="74" y2="46" stroke={d} strokeWidth="2" />
      {/* Circuit traces bottom */}
      <path d="M12 96 L26 96 L26 88 L42 88" stroke={d} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 96 L94 96 L94 88 L78 88" stroke={d} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="96" r="3.5" fill={d} />
      <circle cx="108" cy="96" r="3.5" fill={d} />
      <circle cx="42" cy="88" r="3" stroke={s} strokeWidth="1.5" fill="white" />
      <circle cx="78" cy="88" r="3" stroke={s} strokeWidth="1.5" fill="white" />
      <line x1="45" y1="88" x2="75" y2="88" stroke={d} strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  );
}

function Ill2015({ active }: { active: boolean }) {
  const s = active ? "#F0A30E" : "#94a3b8";
  const f = active ? "rgba(240,163,14,0.12)" : "none";
  const d = active ? "rgba(240,163,14,0.35)" : "rgba(148,163,184,0.25)";
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Building silhouette — faint bg */}
      <rect x="38" y="60" width="44" height="48" stroke={d} strokeWidth="1.5" />
      <path d="M34 60 L60 44 L86 60" stroke={d} strokeWidth="1.5" />
      <rect x="50" y="80" width="9" height="28" stroke={d} strokeWidth="1.5" />
      <rect x="63" y="80" width="9" height="28" stroke={d} strokeWidth="1.5" />
      {/* Handshake - left arm */}
      <path d="M8 54 Q18 48 30 48 L46 48" stroke={s} strokeWidth="3" strokeLinecap="round" />
      {/* Handshake - right arm */}
      <path d="M112 54 Q102 48 90 48 L74 48" stroke={s} strokeWidth="3" strokeLinecap="round" />
      {/* Clasp / fingers */}
      <path d="M46 48 Q50 42 60 42 Q70 42 74 48" stroke={s} strokeWidth="3" strokeLinecap="round" />
      {/* Palm fill */}
      <path
        d="M8 54 Q12 66 22 68 L46 62 L60 66 L74 62 L98 68 Q108 66 112 54"
        stroke={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill={f}
      />
      {/* Data streams */}
      <path d="M6 36 Q12 30 18 36 Q24 42 30 36 Q36 30 42 36" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <path d="M78 36 Q84 30 90 36 Q96 42 102 36 Q108 30 114 36" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <circle cx="6" cy="36" r="3" fill={active ? "#F0A30E" : "#94a3b8"} />
      <circle cx="114" cy="36" r="3" fill={active ? "#F0A30E" : "#94a3b8"} />
    </svg>
  );
}

function Ill2025({ active }: { active: boolean }) {
  const s = active ? "#F0A30E" : "#94a3b8";
  const f = active ? "rgba(240,163,14,0.15)" : "none";
  const d = active ? "rgba(240,163,14,0.35)" : "rgba(148,163,184,0.25)";
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Circular dashed orbit */}
      <circle cx="60" cy="62" r="50" stroke={d} strokeWidth="1.5" strokeDasharray="5 5" />
      {/* Small orbit arrow */}
      <path d="M60 12 L64 8 L64 16" stroke={d} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Left upward arrow */}
      <path
        d="M32 100 L32 52 L20 52 L40 18 L60 52 L48 52 L48 100 Z"
        stroke={s} strokeWidth="2.5" fill={f} strokeLinejoin="round"
      />
      {/* Right upward arrow — slightly offset to suggest J/arc */}
      <path
        d="M62 100 L62 60 L50 60 L72 24 L94 60 L82 60 L82 100 Z"
        stroke={s} strokeWidth="2.5" fill={f} strokeLinejoin="round"
        style={{ opacity: active ? 0.8 : 0.6 }}
      />
      {/* Connecting bridge — the J crossbar suggestion */}
      <path d="M48 78 Q55 72 62 78" stroke={d} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}

function Ill2026({ active }: { active: boolean }) {
  const s = active ? "#F0A30E" : "#94a3b8";
  const f = active ? "rgba(240,163,14,0.15)" : "none";
  const fStrong = active ? "rgba(240,163,14,0.28)" : "none";
  const d = active ? "rgba(240,163,14,0.4)" : "rgba(148,163,184,0.3)";
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Rising bars */}
      <rect x="10" y="72" width="20" height="36" rx="3" stroke={s} strokeWidth="2.5" fill={f} />
      <rect x="36" y="54" width="20" height="54" rx="3" stroke={s} strokeWidth="2.5" fill={f} />
      <rect x="62" y="32" width="20" height="76" rx="3" stroke={s} strokeWidth="2.5" fill={fStrong} />
      {/* Rising trend line */}
      <path d="M20 68 L46 50 L72 28 L96 10" stroke={s} strokeWidth="3" strokeLinecap="round" />
      {/* Arrow head */}
      <path d="M89 7 L96 10 L93 17" stroke={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bullseye — bottom right */}
      <circle cx="100" cy="90" r="16" stroke={d} strokeWidth="1.5" />
      <circle cx="100" cy="90" r="10" stroke={d} strokeWidth="1.5" />
      <circle cx="100" cy="90" r="4.5" fill={active ? "rgba(240,163,14,0.7)" : "rgba(148,163,184,0.3)"} />
      {/* Small diagonal arrows */}
      <path d="M86 104 L92 110 M86 110 L92 104" stroke={d} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const entries = [
  {
    year: "1998",
    title: "Die Geburtsstunde",
    description:
      "Martin Jäger und Abramo D'Aversa legen in Winterthur den Grundstein für JADA. Mit Leidenschaft und tiefem Fachwissen startet die Erfolgsgeschichte als spezialisierter Zweimannbetrieb.",
    Ill: Ill1998,
  },
  {
    year: "2005",
    title: "Expansion der Expertise",
    description:
      "Das Vertrauen unserer Kunden wächst – und mit ihm unser Team. Wir erweitern unser Portfolio gezielt um komplexe Brandschutz-Systeme und etablieren uns als Qualitätsinstanz.",
    Ill: Ill2005,
  },
  {
    year: "2015",
    title: "Innovationspartnerschaft",
    description:
      "Als exklusiv lizenzierter Partner von AM FireShield® bringen wir modernste, werksgefertigte Leichtbeton-Elemente auf den Schweizer Markt – ein Quantensprung in der Effizienz.",
    Ill: Ill2015,
  },
  {
    year: "2025",
    title: "Generationenwechsel",
    description:
      "Stefano Jud und Michael Inderbitzin übernehmen die operative Führung. Frischer Wind und modernste Managementstrukturen bereiten den Boden für die nächste Ära.",
    Ill: Ill2025,
  },
  {
    year: "2026",
    title: "Zukunft im Fokus – Die JADA AG",
    description:
      "Gründung der JADA Dämm- und Brandschutz AG. Ein kraftvolles neues Kapitel, das unsere jahrzehntelange Expertise mit modernsten Strukturen vereint, um als Innovationsführer die Sicherheitsstandards der Zukunft zu prägen.",
    Ill: Ill2026,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function TimelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(Array(entries.length).fill(null));

  // Scroll-driven line fill
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionH = sectionRef.current.offsetHeight;
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (-rect.top + viewH * 0.45) / sectionH));
      setLineProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active card via IntersectionObserver (middle of viewport)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((r) => r === entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-22% 0px -22% 0px" }
    );
    cardRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#f8f7f4" }}
    >
      {/* Winterthur watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/Fotos/Winterthur.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.09, mixBlendMode: "multiply" }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.18,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Unsere Evolution
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
            Vom Pionier zum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Marktführer
            </span>
          </h2>
          <div
            className="w-24 h-1.5 bg-accent mx-auto rounded-full"
            style={{ boxShadow: "0 0 15px rgba(240,94,14,0.4)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Track */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px overflow-hidden"
            style={{ width: "2px", backgroundColor: "rgba(203,213,225,0.5)" }}
          >
            {/* Glowing fill */}
            <div
              className="w-full origin-top"
              style={{
                height: `${lineProgress * 100}%`,
                background: "linear-gradient(to bottom, #F0A30E, #F05E0E, #F0A30E)",
                boxShadow: "0 0 18px rgba(240,163,14,0.8), 0 0 40px rgba(240,163,14,0.3)",
                transition: "height 0.15s linear",
              }}
            />
          </div>

          <div className="space-y-10 md:space-y-16">
            {entries.map((item, i) => {
              const isActive = activeIdx === i;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="relative"
                >
                  <div
                    className={`relative flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"}`}
                  >
                    {/* ── Card ── */}
                    <div
                      className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${
                        isLeft ? "md:pr-10" : "md:pl-10"
                      }`}
                    >
                      <div
                        className="relative overflow-hidden rounded-3xl bg-white border transition-all duration-700"
                        style={{
                          opacity: isActive ? 1 : 0.52,
                          transform: isActive ? "scale(1.025)" : "scale(1)",
                          borderColor: isActive
                            ? "rgba(240,163,14,0.45)"
                            : "rgba(226,232,240,0.7)",
                          boxShadow: isActive
                            ? "0 0 0 1px rgba(240,163,14,0.2), 0 24px 60px rgba(240,163,14,0.14), 0 8px 24px rgba(0,0,0,0.05)"
                            : "0 4px 20px rgba(0,0,0,0.04)",
                        }}
                      >
                        {/* Year as faint background watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                          <span
                            className="font-black leading-none select-none"
                            style={{
                              fontSize: "clamp(5rem, 12vw, 8rem)",
                              color: "rgba(203,213,225,0.22)",
                              letterSpacing: "-0.04em",
                            }}
                          >
                            {item.year}
                          </span>
                        </div>

                        <div className="relative z-10 p-7 md:p-8">
                          {/* SVG Illustration */}
                          <div className="w-20 h-20 mb-6">
                            <item.Ill active={isActive} />
                          </div>

                          {/* Year tag */}
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className="h-px w-5 transition-colors duration-500"
                              style={{ background: isActive ? "#F0A30E" : "#94a3b8" }}
                            />
                            <span
                              className="font-black text-xs tracking-[0.2em] uppercase transition-colors duration-500"
                              style={{ color: isActive ? "#F0A30E" : "#94a3b8" }}
                            >
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-3 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ── Center node ── */}
                    <div
                      className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white z-20 flex items-center justify-center transition-all duration-500"
                      style={{
                        border: `2px solid ${isActive ? "#F0A30E" : "#cbd5e1"}`,
                        boxShadow: isActive
                          ? "0 0 0 6px rgba(240,163,14,0.18), 0 0 24px rgba(240,163,14,0.5)"
                          : "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full transition-all duration-500"
                        style={{ background: isActive ? "#F0A30E" : "#cbd5e1" }}
                      />
                    </div>

                    {/* ── Year silhouette on opposite side (desktop) ── */}
                    <div
                      className={`hidden md:flex w-[calc(50%-2.5rem)] items-center ${
                        isLeft ? "pl-10 justify-start" : "pr-10 justify-end"
                      }`}
                    >
                      <span
                        className="font-black leading-none select-none transition-all duration-700"
                        style={{
                          fontSize: "clamp(5rem, 9vw, 8rem)",
                          WebkitTextStroke: isActive
                            ? "3px rgba(240,163,14,0.85)"
                            : "2px rgba(45,90,158,0.35)",
                          color: "transparent",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
