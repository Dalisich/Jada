# JADA Isolierungen GmbH – Website-Redesign Konzept

**Version:** 1.1
**Datum:** 11. März 2026
**Erstellt für:** JADA Isolierungen GmbH, Winterthur

---

## Inhaltsverzeichnis

1. [Ausgangslage & Ziele](#1-ausgangslage--ziele)
2. [Firmenprofil & Inhalte](#2-firmenprofil--inhalte)
3. [Informationsarchitektur](#3-informationsarchitektur)
4. [Design-Konzept](#4-design-konzept)
5. [Animationen & Interaktionen](#5-animationen--interaktionen)
6. [Seitendetails mit Wireframe-Beschreibung](#6-seitendetails-mit-wireframe-beschreibung)
7. [Technische Spezifikation](#7-technische-spezifikation)
8. [SEO & Performance](#8-seo--performance)
9. [Content-Strategie](#9-content-strategie)
10. [Blog & Admin-Panel](#10-blog--admin-panel)
11. [Differenzierung zum Wettbewerb](#11-differenzierung-zum-wettbewerb)

---

## 1. Ausgangslage & Ziele

### Aktuelle Situation
Die bestehende Website (www.jada.ch) basiert auf Wix und weist folgende Schwächen auf:

- **Veraltetes Design** – entspricht nicht dem Branchenstandard
- **Langsame Ladezeiten** – Wix rendert Inhalte clientseitig per JavaScript
- **SEO-Defizite** – dynamisch geladene Inhalte werden von Suchmaschinen schlecht indexiert
- **Tippfehler in Seitentiteln** – "Isolierugen", "Brandaschottungen", "Umhüllunge", "Brandschutzverkleidungn"
- **Unprofessionelle URLs** – z.B. `/kopie-von-leitungen`
- **Keine Conversion-Strategie** – fehlende Call-to-Actions, kein Lead-Funnel
- **Keine Animationen oder Interaktivität** – statisches, lebloser Auftritt

### Ziele der neuen Website

| Ziel | Messgrösse |
|------|-----------|
| Premium-Auftritt & Markenwahrnehmung | Visueller Eindruck, Verweildauer > 3 Min. |
| Leadgenerierung steigern | Kontaktanfragen +50% |
| Suchmaschinenvisibilität | Top 3 für "Brandschutz Schweiz", "Isolierungen Winterthur" |
| Ladegeschwindigkeit | Lighthouse Performance Score > 95 |
| Mobile Nutzererfahrung | Mobile Bounce Rate < 30% |

---

## 2. Firmenprofil & Inhalte

### Unternehmensdaten

| Feld | Inhalt |
|------|--------|
| **Firma** | JADA Isolierungen GmbH |
| **Gegründet** | November 1998 |
| **Gründer** | Martin Jäger & Abramo D'Aversa |
| **Geschäftsführung** | Stefano Jud & Michael Inderbitzin |
| **Mitarbeiter** | 65 Festangestellte |
| **Adresse** | Werkstrasse 20, 8404 Winterthur, Schweiz |
| **Telefon** | +41 52 203 55 02 |
| **Fax** | +41 52 203 55 03 |
| **Email** | info@jada.ch |
| **Positionierung** | Einer der grössten Anbieter von Isolierungen, Dämmungen und Brandschutz in der Schweiz |

### Unternehmenswerte
- Kundennähe und Treue
- Fachkompetenz
- Flexibilität
- Pünktlichkeit und Qualität
- Flache Hierarchien mit klarer Kommunikation
- Soziale Verantwortung
- Langjährige, motivierte Mitarbeiter

### Dienstleistungsportfolio

#### A) Dämmungen / Isolierungen

**Leitungsdämmungen**
- Tägliche Isolierungsarbeiten mit PIR, Glasfaserwolle oder Mineralwolleschalen
- Wahl der Isolierungsart abhängig von Medium, Temperaturbereich, Vorschriften und Kundenwunsch

**Lüftungsdämmungen**
- Ausführung mit Mineralwollprodukten
- Eigenschaft: absolut nicht brennbar und beständig gegen sehr hohe Temperaturen
- Hocheffiziente, optimal ausgerüstete Ausführung

**Kälteisolierungen**
- Synthetischer Kautschuk
- Spezialanwendungen

**Sanitärisolierungen**
- Rohrleitungsisolierungen für Sanitäranlagen

#### B) Brandschutz

**Brandabschottungen**
- *Mörtelabschottungen:* Spezieller Brandschutzmörtel, leichter als Zementmörtel, treibt beim Trocknen
- *Weichabschottungen:* Beschichtete Steinwolleplatten (~150 kg/m³) mit Brandschutz-Beschichtung (Ablation oder Thermischichtbildung)

**Brandschutzverkleidungen**
- Verkleidungen von Stahlkonstruktionen und Bauteilen
- Erhöhung der Feuerwiderstandsklasse

**Entrauchungen**
- Für Hochrisiko-Objekte: Einkaufszentren, Flughäfen, Hotels, Tiefgaragen
- Absaugung giftiger, lebensgefährlicher Rauchgase im Brandfall
- Selbsttragende Kanäle aus speziellen Feuerschutzplatten (wo konventionelle Dämmungen an Grenzen stossen)

**AM FireShield®** (Lizenzierter Partner)
- Werksgefertigte Elemente nach Projektmassen
- Begehbare Leichtbeton-Konstruktion
- Eliminiert komplexe und teure Abdichtungsmassnahmen
- Lieferung direkt auf die Baustelle nach vereinbartem Terminplan

**Installationsschacht**
- EI90 feuerbeständige und wasserdichte Komplettlösung
- Abdichtung vertikaler Zonen
- Weichabschottung mit beschichteten Steinwolleplatten

---

## 3. Informationsarchitektur

### Seitenstruktur

```
JADA Isolierungen
│
├── /                                → Homepage
│
├── /daemmungen                      → Dämmungen (Übersichtsseite)
│   ├── /daemmungen/leitungen        → Leitungsdämmungen
│   └── /daemmungen/lueftung         → Lüftungsdämmungen
│
├── /brandschutz                     → Brandschutz (Übersichtsseite)
│   ├── /brandschutz/abschottungen   → Brandabschottungen
│   ├── /brandschutz/verkleidungen   → Brandschutzverkleidungen
│   ├── /brandschutz/entrauchungen   → Entrauchungen
│   ├── /brandschutz/fireshield      → AM FireShield®
│   └── /brandschutz/installationsschacht → Installationsschacht
│
├── /referenzen                      → Referenzen (filterbar)
├── /ueber-uns                       → Über uns
├── /kontakt                         → Kontaktformular
│
├── /blog                            → Blog (öffentlich, alle Artikel)
│   └── /blog/[slug]                 → Einzelner Blogartikel
│
└── /admin                           → Admin-Panel (passwortgeschützt)
    ├── /admin/login                 → Login-Seite
    ├── /admin/posts                 → Blog-Artikel verwalten (Liste)
    ├── /admin/posts/new             → Neuen Artikel erstellen
    └── /admin/posts/[id]/edit       → Artikel bearbeiten
```

### Navigation

**Desktop:** Sticky-Navigation, transparent auf dem Hero, solider Hintergrund beim Scrollen
**Mobile:** Fullscreen-Overlay-Menü mit gestaffelter Einblendung

```
[ Logo ]   Dämmungen ▾   Brandschutz ▾   Referenzen   Blog   Über uns   [ Kontakt → ]
```

- "Dämmungen" und "Brandschutz" öffnen ein **Mega-Dropdown** mit Unterseiten + kurzer Beschreibung + Vorschaubild
- "Kontakt" als hervorgehobener CTA-Button (Akzentfarbe)

---

## 4. Design-Konzept

### Designphilosophie: "Industrielle Eleganz"

Die neue Website verbindet die rohe, kraftvolle Ästhetik der Baubranche mit einem hochmodernen, eleganten Digitalauftritt. Das Design kommuniziert Präzision, Sicherheit und Innovation – genau wie die Arbeit von JADA.

### Farbpalette

```
PRIMARY (Anthrazit)      #1A1A2E    → Headlines, Navigation, dunkle Sektionen
ACCENT (Feuerorange)     #E85D04    → CTAs, Highlights, Brandschutz-Akzent
SECONDARY (Stahlblau)    #2B4C7E    → Dämmungen-Bereich, Vertrauenselemente
SURFACE WARM             #F5F3F0    → Helle Hintergründe
SURFACE WHITE            #FFFFFF    → Cards, Content-Bereiche
TEXT PRIMARY             #1A1A2E    → Fliesstext dunkel
TEXT SECONDARY           #6B7280    → Untertitel, Beschreibungen
TEXT ON DARK             #F5F3F0    → Text auf dunklen Flächen
GRADIENT FIRE            #E85D04 → #DC2626    → Brandschutz-Akzente
GRADIENT COOL            #2B4C7E → #1E3A5F    → Dämmungs-Akzente
```

### Typografie

| Rolle | Schrift | Gewicht | Grössen |
|-------|---------|---------|---------|
| **H1 (Hero)** | Plus Jakarta Sans | ExtraBold (800) | 72px Desktop / 40px Mobile |
| **H2 (Sektionen)** | Plus Jakarta Sans | Bold (700) | 48px / 32px |
| **H3 (Karten)** | Plus Jakarta Sans | SemiBold (600) | 28px / 22px |
| **Body** | Inter | Regular (400) | 18px / 16px |
| **Body Bold** | Inter | SemiBold (600) | 18px / 16px |
| **Zahlen/Stats** | JetBrains Mono | Bold (700) | 64px / 40px |
| **Label/Tags** | Inter | Medium (500) | 14px / 12px |

### Bildsprache

- **Grossformatige Baustellenfotografie** mit professioneller Beleuchtung
- **Dunkle Overlays** (Gradient von links nach rechts) für Text-Lesbarkeit auf Bildern
- **Detail-Aufnahmen** von Materialien (Steinwolle, Brandschutzmörtel, FireShield®)
- **Team bei der Arbeit** – echte Mitarbeiter, echte Baustellen, keine Stockfotos
- **Bildformat:** 16:9 für Heroes, 4:3 für Cards, 1:1 für Team-Portraits

### Layout-Prinzipien

- **Max. Content-Breite:** 1280px
- **Grid:** 12-Spalten-Grid mit 24px Gutter
- **Weissraum:** Grosszügig – mindestens 120px Abstand zwischen Sektionen
- **Abwechslung:** Hell/Dunkel-Sektionen im Wechsel für visuelle Tiefe
- **Asymmetrie:** Bewusst asymmetrische Layouts für Spannung (60/40 Splits statt 50/50)

---

## 5. Animationen & Interaktionen

### 5.1 Globale Seitenübergänge

**Page Transition (Seitenwechsel)**
- Beim Navigieren schiebt sich eine dunkle Fläche (#1A1A2E) von unten nach oben über die Seite
- Das JADA-Logo blinkt kurz mittig auf (0.3s)
- Die neue Seite wird von unten eingeblendet
- Dauer: 0.6s total, Easing: `cubic-bezier(0.76, 0, 0.24, 1)`

### 5.2 Scroll-Animationen

**A) Reveal on Scroll (Einblendung beim Scrollen)**
- Jede Sektion wird beim Scrollen animiert eingeblendet
- Elemente starten 60px unterhalb ihrer Endposition mit `opacity: 0`
- Beim Eintritt in den Viewport (Threshold: 20%) gleiten sie nach oben und werden sichtbar
- Dauer: 0.8s, Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration)
- **Staffelung:** Bei mehreren Elementen nebeneinander (z.B. Cards) startet jedes 0.15s versetzt (Stagger-Effekt)

**B) Parallax-Scrolling**
- Hero-Hintergrundbild scrollt mit 50% der Scroll-Geschwindigkeit → Tiefeneffekt
- Dekorative Elemente (geometrische Formen, Linien) bewegen sich mit unterschiedlichen Geschwindigkeiten
- Kennzahlen-Sektion: Hintergrundbild fix, Content scrollt darüber (Fixed Attachment)

**C) Horizontal Scroll Section (Referenzen)**
- Referenz-Projekte sind horizontal angeordnet
- Beim vertikalen Scrollen bewegt sich der Container horizontal
- Erzeugt einen "Galerie-Effekt" – immersiv und überraschend
- Scroll-Indikator zeigt Fortschritt an

**D) Text-Reveal Animation**
- Grosse Headlines werden Wort für Wort eingeblendet
- Jedes Wort erscheint 0.1s nach dem vorherigen
- Variante für Hero: Buchstabe für Buchstabe mit Cursor-Effekt
- Variante für Zahlen: Counter-Animation von 0 zum Zielwert (z.B. 0 → 27 Jahre)

**E) Scroll-Progress-Linie**
- Dünne Feuerorange-Linie am oberen Bildschirmrand
- Zeigt den Scroll-Fortschritt der gesamten Seite an (0% → 100%)
- Breite: 3px, Farbe: Accent (#E85D04)

**F) Bild-Reveal beim Scrollen**
- Bilder werden durch einen "Vorhang-Effekt" enthüllt
- Eine farbige Fläche (Accent-Farbe) schiebt sich von links nach rechts weg und gibt das Bild darunter frei
- Dauer: 1s, wirkt hochwertig und cinematisch

### 5.3 Hover-Effekte (Mouseover)

**A) Dienstleistungs-Cards**
```
Ruhezustand:
┌─────────────────────────┐
│  [Icon]                 │
│  Brandabschottungen     │
│  Kurzbeschreibung...    │
│                         │
└─────────────────────────┘

Hover-Zustand (0.4s Transition):
┌─────────────────────────┐
│  [Icon → animiert]      │  ← Icon wird farbig + leichte Rotation
│  Brandabschottungen     │  ← Text wird weiss
│  Kurzbeschreibung...    │
│  Mehr erfahren →        │  ← CTA erscheint von unten
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← Dunkler Gradient steigt von unten auf
└─────────────────────────┘
    ↑ Karte hebt sich leicht an (translateY: -8px)
    ↑ Subtiler Box-Shadow erscheint
```

**B) Referenz-Projekt-Cards**
- Bild zoomt langsam hinein (scale: 1 → 1.08) über 0.5s
- Dunkles Overlay wird intensiver (opacity: 0.2 → 0.6)
- Projekttitel und Kategorie-Tag gleiten von unten ein
- Cursor wechselt zu einem Custom-Cursor (Pfeil mit "Ansehen" Text)

**C) CTA-Buttons (Call-to-Action)**
```
Ruhezustand:
  ┌──────────────────────┐
  │  Projekt besprechen   │  ← Feuerorange Hintergrund
  └──────────────────────┘

Hover (0.3s):
  ┌────────────────────────┐
  │  Projekt besprechen →  │  ← Hintergrund wird dunkler
  └────────────────────────┘
      ↑ Button wächst leicht (scale: 1.03)
      ↑ Pfeil-Icon gleitet von links nach rechts
      ↑ Subtiler Glow-Effekt (box-shadow mit Accent-Farbe)
```

**D) Navigations-Links**
- Unterstrich-Animation: Eine Linie wächst von links nach rechts unter dem Link
- Farbe: Accent (#E85D04)
- Breite: 2px
- Dauer: 0.3s, Easing: ease-out

**E) Team-Portraits (Über uns)**
- Bild wechselt von Schwarzweiss zu Farbe beim Hover
- Name und Funktion gleiten sanft ein
- Subtiler Schatten-Effekt

**F) Kontaktdaten-Icons**
- Icons rotieren leicht (15°) und wechseln die Farbe zum Accent
- Begleittext wird fett
- Transition: 0.25s

### 5.4 Spezial-Animationen

**A) Feuer-Partikel-Effekt (Hero-Bereich)**
- Subtile, warme Lichtpartikel schweben im Hero-Hintergrund aufwärts
- Partikel in verschiedenen Grössen (2px – 6px) und Orangetönen
- Sehr dezent (opacity: 0.3–0.6), soll nicht ablenken sondern Atmosphäre schaffen
- Implementierung: Canvas-basiert oder CSS-Partikel (Performance-optimiert)
- Partikel reagieren leicht auf Mausbewegung (Parallax-Effekt zum Cursor)

