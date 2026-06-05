import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data/articles";

interface TopStoriesProps {
  articles: Article[];
}

export function TopStories({ articles }: TopStoriesProps) {
  const display = articles.slice(0, 4);

  return (
    <div className="flex flex-col gap-0">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.55px] pb-2 border-b border-border mb-4">
        Top Stories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {display.map((article) => (
          <article key={article.id} className="group">
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
              <div className="mt-3 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
                <span className="uppercase tracking-[0.55px]">{article.date}</span>
                <span className="text-border">|</span>
                <span className="uppercase tracking-[0.55px]">By {article.author}</span>
                <span className="text-border">|</span>
                <span className="uppercase tracking-[0.55px]">{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
