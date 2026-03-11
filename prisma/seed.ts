import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // 1. Create Admin User
  const password = await bcrypt.hash('jada2026', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@jada.ch' },
    update: {},
    create: {
      email: 'admin@jada.ch',
      name: 'JADA Admin',
      password,
      role: 'ADMIN',
    },
  })
  console.log(`Admin user created: ${admin.email}`)

  // 2. Create Categories
  const catDaemmungen = await prisma.category.upsert({
    where: { slug: 'daemmungen' },
    update: {},
    create: { name: 'Dämmungen', slug: 'daemmungen' },
  })

  const catBrandschutz = await prisma.category.upsert({
    where: { slug: 'brandschutz' },
    update: {},
    create: { name: 'Brandschutz', slug: 'brandschutz' },
  })

  console.log(`Categories created.`)

  // 3. Create sample posts
  const post1 = await prisma.post.upsert({
    where: { slug: 'pir-vs-mineralwolle-leitungsdaemmung' },
    update: {},
    create: {
      title: 'PIR vs. Mineralwolle: Welche Leitungsdämmung ist die richtige?',
      slug: 'pir-vs-mineralwolle-leitungsdaemmung',
      excerpt: 'Eine detaillierte Gegenüberstellung von Polyisocyanurat (PIR) und Mineralwolle in der modernen Rohr- und Leitungsdämmung. Beide Materialien haben ihre spezifischen Stärken.',
      content: '<h2>Die Wahl des richtigen Dämmmaterials in der Haustechnik</h2><p>Die Wahl der richtigen Isolierung ist entscheidend für Energieeffizienz und Brandschutz. Bei JADA setzen wir primär auf zwei Materialien: PIR (Polyisocyanurat) und Mineralwolle.</p><h3>Vorteile von PIR-Dämmungen</h3><ul><li>Hervorragende Dämmwerte (sehr niedrige Wärmeleitfähigkeit)</li><li>Geschlossenzellige Struktur (nimmt keine Feuchtigkeit auf)</li><li>Hohe Druckfestigkeit</li><li>Platzsparend durch geringe Dämmschichtdicke</li></ul><h3>Wo Mineralwolle punktet</h3><ul><li>Absolut nicht brennbar (Brandschutzklasse A1)</li><li>Hervorragender Schallschutz</li><li>Flexibel und leicht anpassbar</li><li>Beständig gegen sehr hohe Temperaturen</li></ul><p>Die Entscheidung hängt letztlich von den spezifischen Anforderungen Ihres Projekts ab: Temperaturbereich, Brandschutzvorschriften und Platzverhältnisse spielen die Hauptrollen.</p>',
      coverImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
      status: 'PUBLISHED',
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      categoryId: catDaemmungen.id,
      authorId: admin.id,
    },
  })

  const post2 = await prisma.post.upsert({
    where: { slug: 'entrauchung-hochrisiko-gebaeude' },
    update: {},
    create: {
      title: 'Lebensretter Entrauchungsanlagen: Warum selbsttragende Kanäle unverzichtbar sind',
      slug: 'entrauchung-hochrisiko-gebaeude',
      excerpt: 'In Einkaufszentren, Flughäfen oder Hotels retten Entrauchungsanlagen im Ernstfall Leben. Wir erklären, warum selbsttragende Feuerschutzkanäle bei Hochrisiko-Objekten der Goldstandard sind.',
      content: '<h2>Was passiert im Brandfall ohne Entrauchung?</h2><p>Die grösste Gefahr bei einem Brand geht nicht vom Feuer selbst aus, sondern von den toxischen Rauchgasen. Wenige Atemzüge reichen aus, um eine Rauchgasvergiftung zu verursachen. Zudem behindert der dichte Rauch die Orientierung von Flüchtenden und blockiert die Arbeit der Rettungskräfte.</p><h3>Der Vorteil selbsttragender Kanäle</h3><p>Konventionelle Blechkanäle, selbst wenn sie stark gedämmt sind, verformen sich unter massiver Hitzeeinwirkung. Verformte Kanäle können ihre Funktion verlieren – im schlimmsten Fall brechen sie zusammen und die Entrauchung fällt aus.</p><p>JADA setzt bei Hochrisikobauten auf <strong>selbsttragende Entrauchungskanäle aus speziellen Feuerschutzplatten</strong>. Diese bieten entscheidende Vorteile:</p><ul><li>Massive Widerstandsfähigkeit auch bei extremen Temperaturen (>1000°C)</li><li>Kein Stahlblechkanal als Trägermedium nötig</li><li>Erhalt des Querschnitts und damit der vollen Absaugleistung garantiert</li><li>Lange Feuerwiderstandsdauern (bis EI 120)</li></ul><p>Investieren Sie in zertifizierte Sicherheit – es geht um Menschenleben.</p>',
      coverImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80',
      status: 'PUBLISHED',
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      categoryId: catBrandschutz.id,
      authorId: admin.id,
    },
  })

  console.log(`Created 2 sample posts.`)

  // 4. Create sample projects (Referenzen)
  const dummyProjects = [
    { title: "Kantonsspital Winterthur", catId: catBrandschutz.id, image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80", desc: "Umfassende Brandabschottungen im Neubau" },
    { title: "Bürogebäude Zürich West", catId: catDaemmungen.id, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", desc: "Leitungsdämmungen over 15 Etagen" },
    { title: "Einkaufszentrum Glatt", catId: catBrandschutz.id, image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", desc: "Entrauchungsanlage und Brandschutz" },
    { title: "Hotel Schweizerhof", catId: catBrandschutz.id, image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80", desc: "FireShield® Installationsschächte" },
    { title: "Wohnüberbauung Basel", catId: catDaemmungen.id, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", desc: "Lüftungsdämmungen mit Mineralwolle" },
    { title: "Industriehalle Aargau", catId: catBrandschutz.id, image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80", desc: "Brandschutzverkleidungen Stahlbau" },
    { title: "Pharmafabrik Schaffhausen", catId: catDaemmungen.id, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", desc: "Kälteisolierungen für Reinräume" },
    { title: "Tiefgarage Bern", catId: catBrandschutz.id, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80", desc: "Entrauchungskanäle und Abschottungen" },
  ];

  for (const p of dummyProjects) {
    await prisma.project.create({
      data: {
        title: p.title,
        categoryId: p.catId,
        image: p.image,
        desc: p.desc,
      }
    });
  }
  console.log(`Created ${dummyProjects.length} sample projects.`)
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
