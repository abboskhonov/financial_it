import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedCard } from "@/components/featured-card";
import { HeroArticle } from "@/components/hero-article";
import { SideArticle } from "@/components/side-article";
import { CategorySection } from "@/components/category-section";
import { AdLeaderboard } from "@/components/ad-leaderboard";
import { AdMPU } from "@/components/ad-mpu";
import { AdInline } from "@/components/ad-inline";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { NewsletterStrip } from "@/components/newsletter-strip";
import { BreakingBadge } from "@/components/breaking-badge";
import { PageTransition } from "@/components/directional-transition";
import { FeaturedVideos } from "@/components/featured-videos";
import { IntelligenceSection } from "@/components/intelligence-section";
import { EventsSection } from "@/components/events-section";

import { TopStories } from "@/components/top-stories";
import {
  getFeaturedArticles,
  getHeroArticle,
  getSideArticles,
  getTopStories,
  getArticlesByCategory,
} from "@/lib/data/articles";

export default function HomePage() {
  const hero = getHeroArticle();
  const featured = getFeaturedArticles();
  const side = getSideArticles();
  const topStories = getTopStories();
  const banking = getArticlesByCategory("Banking");
  const payments = getArticlesByCategory("Payments");
  const fintech = getArticlesByCategory("Fintech");
  const crypto = getArticlesByCategory("Crypto");

  return (
    <>
      <Navbar />
      <AdLeaderboard />
      <BreakingBadge />
      <PageTransition>
      <main className="mx-auto max-w-[1200px] px-5 sm:px-6 py-8">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Left column — featured cards */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.55px] pb-2 border-b border-border">
              Featured News
            </h3>
            {featured.map((article) => (
              <FeaturedCard key={article.id} article={article} />
            ))}
          </div>

          {/* Center column — hero article + top stories */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <HeroArticle article={hero} />
            <TopStories articles={topStories} />
          </div>

          {/* Right column — side articles + newsletter */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.55px] pb-2 border-b border-border">
              Recent News
            </h3>
            {side.map((article) => (
              <SideArticle key={article.id} article={article} />
            ))}
            <NewsletterSignup />
          </div>
        </div>

        {/* Newsletter — full-width strip */}
        <NewsletterStrip />

        {/* Category sections */}
        <CategorySection
          title="Banking"
          articles={banking}
          categorySlug="banking"
        />
        <CategorySection
          title="Payments"
          articles={payments}
          categorySlug="payments"
        />

        {/* Mid-page ad zone */}
        <section className="mt-14">
          <AdInline />
        </section>

        <CategorySection
          title="Fintech"
          articles={fintech}
          categorySlug="fintech"
        />
        <CategorySection
          title="Crypto"
          articles={crypto}
          categorySlug="crypto"
        />

        {/* Bonus sections */}
        <FeaturedVideos />
        <IntelligenceSection />
        <EventsSection />

      </main>
      </PageTransition>
      <Footer />
    </>
  );
}
