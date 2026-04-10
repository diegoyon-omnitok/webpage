@AGENTS.md

# Omnitok Web Project Context

This file is the handoff context for any future work on this repository. Read it before making changes.

## Project Summary

- Marketing website for Omnitok.
- Built with Next.js App Router, React, TypeScript, and Tailwind CSS.
- Serves two market experiences from one codebase:
  - LATAM in Spanish under `/es`
  - USA in English under `/en-us`
- Main business areas in the site:
  - Product pages
  - Solutions and industries
  - Resources and blog
  - Contact and lead capture
  - SEO landing structure by market

## Stack

- Next.js `16.2.0`
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`
- Icons via `lucide-react`
- Package manager: `npm`

## Core Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run start
```

Notes:

- `npm run dev` uses `next dev --webpack`
- `npm run dev:turbo` exists for Turbopack
- `next.config.ts` pins the Turbopack root and aliases `tailwindcss` to avoid module resolution issues from parent folders

## High-Level Architecture

### App Router

- Main app code lives in `src/app`
- Global shell and shared metadata live in:
  - `src/app/layout.tsx`
  - `src/app/globals.css`
- Root route `/` is not the main user entry in practice because `src/proxy.ts` redirects users to a market

### Market Model

The site is not using a classic i18n library. Instead, it has two explicit market experiences with their own copy, routes, metadata, and navigation.

- LATAM market:
  - Base path: `/es`
  - Language: Spanish
- USA market:
  - Base path: `/en-us`
  - Language: English

The single source of truth for this setup is:

- `src/lib/markets.ts`

That file contains:

- canonical route definitions
- nav groups
- footer links
- market alternates
- switcher mapping
- exact redirects
- metadata helper
- LATAM country code list for market detection

## Routing and Redirects

### Important file

- `src/proxy.ts`

This file is critical. It handles:

- market detection by cookie, geo headers, and `Accept-Language`
- redirecting `/` to `/es/` or `/en-us/`
- permanent redirects from old paths to canonical paths
- returning `410` for `/thank-you`
- setting `x-omni-lang`, which is later used by the root layout

### Key behavior

- `/` is redirected to a market, usually `/es/` by default
- many older URLs still resolve through redirect maps
- blog legacy URLs are also redirected through generated redirect data

Because of this, always check redirect behavior before changing:

- path structures
- blog routes
- market paths
- home page logic

## Main Route Areas

### LATAM

LATAM routing is centralized through:

- `src/app/es/[[...slug]]/page.tsx`

That catch-all maps many `/es/...` paths to page modules across the codebase. This means a lot of LATAM pages are composed from modules that also exist elsewhere under `src/app`.

Important LATAM areas include:

- `/es`
- `/es/asistente-de-compra`
- `/es/contenido-enriquecido`
- `/es/gestion-de-contenido-de-producto`
- `/es/digital-shelf-analytics`
- `/es/contacto`
- `/es/recursos`
- `/es/blog`
- `/es/suscripcion`
- `/es/nosotros`

### USA

USA routes are defined more explicitly under:

- `src/app/en-us`

Important USA areas include:

- `/en-us`
- `/en-us/map-monitoring`
- `/en-us/digital-shelf-analytics`
- `/en-us/resources`
- `/en-us/resources/ebooks`
- `/en-us/resources/glossary`
- `/en-us/blog`
- `/en-us/contact`
- `/en-us/privacy-policy`
- `/en-us/terms-of-service`

## Layout and Reusable UI

### Shared layout components

Key reusable layout files:

- `src/components/layout/MarketShell.tsx`
- `src/components/layout/MarketNavbar.tsx`
- `src/components/layout/MarketFooter.tsx`
- `src/components/layout/MarketSwitcher.tsx`
- `src/components/layout/MarketEntrySelector.tsx`

### Shared section components

Most marketing blocks live in:

- `src/components/sections`

This folder contains reusable content sections such as:

- heroes
- CTA blocks
- logo bars
- testimonials
- integrations
- product explanation sections

### USA-specific components

USA-specific sections are primarily in:

- `src/components/markets/usa`

### Full page compositions

Page-level compositions live in:

- `src/components/pages`

## Content Model

### Static-first site

Most page content is hardcoded in components or page modules. There is no general runtime CMS in this repository.

### Blog pipeline

The blog is generated from a CSV migration workflow.

Main files:

- Source CSV: `omnitok_posts_migracion.csv`
- Generator script: `scripts/generate-blog-data.mjs`
- Generated runtime data:
  - `src/data/blog-posts.generated.json`
  - `src/data/blog-redirects.generated.json`
  - `src/data/blog-migration-tracker.generated.json`
- Blog helpers:
  - `src/lib/blog.ts`
- Blog images:
  - `public/blog`

The generator script:

