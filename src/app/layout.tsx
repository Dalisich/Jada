import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JADA Isolierungen GmbH – Isolierungen & Brandschutz Schweiz",
    template: "%s | JADA Isolierungen GmbH",
  },
  description:
    "Einer der grössten Anbieter von Isolierungen, Dämmungen und Brandschutz in der Schweiz. Seit 1998. Leitungsdämmungen, Lüftungsdämmungen, Brandabschottungen, Entrauchungen und mehr.",
  keywords: [
    "Isolierungen",
    "Brandschutz",
    "Dämmungen",
    "Schweiz",
    "Winterthur",
    "JADA",
    "Brandabschottungen",
    "Leitungsdämmungen",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "JADA Isolierungen GmbH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
