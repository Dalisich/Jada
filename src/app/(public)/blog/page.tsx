export const dynamic = "force-dynamic";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import CTASection from "@/components/sections/CTASection";
import ServiceHero from "@/components/sections/ServiceHero";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | JADA Isolierungen GmbH",
  description: "Wissen aus der Praxis rund um Isolierungen und Brandschutz von JADA Isolierungen GmbH.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    include: { category: true, author: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <ServiceHero
        title="JADA Blog"
        description="Aktuelle Erkenntnisse, Projektberichte und Fachwissen rund um Isolierungen und Brandschutz in der Schweiz."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="section-padding bg-surface-white relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          {posts.length === 0 ? (
            <div className="text-center py-40 glass-panel rounded-[3rem] border-dashed border-2">
              <p className="text-text-secondary text-lg">Noch keine Artikel vorhanden. Schauen Sie bald wieder vorbei.</p>
            </div>
          ) : (
            <ScrollReveal staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post: any) => (
                <ScrollRevealItem key={post.id} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-surface-white rounded-[2.5rem] overflow-hidden hover-lift shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] border border-gray-100"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={post.coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-surface-white/95 backdrop-blur-md text-primary text-[10px] font-black rounded-full shadow-sm tracking-[0.2em] uppercase">
                          {post.category?.name || "Allgemein"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-6 text-[10px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-6">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-secondary" />
                          {new Date(post.publishedAt || post.createdAt).toLocaleDateString("de-CH")}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-secondary" />
                          {Math.max(1, Math.ceil(post.content.split(" ").length / 200))} MIN.
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-2 tracking-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-text-secondary font-light leading-relaxed line-clamp-3 mb-10 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 font-semibold text-primary group-hover:text-secondary transition-colors text-sm">
                        <span className="relative">
                          Weiterlesen
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