**B) Zahlen-Counter-Animation (Kennzahlen-Sektion)**
```
Beim Eintreten in den Viewport:

   27+          65           ∞
  JAHRE      MITARBEITER   PROJEKTE

Die Zahlen zählen von 0 hoch zum Zielwert:
- Start: 0 → Ziel: 27 (Dauer: 2s)
- Start: 0 → Ziel: 65 (Dauer: 2.5s)
- Easing: ease-out (schnell am Anfang, langsam am Ende)
- Zahlen verwenden Monospace-Font für stabiles Layout
```

**C) Scroll-getriggerte Lottie-Animationen**
- Für jede Dienstleistung eine kleine Lottie-Animation (z.B. Flamme für Brandschutz, Schneeflocke für Kälteisolierung)
- Animation spielt ab, wenn die Sektion in den Viewport kommt
- Kann mit Scroll-Progress verknüpft werden (Animation folgt dem Scroll)

**D) Magnetischer Cursor-Effekt**
- Bei grossen CTA-Buttons: Der Button "zieht" den Cursor leicht an, wenn er in die Nähe kommt
- Der Button bewegt sich minimal in Richtung des Cursors (max. 10px Versatz)
- Erzeugt ein spielerisches, interaktives Gefühl
- Nur auf Desktop, nicht auf Touch-Geräten

