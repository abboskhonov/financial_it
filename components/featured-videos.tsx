import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";

const videos = [
  {
    id: "1",
    title: "Stripe's $85B Valuation: What It Means for Payments",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
    duration: "12:34",
    category: "Payments",
  },
  {
    id: "2",
    title: "Digital Euro Deep Dive with ECB Officials",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=225&fit=crop",
    duration: "18:45",
    category: "Regtech",
  },
  {
    id: "3",
    title: "JPMorgan Onyx: Blockchain at Scale",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop",
    duration: "9:12",
    category: "Banking",
  },
];

export function FeaturedVideos() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          Featured Videos
        </h2>
        <Link
          href="/videos"
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <article key={video.id} className="group">
            <Link href="/videos" className="block">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconPlayerPlay size={20} className="text-foreground ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white px-1.5 py-0.5 font-sans text-[10px] font-medium">
                  {video.duration}
                </span>
              </div>
            </Link>
            <div className="mt-3">
              <Link href="/videos">
                <h3 className="font-heading text-sm font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </Link>
              <div className="mt-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
                {video.category}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
