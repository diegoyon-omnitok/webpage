import type { Metadata } from "next";
import { blogRedirectMap } from "@/lib/blog";

export const SITE_URL = "https://omnitok.com";
export const MARKET_COOKIE = "omnitok-market";

export type MarketKey = "latam" | "usa";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  desc?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
  overviewHref?: string;
  overviewLabel?: string;
};

export type MarketConfig = {
  key: MarketKey;
  label: string;
  locale: string;
  htmlLang: string;
  basePath: "/es" | "/en-us";
  homePath: "/es" | "/en-us";
  ctaLabel: string;
  ctaHref: string;
  brandText: string;
  footerText: string;
  navGroups: NavGroup[];
  footerColumns: Record<string, NavItem[]>;
  topLevelNav?: NavItem[];
};

export const canonicalRoutes = {
  latam: {
    home: "/es",
    assistant: "/es/asistente-de-compra",
    content: "/es/contenido-enriquecido",
    connect: "/es/gestion-de-contenido-de-producto",
    dsa: "/es/digital-shelf-analytics",
    nosotros: "/es/nosotros",
    contacto: "/es/contacto",
    recursos: "/es/recursos",
    blog: "/es/blog",
    suscripcion: "/es/suscripcion",
    privacyPolicy: "/es/politica-de-privacidad",
  },
  usa: {
    home: "/en-us",
    map: "/en-us/map-monitoring",
    dsa: "/en-us/digital-shelf-analytics",
    resources: "/en-us/resources",
    ebooks: "/en-us/resources/ebooks",
    glossary: "/en-us/resources/glossary",
    contact: "/en-us/contact",
    blog: "/en-us/blog",
    privacyPolicy: "/en-us/privacy-policy",
    termsOfService: "/en-us/terms-of-service",
  },
} as const;

