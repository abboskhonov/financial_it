import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

export function MagazineSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
          Magazine
        </h2>
        <Link
          href="/magazine"
          className="flex items-center gap-1 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <IconArrowRight size={14} stroke={1.5} />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 bg-muted/50 border border-border p-6">
        <Link href="/magazine" className="block shrink-0">
          <div className="relative w-[180px] h-[260px] overflow-hidden bg-muted shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=360&h=520&fit=crop"
              alt="Financial IT Summer Edition 2026"
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
        </Link>
        <div className="text-center sm:text-left">
          <span className="inline-block bg-accent/10 text-accent px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.55px] mb-3">
            Latest Issue
          </span>
          <h3 className="font-heading text-xl font-semibold tracking-tight mb-2">
            Financial IT Summer Edition 2026
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
            Featuring in-depth analysis of AI in banking, the future of cross-border payments, and exclusive interviews with the CEOs of Stripe, Revolut, and JPMorgan.
          </p>
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 bg-accent px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.55px] text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Read Issue
            <IconArrowRight size={14} stroke={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
