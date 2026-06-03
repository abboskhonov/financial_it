import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Article } from "@/lib/data/articles";

interface HeroArticleProps {
  article: Article;
}

export function HeroArticle({ article }: HeroArticleProps) {
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
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </ViewTransition>
      </Link>
      <div className="mt-4 text-center">
        <Link
          href={`/article/${article.slug}`}
          transitionTypes={["nav-forward"]}
        >
          <ViewTransition
            name={`article-title-${article.slug}`}
            share="text-morph"
            default="none"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold leading-tight tracking-tight group-hover:text-muted-foreground transition-colors">
              {article.title}
            </h2>
          </ViewTransition>
        </Link>
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
          <span>{article.date}</span>
          <span className="text-border">|</span>
          <span>By {article.author}</span>
        </div>
      </div>
    </article>
  );
}
