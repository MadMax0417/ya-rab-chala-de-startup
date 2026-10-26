# Ya Rab Chala de Startups

A satirical startup landing page about founder delusion, zero MRR, endless pivots, and the eternal search for product-market fit.

Everything on the site is fictional: the company, products, investors, metrics, funding, and roadmap. The Startup Survival Test is entertainment, not a business assessment.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons

No backend, API routes, authentication, database, or third-party analytics.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

Copy `.env.example` to `.env.local` and set the canonical public URL before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is used for the canonical URL, Open Graph metadata, `robots.txt`, and `sitemap.xml`. If it is not set, the app falls back to `http://localhost:3000`.

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript without emitting |

## Structure

```text
src/
  app/
    layout.tsx            Fonts, metadata, root layout
    page.tsx              Section composition
    globals.css           Theme tokens, motion, dialog, layout primitives
    opengraph-image.tsx   Generated 1200 × 630 social card
    icon.svg              Favicon
    robots.ts             Generated robots.txt
    sitemap.ts            Generated sitemap.xml
  components/
    survival-simulator.tsx  Five-question assessment, report, share, reset
    product-demos.tsx       Four interactive fictional product demos
    product-lab.tsx         Product cards and dialog shell
    site-header.tsx         Sticky navigation, mobile menu, valuation dialog
    ...                     Remaining page sections
  lib/
    survival.ts           Questions, scoring, deterministic report copy
    content.ts            Metrics, products, investors, roadmap
    share.ts              Web Share / clipboard / manual fallback
    site.ts               Canonical URL resolution
```

## Startup Survival Test

- Five questions, 1,024 possible answer combinations.
- Deterministic score from 0 to 100, with a diagnosis, three observations, a practical next step, and a spiritual recommendation.
- Answers stay in the browser. Nothing is stored or transmitted.
- Sharing uses the Web Share API when available, then the clipboard, then a manually selectable report.
- All 1,024 combinations were validated to produce complete, deterministic, shareable reports within the 0–100 range.

## Accessibility and motion

- Semantic landmarks, skip link, labelled sections, and a single `h1`.
- Keyboard-operable menus, native `<dialog>` elements, Escape handling, and focus restoration.
- Visible focus styles and screen-reader-only table captions.
- Full `prefers-reduced-motion` support: smooth scrolling is disabled and animations/transitions are effectively removed.
- Responsive from small phones through wide desktop, with no page-level horizontal overflow.

## Disclaimer

This project is a work of satire. It is not affiliated with any real startup, investor, financial product, or spiritual service. No actual investment, payment, prayer, or divine SLA is offered. Product names and metrics are fictional.
