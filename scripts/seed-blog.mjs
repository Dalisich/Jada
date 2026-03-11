import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding blog posts...')

  // 1. Ensure a user exists
  const user = await prisma.user.findFirst()
  if (!user) {
    console.error('No user found. Please log in once or create a user.')
    return
  }

  // 2. Ensure categories exist
  const categories = [
    { name: 'Brandschutz', slug: 'brandschutz' },
    { name: 'Wärmedämmung', slug: 'waermedaemmung' },
    { name: 'Ratgeber', slug: 'ratgeber' }
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat
    })
  }

  const catBrandschutz = await prisma.category.findUnique({ where: { slug: 'brandschutz' } })
  const catWaerme = await prisma.category.findUnique({ where: { slug: 'waermedaemmung' } })

  // 3. Create Posts
  const posts = [
    {
      title: 'Moderne Brandschutzsysteme: Sicherheit für Ihr Gebäude',
      slug: 'moderne-brandschutzsysteme-sicherheit',
      excerpt: 'Erfahren Sie alles über die neuesten Standards im baulichen Brandschutz und wie JADA Isolierungen für maximale Sicherheit sorgt.',
      content: `
        <h2>Brandschutz ist Lebensrettung</h2>
        <p>Im modernen Industriebau ist der bauliche Brandschutz das Fundament jeder Sicherheitsstrategie. JADA Isolierungen setzt auf modernste Materialien und zertifizierte Systeme, um die Ausbreitung von Feuer und Rauch zuverlässig zu verhindern.</p>
        <h3>Worauf es ankommt</h3>
        <ul>
          <li><strong>Abschottungen:</strong> Fachgerechte Brandabschottungen in Wänden und Decken.</li>
          <li><strong>Verkleidungen:</strong> Schutz von tragenden Stahlkonstruktionen.</li>
          <li><strong>Dokumentation:</strong> Jede Installation wird präzise dokumentiert für Ihre Abnahme.</li>
        </ul>
        <p>Mit über 27 Jahren Erfahrung wissen wir genau, worauf die Behörden achten und wie wir Ihr Projekt optimal schützen.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1582266255745-9e5094266c7b?w=1200&q=80',
      status: 'PUBLISHED',
      categoryId: catBrandschutz.id,
      authorId: user.id,
      publishedAt: new Date(),
    },
    {
      title: 'Energiekosten senken durch effiziente Wärmedämmung',
      slug: 'energiekosten-senken-waermedaemmung',
      excerpt: 'Warum eine hochwertige Dämmung die beste Investition in Ihre Immobilie ist. JADA zeigt Ihnen die Einsparpotenziale.',
      content: `
        <h2>Nachhaltigkeit trifft Effizienz</h2>
        <p>Gerade in der heutigen Zeit sind steigende Energiekosten ein zentrales Thema für jeden Gebäudebesitzer. Eine professionelle Wärmedämmung von JADA Isolierungen reduziert den Wärmeverlust massiv und sorgt für ein angenehmes Raumklima – im Winter wie im Sommer.</p>
        <h3>Vorteile einer Profi-Dämmung</h3>
        <p>Eine gute Dämmung amortisiert sich oft schon nach wenigen Jahren durch die eingesparten Heizkosten. Zudem leisten Sie einen wichtigen Beitrag zum Umweltschutz.</p>
        <blockquote>"Qualität bei der Dämmung bedeutet Komfort für Jahrzehnte."</blockquote>
        <p>Wir verwenden ausschließlich hochwertige Dämmstoffe, die langlebig und ökologisch unbedenklich sind.</p>
      `,
      coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      status: 'PUBLISHED',
      categoryId: catWaerme.id,
      authorId: user.id,
      publishedAt: new Date(),
    }
  ]

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    })
  }

  console.log('Seeding finished successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
