# Prompt für Google Antigravity IDE

> Diesen Prompt in den Antigravity Agent-Chat einfügen.
> Voraussetzung: Die Datei `JADA-Website-Konzept.md` liegt im Projektordner.

---

## Prompt (kopieren ab hier):

```
Lies zuerst die Datei JADA-Website-Konzept.md im Projektordner vollständig durch. Diese Datei enthält das komplette Konzeptdokument für ein Website-Redesign der Firma JADA Isolierungen GmbH (Schweizer Brandschutz- und Isolierungsunternehmen).

Erstelle auf Basis dieses Konzepts eine vollständige, produktionsreife Website mit Next.js 15 (App Router) und TypeScript.

## Anforderungen

### Tech Stack (exakt wie im Konzept)
- Next.js 15 mit App Router und TypeScript
- Tailwind CSS 4 für Styling
- Framer Motion 12 für alle Animationen
- Lenis für Smooth Scrolling
- tsParticles für den Feuer-Partikel-Effekt im Hero
- Lucide React für Icons
- React Hook Form + Zod für das Kontaktformular
- Google Fonts: "Plus Jakarta Sans" (Headlines), "Inter" (Body), "JetBrains Mono" (Zahlen)

### Design-System
Verwende exakt diese Farben als CSS Custom Properties UND Tailwind-Konfiguration:
- Primary (Anthrazit): #1A1A2E
- Accent (Feuerorange): #E85D04
- Secondary (Stahlblau): #2B4C7E
- Surface Warm: #F5F3F0
- Surface White: #FFFFFF
- Text Secondary: #6B7280
- Gradient Fire: #E85D04 → #DC2626
- Gradient Cool: #2B4C7E → #1E3A5F

### Seiten die erstellt werden müssen
Erstelle ALLE folgenden Seiten mit vollständigem Inhalt:

1. **Homepage `/`** mit diesen Sektionen in genau dieser Reihenfolge:
   - Hero Section: Fullscreen (100vh), dunkles Hintergrundbild mit Overlay, Feuer-Partikel-Effekt (tsParticles), grosse Headline "Schutz. Effizienz. Perfektion.", Subline "Einer der grössten Anbieter von Isolierungen & Brandschutz in der Schweiz. Seit 1998.", zwei CTA-Buttons ("Projekt besprechen" als Primary, "Unsere Leistungen" als Outline), animierter Scroll-Indikator unten
   - Trust Bar: Endlos-Scroll-Marquee mit Partner-/Zertifizierungs-Platzhaltern
   - Dienstleistungen-Sektion: Titel "Was wir tun", zwei grosse Cards nebeneinander (Dämmungen + Brandschutz), jede Card mit Hintergrundbild, Overlay, Titel, kurze Beschreibung, Liste der Unterdienstleistungen, "Mehr erfahren"-Link
   - Kennzahlen-Sektion: Dunkler Hintergrund (Primary), Fixed Background Attachment, vier animierte Counter (27+ Jahre, 65 Mitarbeiter, 500+ Projekte, 100% Engagement), Counter-Animation von 0 zum Zielwert beim Scroll-Eintritt
   - Referenzen-Showcase: Titel "Ausgewählte Projekte", horizontaler Scroll-Bereich mit 4-6 Projekt-Cards, Platzhalter-Bilder, "Alle Referenzen"-Link
   - "Warum JADA"-Sektion: 4 Cards mit Icons für Fachkompetenz, Flexibilität, Qualität, Pünktlichkeit
   - CTA-Sektion: Volle Breite, Accent-Hintergrund, Text "Ihr Projekt verdient den besten Schutz.", Button "Jetzt Kontakt aufnehmen"
   - Footer: Logo, Navigation in 3 Spalten (Dämmungen, Brandschutz, Kontakt), Kontaktdaten, Copyright

2. **Über uns `/ueber-uns`**: Hero (60vh, Teamfoto-Platzhalter), Geschichte-Timeline mit Scroll-Animation (1998-Heute), Werte-Sektion (6 Cards mit Icons), Team-Sektion (2 Portraits Schwarzweiss→Farbe bei Hover)

3. **Dämmungen `/daemmungen`**: Übersichtsseite mit Hero + 2 grosse Cards (Leitungsdämmungen, Lüftungsdämmungen) abwechselnd Bild links/rechts

4. **Leitungsdämmungen `/daemmungen/leitungen`**: Hero, Einleitungstext über PIR/Glasfaserwolle/Mineralwolle, Vorteile-Grid, CTA

5. **Lüftungsdämmungen `/daemmungen/lueftung`**: Hero, Einleitungstext über Mineralwollprodukte, Vorteile-Grid, CTA

6. **Brandschutz `/brandschutz`**: Übersichtsseite mit Hero + 5 Cards für Unterseiten (Abschottungen, Verkleidungen, Entrauchungen, FireShield, Installationsschacht)

7. **Brandabschottungen `/brandschutz/abschottungen`**: Hero, Text über Mörtel- und Weichabschottungen, technische Details, CTA

8. **Brandschutzverkleidungen `/brandschutz/verkleidungen`**: Hero, Beschreibung der Verkleidungsarbeiten, CTA

9. **Entrauchungen `/brandschutz/entrauchungen`**: Hero, Text über Entrauchungsanlagen für Hochrisiko-Objekte, selbsttragende Kanäle aus Feuerschutzplatten, CTA

10. **AM FireShield® `/brandschutz/fireshield`**: Hero, Produktbeschreibung (werksgefertigt, begehbar, Leichtbeton), Vorteile, CTA

11. **Installationsschacht `/brandschutz/installationsschacht`**: Hero, EI90 Komplettlösung, technische Details, CTA

12. **Referenzen `/referenzen`**: Filter-Leiste (Alle/Dämmungen/Brandschutz) mit AnimatePresence, Masonry-Grid mit 6-8 Platzhalter-Projekten, Hover-Effekte

13. **Kontakt `/kontakt`**: Split-Screen (Formular links, Infos + Karte rechts), Floating Labels, Validierung mit Zod, Kontaktdaten der Firma

### Animationen (ALLE implementieren)
Dies ist der wichtigste Teil – die Seite MUSS absolut fantastisch aussehen:

1. **Smooth Scrolling**: Lenis auf der gesamten Seite initialisieren (smoothness: 0.1, duration: 1.2)

2. **Scroll Reveal**: JEDE Sektion und JEDES Element wird beim Scrollen eingeblendet. Erstelle eine wiederverwendbare `<ScrollReveal>` Komponente mit Framer Motion:
   - Default: translateY(60px) + opacity(0) → translateY(0) + opacity(1)
   - Duration: 0.8s, Easing: [0.16, 1, 0.3, 1]
   - Threshold/viewport amount: 0.2
   - Optional: Stagger-Delay für Kinder (0.15s Versatz)

3. **Parallax**: Hero-Hintergrundbild bewegt sich mit 50% Scroll-Geschwindigkeit. Erstelle `<ParallaxImage>` Komponente.

4. **Feuer-Partikel**: Warme, orangefarbene Partikel (2-6px) steigen im Hero-Bereich auf. Opacity 0.3-0.6. Subtil, nicht aufdringlich. Reagieren leicht auf Mausbewegung.

5. **Text-Reveal**: Hero-Headline wird Wort für Wort eingeblendet (0.1s Delay pro Wort). Erstelle `<AnimatedText>` Komponente.

6. **Counter-Animation**: Zahlen zählen von 0 zum Zielwert (2-2.5s, ease-out). Startet beim Viewport-Eintritt. Monospace-Font. Erstelle `<CounterAnimation>` Komponente.

7. **Horizontal Scroll**: Referenzen-Sektion auf der Homepage scrollt horizontal bei vertikalem Scrollen. Erstelle mit Framer Motion useScroll + useTransform.

8. **Card Hover-Effekte**:
   - Dienstleistungs-Cards: translateY(-8px), Shadow verstärkt, dunkles Overlay steigt von unten auf, "Mehr erfahren"-Text erscheint
   - Referenz-Cards: Bild zoomt (scale 1→1.08), Overlay intensiver, Titel gleitet ein

9. **CTA-Button-Hover**: Scale 1.03, Pfeil-Icon gleitet nach rechts, Glow-Effekt (box-shadow mit Accent-Farbe, 20px blur)

10. **Navigation**:
    - Sticky, transparent auf Hero → solider Hintergrund nach Scroll (mit backdrop-blur)
    - Link-Hover: Unterstrich-Linie wächst von links nach rechts
    - Mobile: Hamburger morpht zu X (SVG Path Animation), Fullscreen-Overlay mit Backdrop-Blur

11. **Bild-Vorhang-Reveal**: Farbige Fläche (#E85D04) schiebt sich von links nach rechts weg und gibt das Bild frei. Dauer: 1s. Auf Dienstleistungs-Unterseiten verwenden.

12. **Scroll-Progress-Bar**: Dünne Linie (3px, Accent-Farbe) am oberen Bildschirmrand zeigt Scroll-Fortschritt.

13. **Floating Labels (Kontaktformular)**: Label schwebt nach oben bei Focus, Linie wechselt Farbe zu Accent.

14. **Team-Portraits**: CSS filter grayscale(100%) → grayscale(0%) bei Hover, mit Transition 0.5s.

15. **Loading-Animation** (optional, niedrige Priorität): JADA-Logo SVG Path wird "gezeichnet" (stroke-dashoffset Animation).

16. **Magnetischer Cursor** (optional, niedrige Priorität): CTA-Buttons bewegen sich leicht in Richtung des Cursors.

17. **Page Transitions** (optional, niedrige Priorität): Dunkle Fläche schiebt sich beim Seitenwechsel über den Bildschirm.

### Platzhalter-Bilder
Verwende für alle Bilder Unsplash-Platzhalter mit passendem Thema:
- Hero: Industrielle Baustelle, dunkel, dramatisch
- Brandschutz: Feuerschutz, Bauarbeiter, Sicherheit
- Dämmungen: Isolierungsmaterial, Rohrleitungen, technische Installationen
- Team: Business-Portraits
- Referenzen: Verschiedene Bauprojekte, Gebäude

Verwende next/image mit Unsplash URLs (z.B. https://images.unsplash.com/photo-XXXXX) oder lokale Platzhalter-Gradients.

### Qualitätsanforderungen
- Vollständig responsive (Mobile-First)
- Alle Texte auf Deutsch (Schweizerdeutsch-Konvention, kein ß, nur ss)
- Sauberer, modularer Code mit wiederverwendbaren Komponenten
- Barrierefreiheit: Semantisches HTML, ARIA-Labels, Fokus-Management
- Performance: Lazy Loading für Bilder, Code Splitting, dynamische Imports für schwere Animationen
- SEO: Metadata API pro Seite, Open Graph Tags
- Kein Dummy-"Lorem ipsum" – verwende die echten Firmentexte aus dem Konzeptdokument

### Blog-System & Admin-Panel

Die Website braucht ein eingebautes Blog-System mit passwortgeschütztem Admin-Panel. ALLES ist im Konzeptdokument (Kapitel 10) im Detail beschrieben. Hier die Zusammenfassung:

**Zusätzliche Dependencies:**
- Prisma (ORM) + @prisma/client
- NextAuth.js v5 (Auth.js) mit Credentials Provider
- bcrypt (Passwort-Hashing)
- TipTap Editor (@tiptap/react, @tiptap/starter-kit, @tiptap/extension-image, @tiptap/extension-link)
- @vercel/blob (Bild-Upload)

**Datenbank (Prisma Schema):**
- User Model (id, email, password gehasht mit bcrypt, name, role ADMIN/EDITOR)
- Post Model (id, title, slug unique, excerpt, content als HTML, coverImage URL, category, author, status DRAFT/PUBLISHED, metaTitle, metaDesc, publishedAt, timestamps)
- Category Model (id, name, slug)

**Öffentlicher Blog:**

14. **Blog-Übersicht `/blog`**: Navigation enthält jetzt auch "Blog"-Link. Grid-Layout mit Blog-Cards (Titelbild, Kategorie-Tag, Titel, Datum, Vorschautext). Pagination. Gleiche Scroll-Reveal-Animationen wie restliche Seite. Cards mit Hover-Effekt (Bild-Zoom + Overlay wie Referenz-Cards).

15. **Blog-Artikel `/blog/[slug]`**: Hero mit Titelbild, Metadaten (Kategorie, Datum, automatisch berechnete Lesezeit), gerenderter HTML-Content aus TipTap mit schöner Typografie, "Verwandte Artikel" am Ende, CTA-Sektion, Social-Share-Buttons (LinkedIn, Email, Link kopieren).

**Admin-Panel (passwortgeschützt):**

16. **Login `/admin/login`**: Minimalistisches Login-Formular (Email + Passwort), JADA-Logo, Fehlermeldung bei falschem Login, Rate-Limiting.

17. **Dashboard `/admin/posts`**: Eigenes Admin-Layout mit Sidebar-Navigation (kein öffentliches Layout). Tabellarische Übersicht aller Artikel. Status-Anzeige (Veröffentlicht/Entwurf). Aktionen: Bearbeiten, Vorschau, Löschen (mit Bestätigungsdialog). Filter nach Status. Button "Neuer Artikel".

18. **Artikel-Editor `/admin/posts/new` und `/admin/posts/[id]/edit`**: Formular mit Titel-Feld, auto-generiertem Slug (manuell überschreibbar), Kategorie-Dropdown, Titelbild-Upload (Drag & Drop auf Vercel Blob), Vorschautext-Feld, TipTap WYSIWYG Rich-Text-Editor mit Toolbar (Bold, Italic, H2, H3, Blockquote, Link, Bild-Einfügen, Listen, Code), aufklappbare SEO-Einstellungen (Meta-Titel, Meta-Beschreibung), drei Buttons: "Entwurf speichern", "Vorschau", "Veröffentlichen". Auto-Save alle 30 Sekunden.

**Authentifizierung:**
- NextAuth.js v5 mit Credentials Provider
- JWT-Sessions
- Middleware die ALLE /admin/* Routen schützt (ausser /admin/login)
- Passwörter mit bcrypt gehasht
- CSRF-Schutz

**API-Routen:**
- POST /api/auth/login, /api/auth/logout
- GET/POST /api/posts (Liste mit Pagination + Filter / Erstellen)
- GET/PUT/DELETE /api/posts/[id]
- POST /api/upload (Bild zu Vercel Blob)
- GET /api/categories

**Admin-Design:**
- Eigenes Layout (admin/layout.tsx), NICHT das öffentliche Layout
- Sidebar links (Desktop), Top-Bar (Mobile)
- Weisser Hintergrund, Anthrazit-Akzente
- Gleiche Schrift (Inter), aber KEINE Framer-Motion-Animationen
- Clean, funktionales Design – es ist ein Arbeitstool

**Prisma Seed Script:**
- Erstelle einen initialen Admin-User (admin@jada.ch / sicheres Passwort)
- Erstelle die 5 Blog-Kategorien: Brandschutz, Dämmungen & Isolierungen, Normen & Vorschriften, Projektberichte, Unternehmen / News
- Erstelle 2 Beispiel-Blogartikel als Demo

### Reihenfolge der Umsetzung
1. Projekt-Setup (Next.js, Tailwind, Fonts, Farben, Prisma, Datenbank)
2. Globale Komponenten (Navigation mit Blog-Link, Footer, ScrollReveal, Lenis)
3. Homepage komplett mit allen Sektionen und Animationen
4. Alle Dienstleistungs-Unterseiten
5. Kontaktformular mit Validierung
6. Blog (öffentlich): Übersicht + Artikelseite
7. Admin-Panel: Auth, Login, Dashboard, Artikel-Editor mit TipTap
8. Bild-Upload-Funktionalität
9. Prisma Seed mit Demo-Daten
10. Feinschliff: Scroll-Progress-Bar, Loading-Animation, Page Transitions

Starte jetzt mit der Umsetzung. Erstelle das komplette Projekt.
```

---

*Ende des Prompts*
