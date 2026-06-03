import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Article } from "@/lib/data/articles";

interface FeaturedCardProps {
  article: Article;
}

export function FeaturedCard({ article }: FeaturedCardProps) {
  return (
    <article className="group">
      <Link
        href={`/article/${article.slug}`}
        transitionTypes={["nav-forward"]}
        className="block"
      >
        <ViewTransition
          name={`article-image-${article.slug}`}
          share="morph"
          default="none"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </ViewTransition>
      </Link>
      <div className="mt-3">
        <Link
          href={`/article/${article.slug}`}
          transitionTypes={["nav-forward"]}
        >
          <ViewTransition
            name={`article-title-${article.slug}`}
            share="text-morph"
            default="none"
          >
            <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors">
              {article.title}
            </h3>
          </ViewTransition>
        </Link>
        <div className="mt-2 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
          <span>{article.date}</span>
          <span className="text-border">|</span>
          <Link
            href={`/${article.category.toLowerCase()}`}
            className="hover:text-foreground transition-colors"
          >
            {article.category}
          </Link>
        </div>
      </div>
    </article>
  );
}
