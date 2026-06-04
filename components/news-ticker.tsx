"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const headlines = [
  { text: "Stripe Raises $12 Billion at $85 Billion Valuation", href: "/article/stripe-raises-12b" },
  { text: "EU Regulators Finalize Digital Euro Framework", href: "/article/eu-digital-euro-framework" },
  { text: "JPMorgan Expands Blockchain Settlement to 50 Currencies", href: "/article/jpmorgan-blockchain-50-currencies" },
  { text: "FedNow Instant Payment Platform Hits 500 Bank Milestone", href: "/article/fednow-500-bank-milestone" },
  { text: "BlackRock Bitcoin ETF Surpasses $50 Billion in Assets", href: "/article/blackrock-bitcoin-etf-inflows" },
];

export function NewsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Duplicate content for seamless loop
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;
  }, []);

  return (
    <div className="bg-accent text-accent-foreground overflow-hidden border-b border-border">
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-2 bg-foreground/10 font-sans text-[10px] font-semibold uppercase tracking-[1.4px]">
          Breaking
        </div>
        <div className="overflow-hidden flex-1">
          <div
            ref={trackRef}
            className="flex whitespace-nowrap animate-marquee"
            style={{ animationDuration: "40s" }}
          >
            {headlines.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="inline-flex items-center px-6 py-2 font-sans text-[11px] font-medium hover:underline"
              >
                <span className="mr-2">●</span>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
