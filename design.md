# The New York Times — Design System Extract

Extracted from https://www.nytimes.com/ using browser automation (Playwright via agent-browser).
Date: 2026-06-03

---

## 1. Color Palette

### Semantic Tokens (CSS Custom Properties)

| Token | Value | Hex Approx |
|-------|-------|------------|
| `--color-background-primary` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--color-background-secondary` | `hsla(0,0%,97.26%,1)` | `#f8f8f8` |
| `--color-background-tertiary` | `hsla(0,0%,92.16%,1)` | `#ebebeb` |
| `--color-background-quaternary` | `hsla(0,0%,78.04%,1)` | `#c7c7c7` |
| `--color-background-elevated` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--color-background-inversePrimary` | `hsla(0,0%,7.06%,1)` | `#121212` |
| `--color-background-inverseSecondary` | `hsla(0,0%,21.18%,1)` | `#363636` |
| `--color-background-overlay` | `hsla(0,0%,7.06%,0.58)` | `#12121294` |
| `--color-content-primary` | `hsla(0,0%,7.06%,1)` | `#121212` |
| `--color-content-secondary` | `hsla(0,0%,21.18%,1)` | `#363636` |
| `--color-content-tertiary` | `hsla(0,0%,35.3%,1)` | `#5a5a5a` |
| `--color-content-quaternary` | `hsla(0,0%,44.71%,1)` | `#727272` |
| `--color-content-quintary` | `hsla(0,0%,54.51%,1)` | `#8b8b8b` |
| `--color-content-inversePrimary` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--color-stroke-primary` | `hsla(0,0%,7.06%,1)` | `#121212` |
| `--color-stroke-secondary` | `hsla(0,0%,54.51%,1)` | `#8b8b8b` |
| `--color-stroke-tertiary` | `hsla(0,0%,78.04%,1)` | `#c7c7c7` |
| `--color-stroke-quaternary` | `hsla(0,0%,87.46%,1)` | `#dfdfdf` |
| `--color-stroke-inversePrimary` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--color-static-white` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--color-static-gray100` | `hsla(0,0%,0%,1)` | `#000000` |
| `--color-overlay-black` | `hsla(0,0%,0%,1)` | `#000000` |

### Signal / Accent Colors

| Token | Value | Hex Approx | Usage |
|-------|-------|------------|-------|
| `--color-signal-accent` | `hsla(215.28,72.23%,50.59%,1)` | `#2b6ec7` | Links, interactive accents |
| `--color-signal-breaking` | `hsla(352.72,98.1%,41.18%,1)` | `#d0021b` | Breaking news |
| `--color-signal-developing` | `hsla(20.19,91.67%,47.06%,1)` | `#e25e0c` | Developing stories |
| `--color-signal-editorial` | `hsla(205.9,48.72%,38.24%,1)` | `#326f99` | Editorial labels |
| `--color-signal-highlight` | `hsla(54.67,95.75%,90.79%,1)` | `#fef8cd` | Highlights / selections |
| `--color-signal-negative` | `hsla(354.29,98.83%,33.34%,1)` | `#a8000f` | Errors / warnings |
| `--color-signal-positive` | `hsla(126.98,53.09%,31.77%,1)` | `#267a28` | Success / positive |

### Template Color Tokens