export const marketConfigs: Record<MarketKey, MarketConfig> = {
  latam: {
    key: "latam",
    label: "LATAM / Espanol",
    locale: "es",
    htmlLang: "es",
    basePath: "/es",
    homePath: canonicalRoutes.latam.home,
    ctaLabel: "Conversemos",
    ctaHref: canonicalRoutes.latam.contacto,
    brandText: "Digital Shelf Execution Platform para LATAM",
    footerText:
      "La plataforma de ejecucion digital en retail para marcas que venden en LATAM.",
    navGroups: [
      {
        label: "Productos",
        items: [
          {
            label: "Omnitok Content",
            href: canonicalRoutes.latam.content,
            desc: "Contenido enriquecido para ecommerce y retailers",
          },
          {
            label: "Digital Shelf Analytics",
            href: canonicalRoutes.latam.dsa,
            desc: "Control de ejecucion digital en retailers",
          },
          {
            label: "Omnitok Connect",
            href: canonicalRoutes.latam.connect,
            desc: "Gestion de contenido de producto y sindicación",
          },
          {
            label: "Omnitok Assistant",
            href: canonicalRoutes.latam.assistant,
            desc: "Asistente de compra para ecommerce",
          },
        ],
      },
      {
        label: "Recursos",
        items: [
          { label: "Blog", href: canonicalRoutes.latam.blog },
          { label: "Omnitok LABS", href: "https://lab.omnitok.com/", external: true },
        ],
      },
      {
        label: "Nosotros",
        items: [
          { label: "Quienes somos", href: canonicalRoutes.latam.nosotros },
          { label: "Contacto", href: canonicalRoutes.latam.contacto },
        ],
      },
    ],
    footerColumns: {
      Plataforma: [
        { label: "Contenido enriquecido", href: canonicalRoutes.latam.content },
        { label: "Digital Shelf Analytics", href: canonicalRoutes.latam.dsa },
        { label: "Gestion de contenido", href: canonicalRoutes.latam.connect },
        { label: "Asistente de compra", href: canonicalRoutes.latam.assistant },
      ],
      Recursos: [
        { label: "Recursos", href: canonicalRoutes.latam.recursos },
        { label: "Blog", href: canonicalRoutes.latam.blog },
        { label: "Casos de exito", href: "/es/casos-de-exito" },
        { label: "Omnitok LABS", href: "https://lab.omnitok.com/", external: true },
      ],
      Empresa: [
        { label: "Nosotros", href: canonicalRoutes.latam.nosotros },
        { label: "Contacto", href: canonicalRoutes.latam.contacto },
        { label: "Suscripcion", href: canonicalRoutes.latam.suscripcion },
        { label: "Politica de privacidad", href: canonicalRoutes.latam.privacyPolicy },
        { label: "Conversemos", href: canonicalRoutes.latam.contacto },
      ],
    },
  },
  usa: {
    key: "usa",
    label: "United States / English",
    locale: "en-US",
    htmlLang: "en-US",
    basePath: "/en-us",
    homePath: canonicalRoutes.usa.home,
    ctaLabel: "Talk to sales",
    ctaHref: canonicalRoutes.usa.contact,
    brandText: "MAP monitoring and digital shelf visibility for brands",
    footerText:
      "Omnitok helps brands protect margin, monitor seller compliance, and improve digital shelf execution across retailers and marketplaces.",
    navGroups: [
      {
        label: "Product",
        items: [
          {
            label: "MAP",
            href: canonicalRoutes.usa.map,
            desc: "MAP monitoring software for compliance and brand protection",
          },
          {
            label: "Digital Shelf Analytics",
            href: canonicalRoutes.usa.dsa,
            desc: "Price, availability and content monitoring across retailers",
          },
        ],
      },
      {
        label: "Resources",
        overviewHref: canonicalRoutes.usa.resources,
        overviewLabel: "View all resources",
        items: [
          {
            label: "Blog",
            href: canonicalRoutes.usa.blog,
            desc: "Educational content for MAP monitoring and digital shelf strategy",
          },
          {
            label: "Ebooks",
            href: canonicalRoutes.usa.ebooks,
            desc: "Downloadable buying guides and strategic content for ecommerce teams",
          },
          {
            label: "Glossary",
            href: canonicalRoutes.usa.glossary,
            desc: "Definitions for MAP monitoring, compliance and digital shelf terms",
          },
        ],
      },
    ],
    topLevelNav: [
      { label: "Contact", href: canonicalRoutes.usa.contact },
    ],
    footerColumns: {
      Products: [
        { label: "MAP monitoring", href: canonicalRoutes.usa.map },
        { label: "Digital Shelf Analytics", href: canonicalRoutes.usa.dsa },
      ],
      Resources: [
        { label: "Resources hub", href: canonicalRoutes.usa.resources },
        { label: "Ebooks", href: canonicalRoutes.usa.ebooks },
        { label: "Glossary", href: canonicalRoutes.usa.glossary },
        { label: "Blog", href: canonicalRoutes.usa.blog },
      ],
      Company: [
        { label: "Contact", href: canonicalRoutes.usa.contact },
        { label: "Privacy policy", href: canonicalRoutes.usa.privacyPolicy },
        { label: "Terms of service", href: canonicalRoutes.usa.termsOfService },
        { label: "Switch to LATAM", href: canonicalRoutes.latam.home },
      ],
    },
  },
};

export const marketAlternates = {
  home: {
    latam: canonicalRoutes.latam.home,
    usa: canonicalRoutes.usa.home,
  },
  contact: {
    latam: canonicalRoutes.latam.contacto,
    usa: canonicalRoutes.usa.contact,
  },
  dsa: {
    latam: canonicalRoutes.latam.dsa,
    usa: canonicalRoutes.usa.dsa,
  },
  resources: {
    latam: canonicalRoutes.latam.recursos,
    usa: canonicalRoutes.usa.resources,
  },
  blog: {
    latam: canonicalRoutes.latam.blog,
    usa: canonicalRoutes.usa.blog,
  },
  privacy: {
    latam: canonicalRoutes.latam.privacyPolicy,
    usa: canonicalRoutes.usa.privacyPolicy,
  },
} as const;

export const switcherMap: Record<string, Partial<Record<MarketKey, string>>> = {
  [canonicalRoutes.latam.home]: { usa: canonicalRoutes.usa.home },
  [canonicalRoutes.usa.home]: { latam: canonicalRoutes.latam.home },
  [canonicalRoutes.latam.contacto]: { usa: canonicalRoutes.usa.contact },
  [canonicalRoutes.usa.contact]: { latam: canonicalRoutes.latam.contacto },
  [canonicalRoutes.latam.dsa]: { usa: canonicalRoutes.usa.dsa },
  [canonicalRoutes.usa.dsa]: { latam: canonicalRoutes.latam.dsa },
  [canonicalRoutes.latam.recursos]: { usa: canonicalRoutes.usa.resources },
  [canonicalRoutes.usa.resources]: { latam: canonicalRoutes.latam.recursos },
  [canonicalRoutes.latam.blog]: { usa: canonicalRoutes.usa.blog },
  [canonicalRoutes.usa.blog]: { latam: canonicalRoutes.latam.blog },
  [canonicalRoutes.latam.privacyPolicy]: { usa: canonicalRoutes.usa.privacyPolicy },
  [canonicalRoutes.usa.privacyPolicy]: { latam: canonicalRoutes.latam.privacyPolicy },
};

