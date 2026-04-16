import type { MetadataRoute } from "next";
import { latamBlogPosts, usaBlogPosts } from "@/lib/blog";
import { SITE_URL, canonicalRoutes } from "@/lib/markets";

/* ------------------------------------------------------------------ */
/*  hreflang alternate pairs                                          */
/*  Each entry maps a path to its es / en-US counterpart so Google    */
/*  understands the language relationship.                            */
/* ------------------------------------------------------------------ */

function alt(es: string, enUS: string) {
  return {
    es: `${SITE_URL}${es}`,
    "en-US": `${SITE_URL}${enUS}`,
  };
}

const alternatePairs: Record<string, Record<string, string>> = {
  // Home
  [canonicalRoutes.latam.home]: alt(canonicalRoutes.latam.home, canonicalRoutes.usa.home),
  [canonicalRoutes.usa.home]: alt(canonicalRoutes.latam.home, canonicalRoutes.usa.home),
  // Contact
  [canonicalRoutes.latam.contacto]: alt(canonicalRoutes.latam.contacto, canonicalRoutes.usa.contact),
  [canonicalRoutes.usa.contact]: alt(canonicalRoutes.latam.contacto, canonicalRoutes.usa.contact),
  // Digital Shelf Analytics
  [canonicalRoutes.latam.dsa]: alt(canonicalRoutes.latam.dsa, canonicalRoutes.usa.dsa),
  [canonicalRoutes.usa.dsa]: alt(canonicalRoutes.latam.dsa, canonicalRoutes.usa.dsa),
  // Resources
  [canonicalRoutes.latam.recursos]: alt(canonicalRoutes.latam.recursos, canonicalRoutes.usa.resources),
  [canonicalRoutes.usa.resources]: alt(canonicalRoutes.latam.recursos, canonicalRoutes.usa.resources),
  // Blog index
  [canonicalRoutes.latam.blog]: alt(canonicalRoutes.latam.blog, canonicalRoutes.usa.blog),
  [canonicalRoutes.usa.blog]: alt(canonicalRoutes.latam.blog, canonicalRoutes.usa.blog),
  // Privacy policy
  [canonicalRoutes.latam.privacyPolicy]: alt(canonicalRoutes.latam.privacyPolicy, canonicalRoutes.usa.privacyPolicy),
  [canonicalRoutes.usa.privacyPolicy]: alt(canonicalRoutes.latam.privacyPolicy, canonicalRoutes.usa.privacyPolicy),
};

/* ------------------------------------------------------------------ */
/*  Static page URLs (no redirects, no aliases, only real pages)      */
/* ------------------------------------------------------------------ */

const staticUrls: string[] = [
  // ── LATAM core ──
  canonicalRoutes.latam.home,
  canonicalRoutes.latam.content,
  canonicalRoutes.latam.connect,
  canonicalRoutes.latam.assistant,
  canonicalRoutes.latam.dsa,
  canonicalRoutes.latam.contacto,
  canonicalRoutes.latam.nosotros,
  canonicalRoutes.latam.recursos,
  canonicalRoutes.latam.blog,
  canonicalRoutes.latam.suscripcion,
  canonicalRoutes.latam.privacyPolicy,

  // ── LATAM blog posts estáticos ──
  "/es/recursos/blog/mundial-2026-ecommerce-contenido-producto",
  "/es/recursos/blog/cyberday-ventas-online-ecommerce",
  "/es/recursos/blog/cross-selling-up-selling-ecommerce",
  "/es/recursos/blog/contenido-enriquecido-tecnologia-ecommerce",

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
  "/en-us/resources/blog/authorized-retailers-map-violations",
  "/en-us/resources/blog/amazon-prime-day-map-monitoring",
  "/en-us/resources/blog/walmart-map-monitoring",
  "/en-us/resources/blog/map-enforcement-kpis",
];

/* ------------------------------------------------------------------ */
/*  Build the full URL list: static pages + generated blog posts      */
/* ------------------------------------------------------------------ */

const allUrls = [
  ...staticUrls,
  ...latamBlogPosts.map((post) => post.path),
  ...usaBlogPosts.map((post) => post.path),
];

// De-duplicate (blog posts estáticos could overlap with generated data)
const uniqueUrls = [...new Set(allUrls)];

/* ------------------------------------------------------------------ */
/*  Priority helper                                                   */
/* ------------------------------------------------------------------ */

function getPriority(path: string): number {
  // Market homepages — highest priority
  if (path === "/es" || path === "/en-us") return 1.0;
  // Core product pages
  if (
    path === canonicalRoutes.latam.content ||
    path === canonicalRoutes.latam.connect ||
    path === canonicalRoutes.latam.assistant ||
    path === canonicalRoutes.latam.dsa ||
    path === canonicalRoutes.usa.map ||
    path === canonicalRoutes.usa.dsa
  )
    return 0.9;
  // Contact / lead capture
  if (path === canonicalRoutes.latam.contacto || path === canonicalRoutes.usa.contact) return 0.9;
  // Blog posts
  if (path.includes("/blog/")) return 0.6;
  // Everything else (resources, legal, solutions, industries)
  return 0.7;
}

/* ------------------------------------------------------------------ */
/*  Change frequency helper                                           */
/* ------------------------------------------------------------------ */

function getChangeFreq(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/es" || path === "/en-us") return "weekly";
  if (path.includes("/blog")) return "weekly";
  return "monthly";
}

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */

export default function sitemap(): MetadataRoute.Sitemap {
  return uniqueUrls.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-04-15"),
    changeFrequency: getChangeFreq(path),
    priority: getPriority(path),
    ...(alternatePairs[path]
      ? { alternates: { languages: alternatePairs[path] } }
      : {}),
  }));
}