| Token | Value | Hex Approx |
|-------|-------|------------|
| `--tpl-color-content-primary` | `hsla(0,0%,7.06%,1)` | `#121212` |
| `--tpl-color-content-primaryDim` | `hsla(0,0%,21.18%,1)` | `#363636` |
| `--tpl-color-content-secondary` | `hsla(0,0%,35.3%,1)` | `#5a5a5a` |
| `--tpl-color-content-secondaryDim` | `hsla(0,0%,44.71%,1)` | `#727272` |
| `--tpl-color-content-accent` | `hsla(213.44,55.75%,46.08%,1)` | `#2b6ec7` |
| `--tpl-color-content-accentDim` | `hsla(205.9,48.72%,38.24%,1)` | `#326f99` |
| `--tpl-color-content-positive` | `hsla(126.98,53.09%,31.77%,1)` | `#267a28` |
| `--tpl-color-content-negative` | `hsla(354.29,98.83%,33.34%,1)` | `#a8000f` |
| `--tpl-color-content-breaking` | `hsla(352.72,98.1%,41.18%,1)` | `#d0021b` |
| `--tpl-color-content-placeholder` | `hsla(0,0%,54.51%,1)` | `#8b8b8b` |
| `--tpl-color-stroke-primary` | `hsla(0,0%,7.06%,1)` | `#121212` |
| `--tpl-color-stroke-secondary` | `hsla(0,0%,59.22%,1)` | `#979797` |
| `--tpl-color-stroke-tertiary` | `hsla(0,0%,87.46%,1)` | `#dfdfdf` |
| `--tpl-color-background-primary` | `hsla(0,0%,100%,1)` | `#ffffff` |
| `--tpl-color-background-secondary` | `hsla(0,0%,97.26%,1)` | `#f8f8f8` |
| `--tpl-color-background-tertiary` | `hsla(0,0%,92.16%,1)` | `#ebebeb` |
| `--tpl-color-background-highlight` | `hsla(54.67,95.75%,90.79%,1)` | `#fef8cd` |
| `--tpl-color-background-scrim` | `hsla(0,0%,7%,0.6)` | `#12121299` |

### Additional Observed Colors

| Color | Hex | Usage |
|-------|-----|-------|
| `rgb(86, 123, 149)` | `#567b95` | Subscribe buttons, CTA backgrounds |
| `rgb(174, 29, 37)` | `#ae1d25` | Breaking/news badges |
| `rgb(110, 73, 143)` | `#6e498f` | Category tags |
| `rgb(50, 129, 140)` | `#32818c` | Category tags |
| `rgb(202, 132, 26)` | `#ca841a` | Category tags |
| `rgb(252, 207, 209)` | `#fccfd1` | Pastel backgrounds |
| `rgb(209, 245, 250)` | `#d1f5fa` | Pastel backgrounds |
| `rgb(255, 241, 204)` | `#fff1cc` | Pastel backgrounds |
| `rgb(231, 210, 249)` | `#e7d2f9` | Pastel backgrounds |

---

## 2. Typography

### Font Stack Variables

```css
--serif: georgia, 'times new roman', times, serif;
--sans-serif: helvetica, arial, sans-serif;
--cheltenham: "nyt-cheltenham", var(--serif);
--franklin: "nyt-franklin", var(--sans-serif);
--imperial: "nyt-imperial", var(--serif);
--karnak: "nyt-karnak", var(--serif);
--cheltenham-condensed: "nyt-cheltenham-cond", var(--serif);
--cheltenham-text-condensed: "nyt-cheltenham-text-cond", var(--serif);
```

### Font Families (Observed)

| Font | Role | Fallback |
|------|------|----------|
| `nyt-cheltenham` | Headlines, display text | Georgia, Times New Roman |
| `nyt-karnak` | Large headlines, masthead | Georgia, Times New Roman |
| `nyt-imperial` | Body text, article copy | Georgia, Times New Roman |
| `nyt-franklin` | UI, navigation, labels, buttons | Helvetica, Arial |
| `nyt-fact` | Subheadings, section headers | Georgia |
| `nyt-fact-deck` | Deck copy, subheads | Georgia |
| `nyt-fact-display` | Large display headlines | Georgia |
| `nyt-kippenberger` | Magazine headlines | Georgia |
| `nyt-magsans` | Magazine sans-serif | Helvetica |
| `nyt-magserif` | Magazine serif | Georgia |
| `nyt-magslab` | Magazine slab | Times New Roman |
| `nyt-schnyder-s` | Premium headlines, T Magazine | Georgia |
| `nyt-ibm-plex` | Data, code, technical | Helvetica |

### Font Weights Used

- **100** (Thin) — Display headlines
- **200** (Extra Light) — Display headlines
- **300** (Light) — Franklin italic, display headlines
- **400** (Regular) — Body text, standard UI
- **500** (Medium) — UI labels, navigation, buttons
- **600** (Semi-bold) — Navigation, labels, UI
- **700** (Bold) — Headlines, subheads, buttons
- **800** (Extra Bold) — Display headlines
- **900** (Black) — Display headlines, masthead

