# Financial IT — Design Rationale

## Typeface

I chose **Libre Baskerville** for headlines because it carries the editorial gravitas of a serious financial publication without feeling dated. Its crisp serifs and strong contrast convey trust — the same reason Bloomberg and the FT lean on serif display fonts. For body text, **Lora** provides excellent readability at small sizes with a slightly warmer tone, making long-form analysis feel approachable. **Inter** handles all UI: navigation, labels, and metadata. Its clean geometry and extensive weight range let us keep navigation dense and scannable without visual noise.

## Color Palette

The palette is deliberately restrained: near-monochrome with a single blue accent (#567b95). This decision is rooted in credibility. Bright, playful colors would undermine the trust a fintech executive expects from a news source. The muted blue functions as the sole signal color — used for category links, CTAs, and interactive accents. It feels institutional without being cold. The dark mode is a true inversion: deep charcoal backgrounds (#121212) with the same blue accent preserved, ensuring the brand identity holds in either state.

## Prioritization (Given the 4–6 Hour Constraint)

Given the time limit, I prioritized **information architecture and typography hierarchy** over decorative elements. A financial media homepage lives or dies on scanability — the reader must immediately know what is breaking, what is featured, and what is secondary. I spent the most time on the 3-column hero layout, the navigation dropdowns, and the article card system, because these are the core reading experience. Dark mode, ad fallbacks, and the breaking-news ticker were included because they are explicit requirements. The style guide was built as a live page so every token is verifiable against the actual components, not abstracted away in a separate document.