- reads published rows from the CSV
- infers market, slug, category, keywords, search intent, and metadata
- builds cleaned HTML from raw text
- tries to recover featured images from original URLs
- creates canonical blog records
- creates redirect mappings for legacy blog paths

Important operational rule:

- if the CSV changes, regenerate the blog artifacts and commit the generated JSON and image outputs

## SEO and Metadata

### Main SEO sources

- `src/lib/markets.ts`
- `src/app/sitemap.ts`
- `src/app/layout.tsx`
- `docs/seo-keywords.md`

### Notes

- Metadata is largely generated through `buildMetadata()` in `src/lib/markets.ts`
- Sitemap includes both market URLs and blog URLs
- Alternate language mappings are explicitly defined
- SEO copy guidance is documented in `docs/seo-keywords.md`

When doing copy or metadata work:

- review `docs/seo-keywords.md`
- preserve canonical route structure
- avoid creating duplicate intent across LATAM and USA pages unless that is intentional

## Forms and Lead Capture

### HubSpot

HubSpot is the main lead capture integration.

Files:

- `src/lib/hubspot-forms.ts`
- `src/components/ui/HubSpotFormEmbed.tsx`
- `src/components/ui/FloatingContactForm.tsx`

Used for:

- contact forms
- newsletter forms
- ebook forms

### Subscription API

There is also a local API route:

- `src/app/api/suscripcion/route.ts`

It appends subscriber data into:

- `data/suscriptores.csv`

Important caveat:

- this is filesystem-based and may not be reliable in serverless or ephemeral environments
- current site flows appear to prefer HubSpot embeds instead of this local CSV route

Treat that route as legacy or at least verify real production usage before investing in it.

## Styling System

### Tailwind

Primary styling is via Tailwind.

Key files:

- `tailwind.config.ts`
- `postcss.config.mjs`
- `src/app/globals.css`

### Design tokens

Brand colors, shadows, gradients, fonts, and utility animations are defined across:

- `tailwind.config.ts`
- `src/app/globals.css`

Fonts are loaded with `next/font/google` in the root layout and exposed through CSS variables.

## Deployment and Operations

### Build

The standard production build is:

```bash
npm run build
```

### Hosting assumptions

This repo does not currently show custom deployment infra like:

- `vercel.json`
- Docker
- CI pipelines

It appears to be a standard Next.js deployment flow, likely connected directly from GitHub to hosting.

### Practical deployment expectation

- pushing to `main` is the likely path to production

Always confirm whether:

- the deploy is automatic from `main`
- there is any external hosting dashboard step
- proxy behavior is correct after route changes

## Important Known Caveats

1. Root market selector vs redirect behavior

- `src/app/page.tsx` may define a market selection experience
- but `src/proxy.ts` redirects `/` before users normally reach it
- if editing the homepage experience, verify whether the selector is actually reachable in production

2. Redirect logic is business-critical

- old URLs, blog URLs, and market paths depend on `exactRedirects` and generated blog redirects
- a route cleanup can accidentally break SEO or paid links if redirects are not preserved

3. Blog changes are partly generated

- do not hand-edit generated blog JSON unless there is a very good reason
- prefer updating the source CSV or generator logic and then regenerating artifacts

4. File-based subscription storage may not be production-safe

- `src/app/api/suscripcion/route.ts` writes to disk
- if the route becomes important, migrate it to a durable external system

5. There may be legacy route modules still present

- some top-level page files exist mainly for composition or redirect compatibility
- before deleting anything in `src/app`, verify whether it is still referenced by the LATAM catch-all or redirect mapping

## Suggested First Files To Read Before Any Major Change

- `AGENTS.md`
- `docs/seo-keywords.md`
- `src/lib/markets.ts`
- `src/proxy.ts`
- `src/app/es/[[...slug]]/page.tsx`
- `src/app/en-us/layout.tsx`
- `src/app/sitemap.ts`
- `src/lib/blog.ts`
- `scripts/generate-blog-data.mjs`
- `src/components/layout/MarketNavbar.tsx`
- `src/components/layout/MarketFooter.tsx`

## Safe Working Heuristics

- Treat `src/lib/markets.ts` as the route and metadata source of truth
- Treat `src/proxy.ts` as critical infrastructure
- Prefer preserving canonical URLs
- Before changing blog behavior, inspect both generated JSON and the generator script
- Before changing forms, confirm whether the flow is HubSpot or legacy CSV
- Before changing homepage behavior, test `/`, `/es`, and `/en-us`
- For copy tasks, keep SEO intent aligned with `docs/seo-keywords.md`

## Recommended Handoff Mental Model

This is not a generic bilingual Next.js app. It is a market-based marketing site with:

- explicit market routing
- heavy SEO considerations
- redirect-sensitive legacy URLs
- partially generated blog content
- a shared component system with market-specific composition

When in doubt:

- preserve routes
- preserve redirects
- preserve metadata intent
- verify both markets
- avoid breaking blog generation artifacts