### Font Styles

- **Normal** — Default for body and UI
- **Italic** — Used in body text (Imperial), quotes, emphasis, Franklin
- **Cursive** — Karnak display (decorative)

### Observed Font Sizes

| Size | Usage |
|------|-------|
| 8.96px | Tiny captions, metadata |
| 9px | Very small UI text |
| 10px | Micro labels, timestamps |
| 11px | Navigation, buttons, labels, metadata (most common UI size) |
| 12px | Small UI text, captions |
| 13px | Body subtext |
| 14px | Body text, secondary copy |
| 16px | Default body text, article paragraphs |
| 18px | Large body, subheadings |
| 20px | Medium headlines |
| 22px | Section headlines |
| 24px | Large headlines |
| 28px | Major headlines |

### Line Heights

| Value | Usage |
|-------|-------|
| 11px | Navigation links, tight labels |
| 14px | Small UI text |
| 16px | Default body text |
| 18px | Standard paragraph |
| 20px | Body text, cards |
| 21.6px | Article paragraphs |
| 24px | Larger body text |

### Letter Spacing

| Value | Usage |
|-------|-------|
| 0.1px | Standard UI text |
| 0.18px | Small uppercase labels |
| 0.22px | Navigation, buttons (11px bold) |
| 0.44px | Eyebrow labels |
| 0.55px | CTA buttons, subscribe labels |
| 1.1px | Section labels |
| 1.4px | Navigation links (uppercase) |

---

## 3. Layout & Spacing

### Grid System

| Token | Value |
|-------|-------|
| `--grid-width` | `min(100vw, var(--max-width, 100vw))` |
| `--margin` | `calc((100vw - var(--grid-width)) / 2)` |
| `--width` | `min(var(--max-width), 100cqw)` |
| `--content-max-width` | `500px` (article text) |

### Button Tokens

| Token | Value |
|-------|-------|
| `--button-size` | `2.75rem` / `2rem` / `1.5rem` / `3.5rem` |
| `--button-py` | `calc(0.75rem - var(--button-borderWidth))` |
| `--button-px` | `calc(1rem + var(--button-pxExtra) - var(--button-borderWidth))` |
| `--button-borderWidth` | `0px` / `0.0625rem` |
| `--button-shadowSpread` | `0.1875rem` / `0.0625rem` |
| `--button-opacityHover` | `0.12` |
| `--button-opacityActive` | `0.8` |
| `--button-opacityDisabled` | `0.4` |

### Spacing Tokens

| Token | Value |
|-------|-------|
| `--padding` | `20px` |
| `--tpl-story-list-outerPaddingHorizontal` | `24px` |
| `--tpl-story-list-itemTopLabelMarginBottom` | `0.25rem` |
| `--animation-duration` | `200ms` |
| `--comment-item-line-height` | `1.3rem` |
| `--radio-size` | `1.125rem` |
| `--bullet-size` | `0.625rem` |
| `--border-size` | `0.0625rem` |
| `--curve-margin` | `11px` |

---

## 4. Components

### Navigation

- **Font**: `nyt-franklin`, Helvetica, Arial, sans-serif
- **Size**: 11px
- **Weight**: 500–600
- **Letter spacing**: 1.4px
- **Color**: `rgb(18, 18, 18)` / `rgb(90, 90, 90)` for inactive
- **Text transform**: uppercase
- **Background**: transparent or white
- **Height**: ~11px line-height

### Buttons (Primary/CTA)

- **Font**: `nyt-franklin`, Helvetica, Arial, sans-serif
- **Size**: 11px
- **Weight**: 700
- **Letter spacing**: 0.22px–0.55px
- **Color**: `rgb(0, 0, 0)` for text, `rgb(255, 255, 255)` for CTA text
- **Background**: `rgb(86, 123, 149)` for subscribe CTA
- **Padding**: compact, calculated with `calc()`
- **Border**: 0px or 1px (`0.0625rem`)

### Labels / Tags

