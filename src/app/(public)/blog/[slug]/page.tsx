export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButton from "@/components/blog/ShareButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: (post.metaTitle || post.title) + " | JADA Blog",
    description: post.metaDesc || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { category: true, author: true },
  });

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  const related = await prisma.post.findMany({
    where: {
      categoryId: post.categoryId,
      id: { not: post.id },
      status: "PUBLISHED",
    },
    take: 2,
    orderBy: { publishedAt: "desc" },
  });

  const readTime = Math.max(1, Math.ceil(post.content.split(" ").length / 200));
  const dateStr = new Date(post.publishedAt || post.createdAt).toLocaleDateString("de-CH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="bg-surface-white pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <ScrollReveal>
             <Link href="/blog" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-secondary transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Zurück zum Blog
             </Link>
             
             <div className="flex flex-wrap items-center gap-6 mb-8 group">
                <span className="px-5 py-2 bg-primary text-surface-white text-[10px] font-black rounded-full tracking-[0.2em] uppercase shadow-lg shadow-primary/10">
                   {post.category?.name || "Allgemein"}
                </span>
                <div className="flex items-center gap-6 text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                   <span className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-secondary" />
                       {dateStr}
                   </span>
                   <span className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-secondary" />
                       {readTime} Min Lesezeit
                   </span>
                </div>
             </div>

             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-12 tracking-tight leading-[1.05]">
                {post.title}
             </h1>

             {/* Author badge */}
             <div className="flex items-center gap-4 mb-20 p-4 rounded-3xl bg-surface-warm/50 border border-gray-100 inline-flex">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-surface-white font-bold">
                   {post.author?.name ? post.author.name.charAt(0) : "J"}
                </div>
                <div>
                   <p className="text-[10px] text-text-secondary font-black uppercase tracking-widest">Autor</p>
                   <p className="font-bold text-primary tracking-tight">{post.author?.name || "JADA Team"}</p>
                </div>
             </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="w-full max-w-[1200px] mx-auto px-6 mb-24">
           <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={post.coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
           </div>
        </ScrollReveal>

        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
             <div 
               className="prose prose-jada prose-lg max-w-none text-text-secondary leading-relaxed font-light"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />

             <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-center justify-between">
               <p className="text-text-secondary font-medium tracking-widest uppercase text-xs">
                 Diesen Artikel teilen
               </p>
                <div className="flex gap-4">
                  <ShareButton />
                </div>
             </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-24 bg-surface-warm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-bold text-primary mb-12 tracking-tight">Verwandte Fachartikel</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {related.map((relPost: any, i: number) => (
                <Link
                  key={`rel-${i}`}
                  href={`/blog/${relPost.slug}`}
                  className="group flex flex-col md:flex-row bg-surface-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(45,90,158,0.08)] hover-lift transition-all border border-gray-100 h-full"
                >
                  <div className="relative w-full md:w-2/5 min-h-[200px]">
                    <Image
                      src={relPost.coverImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"}
                      alt={relPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col">
                    <span className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4">
                       {relPost.category?.name}
                    </span>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-6 tracking-tight flex-grow">
                      {relPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      Lesen
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