**E) Smooth Scroll mit Lenis**
- Natürliches, butterartiges Scrollverhalten auf der gesamten Seite
- Scroll-Geschwindigkeit: 1.0 (normal), Smoothness: 0.1
- Verleiht der gesamten Seite ein Premium-Gefühl

**F) Loading-Animation (Erstbesuch)**
- Beim erstmaligen Laden: JADA-Logo wird Strich für Strich "gezeichnet" (SVG Path Animation)
- Logo morpht sich dann in die finale Position in der Navigation
- Gesamtdauer: 1.5s – schnell genug, um nicht zu nerven
- Wird nur beim ersten Besuch angezeigt (Session-basiert)

### 5.5 Micro-Interactions

**Formular-Felder (Kontakt)**
- Label schwebt nach oben, wenn das Feld fokussiert wird (Floating Label)
- Untere Linie wechselt von grau zu Accent-Farbe
- Bei erfolgreicher Validierung: grüner Haken erscheint rechts
- Bei Fehler: Feld wackelt kurz (Shake-Animation, 0.3s)
- Submit-Button: Lädt-Animation (Text → Spinner → Haken)

**Scroll-to-Top Button**
- Erscheint nach 500px Scroll mit Fade-In
- Runder Button, Anthrazit mit Pfeil-nach-oben
- Hover: Background wechselt zu Accent, Pfeil springt kurz hoch

