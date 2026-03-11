"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Dämmungen",
    description:
      "Hocheffiziente Isolierungslösungen für Leitungen und Lüftungsanlagen. Wir arbeiten mit PIR, Glasfaserwolle und Mineralwolleschalen.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    href: "/daemmungen",
    items: [
      "Leitungsdämmungen",
      "Lüftungsdämmungen",
      "Kälteisolierungen",
      "Sanitärisolierungen",
    ],
    gradientText: "text-gradient",
  },
  {
    title: "Brandschutz",
    description:
      "Umfassender Brandschutz für maximale Sicherheit. Von Abschottungen über Verkleidungen bis zu Entrauchungsanlagen.",
    image: "/brandschutz_hero_technical.png",
    href: "/brandschutz",
    items: [
      "Brandabschottungen",
      "Brandschutzverkleidungen",
      "Entrauchungen",
      "AM FireShield®",
      "Installationsschacht",
    ],
    gradientText: "text-gradient",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-surface-warm relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-4">
            Dienstleistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Was wir für <br className="md:hidden" /> Sie tun
          </h2>
        </ScrollReveal>

        <ScrollReveal staggerChildren={0.2} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <ScrollRevealItem key={`service-${i}`}>
              <Link
                href={service.href}
                className="group block h-full bg-surface-white rounded-3xl overflow-hidden hover-lift border border-gray-100 shadow-[0_10px_40px_-20px_rgba(45,90,158,0.15)] flex flex-col"
              >
                {/* Image Header with smooth modern gradient overlay */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Premium internal gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-surface-white">
                  {/* Decorative glowing dot */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-500" />
                  </div>

                  <p className="text-text-secondary font-medium mb-8 text-lg leading-relaxed max-w-[90%]">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.items.map((item, j) => (
                      <li
                        key={`item-${j}`}
                        className="flex items-center gap-4 text-text-primary font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-secondary outline outline-offset-4 outline-secondary/20 shadow-[0_0_10px_rgba(76,199,242,0.5)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 font-semibold text-primary group-hover:text-secondary transition-colors">
                    <span className="relative">
                      Details entdecken
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
