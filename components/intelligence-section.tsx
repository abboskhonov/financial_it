import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconFileText, IconChartBar } from "@tabler/icons-react";

const posts = [
  {
    id: "1",
    title: "Q2 2025 Global Payments Market Report",
    excerpt: "Comprehensive analysis of cross-border payment volumes, real-time payment adoption, and digital wallet growth across 40 markets.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    type: "Report",
    date: "June 1, 2025",
  },
  {
    id: "2",
    title: "The State of Central Bank Digital Currencies 2025",
    excerpt: "Deep dive into CBDC progress across 130 countries, from pilot programs to full-scale deployments.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
    type: "Analysis",
    date: "May 28, 2025",
  },
  {
    id: "3",
    title: "Neobank Profitability Benchmark Study",
    excerpt: "Unit economics analysis of 25 leading neobanks, revealing which models are sustainable and which are not.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    type: "Report",
    date: "May 20, 2025",
  },
  {
    id: "4",
    title: "Open Banking API Performance Rankings",
    excerpt: "Technical benchmarking of open banking APIs from 50 major financial institutions across latency, reliability, and documentation.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    type: "Analysis",
    date: "May 18, 2025",
  },
];

const typeIcon = {
  Report: IconFileText,
  Analysis: IconChartBar,
};

export function IntelligenceSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          Intelligence
        </h2>
        <Link
          href="/intelligence"
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => {
          const Icon = typeIcon[post.type as keyof typeof typeIcon] || IconFileText;
          return (
            <article key={post.id} className="group">
              <Link href="/intelligence" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Link>
              <div className="mt-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon size={14} stroke={1.5} className="text-muted-foreground" />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.55px] text-muted-foreground">
                    {post.type}
                  </span>
                </div>
                <Link href="/intelligence">
                  <h3 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
                  {post.date}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
