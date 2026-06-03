"use client";

import { useState, useDeferredValue, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import { IconSearch } from "@tabler/icons-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles } from "@/lib/data/articles";

function SearchResults({ query }: { query: string }) {
  const results = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.author.toLowerCase().includes(query.toLowerCase())
      )
    : articles.slice(0, 8);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {results.map((article) => (
        <article key={article.id} className="group border-b border-border pb-6">
          <Link
            href={`/article/${article.slug}`}
            transitionTypes={["nav-forward"]}
            className="block"
          >
            <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
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

function SearchContent() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  // Read initial query from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setSearch(q);
  }, []);

  return (
    <>
      <div className="mt-6">
        <div className="flex items-center gap-3 border border-foreground rounded-md px-4 py-3 bg-background">
          <IconSearch
            size={20}
            stroke={1.5}
            className="text-muted-foreground shrink-0"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          <button
            onClick={() => {
              const url = new URL(window.location.href);
              if (search.trim()) {
                url.searchParams.set("q", search.trim());
              } else {
                url.searchParams.delete("q");
              }
              window.history.replaceState({}, "", url);
            }}
            className="rounded bg-muted px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted-foreground/20 transition-colors"
          >
            GO
          </button>
        </div>
      </div>

      <div className="mt-10">
        <ViewTransition key={deferredSearch} default="none">
          <SearchResults query={deferredSearch} />
        </ViewTransition>
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <ViewTransition enter="slide-up" default="none">
        <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8 pt-[110px] md:pt-[130px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="font-heading text-xl italic"
            >
              The Hawaii
            </Link>
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              CLOSE
            </Link>
          </div>

          <SearchContent />
        </main>
      </ViewTransition>
      <Footer />
    </>
  );
}