**Hamburger-Menü (Mobile)**
- Die drei Linien morphen zu einem X beim Öffnen
- Smooth SVG-Path-Transition (0.4s)
- Menü-Overlay gleitet von rechts ein mit Blur-Hintergrund

**Cookie-Banner**
- Gleitet von unten ein (0.5s delay nach Seitenladung)
- Glassmorphism-Effekt (halbtransparent, Backdrop-Blur)
- Buttons mit Standard-Hover-Effekten

---

## 6. Seitendetails mit Wireframe-Beschreibung

### 6.1 Homepage

```
┌──────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░ NAVIGATION (transparent) ░░░░░░░░░░░░░ │
│ [JADA Logo]     Dämmungen  Brandschutz  Ref.  Über uns  │
│                                              [Kontakt →] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│              HERO SECTION (100vh)                         │
│         Fullscreen Video/Bild Hintergrund                │
│         + Feuer-Partikel-Overlay                         │
│                                                          │
│    ┌─────────────────────────────────────┐               │
│    │  Schutz. Effizienz. Perfektion.     │  ← H1        │
│    │                                     │               │
│    │  Einer der grössten Anbieter von    │  ← Subline   │
│    │  Isolierungen & Brandschutz in      │               │
│    │  der Schweiz. Seit 1998.            │               │
│    │                                     │               │
│    │  [Projekt besprechen] [Leistungen]  │  ← 2 CTAs    │
│    └─────────────────────────────────────┘               │
│                                                          │
│              ▼ Scroll-Indikator (animiert)               │
├──────────────────────────────────────────────────────────┤
│                                                          │
│          TRUST BAR (Logos der Partner/Zertifizierungen)   │
│   [ Logo ]  [ Logo ]  [ Logo ]  [ AM FireShield® ]      │
│              Endlos-Scroll-Marquee                        │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  SEKTION: "Was wir tun"                     [Reveal ↑]  │
│                                                          │
│  ┌─────────────────┐    ┌─────────────────┐             │
│  │                 │    │                 │              │
│  │   DÄMMUNGEN     │    │   BRANDSCHUTZ   │             │
│  │                 │    │                 │              │
│  │  Grosses Bild   │    │  Grosses Bild   │             │
│  │  + Overlay      │    │  + Overlay      │             │
│  │                 │    │                 │              │
│  │  Beschreibung   │    │  Beschreibung   │             │
│  │                 │    │                 │              │
│  │  → Leitungen    │    │  → Abschottung  │             │
│  │  → Lüftung      │    │  → Verkleidung  │             │
│  │  → Kälte        │    │  → Entrauchung  │             │
│  │                 │    │  → FireShield    │             │
│  │  [Alle →]       │    │  [Alle →]       │             │
│  └─────────────────┘    └─────────────────┘             │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                      ▓ │
│ ▓   KENNZAHLEN (Dunkle Sektion, Fixed Background)      ▓ │
│ ▓                                                      ▓ │
│ ▓    27+          65          500+         100%        ▓ │
│ ▓   JAHRE    MITARBEITER    PROJEKTE    ENGAGEMENT     ▓ │
│ ▓                                                      ▓ │
│ ▓   (Counter-Animation beim Scrollen)                  ▓ │
│ ▓                                                      ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  SEKTION: "Ausgewählte Projekte"                        │
│                                                          │
│  ◄ Horizontaler Scroll-Bereich ►                        │
│                                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │Projekt │ │Projekt │ │Projekt │ │Projekt │  ← Cards  │
│  │  Bild  │ │  Bild  │ │  Bild  │ │  Bild  │           │
│  │  Name  │ │  Name  │ │  Name  │ │  Name  │           │
│  │  Tag   │ │  Tag   │ │  Tag   │ │  Tag   │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                          │
│              [Alle Referenzen ansehen →]                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  SEKTION: "Warum JADA?"                                 │
│                                                          │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ Icon │  │ Icon │  │ Icon │  │ Icon │               │
│  │Fach- │  │Flexi-│  │Quali-│  │Pünkt-│               │
│  │kompe-│  │bili- │  │ tät  │  │lich- │               │
│  │ tenz │  │ tät  │  │      │  │ keit │               │
│  └──────┘  └──────┘  └──────┘  └──────┘               │
│                                                          │
│  (Stagger-Animation: Cards erscheinen nacheinander)     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  CTA-SEKTION (Volle Breite, Accent-Hintergrund)         │
│                                                          │
│     Ihr Projekt verdient den besten Schutz.              │
│                                                          │
│     [Jetzt Kontakt aufnehmen →]                         │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  FOOTER                                                  │
│                                                          │
│  [JADA Logo]                                            │
│                                                          │
│  Dämmungen          Brandschutz        Kontakt           │
│  · Leitungen        · Abschottungen   Werkstrasse 20    │
│  · Lüftung          · Verkleidungen   8404 Winterthur   │
│  · Kälte            · Entrauchungen   +41 52 203 55 02  │
│                     · FireShield      info@jada.ch       │
│                                                          │
│  ─────────────────────────────────────────────────────   │
│  © 2026 JADA Isolierungen GmbH · Datenschutz · Impress. │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 6.2 Über uns `/ueber-uns`

**Hero:** Halbe Höhe (60vh), Teamfoto im Hintergrund, Titel "Über uns"

**Geschichte-Timeline:**
- Vertikale Linie in der Mitte (Desktop) / links (Mobile)
- Meilensteine wechseln links/rechts ab
- Jeder Meilenstein wird beim Scrollen enthüllt (Reveal Animation)
- Punkte auf der Linie leuchten auf, wenn erreicht

```
Timeline-Punkte:
1998 → Gründung durch Martin Jäger & Abramo D'Aversa
20XX → Wachstum auf XX Mitarbeiter
20XX → Zertifizierung / Partnerschaft AM FireShield®
2025 → Übergabe an Stefano Jud & Michael Inderbitzin
Heute → 65 Mitarbeiter, einer der grössten Anbieter der Schweiz
```

**Werte-Sektion:**
- 6 Werte als animierte Cards mit Icons
- Stagger-Reveal beim Scrollen

**Team-Sektion:**
- Geschäftsführer-Portraits (Schwarzweiss → Farbe bei Hover)
- Name, Funktion, kurzes Zitat

### 6.3 Dienstleistungs-Übersicht `/daemmungen` und `/brandschutz`

**Layout:**
- Hero mit Bereichstitel und kurzer Beschreibung
- Darunter: Unterseiten als grosse, klickbare Karten (50/50 Bild + Text)
- Jede Karte mit Hover-Animation (Bild-Zoom + Overlay)
- Abwechselnd Bild links/rechts für visuelle Abwechslung

### 6.4 Dienstleistungs-Detailseiten

**Struktur (gleich für alle):**
1. Hero mit Dienstleistungs-spezifischem Bild + Titel
2. Einleitungstext (2-3 Absätze)
3. Vorteile als Icon-Grid (3 Spalten)
4. Technische Details / Materialien (mit Infografiken)
5. Bildergalerie (Lightbox)
6. Verwandte Referenzen (2-3 Projekte)
7. CTA: "Interessiert? Kontaktieren Sie uns."

### 6.5 Referenzen `/referenzen`

**Filter-Leiste:**
```
[ Alle ]  [ Dämmungen ]  [ Brandschutz ]
```
- Aktiver Filter hat Accent-Unterstrich
- Wechsel mit sanfter Layout-Animation (Framer Motion AnimatePresence)

**Projekt-Grid:**
- Masonry-Layout (Pinterest-Style)
- Cards mit Bild, Overlay, Projekttitel, Kategorie-Tag
- Hover: Zoom + Info-Einblendung
- Click: Modal/Overlay mit Projektdetails + Bildergalerie

### 6.6 Kontakt `/kontakt`

**Split-Screen Layout:**

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   KONTAKTFORMULAR   │   KONTAKTINFOS      │
│                     │                     │
│   Name              │   JADA Isolierungen │
│   ─────────────     │   Werkstrasse 20    │
│   Email             │   8404 Winterthur   │
│   ─────────────     │                     │
│   Telefon           │   +41 52 203 55 02  │
│   ─────────────     │   info@jada.ch      │
│   Betreff ▾         │                     │
│   ─────────────     │   ─────────────     │
│   Nachricht         │                     │
│   ─────────────     │   [Google Maps]     │
│   ─────────────     │   Eingebettete      │
│                     │   Karte             │
│   [Absenden →]      │                     │
│                     │                     │
└─────────────────────┴─────────────────────┘
```

