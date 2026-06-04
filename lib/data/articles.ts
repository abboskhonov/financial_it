export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "stripe-raises-12b",
    title: "Stripe Raises $12 Billion at $85 Billion Valuation",
    excerpt:
      "The payments giant closes a massive funding round as it prepares for a potential IPO, signaling strong investor confidence in fintech infrastructure.",
    body: `Stripe has raised $12 billion in a new funding round that values the company at $85 billion, marking one of the largest private funding rounds in fintech history.

The round was led by existing investors and new sovereign wealth funds looking to gain exposure to the payments infrastructure space before a potential public offering.

"This capital allows us to accelerate our product roadmap and expand into emerging markets," said a Stripe spokesperson.

The valuation represents a significant premium from its last private round, defying concerns about a fintech downturn. Analysts note that Stripe's diversified revenue streams across payments, billing, and embedded finance have made it resilient to sector headwinds.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "Payments",
    author: "Sarah Chen",
    date: "June 2, 2025",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "eu-digital-euro-framework",
    title: "EU Regulators Finalize Digital Euro Framework",
    excerpt:
      "The European Central Bank unveils the technical architecture and privacy safeguards for the proposed central bank digital currency.",
    body: `European regulators have finalized the legislative framework for the Digital Euro, paving the way for a potential launch of the central bank digital currency by 2027.

The framework includes strict privacy controls, offline transaction capabilities, and a holding limit designed to prevent bank disintermediation.

"The Digital Euro will be a public good, available to all citizens and businesses," said ECB President Christine Lagarde.

The technical architecture will use a hybrid model combining centralized infrastructure with distributed validation nodes operated by commercial banks.`,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
    category: "Regtech",
    author: "Marcus Weber",
    date: "June 1, 2025",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "jpmorgan-blockchain-50-currencies",
    title: "JPMorgan Expands Blockchain Settlement to 50 Currencies",
    excerpt:
      "The banking giant's Onyx platform now supports real-time cross-border settlement in dozens of currencies, reshaping correspondent banking.",
    body: `JPMorgan Chase has expanded its Onyx blockchain platform to support settlement in 50 currencies, a major expansion from the 20 supported previously.

The move positions the bank as the dominant player in institutional blockchain settlement, processing over $1 billion in daily volume.

"This is about making cross-border payments as easy as domestic ones," said JPMorgan's head of blockchain initiatives.

The expansion includes currencies from emerging markets in Southeast Asia and Africa, regions where traditional correspondent banking has been slow and expensive.`,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "Banking",
    author: "James Thornton",
    date: "May 30, 2025",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "revolut-uk-banking-license",
    title: "Revolut Applies for UK Banking License for Third Time",
    excerpt:
      "The fintech unicorn resubmits its application after addressing regulator concerns around risk controls and compliance infrastructure.",
    body: `Revolut has submitted its third application for a UK banking license, hoping to finally secure full regulatory approval after years of back-and-forth with the Bank of England.

The company has overhauled its risk management framework and appointed a new chief risk officer with decades of traditional banking experience.

"We believe we have now addressed all concerns raised in previous assessments," said Revolut CEO Nik Storonsky.

A banking license would allow Revolut to offer lending products and accept deposits without the restrictions of its current e-money license.`,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=150&fit=crop",
    category: "Banking",
    author: "Emily Ross",
    date: "May 28, 2025",
    readTime: "3 min read",
  },
  {
    id: "5",
    slug: "fednow-500-bank-milestone",
    title: "FedNow Instant Payment Platform Hits 500 Bank Milestone",
    excerpt:
      "The Federal Reserve's real-time payment system reaches a critical mass of adoption, with more banks joining each week.",
    body: `The Federal Reserve's FedNow instant payment platform has surpassed 500 participating financial institutions, marking a major milestone in the adoption of real-time payments in the United States.

Launched in July 2023, the service has grown steadily as community banks and credit unions recognize the competitive necessity of offering instant payments.

"We're seeing exponential growth in transaction volume as more banks come online," said a Federal Reserve spokesperson.

