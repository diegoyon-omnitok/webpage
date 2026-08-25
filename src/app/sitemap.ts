import type { MetadataRoute } from "next";
import { brasilBlogPosts, getTranslatedPost, latamBlogPosts, usaBlogPosts } from "@/lib/blog";
import { resources, resourcePath } from "@/data/resources";
import { SITE_URL, canonicalRoutes } from "@/lib/markets";

/* ------------------------------------------------------------------ */
/*  hreflang alternate pairs                                          */
/*  Each entry maps a path to its es / en-US counterpart so Google    */
/*  understands the language relationship.                            */
/* ------------------------------------------------------------------ */

function alt(es: string, enUS: string, ptBR?: string) {
  return {
    es: `${SITE_URL}${es}`,
    "en-US": `${SITE_URL}${enUS}`,
    ...(ptBR ? { "pt-BR": `${SITE_URL}${ptBR}` } : {}),
    "x-default": `${SITE_URL}${es}`,
  };
}

// Variante para páginas que solo existen en LATAM y Brasil.
function altEsPt(es: string, ptBR: string) {
  return {
    es: `${SITE_URL}${es}`,
    "pt-BR": `${SITE_URL}${ptBR}`,
    "x-default": `${SITE_URL}${es}`,
  };
}

const homeAlt = alt(canonicalRoutes.latam.home, canonicalRoutes.usa.home, canonicalRoutes.brasil.home);
const contactAlt = alt(canonicalRoutes.latam.contacto, canonicalRoutes.usa.contact, canonicalRoutes.brasil.contacto);
const dsaAlt = alt(canonicalRoutes.latam.dsa, canonicalRoutes.usa.dsa, canonicalRoutes.brasil.dsa);
const blogAlt = alt(canonicalRoutes.latam.blog, canonicalRoutes.usa.blog, canonicalRoutes.brasil.blog);
const privacyAlt = alt(canonicalRoutes.latam.privacyPolicy, canonicalRoutes.usa.privacyPolicy, canonicalRoutes.brasil.privacyPolicy);
const aboutAlt = alt(canonicalRoutes.latam.nosotros, canonicalRoutes.usa.about, canonicalRoutes.brasil.nosotros);
const termsAlt = alt(canonicalRoutes.latam.termsOfUse, canonicalRoutes.usa.termsOfService, canonicalRoutes.brasil.termsOfUse);
const contentAlt = altEsPt(canonicalRoutes.latam.content, canonicalRoutes.brasil.content);
const connectAlt = altEsPt(canonicalRoutes.latam.connect, canonicalRoutes.brasil.connect);

const alternatePairs: Record<string, Record<string, string>> = {
  // Home
  [canonicalRoutes.latam.home]: homeAlt,
  [canonicalRoutes.usa.home]: homeAlt,
  [canonicalRoutes.brasil.home]: homeAlt,
  // Contact
  [canonicalRoutes.latam.contacto]: contactAlt,
  [canonicalRoutes.usa.contact]: contactAlt,
  [canonicalRoutes.brasil.contacto]: contactAlt,
  // Digital Shelf Analytics
  [canonicalRoutes.latam.dsa]: dsaAlt,
  [canonicalRoutes.usa.dsa]: dsaAlt,
  [canonicalRoutes.brasil.dsa]: dsaAlt,
  // Content / Connect (solo LATAM + Brasil)
  [canonicalRoutes.latam.content]: contentAlt,
  [canonicalRoutes.brasil.content]: contentAlt,
  [canonicalRoutes.latam.connect]: connectAlt,
  [canonicalRoutes.brasil.connect]: connectAlt,
  // Resources
  [canonicalRoutes.latam.recursos]: alt(canonicalRoutes.latam.recursos, canonicalRoutes.usa.resources),
  [canonicalRoutes.usa.resources]: alt(canonicalRoutes.latam.recursos, canonicalRoutes.usa.resources),
  // Blog index
  [canonicalRoutes.latam.blog]: blogAlt,
  [canonicalRoutes.usa.blog]: blogAlt,
  [canonicalRoutes.brasil.blog]: blogAlt,
  // Privacy policy
  [canonicalRoutes.latam.privacyPolicy]: privacyAlt,
  [canonicalRoutes.usa.privacyPolicy]: privacyAlt,
  [canonicalRoutes.brasil.privacyPolicy]: privacyAlt,
  // About / Nosotros
  [canonicalRoutes.latam.nosotros]: aboutAlt,
  [canonicalRoutes.usa.about]: aboutAlt,
  [canonicalRoutes.brasil.nosotros]: aboutAlt,
  // Terms
  [canonicalRoutes.latam.termsOfUse]: termsAlt,
  [canonicalRoutes.usa.termsOfService]: termsAlt,
  [canonicalRoutes.brasil.termsOfUse]: termsAlt,
};

// Pares de posts traducidos (ES ↔ pt-BR): mismo hreflang para ambas URLs.
for (const post of latamBlogPosts) {
  const translated = getTranslatedPost(post);
  if (!translated) continue;
  const pairAlt = altEsPt(post.path, translated.path);
  alternatePairs[post.path] = pairAlt;
  alternatePairs[translated.path] = pairAlt;
}

/* ------------------------------------------------------------------ */
/*  Static page URLs (no redirects, no aliases, only real pages)      */
/* ------------------------------------------------------------------ */

