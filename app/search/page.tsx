"use client";

import { useState, useDeferredValue, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconSearch, IconX } from "@tabler/icons-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/directional-transition";
import { articles } from "@/lib/data/articles";
import { SITE_NAME } from "@/lib/config";

/* ─── Category sections for the sitemap grid ─── */
const categorySections = [
  {
    title: "Banking",
    href: "/banking",
    links: [
      { label: "Digital Banking", href: "/banking" },
      { label: "Open Banking", href: "/banking" },
      { label: "Neobanks", href: "/banking" },
      { label: "Core Systems", href: "/banking" },
      { label: "Commercial", href: "/banking" },
    ],
  },
  {
    title: "Payments",
    href: "/payments",
    links: [
      { label: "Real-time", href: "/payments" },
      { label: "Cross-border", href: "/payments" },
      { label: "Digital Wallets", href: "/payments" },
      { label: "B2B", href: "/payments" },
      { label: "FedNow", href: "/payments" },
    ],
  },
  {
    title: "Fintech",
    href: "/fintech",
    links: [
      { label: "Startups", href: "/fintech" },
      { label: "Funding", href: "/fintech" },
      { label: "M&A", href: "/fintech" },
      { label: "Embedded Finance", href: "/fintech" },
      { label: "Unicorns", href: "/fintech" },
    ],
  },
  {
    title: "Regtech",
    href: "/regtech",
    links: [
      { label: "Compliance", href: "/regtech" },
      { label: "AML", href: "/regtech" },
      { label: "KYC", href: "/regtech" },
      { label: "ESG", href: "/regtech" },
      { label: "Reporting", href: "/regtech" },
    ],
  },
  {
    title: "Crypto",
    href: "/crypto",
    links: [
      { label: "DeFi", href: "/crypto" },
      { label: "Stablecoins", href: "/crypto" },
      { label: "CBDC", href: "/crypto" },
      { label: "Blockchain", href: "/crypto" },
      { label: "ETFs", href: "/crypto" },
    ],
  },
  {
    title: "Insurance",
    href: "/insurance",
    links: [
      { label: "Insurtech", href: "/insurance" },
      { label: "Digital", href: "/insurance" },
      { label: "Claims", href: "/insurance" },
      { label: "Underwriting", href: "/insurance" },
      { label: "Life", href: "/insurance" },
    ],
  },
  {
    title: "Lending",
    href: "/lending",
    links: [
      { label: "P2P", href: "/lending" },
      { label: "BNPL", href: "/lending" },
      { label: "Mortgages", href: "/lending" },
      { label: "SME", href: "/lending" },
      { label: "Credit", href: "/lending" },
    ],
  },
  {
    title: "Intelligence",
    href: "/intelligence",
    links: [
      { label: "Reports", href: "/reports" },
      { label: "Analysis", href: "/analysis" },
      { label: "Market Data", href: "/market-data" },
    ],
  },
  {
    title: "Multimedia",
    href: "/multimedia",
    links: [
      { label: "Videos", href: "/videos" },
      { label: "Podcasts", href: "/podcasts" },
      { label: "Webinars", href: "/webinars" },
    ],
  },
  {
    title: "Solutions",
    href: "/solution-directories",
    links: [
      { label: "Providers", href: "/providers" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  {
    title: "Events",
    href: "/events",
    links: [
      { label: "Conferences", href: "/events" },
      { label: "Summits", href: "/events" },
      { label: "Awards", href: "/events" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    links: [
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "Guides", href: "/guides" },
      { label: "Magazine", href: "/magazine" },
    ],
  },
  {
    title: "Markets",
    href: "/market-data",
    links: [
      { label: "Equities", href: "/market-data" },
      { label: "FX", href: "/market-data" },
      { label: "Commodities", href: "/market-data" },
      { label: "Bonds", href: "/market-data" },
    ],
  },
  {
    title: "Technology",
    href: "/technology",
    links: [
      { label: "AI", href: "/technology" },
      { label: "Cloud", href: "/technology" },
      { label: "Cybersecurity", href: "/technology" },
      { label: "APIs", href: "/technology" },
    ],
  },
];

const regionLinks = [
  { label: "US", href: "/" },
  { label: "Europe", href: "/" },
  { label: "Asia-Pacific", href: "/" },
  { label: "Middle East", href: "/" },
  { label: "Africa", href: "/" },
  { label: "Latin America", href: "/" },
];

/* ─── Search Results ─── */
function SearchResults({ query }: { query: string }) {
  const results = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.author.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (results.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground text-sm">
          {query.trim()
            ? `No results found for "${query}"`
            : "Start typing to search articles"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {results.map((article) => (
        <article key={article.id} className="group">
          <Link href={`/article/${article.slug}`} className="block">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-3">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-base font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {article.date} · {article.category}
          </div>
        </article>
      ))}
    </div>
  );
}

/* ─── Sitemap Grid ─── */
function SitemapGrid() {
  return (
    <>
      {/* Regions row */}
      <div className="flex items-center gap-6 py-6 border-b border-border">
        <span className="font-heading text-sm font-semibold">Regions</span>
        <div className="flex items-center gap-6">
          {regionLinks.map((region) => (
            <Link
              key={region.label}
              href={region.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {region.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-6 gap-y-8 py-8">
        {categorySections.map((section) => (
          <div key={section.title}>
            <Link
              href={section.href}
              className="block font-heading text-sm font-semibold mb-3 hover:text-muted-foreground transition-colors"
            >
              {section.title}
            </Link>
            <ul className="flex flex-col gap-1.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── Main Search Content ─── */
function SearchContent() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const hasQuery = search.trim().length > 0;

  // Read initial query from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setSearch(q);
  }, []);

  // Update URL when search changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (search.trim()) {
      url.searchParams.set("q", search.trim());
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState({}, "", url);
  }, [search]);

  return (
    <>
      {/* Search bar */}
      <div className="mt-6">
        <div className="relative flex items-center border border-border rounded-lg px-4 py-3 bg-background">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${SITE_NAME}...`}
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          {search ? (
            <button
              onClick={() => setSearch("")}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <IconX size={18} stroke={1.5} />
            </button>
          ) : (
            <IconSearch
              size={20}
              stroke={1.5}
              className="text-muted-foreground shrink-0"
            />
          )}
        </div>
      </div>

      {/* Results or sitemap */}
      <div className="mt-6">
        {hasQuery ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wider">
                Results
              </h2>
              <span className="text-sm text-muted-foreground">
                {articles.filter(
                  (a) =>
                    a.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
                    a.excerpt.toLowerCase().includes(deferredSearch.toLowerCase()) ||
                    a.category.toLowerCase().includes(deferredSearch.toLowerCase()) ||
                    a.author.toLowerCase().includes(deferredSearch.toLowerCase())
                ).length}{" "}
                found
              </span>
            </div>
            <SearchResults query={deferredSearch} />
          </div>
        ) : (
          <SitemapGrid />
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-heading text-xl italic tracking-tight"
            >
              {SITE_NAME}
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              CLOSE
            </Link>
          </div>

          <SearchContent />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
