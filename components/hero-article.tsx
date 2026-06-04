import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data/articles";

interface HeroArticleProps {
  article: Article;
}

export function HeroArticle({ article }: HeroArticleProps) {
  return (
    <article className="group">
      {/* Top accent line */}
      <div className="h-px w-12 bg-accent mb-4" />
      
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted" style={{ viewTransitionName: "none" }}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </Link>
      
      <div className="mt-5 text-center">
        <Link href={`/${article.category.toLowerCase()}`} className="inline-block">
          <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent mb-2 border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
            {article.category}
          </span>
        </Link>
        
        <Link href={`/article/${article.slug}`}>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold leading-tight tracking-tight group-hover:text-muted-foreground transition-colors">
            {article.title}
          </h2>
        </Link>
        
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto">
          {article.excerpt}
        </p>
        
        <div className="mt-4 flex items-center justify-center gap-3 font-sans text-[11px] font-medium text-muted-foreground">
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