const staticUrls: string[] = [
  // ── LATAM core ──
  canonicalRoutes.latam.home,
  canonicalRoutes.latam.content,
  canonicalRoutes.latam.connect,
  canonicalRoutes.latam.dsa,
  canonicalRoutes.latam.contacto,
  canonicalRoutes.latam.nosotros,
  canonicalRoutes.latam.recursos,
  canonicalRoutes.latam.blog,
  canonicalRoutes.latam.suscripcion,
  canonicalRoutes.latam.privacyPolicy,
  canonicalRoutes.latam.termsOfUse,

  // ── LATAM blog posts estáticos ──
  // (mundial-2026, cyberday, cross-selling y contenido-enriquecido-tecnologia se
  //  quitaron: esas URLs ahora redirigen 301 hacia /es/blog/* y no van en el sitemap.
  //  Sus versiones canónicas entran vía latamBlogPosts más abajo.)

  // ── Brasil core ──
  canonicalRoutes.brasil.home,
  canonicalRoutes.brasil.content,
  canonicalRoutes.brasil.connect,
  canonicalRoutes.brasil.dsa,
  canonicalRoutes.brasil.contacto,
  canonicalRoutes.brasil.nosotros,
  canonicalRoutes.brasil.blog,
  canonicalRoutes.brasil.suscripcion,
  canonicalRoutes.brasil.privacyPolicy,
  canonicalRoutes.brasil.termsOfUse,

  // ── USA core ──
  canonicalRoutes.usa.home,
  "/en-us/about",
  canonicalRoutes.usa.map,
  canonicalRoutes.usa.dsa,
  canonicalRoutes.usa.resources,
  canonicalRoutes.usa.ebooks,
  canonicalRoutes.usa.glossary,
  canonicalRoutes.usa.blog,
  canonicalRoutes.usa.contact,
  canonicalRoutes.usa.privacyPolicy,
  canonicalRoutes.usa.termsOfService,

  // ── USA blog posts estáticos ──
  // (authorized-retailers, amazon-prime-day y walmart se quitaron: esas URLs
  //  ahora son redirecciones 301 hacia /en-us/blog/* y no deben estar en el sitemap)
  "/en-us/resources/blog/map-enforcement-kpis",
];

/* ------------------------------------------------------------------ */
/*  Build the full URL list: static pages + generated blog posts      */
/* ------------------------------------------------------------------ */

const allUrls = [
  ...staticUrls,
  // Landings de la biblioteca de recursos (/es/recursos/<slug>).
  // Se agregan solas al publicar un recurso en src/data/resources.ts.
  ...resources.map((resource) => resourcePath(resource.slug)),
  ...latamBlogPosts.map((post) => post.path),
  ...usaBlogPosts.map((post) => post.path),
  ...brasilBlogPosts.map((post) => post.path),
];

// De-duplicate (blog posts estáticos could overlap with generated data)
const uniqueUrls = [...new Set(allUrls)];

/* ------------------------------------------------------------------ */
/*  Priority helper                                                   */
/* ------------------------------------------------------------------ */

function getPriority(path: string): number {
  // Market homepages — highest priority
  if (path === "/es" || path === "/en-us" || path === "/br") return 1.0;
  // Core product pages
  if (
    path === canonicalRoutes.latam.content ||
    path === canonicalRoutes.latam.connect ||
    path === canonicalRoutes.latam.dsa ||
    path === canonicalRoutes.brasil.content ||
    path === canonicalRoutes.brasil.connect ||
    path === canonicalRoutes.brasil.dsa ||
    path === canonicalRoutes.usa.map ||
    path === canonicalRoutes.usa.dsa
  )
    return 0.9;
  // Contact / lead capture
  if (
    path === canonicalRoutes.latam.contacto ||
    path === canonicalRoutes.usa.contact ||
    path === canonicalRoutes.brasil.contacto
  )
    return 0.9;
  // Blog posts
  if (path.includes("/blog/")) return 0.6;
  // Legal / utility pages — low priority
  if (
    path === canonicalRoutes.latam.privacyPolicy ||
    path === canonicalRoutes.latam.termsOfUse ||
    path === canonicalRoutes.latam.suscripcion ||
    path === canonicalRoutes.usa.privacyPolicy ||
    path === canonicalRoutes.usa.termsOfService ||
    path === canonicalRoutes.brasil.privacyPolicy ||
    path === canonicalRoutes.brasil.termsOfUse ||
    path === canonicalRoutes.brasil.suscripcion
  )
    return 0.3;
  // Everything else (resources, solutions, industries)
  return 0.7;
}

/* ------------------------------------------------------------------ */
/*  Change frequency helper                                           */
/* ------------------------------------------------------------------ */

function getChangeFreq(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/es" || path === "/en-us" || path === "/br") return "weekly";
  if (path.includes("/blog")) return "weekly";
  return "monthly";
}

/* ------------------------------------------------------------------ */
/*  lastModified: fecha real de publicación para posts del blog        */
/* ------------------------------------------------------------------ */

const blogDates = new Map<string, string>(
  [...latamBlogPosts, ...usaBlogPosts, ...brasilBlogPosts].map((post) => [post.path, post.publishedAt]),
);

const STATIC_LAST_MODIFIED = new Date("2026-06-10");

function getLastModified(path: string): Date {
  const published = blogDates.get(path);
  if (published) {
    const timestamp = Date.parse(published);
    if (!Number.isNaN(timestamp)) return new Date(timestamp);
  }
  return STATIC_LAST_MODIFIED;
}

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */

export default function sitemap(): MetadataRoute.Sitemap {
  return uniqueUrls.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: getLastModified(path),
    changeFrequency: getChangeFreq(path),
    priority: getPriority(path),
    ...(alternatePairs[path]
      ? { alternates: { languages: alternatePairs[path] } }
      : {}),
  }));
}
