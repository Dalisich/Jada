import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  daemmungen: {
    title: "Dämmungen",
    links: [
      { label: "Übersicht", href: "/daemmungen" },
      { label: "Leitungsdämmungen", href: "/daemmungen/leitungen" },
      { label: "Lüftungsdämmungen", href: "/daemmungen/lueftung" },
    ],
  },
  brandschutz: {
    title: "Brandschutz",
    links: [
      { label: "Übersicht", href: "/brandschutz" },
      { label: "Abschottungen", href: "/brandschutz/abschottungen" },
      { label: "Verkleidungen", href: "/brandschutz/verkleidungen" },
      { label: "Entrauchungen", href: "/brandschutz/entrauchungen" },
      { label: "AM FireShield®", href: "/brandschutz/fireshield" },
      { label: "Installationsschacht", href: "/brandschutz/installationsschacht" },
    ],
  },
  unternehmen: {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Referenzen", href: "/referenzen" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/Logo/Logo_Schiftzug_weiss.png?v=3" 
                alt="Jada Logo" 
                className="object-contain h-20 w-auto" 
              />
            </Link>
            <p className="text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
              Einer der grössten Anbieter von Isolierungen, Dämmungen und
              Brandschutz in der Schweiz. Seit 1998.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+41522035502"
                className="inline-flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                +41 52 203 55 02
              </a>
              <a
                href="mailto:info@jada.ch"
                className="inline-flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                info@jada.ch
              </a>
              <span className="inline-flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4" />
                Werkstrasse 20, 8404 Winterthur
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link, i) => (
                  <li key={`link-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} JADA Isolierungen GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/datenschutz"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
