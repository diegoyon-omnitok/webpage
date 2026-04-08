import type { MetadataRoute } from "next";
import { latamBlogPosts, usaBlogPosts } from "@/lib/blog";
import { SITE_URL, canonicalRoutes } from "@/lib/markets";

const now = new Date();

const alternatePairs: Record<string, { es?: string; enUS?: string }> = {
  [canonicalRoutes.latam.home]: { es: `${SITE_URL}${canonicalRoutes.latam.home}`, enUS: `${SITE_URL}${canonicalRoutes.usa.home}` },
  [canonicalRoutes.usa.home]: { es: `${SITE_URL}${canonicalRoutes.latam.home}`, enUS: `${SITE_URL}${canonicalRoutes.usa.home}` },
  [canonicalRoutes.latam.contacto]: { es: `${SITE_URL}${canonicalRoutes.latam.contacto}`, enUS: `${SITE_URL}${canonicalRoutes.usa.contact}` },
  [canonicalRoutes.usa.contact]: { es: `${SITE_URL}${canonicalRoutes.latam.contacto}`, enUS: `${SITE_URL}${canonicalRoutes.usa.contact}` },
  [canonicalRoutes.latam.dsa]: {
    es: `${SITE_URL}${canonicalRoutes.latam.dsa}`,
    enUS: `${SITE_URL}${canonicalRoutes.usa.dsa}`,
  },
  [canonicalRoutes.usa.dsa]: {
    es: `${SITE_URL}${canonicalRoutes.latam.dsa}`,
    enUS: `${SITE_URL}${canonicalRoutes.usa.dsa}`,
  },
  [canonicalRoutes.latam.recursos]: { es: `${SITE_URL}${canonicalRoutes.latam.recursos}`, enUS: `${SITE_URL}${canonicalRoutes.usa.resources}` },
  [canonicalRoutes.usa.resources]: { es: `${SITE_URL}${canonicalRoutes.latam.recursos}`, enUS: `${SITE_URL}${canonicalRoutes.usa.resources}` },
  [canonicalRoutes.latam.blog]: { es: `${SITE_URL}${canonicalRoutes.latam.blog}`, enUS: `${SITE_URL}${canonicalRoutes.usa.blog}` },
  [canonicalRoutes.usa.blog]: { es: `${SITE_URL}${canonicalRoutes.latam.blog}`, enUS: `${SITE_URL}${canonicalRoutes.usa.blog}` },
  [canonicalRoutes.latam.privacyPolicy]: {
    es: `${SITE_URL}${canonicalRoutes.latam.privacyPolicy}`,
    enUS: `${SITE_URL}${canonicalRoutes.usa.privacyPolicy}`,
  },
  [canonicalRoutes.usa.privacyPolicy]: {
    es: `${SITE_URL}${canonicalRoutes.latam.privacyPolicy}`,
    enUS: `${SITE_URL}${canonicalRoutes.usa.privacyPolicy}`,
  },
};

const urls = [
  "/",
  canonicalRoutes.latam.home,
  canonicalRoutes.latam.contacto,
  "/es/demo",
  "/es/pricing",
  canonicalRoutes.latam.suscripcion,
  canonicalRoutes.latam.content,
  canonicalRoutes.latam.connect,
  canonicalRoutes.latam.assistant,
  canonicalRoutes.latam.dsa,
  "/es/soluciones",
  "/es/soluciones/marketplaces",
  "/es/soluciones/gestion-catalogo",
  "/es/soluciones/optimizacion-pdps",
  "/es/soluciones/analytics",
  "/es/industrias",
  "/es/industrias/consumer-goods",
  "/es/industrias/electronica",
  "/es/industrias/belleza",
  "/es/industrias/hogar",
  canonicalRoutes.latam.nosotros,
  "/es/nosotros/equipo",
  canonicalRoutes.latam.recursos,
  canonicalRoutes.latam.blog,
  canonicalRoutes.latam.privacyPolicy,
  "/es/recursos/whitepapers",
  "/es/recursos/webinars",
  "/es/recursos/webinars/la-experiencia-digital-hoy-define-la-decision-de-compra",
  "/es/casos-de-exito",
  canonicalRoutes.usa.home,
  canonicalRoutes.usa.map,
  canonicalRoutes.usa.dsa,
  canonicalRoutes.usa.resources,
  canonicalRoutes.usa.ebooks,
  canonicalRoutes.usa.glossary,
  canonicalRoutes.usa.blog,
  canonicalRoutes.usa.contact,
  canonicalRoutes.usa.privacyPolicy,
  canonicalRoutes.usa.termsOfService,
  ...latamBlogPosts.map((post) => post.path),
  ...usaBlogPosts.map((post) => post.path),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return urls.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency:
      path.startsWith("/en-us/blog") || path.startsWith("/es/blog") || path.includes("/recursos/blog")
        ? "weekly"
        : "monthly",
    priority: path === "/" ? 0.7 : path === "/es" || path === "/en-us" ? 1 : 0.8,
    alternates: alternatePairs[path]
      ? {
          languages: {
            ...(alternatePairs[path].es ? { es: alternatePairs[path].es } : {}),
            ...(alternatePairs[path].enUS ? { "en-US": alternatePairs[path].enUS } : {}),
          },
        }
      : undefined,
  }));
}
