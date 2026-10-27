# Ya Rab Chala de Startups

A satirical startup landing page about founder delusion, zero MRR, endless pivots, and the eternal search for product-market fit.

Everything on the site is fictional: the company, products, investors, metrics, funding, and roadmap. The Startup Survival Test is entertainment, not a business assessment.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Vercel Web Analytics

No backend, API routes, authentication, or database. Analytics is limited to cookieless pageviews from Vercel Web Analytics.

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

## Analytics

Vercel Web Analytics collects cookieless pageviews through the `<Analytics />` component in `src/app/layout.tsx`. Enable it once per project under **Analytics → Enable** in the Vercel dashboard, then redeploy — collection starts with the next deployment.

The Hobby plan includes 50,000 events per month with a one-month reporting window. UTM filtering requires Pro with the Web Analytics Plus add-on, and custom events require Pro, so campaign tags are recorded but not visible in the dashboard on Hobby.

### Sharing links

Each channel has an alias that rewrites to `/` but keeps its own URL (see `next.config.ts`), so per-channel traffic appears as separate rows in the **Pages** panel — no paid plan required. Tag the links as well so the data exists if the project ever moves to a paid plan.

| Channel | Path | `utm_source` | `utm_medium` |
| --- | --- | --- | --- |
| Discord | `/discord` | `discord` | `community` |
| Instagram | `/instagram` | `instagram` | `social` |
| X | `/x` | `x` | `social` |
| WhatsApp | `/whatsapp` | `whatsapp` | `messaging` |

```text
https://your-domain.example/discord?utm_source=discord&utm_medium=community&utm_campaign=launch_v1&utm_content=announcement
https://your-domain.example/instagram?utm_source=instagram&utm_medium=social&utm_campaign=launch_v1&utm_content=bio
https://your-domain.example/x?utm_source=x&utm_medium=social&utm_campaign=launch_v1&utm_content=post
https://your-domain.example/whatsapp?utm_source=whatsapp&utm_medium=messaging&utm_campaign=launch_v1&utm_content=group
```

Vary only `utm_content` between placements: `announcement` for Discord, `bio` / `story` / `reel` for Instagram, `post` / `reply` for X, `status` / `group` / `dm` for WhatsApp. Keep `utm_campaign` identical across channels so they stay comparable.

Hide the tags behind link text (`[Take the Startup Survival Test](url)`). Instagram and WhatsApp cache link previews aggressively; if the Open Graph card ever changes, bump `utm_content` or add a throwaway parameter to force a refetch. Don't add UTMs to internal anchors such as `#survival` — shares from the site are tagged automatically with `utm_source=share&utm_medium=referral&utm_campaign=survival_share`.

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
    layout.tsx            Fonts, metadata, analytics, root layout
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