export const exactRedirects: Record<string, string> = {
  "/map-monitoring-and-enforcement": canonicalRoutes.usa.map,
  "/assistant": canonicalRoutes.latam.assistant,
  "/blog-omnitok": canonicalRoutes.latam.blog,
  "/content": canonicalRoutes.latam.content,
  "/connect": canonicalRoutes.latam.connect,
  "/digital-shelf": canonicalRoutes.latam.dsa,
  "/digital-shelf-analytics_en": canonicalRoutes.usa.dsa,
  "/dsa": canonicalRoutes.latam.dsa,
  "/blog": canonicalRoutes.usa.blog,
  "/recursos/blog": canonicalRoutes.latam.blog,
  "/contacto": canonicalRoutes.latam.contacto,
  "/contact_en": canonicalRoutes.usa.contact,
  "/home_en": canonicalRoutes.usa.home,
  "/nosotros": canonicalRoutes.latam.nosotros,
  "/recursos": canonicalRoutes.latam.recursos,
  "/suscripcion": canonicalRoutes.latam.suscripcion,
  "/ebook": canonicalRoutes.usa.ebooks,
  "/glossary": canonicalRoutes.usa.glossary,
  "/privacypolicy": canonicalRoutes.usa.privacyPolicy,
  "/privacy": canonicalRoutes.usa.privacyPolicy,
  "/politica-privacidad": canonicalRoutes.latam.privacyPolicy,
  "/terms": canonicalRoutes.usa.termsOfService,
  "/tos": canonicalRoutes.usa.termsOfService,
  "/webinar-la-experiencia-digital-hoy-define-la-decision-de-compra":
    "/es/recursos/webinars/la-experiencia-digital-hoy-define-la-decision-de-compra",
  "/plataforma/assistant": canonicalRoutes.latam.assistant,
  "/plataforma/content": canonicalRoutes.latam.content,
  "/plataforma/connect": canonicalRoutes.latam.connect,
  "/plataforma/digital-shelf-analytics": canonicalRoutes.latam.dsa,
  "/es/plataforma/assistant": canonicalRoutes.latam.assistant,
  "/es/plataforma/content": canonicalRoutes.latam.content,
  "/es/plataforma/connect": canonicalRoutes.latam.connect,
  "/es/plataforma/digital-shelf-analytics": canonicalRoutes.latam.dsa,
  "/es/recursos/blog": canonicalRoutes.latam.blog,
  "/en-us/map": canonicalRoutes.usa.map,
  "/en-us/resources/blog": canonicalRoutes.usa.blog,
  ...blogRedirectMap,
};

export const latamCountryCodes = new Set([
  "AR",
  "BO",
  "BR",
  "CL",
  "CO",
  "CR",
  "DO",
  "EC",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

export function getMarketFromPathname(pathname: string): MarketKey | null {
  if (pathname === "/en-us" || pathname.startsWith("/en-us/")) return "usa";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "latam";
  return null;
}

export function getSwitcherTarget(pathname: string, targetMarket: MarketKey): string {
  return switcherMap[pathname]?.[targetMarket] ?? marketConfigs[targetMarket].homePath;
}

export function getRedirectPath(pathname: string): string | null {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (exactRedirects[normalizedPath]) {
    return exactRedirects[normalizedPath];
  }

  return null;
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: string;
  alternates?: Record<string, string>;
  keywords?: string[];
  robots?: Metadata["robots"];
  openGraphImage?: string;
};

export function buildMetadata(input: MetadataInput): Metadata {
  const canonical = input.path;
  return {
    title: {
      absolute: input.title,
    },
    description: input.description,
    keywords: input.keywords,
    robots: input.robots,
    alternates: {
      canonical,
      languages: input.alternates,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: "Omnitok",
      locale: input.locale === "es" ? "es_CL" : "en_US",
      type: "website",
      images: input.openGraphImage ? [input.openGraphImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: input.openGraphImage ? [input.openGraphImage] : undefined,
    },
  };
}
