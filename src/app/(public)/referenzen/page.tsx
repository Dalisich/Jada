export const dynamic = "force-dynamic";
import { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import CTASection from "@/components/sections/CTASection";
import ReferenzenClient from "./ReferenzenClient";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Ausgewählte Projekte aus über 27 Jahren Erfahrung in Isolierungen und Brandschutz.",
};

export default async function ReferenzenPage() {
  const [projects, categories] = await Promise.all([
    prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true },
    }),
    prisma.category.findMany({
      where: { projects: { some: {} } }, // Only show categories that have projects
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <>
      <ServiceHero
        title="Referenzen"
        description="Ausgewählte Projekte aus über 27 Jahren Erfahrung in Isolierungen und Brandschutz."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Referenzen", href: "/referenzen" },
        ]}
      />
      
      <ReferenzenClient 
        initialProjects={projects as any} 
        dynamicCategories={categories.map((c: { name: string }) => c.name)} 
      />

      <CTASection />
    </>
  );
}