---

## 7. Technische Spezifikation

### Tech Stack

| Komponente | Technologie | Begründung |
|-----------|-------------|------------|
| **Framework** | Next.js 15 (App Router) | SSG/SSR, beste Performance, SEO |
| **Sprache** | TypeScript | Typsicherheit, bessere DX |
| **Styling** | Tailwind CSS 4 | Rapid Development, konsistentes Design |
| **Animationen** | Framer Motion 12 | Deklarative Animationen, Scroll-Trigger |
| **Smooth Scroll** | Lenis | Butterartiges Scrollverhalten |
| **Partikel** | tsParticles (lightweight) | Hero Feuer-Partikel-Effekt |
| **Lottie** | lottie-react | Vektor-Animationen für Icons |
| **Icons** | Lucide React | Konsistentes, modernes Icon-Set |
| **Formulare** | React Hook Form + Zod | Validierung, Server Actions |
| **Datenbank** | PostgreSQL (Vercel Postgres / Neon) | Blog-Daten, User-Accounts |
| **ORM** | Prisma | Typsicherer Datenbankzugriff |
| **Auth** | NextAuth.js v5 (Auth.js) | Admin-Login, Session-Management |
| **Rich-Text-Editor** | TipTap (ProseMirror) | WYSIWYG Blog-Editor im Admin |
| **Bild-Upload** | Vercel Blob Storage | Blog-Titelbilder, Artikel-Bilder |
| **Hosting** | Vercel | Edge Network, Schweizer Node |
| **Analytics** | Plausible | DSGVO-konform, kein Cookie-Banner nötig |
| **Maps** | Mapbox GL | Stylbare Karte passend zum Design |

### Ordnerstruktur

