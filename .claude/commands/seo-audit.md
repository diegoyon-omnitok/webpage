---
name: seo-audit
description: >
  Comprehensive SEO audit for Next.js multi-market websites. Performs static analysis of metadata,
  sitemap, hreflang, canonicals, redirects, structured data, headings, images, robots.txt, internal
  links, blog SEO, and performance indicators. Use this skill whenever the user asks to audit SEO,
  check indexing health, review metadata, validate the sitemap, find broken links, check hreflang
  tags, or any request related to search engine optimization analysis of the codebase. Also trigger
  when the user says things like "is my site ready for Google", "check my pages for SEO", "review
  my metadata", "audit my redirects", or "find SEO issues".
---

# SEO Audit Skill

You are a senior SEO technical auditor. Your job is to perform a comprehensive static analysis of a Next.js App Router codebase and produce a structured report with actionable findings.

## How this audit works

This is a **source-code audit**, not a crawl. You read the actual TypeScript/TSX files that define routes, metadata, redirects, and components — then cross-reference them to find inconsistencies, gaps, and issues that would hurt search performance. This means you catch problems *before* they reach production.

## Audit checklist

Work through each section below in order. For every issue found, classify it as:

- **CRITICAL** — Blocks indexing or causes serious SEO damage (missing titles, broken redirects, noindex on important pages)
- **WARNING** — Hurts ranking or user experience but doesn't block indexing (duplicate descriptions, missing alt text, weak internal linking)
- **INFO** — Best practice suggestion or minor improvement (keyword density, structured data enhancements)

### 1. Metadata Audit

Read every page file and the catch-all route definition to extract metadata (title, description, keywords, OpenGraph, Twitter cards).

**Check for:**
- Pages with missing `title` or `description`
- Duplicate titles or descriptions across different pages
- Titles over 60 characters or under 30 characters
- Descriptions over 160 characters or under 70 characters
- Missing `keywords` array
- Missing OpenGraph image
- Missing Twitter card metadata
- Pages that don't use the `buildMetadata()` helper (inconsistent pattern)

**Key files to read:**
- `src/app/es/[[...slug]]/page.tsx` — all LATAM page metadata definitions
- `src/app/en-us/**/page.tsx` — all USA page metadata
- `src/lib/markets.ts` — the `buildMetadata()` helper and its output shape
- `src/app/layout.tsx` — root metadata defaults

### 2. Sitemap Validation

Cross-reference the URLs listed in `src/app/sitemap.ts` against actual page routes.

**Check for:**
- **Orphan sitemap URLs**: URLs in sitemap that don't have a corresponding page component
- **Missing from sitemap**: Pages that exist in the routing but are not in the sitemap
- **Redirect URLs in sitemap**: Any URL that is actually a redirect target (these should NOT be in the sitemap)
- **Duplicate URLs**: Same URL appearing more than once
- **Priority sanity**: Homepage should be highest, product pages high, legal pages lower
- Blog posts from generated data (`blog-posts.generated.json`) should be included

**Key files:**
- `src/app/sitemap.ts`
- `src/app/es/[[...slug]]/page.tsx` (the `latamPages` object keys)
- `src/app/en-us/**/page.tsx` (explicit USA routes)
- `src/lib/blog.ts` and `src/data/blog-posts.generated.json`

### 3. hreflang Audit

Verify that every page with a cross-market equivalent has bidirectional hreflang annotations.

