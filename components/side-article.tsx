import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data/articles";

interface SideArticleProps {
  article: Article;
}

export function SideArticle({ article }: SideArticleProps) {
  return (
    <article className="group flex gap-3 items-start py-3 border-b border-border last:border-b-0">
      <div className="flex-1 min-w-0">
        <Link href={`/${article.category.toLowerCase()}`} className="inline-block mb-1">
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[1.4px] text-accent">
            {article.category}
          </span>
        </Link>
        <Link href={`/article/${article.slug}`}>
          <h4 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
            {article.title}
          </h4>
        </Link>
        <div className="mt-1.5 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
          <span className="uppercase tracking-[0.55px]">{article.date}</span>
          <span className="text-border">|</span>
          <span className="uppercase tracking-[0.55px]">{article.readTime}</span>
        </div>
      </div>
      <Link
        href={`/article/${article.slug}`}
        className="relative h-16 w-16 shrink-0 overflow-hidden bg-muted"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="64px"
        />
      </Link>
    </article>
  );
}
