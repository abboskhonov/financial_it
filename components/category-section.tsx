import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import type { Article } from "@/lib/data/articles";

interface CategorySectionProps {
  title: string;
  articles: Article[];
  categorySlug: string;
}

export function CategorySection({ title, articles, categorySlug }: CategorySectionProps) {
  const display = articles.slice(0, 8);

  return (
    <section className="mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          {title}
        </h2>
        <Link
          href={`/${categorySlug}`}
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {display.map((article) => (
          <article key={article.id} className="group">
            <Link
              href={`/article/${article.slug}`}
              transitionTypes={["nav-forward"]}
              className="block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Link>
            <div className="mt-3">
              <Link
                href={`/article/${article.slug}`}
                transitionTypes={["nav-forward"]}
              >
                <h3 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>
              <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
                {article.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
