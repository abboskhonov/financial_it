import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data/articles";

interface TopStoriesProps {
  articles: Article[];
}

export function TopStories({ articles }: TopStoriesProps) {
  return (
    <div className="flex flex-col gap-0">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.55px] pb-2 border-b border-border mb-4">
        Top Stories
      </h3>
      {articles.map((article) => (
        <article
          key={article.id}
          className="group flex gap-4 py-4 border-b border-border last:border-b-0"
        >
          <Link
            href={`/article/${article.slug}`}
            className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden bg-muted"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </Link>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <Link href={`/article/${article.slug}`}>
              <h4 className="font-heading text-base font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                {article.title}
              </h4>
            </Link>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Link
                href={`/${article.category.toLowerCase()}`}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-border">|</span>
              <span>{article.date}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
