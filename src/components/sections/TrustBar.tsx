"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const partners = [
    "AM FireShield®",
    "ISO 9001",
    "SUVA Zertifiziert",
    "SIA Partner",
    "VKF Brandschutz",
    "Minergie",
    "AM FireShield®",
    "ISO 9001",
    "SUVA Zertifiziert",
    "SIA Partner",
    "VKF Brandschutz",
    "Minergie",
  ];

  return (
    <section className="py-8 bg-surface-white border-b border-gray-100 overflow-hidden relative z-20 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      {/* Gradient fades for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-white to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-500">
        {partners.concat(partners).map((partner, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-16 text-text-secondary font-semibold text-sm uppercase tracking-[0.2em] shrink-0"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 shadow-[0_0_8px_rgba(255,222,23,0.8)]" />
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