```
jada-website/
├── app/
│   ├── layout.tsx              → Root Layout mit Navigation + Footer
│   ├── page.tsx                → Homepage
│   ├── daemmungen/
│   │   ├── page.tsx            → Dämmungen Übersicht
│   │   ├── leitungen/page.tsx
│   │   └── lueftung/page.tsx
│   ├── brandschutz/
│   │   ├── page.tsx            → Brandschutz Übersicht
│   │   ├── abschottungen/page.tsx
│   │   ├── verkleidungen/page.tsx
│   │   ├── entrauchungen/page.tsx
│   │   ├── fireshield/page.tsx
│   │   └── installationsschacht/page.tsx
│   ├── referenzen/page.tsx
│   ├── ueber-uns/page.tsx
│   ├── kontakt/page.tsx
│   ├── blog/
│   │   ├── page.tsx                → Blog Übersicht
│   │   └── [slug]/page.tsx         → Artikel Detail
│   ├── admin/
│   │   ├── layout.tsx              → Admin Layout (eigene Nav)
│   │   ├── login/page.tsx          → Login
│   │   └── posts/
│   │       ├── page.tsx            → Artikel-Liste
│   │       ├── new/page.tsx        → Neuer Artikel
│   │       └── [id]/edit/page.tsx  → Artikel bearbeiten
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── posts/route.ts
│       ├── posts/[id]/route.ts
│       ├── upload/route.ts
│       └── categories/route.ts
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── WhyJada.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── ParallaxImage.tsx
│   │   └── FireParticles.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── animations.ts           → Framer Motion Varianten
│   ├── sanity.ts               → CMS Client
│   └── utils.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── lottie/
└── styles/
    └── globals.css             → Tailwind + Custom Properties
```

### Responsive Breakpoints

| Breakpoint | Breite | Ziel |
|-----------|--------|------|
| `sm` | 640px | Grosse Smartphones |
| `md` | 768px | Tablets Portrait |
| `lg` | 1024px | Tablets Landscape / kleine Laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Grosse Monitore |

---

## 8. SEO & Performance

### SEO-Massnahmen

**On-Page SEO:**
- Eindeutige, fehlerfreie Meta-Titel und -Beschreibungen pro Seite
- Strukturierte Daten (JSON-LD): LocalBusiness, Organization, Service
- Semantisches HTML (h1-h6 Hierarchie, article, section, nav)
- Alt-Texte für alle Bilder
- Interne Verlinkung zwischen verwandten Dienstleistungen
- Breadcrumb-Navigation

**Technisches SEO:**
- Server-Side Rendering / Static Generation (kein clientseitiges Rendering wie bei Wix)
- Automatische Sitemap.xml Generierung
- robots.txt
- Canonical Tags
- Open Graph & Twitter Card Meta-Tags
- Hreflang-Tags (vorbereitet für DE/FR/IT)

**Keyword-Strategie (Vorschlag):**

| Seite | Primäres Keyword | Sekundäre Keywords |
|-------|-----------------|-------------------|
| Homepage | Isolierungen Schweiz | Dämmungen, Brandschutz, Winterthur |
| Dämmungen | Technische Isolierungen Schweiz | Leitungsdämmungen, Lüftungsdämmungen |
| Brandschutz | Brandschutz Schweiz | Brandabschottungen, Entrauchungen |
| Brandabschottungen | Brandabschottungen Schweiz | Mörtelabschottung, Weichabschottung |
| AM FireShield | AM FireShield Schweiz | Installationsschacht, Leichtbeton Brandschutz |

### Performance-Ziele

| Metrik | Ziel | Massnahme |
|--------|------|-----------|
| LCP (Largest Contentful Paint) | < 1.5s | Next/Image Optimierung, Priority Loading |
| FID (First Input Delay) | < 50ms | Code Splitting, deferred Scripts |
| CLS (Cumulative Layout Shift) | < 0.05 | Feste Bild-Dimensionen, Font-Display Swap |
| TTI (Time to Interactive) | < 2.5s | Lazy Loading, Tree Shaking |
| Lighthouse Score | > 95 | Alle oben genannten Massnahmen |

---

## 9. Content-Strategie

### Benötigte Inhalte (vom Kunden zu liefern)

**Fotografie (Empfehlung: professioneller Fotograf):**
- [ ] Teamfoto (Gruppe) für Über-uns-Hero
- [ ] Einzelportraits der Geschäftsführung (Stefano Jud, Michael Inderbitzin)
- [ ] 10-15 Baustellenfotos (verschiedene Projekte)
- [ ] Detail-Aufnahmen der Materialien und Arbeiten
- [ ] Firmengebäude / Werkstatt aussen und innen
- [ ] Fahrzeuge / Equipment

**Video (optional, aber empfohlen für Hero):**
- [ ] 15-30 Sekunden Drone/Cinematic-Aufnahmen von Baustellen
- [ ] Alternativ: Zeitraffer einer Montage

**Texte:**
- [ ] Aktualisierte Firmenbeschreibung
- [ ] Überarbeitete Dienstleistungstexte (fehlerfrei)
- [ ] 5-10 Referenzprojekte mit Beschreibung
- [ ] Kundenzitate / Testimonials
- [ ] Meilensteine für Timeline

### Platzhalter-Strategie
Bis professionelle Fotos vorliegen:
- Hochwertige Stockfotos als Platzhalter (Unsplash/Pexels: Baustelle, Isolierung)
- Klar gekennzeichnet als "Platzhalter – wird ersetzt"

---

## 10. Blog & Admin-Panel

### Übersicht

Die Website erhält ein eingebautes Blog-System mit einem passwortgeschützten Admin-Panel. Damit kann das JADA-Team selbstständig Blogartikel erstellen, bearbeiten und löschen – ohne externen Dienst, ohne Zusatzkosten.

### Warum ein Blog?

- **SEO-Boost:** Regelmässige Inhalte verbessern das Google-Ranking massiv
- **Fachkompetenz zeigen:** Artikel über Brandschutz-Normen, Dämm-Techniken, Projektberichte
- **Lead-Generierung:** Blog-Leser werden zu Kunden
- **Aktualität:** Die Website wirkt lebendig und gepflegt

### Blog (Öffentlich) `/blog`

**Übersichtsseite `/blog`:**
- Hero-Bereich mit Titel "JADA Blog – Wissen aus der Praxis"
- Grid mit Blog-Cards (3 Spalten Desktop, 1 Spalte Mobile)
- Jede Card zeigt: Titelbild, Kategorie-Tag, Titel, Datum, Vorschautext (150 Zeichen)
- Pagination oder "Mehr laden"-Button
- Seitenleiste (Desktop): Kategorien-Filter, Neueste Beiträge

