"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { AdLeaderboard } from "@/components/ad-leaderboard";
import { AdMPU } from "@/components/ad-mpu";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function StyleGuidePage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12">
        <h1 className="font-heading text-3xl font-semibold tracking-tight mb-2">
          Financial IT — Style Guide
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-12">
          A concise reference for typography, color, spacing, buttons, and key components.
        </p>

        {/* ─── 1. Typography ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Typography
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
                Font Families
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Sans-serif (UI / Navigation)</p>
                  <p className="font-sans text-sm">Inter, Helvetica, Arial, sans-serif</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Serif (Headings)</p>
                  <p className="font-heading text-sm italic">Libre Baskerville, Georgia, Times, serif</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground mb-1">Body (Reading)</p>
                  <p className="font-body text-sm">Lora, Georgia, serif</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
                Heading Scale
              </h3>
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">H1</span>
                  <h1 className="font-heading text-3xl font-semibold tracking-tight">36px / 1.1</h1>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">H2</span>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight">28px / 1.15</h2>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">H3</span>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">18px / 1.25</h3>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">H4</span>
                  <h4 className="font-heading text-base font-semibold tracking-tight">16px / 1.3</h4>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">Body</span>
                  <p className="font-body text-sm leading-relaxed">14px / 1.6</p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground w-12">Meta</span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.55px]">11px / 1.4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. Color Palette ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Color Palette
            </h2>
          </div>

          <div className="space-y-8">
            {/* Light mode */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                Light Mode
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ColorSwatch name="Background" hex="#ffffff" className="bg-white" />
                <ColorSwatch name="Foreground" hex="#121212" className="bg-[#121212]" />
                <ColorSwatch name="Secondary" hex="#f8f8f8" className="bg-[#f8f8f8]" />
                <ColorSwatch name="Accent" hex="#567b95" className="bg-[#567b95]" />
                <ColorSwatch name="Muted" hex="#f8f8f8" className="bg-[#f8f8f8]" />
                <ColorSwatch name="Muted Text" hex="#5a5a5a" className="bg-[#5a5a5a]" />
                <ColorSwatch name="Border" hex="#dfdfdf" className="bg-[#dfdfdf]" />
                <ColorSwatch name="Destructive" hex="#d0021b" className="bg-[#d0021b]" />
              </div>
            </div>

            {/* Dark mode */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                Dark Mode
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ColorSwatch name="Background" hex="#121212" className="bg-[#121212]" />
                <ColorSwatch name="Foreground" hex="#ffffff" className="bg-white" />
                <ColorSwatch name="Secondary" hex="#2a2a2a" className="bg-[#2a2a2a]" />
                <ColorSwatch name="Accent" hex="#567b95" className="bg-[#567b95]" />
                <ColorSwatch name="Muted" hex="#2a2a2a" className="bg-[#2a2a2a]" />
                <ColorSwatch name="Muted Text" hex="#a0a0a0" className="bg-[#a0a0a0]" />
                <ColorSwatch name="Border" hex="#2a2a2a" className="bg-[#2a2a2a]" />
                <ColorSwatch name="Destructive" hex="#ff4d4f" className="bg-[#ff4d4f]" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. Spacing System ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Spacing System
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-2">
                Base Unit
              </h3>
              <p className="font-body text-sm">Base unit: <strong className="font-sans">4px</strong></p>
              <p className="font-body text-sm text-muted-foreground">All spacing is derived from multiples of 4px.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-2">
                Section Margins
              </h3>
              <ul className="space-y-1 font-body text-sm">
                <li>Section gap: <span className="font-sans">3.5rem (56px)</span></li>
                <li>Inner padding: <span className="font-sans">1rem / 1.25rem</span></li>
                <li>Container max: <span className="font-sans">1200px</span></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-2">
                Component Spacing
              </h3>
              <ul className="space-y-1 font-body text-sm">
                <li>Card padding: <span className="font-sans">1rem</span></li>
                <li>Card gap: <span className="font-sans">1.5rem</span></li>
                <li>Grid gutters: <span className="font-sans">1.5rem</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 4. Button Styles ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Button Styles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Primary */}
            <div className="space-y-4">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
                Primary (CTA)
              </h3>
              <div className="flex flex-col gap-3">
                <button className="h-10 px-5 bg-accent text-sm font-sans font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
                <p className="font-sans text-[10px] text-muted-foreground">
                  bg: #567b95 | text: #ffffff | hover: opacity 90%
                </p>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-4">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
                Secondary (Outline)
              </h3>
              <div className="flex flex-col gap-3">
                <button className="h-10 px-5 border border-border bg-transparent text-sm font-sans font-semibold text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                  Login
                </button>
                <p className="font-sans text-[10px] text-muted-foreground">
                  border: #dfdfdf | hover: bg #567b95 | hover: text #ffffff
                </p>
              </div>
            </div>

            {/* Ghost */}
            <div className="space-y-4">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
                Text Link
              </h3>
              <div className="flex flex-col gap-3">
                <button className="h-10 px-5 text-sm font-sans font-semibold text-foreground hover:text-muted-foreground transition-colors">
                  View all
                </button>
                <p className="font-sans text-[10px] text-muted-foreground">
                  text: #121212 | hover: #5a5a5a
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. Key Components ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Key Components
            </h2>
          </div>

          <div className="space-y-10">
            {/* Article Card */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-4">
                Article Card
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
                      alt="Placeholder"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent">
                      Payments
                    </span>
                    <h4 className="font-heading text-sm font-semibold leading-snug tracking-tight mt-1 group-hover:text-muted-foreground transition-colors">
                      Stripe Raises $12 Billion at $85 Billion Valuation
                    </h4>
                    <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      The payments giant closes a massive funding round as it prepares for a potential IPO.
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
                      <span className="uppercase tracking-[0.55px]">June 2, 2025</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">By Sarah Chen</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">5 min read</span>
                    </div>
                  </div>
                </article>

                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop"
                      alt="Placeholder"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent">
                      Regtech
                    </span>
                    <h4 className="font-heading text-sm font-semibold leading-snug tracking-tight mt-1 group-hover:text-muted-foreground transition-colors">
                      EU Regulators Finalize Digital Euro Framework
                    </h4>
                    <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      The European Central Bank unveils the technical architecture for the proposed CBDC.
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
                      <span className="uppercase tracking-[0.55px]">June 1, 2025</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">By Marcus Weber</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">4 min read</span>
                    </div>
                  </div>
                </article>

                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
                      alt="Placeholder"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent">
                      Banking
                    </span>
                    <h4 className="font-heading text-sm font-semibold leading-snug tracking-tight mt-1 group-hover:text-muted-foreground transition-colors">
                      JPMorgan Expands Blockchain Settlement to 50 Currencies
                    </h4>
                    <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      The banking giant's Onyx platform now supports real-time cross-border settlement.
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-sans text-[10px] font-medium text-muted-foreground">
                      <span className="uppercase tracking-[0.55px]">May 30, 2025</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">By James Thornton</span>
                      <span className="text-border">|</span>
                      <span className="uppercase tracking-[0.55px]">6 min read</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Category Badge */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-4">
                Category Badge
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Banking
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Payments
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Fintech
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Crypto
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Regtech
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Insurance
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-accent border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                  Lending
                </span>
              </div>
            </div>

            {/* Navigation Item */}
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-4">
                Navigation Item
              </h3>
              <nav className="flex items-center gap-1">
                <span className="relative inline-flex h-7 items-center justify-center px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-foreground hover:text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5 cursor-pointer">
                  News
                </span>
                <span className="relative inline-flex h-7 items-center justify-center px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5 cursor-pointer">
                  Intelligence
                </span>
                <span className="relative inline-flex h-7 items-center justify-center px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5 cursor-pointer">
                  Multimedia
                </span>
                <span className="relative inline-flex h-7 items-center justify-center px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5 cursor-pointer">
                  Events
                </span>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── 6. Ad Placements ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent shrink-0" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.55px]">
              Ad Placements
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                Leaderboard — 728 × 90 (filled)
              </h3>
              <AdLeaderboard />
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                Leaderboard — Empty Fallback
              </h3>
              <AdLeaderboard empty />
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                MPU — 300 × 250 (filled)
              </h3>
              <AdMPU />
            </div>
            <div>
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                MPU — Empty Fallback
              </h3>
              <AdMPU empty />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ColorSwatch({
  name,
  hex,
  className,
}: {
  name: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 border border-border shrink-0 ${className}`} />
      <div>
        <p className="font-sans text-xs font-medium text-foreground">{name}</p>
        <p className="font-sans text-[10px] text-muted-foreground uppercase">{hex}</p>
      </div>
    </div>
  );
}
