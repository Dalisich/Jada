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
  { label: "Dienstleistungen", href: "/dienstleistungen", large: true },
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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4">
        <motion.header
          className={`w-full max-w-[1580px] bg-white/95 backdrop-blur-md border border-gray-100 transition-all duration-300 rounded-2xl sm:rounded-[3rem] lg:rounded-[5rem] px-4 sm:px-6 md:px-10 lg:px-14 ${
            scrolled ? "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]" : "shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16 sm:h-20 lg:h-24' : 'h-16 sm:h-20 lg:h-28'}`}>
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center py-1 shrink-0">
              <img
                src="/Logo/Logo_Schriftzug.png"
                alt="JADA Logo"
                className={`object-contain transition-all duration-500 hover:scale-105 ${scrolled ? 'h-10 sm:h-12 lg:h-16' : 'h-10 sm:h-14 lg:h-20'} w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-none`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainLinks.map((link, i) => (
                <div
                  key={`nav-link-${i}`}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    style={{ color: pathname.startsWith(link.href) ? '#E85E04' : TEXT_COLOR }}
                    className="relative px-3.5 py-2.5 text-[0.9rem] font-bold tracking-tight transition-all duration-300 rounded-xl hover:bg-gray-50 whitespace-nowrap"
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
                            {link.children?.map((child, j) => (
                              <Link
                                key={`child-${j}`}
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
              className="lg:hidden relative z-10 p-2.5 sm:p-3 text-primary bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100 shrink-0"
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto overflow-x-hidden"
            style={{ paddingTop: "calc(4rem + 1.5rem + 1rem)" }}
          >
            <nav className="max-w-md mx-auto w-full flex flex-col px-6 pt-6 pb-12 gap-0">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    href={link.href}
                    style={{ color: pathname.startsWith(link.href) ? '#E85E04' : TEXT_COLOR }}
                    className="flex items-center justify-between py-4 text-xl sm:text-2xl font-black transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-300" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pb-4 grid grid-cols-1 gap-2 pl-4 border-l-2 border-gray-100">
                      {link.children?.map((child, j) => (
                        <Link
                          key={`child-${j}`}
                          href={child.href}
                          className="text-base font-semibold text-gray-400 hover:text-primary transition-colors py-1"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mainLinks.length * 0.04 + 0.1 }}
                className="mt-8"
              >
                <Link
                  href="/kontakt"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-lg font-black uppercase tracking-[0.15em] rounded-2xl shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Kontakt aufnehmen
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
