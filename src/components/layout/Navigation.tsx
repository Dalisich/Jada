"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const mainLinks = [
  {
    label: "Dämmungen",
    href: "/daemmungen",
    hasDropdown: true,
    children: [
      {
        label: "Leitungsdämmungen",
        href: "/daemmungen/leitungen",
        desc: "PIR, Glasfaserwolle, Mineralwolleschalen",
      },
      {
        label: "Lüftungsdämmungen",
        href: "/daemmungen/lueftung",
        desc: "Mineralwollprodukte, nicht brennbar",
      },
    ],
  },
  {
    label: "Brandschutz",
    href: "/brandschutz",
    hasDropdown: true,
    children: [
      {
        label: "Brandabschottungen",
        href: "/brandschutz/abschottungen",
        desc: "Mörtel- und Weichabschottungen",
      },
      {
        label: "Brandschutzverkleidungen",
        href: "/brandschutz/verkleidungen",
        desc: "Erhöhung der Feuerwiderstandsklasse",
      },
      {
        label: "Entrauchungen",
        href: "/brandschutz/entrauchungen",
        desc: "Selbsttragende Kanäle aus Feuerschutzplatten",
      },
      {
        label: "AM FireShield®",
        href: "/brandschutz/fireshield",
        desc: "Werksgefertigte Leichtbeton-Elemente",
      },
      {
        label: "Installationsschacht",
        href: "/brandschutz/installationsschacht",
        desc: "EI90 feuerbeständige Komplettlösung",
      },
    ],
  },
  { label: "Referenzen", href: "/referenzen", large: true },
  { label: "Blog", href: "/blog", large: true },
  { label: "Über uns", href: "/ueber-uns", large: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const TEXT_COLOR = "#1C1917"; // Braunschwarz

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5">
        <motion.header
          className={`w-full max-w-[1580px] bg-white/95 backdrop-blur-md border border-gray-100 transition-all duration-300 rounded-[3.5rem] lg:rounded-[5rem] px-8 md:px-16 ${
            scrolled ? "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]" : "shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-24' : 'h-28'}`}>
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center py-2">
              <img 
                src="/Logo/Logo_Schriftzug.png?v=5" 
                alt="JADA Logo" 
                className={`object-contain transition-all duration-500 hover:scale-105 ${scrolled ? 'h-16' : 'h-24'} w-auto`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {mainLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    style={{ color: pathname.startsWith(link.href) ? '#E85E04' : TEXT_COLOR }}
                    className={`relative px-5 py-3 font-bold tracking-tight transition-all duration-300 rounded-xl hover:bg-gray-50 ${
                      link.large ? "text-lg" : "text-base"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`inline-block ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {pathname.startsWith(link.href) && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute bottom-1 left-5 right-5 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 pt-4 w-[400px]"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 overflow-hidden">
                          <div className="mb-4">
                            <Link
                              href={link.href}
                              className="text-[10px] font-black text-accent uppercase tracking-[0.2em] bg-accent/5 px-3 py-1 rounded-full"
                            >
                              Übersicht {link.label}
                            </Link>
                          </div>
                          <div className="space-y-1">
                            {link.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex flex-col gap-1 p-4 rounded-2xl hover:bg-gray-50 transition-all group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-base font-bold text-primary group-hover:text-accent transition-colors">
                                    {child.label}
                                  </span>
                                  <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                                <span className="text-sm text-gray-500 font-light">
                                  {child.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/kontakt"
                className="ml-6 inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-black uppercase tracking-widest rounded-2xl hover:bg-[#c94f03] shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                Kontakt
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-10 p-4 text-primary bg-gray-50 rounded-2xl border border-gray-100"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-40 px-8 pb-12 overflow-y-auto"
          >
            <nav className="max-w-md mx-auto w-full flex flex-col gap-10">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.05 }}
                  className="space-y-4"
                >
                  <Link
                    href={link.href}
                    style={{ color: pathname.startsWith(link.href) ? '#E85E04' : TEXT_COLOR }}
                    className="text-4xl font-black transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="grid grid-cols-1 gap-4 pl-6 border-l-4 border-accent/20">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-lg font-bold text-gray-400 hover:text-accent transition-colors py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mainLinks.length * 0.05 }}
                className="mt-10"
              >
                <Link
                  href="/kontakt"
                  className="w-full inline-flex items-center justify-center gap-4 px-10 py-6 bg-accent text-white text-2xl font-black uppercase tracking-[0.2em] rounded-3xl shadow-2xl shadow-accent/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Kontakt
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
