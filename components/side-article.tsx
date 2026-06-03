import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Article } from "@/lib/data/articles";

interface SideArticleProps {
  article: Article;
}

export function SideArticle({ article }: SideArticleProps) {
  return (
    <article className="group flex gap-3">
      <div className="flex-1 min-w-0">
        <Link
          href={`/article/${article.slug}`}
          transitionTypes={["nav-forward"]}
        >
          <ViewTransition
            name={`article-title-${article.slug}`}
            share="text-morph"
            default="none"
          >
            <h4 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
              {article.title}
            </h4>
          </ViewTransition>
        </Link>
        <div className="mt-1.5 flex items-center gap-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
          <span>By {article.author}</span>
        </div>
      </div>
      <Link
        href={`/article/${article.slug}`}
        transitionTypes={["nav-forward"]}
        className="relative h-14 w-14 shrink-0 overflow-hidden bg-muted"
      >
        <ViewTransition
          name={`article-image-${article.slug}`}
          share="morph"
          default="none"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="56px"
          />
        </ViewTransition>
      </Link>
    </article>
  );
}