**Artikel-Detailseite `/blog/[slug]`:**
- Hero mit Titelbild (Volle Breite)
- Artikel-Metadaten: Kategorie, Datum, Lesezeit (automatisch berechnet)
- Artikel-Body: Gerendertes Markdown/Rich-Text mit Unterstützung für:
  - Überschriften (H2, H3)
  - Fett, Kursiv, Links
  - Bilder (mit Bildunterschrift)
  - Aufzählungslisten
  - Zitate (Blockquote)
  - Code-Blöcke (falls technische Artikel)
- "Verwandte Artikel" am Ende (2-3 Vorschläge)
- CTA-Sektion: "Fragen zu diesem Thema? Kontaktieren Sie uns."
- Social-Share-Buttons (LinkedIn, Email, Link kopieren)

**Blog-Kategorien (Vorschlag):**
- Brandschutz
- Dämmungen & Isolierungen
- Normen & Vorschriften
- Projektberichte
- Unternehmen / News

### Admin-Panel (Passwortgeschützt) `/admin`

**Zugang:**
- Erreichbar unter `www.jada.ch/admin`
- Login mit Email + Passwort (NextAuth.js mit Credentials Provider)
- Nur autorisierte JADA-Mitarbeiter haben Zugang
- Session-basierte Authentifizierung (JWT)
- Kein öffentlicher Registrierungs-Link

**Login-Seite `/admin/login`:**
```
┌─────────────────────────────────┐
│                                 │
│        [JADA Logo]              │
│                                 │
│     Admin-Bereich               │
│                                 │
│     Email                       │
│     ─────────────────           │
│     Passwort                    │
│     ─────────────────           │
│                                 │
│     [Anmelden →]                │
│                                 │
└─────────────────────────────────┘
```
- Minimalistisches Design, gleiche Farbpalette wie Hauptseite
- Fehlermeldung bei falschem Login
- Rate-Limiting gegen Brute-Force

**Dashboard `/admin/posts`:**
```
┌──────────────────────────────────────────────────────────┐
│ [JADA Logo]                    Admin    [Abmelden]       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Blog-Artikel verwalten              [+ Neuer Artikel]   │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Status │ Titel              │ Kategorie │ Datum     │ │
│  ├────────┼────────────────────┼───────────┼──────────┤ │
│  │ ● Live │ Neue Brandschutz.. │ Brandsch. │ 10.03.26 │ │
│  │ ● Live │ EI90 Normen-Upd.. │ Normen    │ 01.03.26 │ │
│  │ ○ Entw.│ Projekt Flughaf.. │ Projekte  │ --.--.-- │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Zeigt: Alle (3)  ·  Live (2)  ·  Entwürfe (1)         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```
- Tabellarische Übersicht aller Artikel
- Status: Veröffentlicht (grüner Punkt) / Entwurf (grauer Punkt)
- Sortierbar nach Datum, Titel, Kategorie
- Aktionen pro Zeile: Bearbeiten, Vorschau, Löschen (mit Bestätigung)
- Suche/Filter

**Artikel-Editor `/admin/posts/new` und `/admin/posts/[id]/edit`:**
```
┌──────────────────────────────────────────────────────────┐
│ [← Zurück]                [Vorschau] [Entwurf] [Publi.] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Titel                                                   │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Neuer Artikel über Brandschutz-Normen 2026         │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Slug (URL): brandschutz-normen-2026 (auto-generiert)   │
│                                                          │
│  Kategorie: [ Brandschutz         ▾ ]                   │
│                                                          │
│  Titelbild                                               │
│  ┌────────────────────────────────────────────────────┐  │
│  │         [ Bild hochladen oder hierher ziehen ]     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Vorschautext (wird auf der Blog-Übersicht angezeigt)   │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Kurze Zusammenfassung des Artikels...              │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Inhalt                                                  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ B  I  U  H2  H3  "  —  🔗  📷  </>  Liste        │  │
│  │────────────────────────────────────────────────────│  │
│  │                                                    │  │
│  │  Rich-Text-Editor (TipTap)                         │  │
│  │                                                    │  │
│  │  Unterstützt:                                      │  │
│  │  · Formatierter Text (Fett, Kursiv, Unterstrichen) │  │
│  │  · Überschriften (H2, H3)                          │  │
│  │  · Zitate                                          │  │
│  │  · Bilder (Upload + Drag & Drop)                   │  │
│  │  · Links                                           │  │
│  │  · Aufzählungen & nummerierte Listen                │  │
│  │  · Code-Blöcke                                     │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  SEO-Einstellungen (aufklappbar)                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Meta-Titel:  ________________________________      │  │
│  │ Meta-Beschreibung: __________________________      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Editor-Features:**
- **Rich-Text-Editor:** TipTap (Open Source, basiert auf ProseMirror) – WYSIWYG mit Toolbar
- **Bild-Upload:** Drag & Drop oder Klick, Bilder werden auf Vercel Blob Storage gespeichert
- **Auto-Save:** Entwurf wird alle 30 Sekunden automatisch gespeichert
- **Slug-Generierung:** URL wird automatisch aus dem Titel generiert, kann manuell überschrieben werden
- **Vorschau:** Öffnet den Artikel in einem neuen Tab, so wie er auf der öffentlichen Seite aussehen wird
- **Veröffentlichungs-Status:** Entwurf (nur für Admins sichtbar) oder Veröffentlicht (öffentlich)
- **SEO-Felder:** Meta-Titel und -Beschreibung können pro Artikel angepasst werden

### Technische Umsetzung

**Datenbank:**
- PostgreSQL (via Vercel Postgres oder Neon)
- ORM: Prisma

**Datenbank-Schema:**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // bcrypt-gehasht
  name      String
  role      Role     @default(EDITOR)
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id          String    @id @default(cuid())
  title       String
  slug        String    @unique
  excerpt     String    // Vorschautext
  content     String    // HTML aus TipTap
  coverImage  String?   // URL zum Titelbild
  category    Category  @relation(fields: [categoryId], references: [id])
  categoryId  String
  author      User      @relation(fields: [authorId], references: [id])
  authorId    String
  status      PostStatus @default(DRAFT)
  metaTitle   String?
  metaDesc    String?
  publishedAt DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Category {
  id    String @id @default(cuid())
  name  String @unique
  slug  String @unique
  posts Post[]
}

enum PostStatus {
  DRAFT
  PUBLISHED
}

enum Role {
  ADMIN
  EDITOR
}
```

