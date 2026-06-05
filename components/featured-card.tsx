import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data/articles";

interface FeaturedCardProps {
  article: Article;
}

export function FeaturedCard({ article }: FeaturedCardProps) {
  return (
    <article className="group">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </Link>
      <div className="mt-4 pt-4 border-t border-border">
        <Link href={`/${article.category.toLowerCase()}`} className="inline-block mb-1.5">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent">
            {article.category}
          </span>
        </Link>
        <Link href={`/article/${article.slug}`}>
          <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors">
            {article.title}
          </h3>
        </Link>
        <div className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {article.excerpt}
        </div>
        <div className="mt-3 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
          <span className="uppercase tracking-[0.55px]">{article.date}</span>
          <span className="text-border">|</span>
          <span className="uppercase tracking-[0.55px]">By {article.author}</span>
          <span className="text-border">|</span>
          <span className="uppercase tracking-[0.55px]">{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