Industry analysts say FedNow's success is putting pressure on the private-sector RTP network to accelerate its own feature development.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=150&fit=crop",
    category: "Payments",
    author: "David Park",
    date: "May 27, 2025",
    readTime: "4 min read",
  },
  {
    id: "6",
    slug: "blackrock-bitcoin-etf-inflows",
    title: "BlackRock Bitcoin ETF Surpasses $50 Billion in Assets",
    excerpt:
      "The world's largest asset manager sees unprecedented demand for its spot Bitcoin ETF, becoming the fastest-growing fund in history.",
    body: `BlackRock's iShares Bitcoin Trust has surpassed $50 billion in assets under management, cementing its status as the most successful ETF launch in history.

The fund has seen consistent inflows even during market volatility, suggesting institutional adoption is becoming sticky rather than speculative.

"This is a structural shift in how institutions allocate to digital assets," said BlackRock's head of digital assets.

The milestone comes as other spot crypto ETFs struggle to maintain momentum, highlighting BlackRock's distribution advantage among financial advisors.`,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=200&h=150&fit=crop",
    category: "Crypto",
    author: "Alex Rivera",
    date: "May 25, 2025",
    readTime: "5 min read",
  },
  {
    id: "7",
    slug: "insurtech-ai-claims",
    title: "Insurtech Firms Deploy AI to Cut Claims Processing to Minutes",
    excerpt:
      "New machine learning models can assess damage, verify coverage, and issue payments without human intervention in most cases.",
    body: `Leading insurtech companies have deployed AI systems that can process and pay out claims in under five minutes, reducing the traditional weeks-long process to minutes.

The systems use computer vision for damage assessment, natural language processing for policy verification, and automated payment rails for instant disbursement.

"Customers no longer need to wait weeks to rebuild their lives after an accident," said the CEO of a leading insurtech platform.

Traditional insurers are scrambling to partner with AI vendors or build in-house capabilities to compete with the new standard.`,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=150&fit=crop",
    category: "Insurance",
    author: "Lisa Nakamura",
    date: "May 24, 2025",
    readTime: "3 min read",
  },
  {
    id: "8",
    slug: "decentralized-finance-regulation",
    title: "SEC Proposes New Framework for DeFi Lending Protocols",
    excerpt:
      "The regulatory agency seeks to bring decentralized lending under federal oversight, sparking debate about innovation and compliance.",
    body: `The Securities and Exchange Commission has proposed a new regulatory framework that would bring decentralized finance lending protocols under federal oversight for the first time.

The proposal would require DeFi platforms with more than $10 million in total value locked to register as lending platforms and comply with consumer protection rules.

"Investors in these protocols deserve the same protections as those in traditional lending," said SEC Chair Gary Gensler.

DeFi advocates argue the proposal misunderstands how decentralized protocols work and would be impossible to enforce without fundamentally changing the technology.`,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=150&fit=crop",
    category: "Regtech",
    author: "Tom Bradley",
    date: "May 22, 2025",
    readTime: "6 min read",
  },
  {
    id: "9",
    slug: "neobank-profitability",
    title: "Neobanks Reach Inflection Point as Unit Economics Turn Positive",
    excerpt:
      "After years of growth-at-all-costs, digital-only banks are showing sustainable profitability as interest rate environments normalize.",
    body: `A new wave of neobanks has reported positive unit economics for the first time, suggesting the sector may finally be reaching sustainable profitability.

Companies like Monzo, Starling, and N26 have all reported narrowing losses or outright profitability in recent quarters, driven by interest income and premium subscriptions.

"The narrative that neobanks can't make money is dead," said an analyst at a major investment bank.

The shift comes as interest rate normalization has made the deposit-funded business model viable again, and as customers have proven willing to pay for premium features.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Fintech",
    author: "Sarah Chen",
    date: "May 20, 2025",
    readTime: "4 min read",
  },
  {
    id: "10",
    slug: "open-banking-us",
    title: "Open Banking Rules Take Effect in the United States",
    excerpt:
      "The CFPB's new regulation forces major banks to share customer data with authorized third parties, unlocking competition.",
    body: `The Consumer Financial Protection Bureau's new open banking rules have officially taken effect, requiring the largest US banks to make customer financial data available through standardized APIs.

The regulation is modeled on successful open banking frameworks in the UK and EU but includes stronger consumer consent requirements.

"This will unleash a wave of innovation in personal finance and small business lending," said the CFPB Director.

Banks have spent billions on compliance, but industry experts say the real winners will be fintech apps that can now offer more personalized financial services.`,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    category: "Banking",
    author: "Marcus Weber",
    date: "May 18, 2025",
    readTime: "5 min read",
  },
  {
    id: "11",
    slug: "bnpl-regulation-europe",
    title: "Europe Tightens BNPL Regulation with Mandatory Credit Checks",
    excerpt:
      "The new rules require buy-now-pay-later providers to run affordability assessments before extending credit to consumers.",
    body: `European regulators have finalized new rules for the buy-now-pay-later sector, requiring mandatory credit checks and affordability assessments before consumers can use BNPL services.

The regulations, which apply to all BNPL transactions over €50, are designed to prevent consumers from accumulating unmanageable debt across multiple platforms.

"BNPL is credit, and it should be regulated as such," said the EU Commissioner for Financial Services.

Major BNPL providers like Klarna and Afterpay have said they are prepared for the changes, though they expect some smaller competitors to exit the market.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    category: "Lending",
    author: "Emily Ross",
    date: "May 15, 2025",
    readTime: "3 min read",
  },
  {
    id: "12",
    slug: "quantum-threat-crypto",
    title: "Quantum Computing Breakthrough Sparks Crypto Security Debate",
    excerpt:
      "A new quantum processor achieves a milestone that could eventually break current encryption, prompting the blockchain industry to prepare for post-quantum cryptography.",
    body: `A new quantum computing breakthrough has achieved a level of processing power that could eventually threaten the cryptographic foundations of blockchain networks.

While experts say practical quantum attacks are still years away, the Ethereum Foundation and Bitcoin developers have begun researching post-quantum cryptographic solutions.

"We need to start preparing now, even if the threat is a decade away," said a leading blockchain researcher.

The development has also sparked renewed interest in quantum-resistant cryptocurrencies that use lattice-based cryptography instead of elliptic curve methods.`,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    category: "Crypto",
    author: "Alex Rivera",
    date: "May 12, 2025",
    readTime: "6 min read",
  },
  {
    id: "13",
    slug: "embedded-finance-growth",
    title: "Embedded Finance Market Projected to Hit $228 Billion by 2028",
    excerpt:
      "A new industry report forecasts massive growth in banking-as-a-service, as non-financial companies increasingly offer financial products.",
    body: `The global embedded finance market is projected to reach $228 billion by 2028, according to a new report from a leading fintech research firm.

The growth is being driven by non-financial companies like retailers, ride-sharing platforms, and software companies offering banking, lending, and insurance products within their own ecosystems.

"Every company will be a fintech company to some degree," said the report's lead author.

The report identifies Asia-Pacific as the fastest-growing region, led by super-apps like WeChat and Grab that have already integrated financial services at massive scale.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    category: "Fintech",
    author: "David Park",
    date: "May 10, 2025",
    readTime: "4 min read",
  },
  {
    id: "14",
    slug: "sustainable-finance-reporting",
    title: "New ESG Reporting Standards Mandate Granular Climate Disclosures",
    excerpt:
      "The International Sustainability Standards Board releases final rules requiring detailed climate risk reporting from financial institutions.",
    body: `The International Sustainability Standards Board has released its final standards for climate-related financial disclosures, requiring unprecedented granularity in how banks and insurers report their environmental impact.

The standards, which apply to all publicly listed financial institutions, require detailed scenario analysis, Scope 3 emissions tracking, and transition plan disclosure.

"This is the most significant change to financial reporting since the adoption of IFRS," said a partner at a major accounting firm.

Compliance costs are estimated to be in the hundreds of millions for the largest global banks, but proponents argue the standardized data will enable better capital allocation to sustainable investments.`,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    category: "Regtech",
    author: "Lisa Nakamura",
    date: "May 8, 2025",
    readTime: "5 min read",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.slice(1, 4);
}

export function getHeroArticle(): Article {
  return articles[0];
}

export function getSideArticles(): Article[] {
  return articles.slice(4, 9);
}

export function getTopStories(): Article[] {
  return articles.slice(9, 14);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}
