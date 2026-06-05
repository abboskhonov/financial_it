import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { AdMPU } from "@/components/ad-mpu";
import type { Article } from "@/lib/data/articles";

interface CategorySectionProps {
  title: string;
  articles: Article[];
  categorySlug: string;
}

export function CategorySection({ title, articles, categorySlug }: CategorySectionProps) {
  const display = articles.slice(0, 8);

  return (
    <section className="mt-14">
      {/* Header with accent line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-8 bg-accent shrink-0" />
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
        <Link
          href={`/${categorySlug}`}
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      {/* Grid + Ad */}
      <div className="flex gap-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((article) => (
            <article key={article.id} className="group">
              <Link href={`/article/${article.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className="mt-4 pt-3 border-t border-border">
                <Link href={`/${article.category.toLowerCase()}`} className="inline-block mb-1">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent">
                    {article.category}
                  </span>
                </Link>
                <Link href={`/article/${article.slug}`}>
                  <h3 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-2 font-sans text-[10px] font-medium text-muted-foreground">
                  <span className="uppercase tracking-[0.55px]">{article.date}</span>
                  <span className="text-border mx-1">|</span>
                  <span className="uppercase tracking-[0.55px]">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:block shrink-0">
          <AdMPU />
        </div>
      </div>
    </section>
  );
}
