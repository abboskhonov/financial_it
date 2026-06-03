import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedCard } from "@/components/featured-card";
import { HeroArticle } from "@/components/hero-article";
import { SideArticle } from "@/components/side-article";
import { CategorySection } from "@/components/category-section";
import { DirectionalTransition } from "@/components/directional-transition";
import {
  getFeaturedArticles,
  getHeroArticle,
  getSideArticles,
  getArticlesByCategory,
} from "@/lib/data/articles";

export default function HomePage() {
  const hero = getHeroArticle();
  const featured = getFeaturedArticles();
  const side = getSideArticles();
  const health = getArticlesByCategory("Health");

  return (
    <>
      <Navbar />
      <DirectionalTransition>
        <main className="mx-auto max-w-[1200px] px-5 sm:px-6 py-8 pt-[110px] md:pt-[130px]">
          {/* 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
            {/* Left column — featured cards */}
            <div className="md:col-span-3 flex flex-col gap-8">
              {featured.map((article) => (
                <FeaturedCard key={article.id} article={article} />
              ))}
            </div>

            {/* Center column — hero article */}
            <div className="md:col-span-6">
              <HeroArticle article={hero} />
            </div>

            {/* Right column — side articles */}
            <div className="md:col-span-3 flex flex-col gap-5">
              {side.map((article) => (
                <SideArticle key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Health section */}
          <CategorySection
            title="Health"
            articles={health}
            categorySlug="health"
          />
        </main>
      </DirectionalTransition>
      <Footer />
    </>
  );
}