**API-Routen (Next.js Server Actions / Route Handlers):**
```
POST   /api/auth/login          → Login
POST   /api/auth/logout         → Logout
GET    /api/posts               → Alle Posts (mit Filter/Pagination)
POST   /api/posts               → Post erstellen
GET    /api/posts/[id]          → Einzelner Post
PUT    /api/posts/[id]          → Post aktualisieren
DELETE /api/posts/[id]          → Post löschen
POST   /api/upload              → Bild hochladen
GET    /api/categories          → Kategorien auflisten
```

**Authentifizierung:**
- NextAuth.js v5 (Auth.js) mit Credentials Provider
- JWT-basierte Sessions
- Middleware schützt alle `/admin/*` Routen
- Passwörter mit bcrypt gehasht (min. 12 Zeichen)
- CSRF-Schutz eingebaut

**Bild-Upload:**
- Vercel Blob Storage (oder alternativ Cloudinary)
- Automatische Bildoptimierung (WebP, Resize)
- Max. Upload-Grösse: 5 MB
- Erlaubte Formate: JPG, PNG, WebP

**Zusätzliche Ordnerstruktur:**
```
app/
├── blog/
│   ├── page.tsx                → Blog-Übersicht
│   └── [slug]/page.tsx         → Artikel-Detail
├── admin/
│   ├── layout.tsx              → Admin Layout (eigene Navigation)
│   ├── login/page.tsx          → Login
│   └── posts/
│       ├── page.tsx            → Artikel-Liste
│       ├── new/page.tsx        → Neuer Artikel
│       └── [id]/edit/page.tsx  → Artikel bearbeiten
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── posts/route.ts
│   ├── posts/[id]/route.ts
│   ├── upload/route.ts
│   └── categories/route.ts
lib/
├── prisma.ts                   → Prisma Client
├── auth.ts                     → NextAuth Konfiguration
└── upload.ts                   → Upload-Hilfsfunktionen
prisma/
├── schema.prisma               → Datenbank-Schema
└── seed.ts                     → Initiale Kategorien + Admin-User
```

### Admin-Panel Design

Das Admin-Panel verwendet ein **eigenständiges, reduziertes Layout** – kein Hero, keine Animationen, rein funktional:

- **Farben:** Weisser Hintergrund, Anthrazit-Sidebar, Accent für aktive Elemente
- **Schrift:** Inter (gleich wie Hauptseite)
- **Layout:** Sidebar-Navigation links (Desktop), Top-Bar (Mobile)
- **Komponenten:** Saubere Tabellen, klare Formulare, dezente Hover-Zustände
- **Keine Framer-Motion-Animationen** – das Admin-Panel ist ein Arbeitstool, kein Showcase

---

## 11. Differenzierung zum Wettbewerb

### Was diese Website einzigartig macht

| Feature | Typische Branchen-Website | JADA Neue Website |
|---------|--------------------------|-------------------|
| Erster Eindruck | Statisches Bild mit Text | Cinematic Hero mit Partikel-Effekt |
| Scrollverhalten | Normales Scrollen | Butter-smooth mit Lenis + Parallax |
| Dienstleistungen | Textliste mit kleinen Bildern | Interaktive Cards mit Hover-Animationen |
| Zahlen/Fakten | Statischer Text | Animierte Counter beim Scrollen |
| Referenzen | Bildergalerie | Horizontaler Scroll-Showcase |
| Seitenübergänge | Harter Seitenwechsel | Smooth Page Transitions mit Logo |
| Navigation | Standard-Dropdown | Mega-Menu mit Vorschaubildern |
| Mobile | Responsive Afterthought | Mobile-First mit eigenem UX-Konzept |
| Ladezeit | 3-5 Sekunden (Wix) | < 1.5 Sekunden (Next.js + Vercel) |
| SEO | Schlecht (Client-Rendering) | Exzellent (SSG + strukturierte Daten) |

### Emotionale Wirkung
Die neue Website soll den Besucher sofort vermitteln:
> "Diese Firma ist professionell, modern und technisch auf höchstem Niveau – genau wie ihre Arbeit auf der Baustelle."

---

## Anhang: Animations-Zusammenfassung

| Animation | Trigger | Dauer | Wo |
|-----------|---------|-------|----|
| Page Transition | Seitenwechsel | 0.6s | Global |
| Scroll Reveal | Viewport Entry | 0.8s | Alle Sektionen |
| Parallax Background | Scroll | Kontinuierlich | Hero, Kennzahlen |
| Horizontal Scroll | Scroll | Kontinuierlich | Referenzen |
| Text Reveal (Wort) | Viewport Entry | 0.1s/Wort | Headlines |
| Counter Animation | Viewport Entry | 2-2.5s | Kennzahlen |
| Card Hover | Mouseover | 0.4s | Dienstleistungs-Cards |
| Image Zoom | Mouseover | 0.5s | Referenz-Cards |
| Button Glow | Mouseover | 0.3s | CTAs |
| Nav Underline | Mouseover | 0.3s | Navigation |
| Portrait B/W→Color | Mouseover | 0.5s | Team-Portraits |
| Fire Particles | Permanent + Cursor | Endlos | Hero |
| Bild-Vorhang Reveal | Viewport Entry | 1.0s | Bilder |
| Logo SVG Draw | Page Load | 1.5s | Loading Screen |
| Magnetic Cursor | Cursor Proximity | Kontinuierlich | CTA Buttons |
| Floating Label | Input Focus | 0.2s | Kontaktformular |
| Scroll Progress | Scroll | Kontinuierlich | Top Bar |
| Marquee | Permanent | Endlos | Trust Bar |
| Menu Morph | Click | 0.4s | Mobile Hamburger |

---

*Ende des Konzepts*
