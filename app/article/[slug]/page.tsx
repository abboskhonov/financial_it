import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SideArticle } from "@/components/side-article";
import { DirectionalTransition } from "@/components/directional-transition";
import {
  getArticleBySlug,
  getSideArticles,
  articles,
} from "@/lib/data/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const side = getSideArticles().filter((a) => a.id !== article.id).slice(0, 5);

  return (
    <>
      <Navbar />
      <DirectionalTransition>
        <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8 pt-[110px] md:pt-[130px]">
          <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
            {/* Main article content */}
            <div className="md:col-span-8">
              {/* Back button */}
              <div className="mb-3">
                <Link
                  href="/"
                  transitionTypes={["nav-back"]}
                  className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </Link>
              </div>

              {/* Breadcrumb */}
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Link
                  href="/"
                  transitionTypes={["nav-back"]}
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href={`/${article.category.toLowerCase()}`}
                  className="hover:text-foreground transition-colors"
                >
                  {article.category}
                </Link>
              </div>

              {/* Meta */}
              <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span>{article.date}</span>
                <span className="text-border">|</span>
                <span>By {article.author}</span>
                <span className="text-border">|</span>
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <ViewTransition
                name={`article-title-${article.slug}`}
                share="text-morph"
                default="none"
              >
                <h1 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-6">
                  {article.title}
                </h1>
              </ViewTransition>

              {/* Hero image */}
              <ViewTransition
                name={`article-image-${article.slug}`}
                share="morph"
                default="none"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </ViewTransition>

              {/* Body */}
              <div className="prose prose-lg max-w-none">
                {article.body.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-foreground mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar — more stories */}
            <aside className="md:col-span-4">
              <div className="sticky top-[110px] md:top-[130px]">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-border">
                  More Stories
                </h3>
                <div className="flex flex-col gap-5">
                  {side.map((a) => (
                    <SideArticle key={a.id} article={a} />
                  ))}
                </div>
              </div>
            </aside>
          </article>
        </main>
      </DirectionalTransition>
      <Footer />
    </>
  );
}