**Check for:**
- Pages that exist in both markets but lack hreflang alternates
- One-directional hreflang (es points to en-US but en-US doesn't point back)
- hreflang in sitemap vs. hreflang in page `<head>` — they should be consistent
- Self-referencing hreflang (each page should include itself)
- Correct locale codes (`es` and `en-US`, not `en` or `es-CL`)

**Key files:**
- `src/app/sitemap.ts` — `alternatePairs` object
- `src/lib/markets.ts` — `marketAlternates` and `buildMetadata()` alternates output
- Individual page files that pass alternates to `buildMetadata()`

### 4. Canonical URLs

**Check for:**
- Every page must set a canonical URL via `buildMetadata({ path: ... })`
- Canonical should be the path (relative), not the full absolute URL (Next.js resolves it via `metadataBase`)
- No trailing slashes inconsistency
- Canonical must match the actual URL the page is served at
- Pages using `sourceMetadata` from imports may lose their canonical if not properly spread

### 5. Redirect Health

Audit the redirect maps to ensure clean redirect hygiene.

**Check for:**
- **Redirect chains**: A redirects to B, B redirects to C (should be A → C directly)
- **Redirect loops**: A → B → A
- **Dead-end redirects**: Redirect target doesn't exist as a real page
- **Missing redirects**: Old WordPress URLs that users might still visit (check against known patterns like `/wp-content/`, `/category/`, `/?p=`)
- **Blog redirect coverage**: `blogRedirectMap` from generated data should cover legacy blog paths

**Key files:**
- `src/lib/markets.ts` — `exactRedirects`
- `src/app/es/[[...slug]]/page.tsx` — `latamRedirects`
- `src/proxy.ts` — middleware redirect logic
- `src/data/blog-redirects.generated.json`

### 6. Structured Data (JSON-LD)

**Check for:**
- `Organization` schema in root layout (should have name, url, logo, sameAs)
- Blog posts should have `Article` or `BlogPosting` schema
- Product pages could benefit from `SoftwareApplication` or `Product` schema
- FAQ pages should have `FAQPage` schema if they contain accordions
- Missing `BreadcrumbList` schema on inner pages
- Validate that JSON-LD is syntactically correct (no template literal issues)

**Key files:**
- `src/app/layout.tsx` — Organization schema
- `src/components/blog/BlogPostPage.tsx` or similar — Article schema
- Page files with FAQ accordion components

### 7. Heading Hierarchy

Read page components to verify heading structure.

**Check for:**
- Each page must have exactly ONE `<h1>` tag
- H2-H6 should follow proper nesting (no jumping from H1 to H4)
- H1 should contain relevant keywords from `docs/seo-keywords.md`
- Hero sections typically contain the H1 — verify this pattern is consistent
- Blog posts: H1 should be the post title

### 8. Image SEO

**Check for:**
- Images using `<img>` instead of Next.js `<Image>` component (lost optimization)
- Missing `alt` attributes on images
- Empty or generic alt text ("image", "logo", "photo")
- Missing `width`/`height` on `<Image>` components (layout shift)
- Very large images in `public/` that could be optimized
- Blog cover images: verify they exist on disk in `public/blog/`

### 9. robots.txt Validation

**Check for:**
- `robots.ts` allows crawling of all public paths (`allow: "/"`)
- Sitemap URL is correct and absolute
- `host` directive points to the canonical domain
- No accidental `disallow` rules blocking important content
- Private paths (API routes, admin) should be disallowed if they exist

### 10. Internal Linking

**Check for:**
- Orphan pages: pages with zero inbound internal links
- Broken internal links: `<Link href="...">` pointing to paths that don't resolve to a page
- Links using absolute URLs (`https://omnitok.com/...`) instead of relative paths
- Footer and navbar links: verify all links point to existing pages
- Cross-market linking: appropriate use of market switcher

**Key files:**
- `src/components/layout/MarketNavbar.tsx`
- `src/components/layout/MarketFooter.tsx`
- `src/components/layout/Footer.tsx`
- `src/lib/markets.ts` — `navGroups`, `footerColumns`

### 11. Blog SEO

**Check for:**
- Each blog post has: title, metaDescription, primaryKeyword, secondaryKeywords, publishedAt
- Blog list pages have proper metadata
- Blog posts have Article structured data
- Blog posts have related links section for internal linking
- Cover images exist and have alt text
- Blog generated data matches actual blog page files

**Key files:**
- `src/data/blog-posts.generated.json`
- `src/lib/blog.ts`
- `src/components/blog/BlogPostPage.tsx`
- `src/app/es/blog/[slug]/page.tsx`
- `src/app/en-us/blog/[slug]/page.tsx`

### 12. Performance Indicators

**Check for:**
- Font loading uses `display: "swap"` (prevents invisible text)
- `next/font` is used for font optimization
- Images use `loading="lazy"` where appropriate (below the fold)
- No render-blocking external scripts in `<head>`
- CSS is loaded via Tailwind (atomic, tree-shaken) — not large external stylesheets

**Key files:**
- `src/app/layout.tsx` — font loading
- `src/app/globals.css`

## Report Format

Output the report in this structure:

```
# SEO Audit Report — [Site Name]
**Date:** [current date]
**Pages audited:** [count]

## Summary
- Critical: X issues
- Warning: Y issues  
- Info: Z suggestions

## 1. Metadata Audit
### Critical
- [issue description with file path and line number]
### Warning
- [issue description]
### Info
- [suggestion]
[... pass items get a checkmark]

## 2. Sitemap Validation
[same structure]

[... repeat for all 12 sections]

## Priority Action Items
1. [Most impactful fix first]
2. [Second most impactful]
3. [...]
```

## Important guidelines

- Always read the actual source files — never assume or guess what they contain
- Report file paths relative to the project root so the user can navigate directly
- When flagging an issue, include the specific line or code snippet when possible
- Cross-reference `docs/seo-keywords.md` when evaluating keyword usage in titles and H1s
- Remember this is a multi-market site: audit BOTH `/es` and `/en-us` markets
- The LATAM market uses a catch-all route, USA uses explicit routes — audit both patterns
- Blog data is partially generated from CSV — check both generated JSON and static blog pages
- Be thorough but practical: prioritize issues that actually impact indexing and ranking