- **Font**: `nyt-franklin`, Helvetica, Arial, sans-serif
- **Size**: 11px
- **Weight**: 700
- **Color**: `rgb(255, 255, 255)` on colored backgrounds
- **Background**: `rgb(86, 123, 149)` (blue) or `rgb(174, 29, 37)` (red)
- **Padding**: tight, small
- **Border-radius**: 0 (square) or minimal

### Article Cards

- **Font**: `nyt-franklin` for metadata, `nyt-cheltenham` for headlines
- **Headline size**: 14px–20px
- **Metadata size**: 11px
- **Color**: `rgb(18, 18, 18)` for headlines
- **Secondary color**: `rgb(90, 90, 90)` for metadata

---

## 5. Design Patterns

### Overall Aesthetic

- **Classic, authoritative editorial design**
- **High information density** with clean typography hierarchy
- **Minimal decorative elements** — content is the design
- **Restrained color palette** — mostly black, white, grays with selective blue accents
- **No rounded corners** — sharp, traditional, newspaper-like edges

### Visual Density

- Dense but breathable — content is packed but with clear visual hierarchy
- Generous use of whitespace in headline areas
- Tight packing in navigation and metadata areas

### Typography Hierarchy

1. **Masthead / Logo**: `nyt-karnak` — large, bold, serif display
2. **Headlines**: `nyt-cheltenham` — elegant serif, weights 400–700
3. **Subheads / Deck**: `nyt-fact` or `nyt-cheltenham` — medium weight
4. **Body Text**: `nyt-imperial` — readable serif, weight 400
5. **UI / Navigation**: `nyt-franklin` — clean sans-serif, weight 500–700
6. **Labels / Metadata**: `nyt-franklin` — small, uppercase, tracked

### Borders & Separators

- 1px solid borders (`--border-size: 0.0625rem`)
- Colors: `--color-stroke-tertiary` (`#c7c7c7`) for light dividers
- Colors: `--color-stroke-primary` (`#121212`) for strong dividers

### Shadows & Depth

- Minimal shadow usage
- `--button-shadowSpread: 0.1875rem` for subtle button shadows
- No drop shadows on cards — elevation is communicated through borders and spacing

### Interactive States

- **Hover**: `--button-opacityHover: 0.12` (subtle opacity shift)
- **Active**: `--button-opacityActive: 0.8`
- **Disabled**: `--button-opacityDisabled: 0.4`
- **Transitions**: `--animation-duration: 200ms`

---

## 6. Responsive Behavior

- Mobile-first with `max-width` constraints
- Content max-width: 500px for article text
- Full-width grid with `min(100vw, var(--max-width))`
- Navigation collapses on mobile
- Touch-friendly button sizes: 1.5rem–3.5rem

---

## 7. Font Loading Strategy

All fonts use `font-display: swap` for fast initial render.

### Fallback Stack

```
nyt-cheltenham → cheltenham-fallback-georgia (local Georgia)
             → cheltenham-fallback-noto (local Noto Serif)
             → Georgia → Times New Roman → serif

nyt-franklin → Helvetica → Arial → sans-serif

nyt-karnak → karnak-fallback-georgia (local Georgia)
           → karnak-fallback-noto (local Noto Serif)
           → Georgia → Times New Roman → serif

nyt-imperial → Georgia → Times New Roman → Songti SC → simsun → serif
```

---

## 8. Screenshots

| File | Description |
|------|-------------|
| `/tmp/nyt-homepage.png` | Full homepage screenshot |
| `/tmp/nyt-article.png` | Article page screenshot |

---

## 9. Key Takeaways

1. **Color philosophy**: Almost monochrome with a single blue accent (`#2b6ec7`) and semantic reds/oranges for news signals
2. **Typography philosophy**: Custom serif fonts (Cheltenham, Imperial, Karnak) for editorial authority; custom sans-serif (Franklin) for UI clarity
3. **Spacing philosophy**: Extremely tight and calculated — many values use `calc()` for precise control
4. **Component philosophy**: Minimal, flat, no radius — traditional newspaper aesthetic translated to web
5. **Information density**: Very high — the site is designed for reading and scanning large amounts of content
