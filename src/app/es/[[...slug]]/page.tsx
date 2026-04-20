import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import type { ComponentType } from "react";
import LatamHomePage from "@/components/pages/LatamHomePage";
import ContactoPage from "@/app/contacto/page";
import SuscripcionPage from "@/app/suscripcion/page";
import ContentPage from "@/app/plataforma/content/page";
import ConnectPage from "@/app/plataforma/connect/page";
import AssistantPage from "@/app/plataforma/assistant/page";
import DigitalShelfAnalyticsPage from "@/app/plataforma/digital-shelf-analytics/page";
import NosotrosPage from "@/app/nosotros/page";
import RecursosPage from "@/app/recursos/page";
import LatamPrivacyPolicyPage from "@/components/pages/LatamPrivacyPolicyPage";
import LatamTermsOfUsePage from "@/components/pages/LatamTermsOfUsePage";
import MundialPage, {
  metadata as mundialMetadata,
} from "@/app/recursos/blog/mundial-2026-ecommerce-contenido-producto/page";
import CyberdayPage, {
  metadata as cyberdayMetadata,
} from "@/app/recursos/blog/cyberday-ventas-online-ecommerce/page";
import CrossSellingPage, {
  metadata as crossSellingMetadata,
} from "@/app/recursos/blog/cross-selling-up-selling-ecommerce/page";
import ContenidoEnriquecidoPage, {
  metadata as contenidoEnriquecidoMetadata,
} from "@/app/recursos/blog/contenido-enriquecido-tecnologia-ecommerce/page";
import {
  buildMetadata,
  canonicalRoutes,
  marketAlternates,
  type MarketKey,
} from "@/lib/markets";

type PageDefinition = {
  component: ComponentType;
  sourceMetadata?: Metadata;
  manualTitle?: string;
  manualDescription?: string;
  keywords?: string[];
  alternates?: Partial<Record<MarketKey, string>>;
};

const latamPages: Record<string, PageDefinition> = {
  "": {
    component: LatamHomePage,
    manualTitle: "Omnitok | Ejecución Digital en Retailers",
    manualDescription:
      "Mejora la ejecución digital de tu marca en retailers y marketplaces con Omnitok. Centraliza contenido, optimiza páginas de producto y monitorea tu presencia digital.",
    keywords: [
      "ejecución digital para marcas",
      "digital shelf para retailers y marketplaces",
      "digital shelf analytics",
      "contenido de producto para retailers",
      "gestión de contenido de producto",
      "mejorar conversión en páginas de producto",
      "ejecución digital en ecommerce",
      "marcas en retailers y marketplaces",
    ],
    alternates: marketAlternates.home,
  },
  "asistente-de-compra": {
    component: AssistantPage,
    manualTitle: "Asistente de Compra para Ecommerce | Omnitok",
    manualDescription:
      "Ayuda a tus shoppers a elegir mejor con un asistente de compra para ecommerce. Responde preguntas, recomienda productos y mejora la conversión en tus PDP.",
    keywords: [
      "asistente de compra para ecommerce",
      "asistente virtual para ecommerce",
      "chatbot para ecommerce",
      "chatbot de ventas para ecommerce",
      "recomendador de productos con IA",
      "asistente en pagina de producto",
      "chat para aumentar conversion ecommerce",
      "asistente virtual para PDP",
    ],
  },
  "contenido-enriquecido": {
    component: ContentPage,
    manualTitle: "Contenido Enriquecido para Ecommerce | Omnitok",
    manualDescription:
      "Crea y distribuye contenido enriquecido para tus páginas de producto. Mejora fichas de producto, destaca beneficios y aumenta conversión en retailers y marketplaces.",
    keywords: [
      "contenido enriquecido para ecommerce",
      "contenido enriquecido para retailers",
      "fichas de producto enriquecidas",
      "mejorar fichas de producto",
      "contenido para páginas de producto",
      "optimización de fichas de producto",
      "rich content para ecommerce",
      "contenido enriquecido en PDP",
    ],
  },
  "gestion-de-contenido-de-producto": {
    component: ConnectPage,
    manualTitle: "Gestión de Contenido de Producto | Omnitok",
    manualDescription:
      "Centraliza, adapta y distribuye tu contenido de producto a retailers y marketplaces. Reduce trabajo manual y mejora la consistencia entre canales.",
    keywords: [
      "gestión de contenido de producto",
      "centralización de información de producto",
      "distribución de contenido de producto",
      "sindicación de contenido de producto",
      "automatización de carga de productos",
      "publicación de productos en retailers",
      "gestión de fichas de producto",
      "actualización de contenido en múltiples canales",
    ],
  },
  "digital-shelf-analytics": {
    component: DigitalShelfAnalyticsPage,
    manualTitle: "Digital Shelf Analytics con IA | Omnitok",
    manualDescription:
      "Monitoreo de precios, stock y contenido con IA integrada. Pregunta, analiza y prioriza acciones en retailers y marketplaces.",
    keywords: [
      "digital shelf analytics",
      "software de monitoreo de precios",
      "monitoreo de precios stock y contenido",
      "ejecución digital en retailers",
      "control de ejecución digital",
      "visibilidad digital en retailers",
      "monitoreo de productos en marketplaces",
      "monitoreo de precios y promociones",
      "share of search ecommerce",
    ],
    alternates: marketAlternates.dsa,
  },
  contacto: {
    component: ContactoPage,
    manualTitle: "Contacto | Habla con Ventas de Omnitok",
    manualDescription:
      "Habla con el equipo de Omnitok y mejora la ejecución digital de tu marca en retailers y marketplaces.",
    keywords: [
      "contacto Omnitok",
      "solicitar demo Omnitok",
      "hablar con ventas Omnitok",
      "contacto plataforma digital shelf",
      "agenda una demo Omnitok",
    ],
    alternates: marketAlternates.contact,
  },
  suscripcion: {
    component: SuscripcionPage,
    manualTitle: "Suscripcion al blog de Omnitok",
    manualDescription:
      "Suscribete para recibir contenido actualizado sobre ecommerce, digital shelf y novedades de Omnitok.",
  },
  "politica-de-privacidad": {
    component: LatamPrivacyPolicyPage,
    manualTitle: "Política de Privacidad | Omnitok",
    manualDescription:
      "Conoce cómo Omnitok recopila, usa y protege la información compartida en el sitio. Incluye derechos ARCO, cookies y ciberseguridad.",
    alternates: marketAlternates.privacy,
  },
  "terminos-de-uso": {
    component: LatamTermsOfUsePage,
    manualTitle: "Términos de Uso | Omnitok",
    manualDescription:
      "Condiciones que regulan el acceso y uso del sitio web de Omnitok para usuarios en América Latina.",
  },
  nosotros: {
    component: NosotrosPage,
    manualTitle: "Sobre Nosotros | Equipo y Misión de Omnitok",
    manualDescription:
      "Conoce a Omnitok, la plataforma que ayuda a marcas a mejorar su ejecución digital en retailers y marketplaces.",
    keywords: [
      "Omnitok",
      "quiénes somos Omnitok",
      "empresa de digital shelf",
      "plataforma para marcas en retailers",
      "sobre Omnitok",
    ],
  },
  recursos: {
    component: RecursosPage,
    manualTitle: "Recursos de Ecommerce y Digital Shelf | Omnitok",
    manualDescription:
      "Explora recursos de Omnitok sobre ejecución digital, ecommerce y contenido de producto para marcas en LATAM.",
    keywords: ["recursos Omnitok", "recursos ecommerce", "digital shelf recursos"],
    alternates: marketAlternates.resources,
  },
  "recursos/blog/mundial-2026-ecommerce-contenido-producto": {
    component: MundialPage,
    sourceMetadata: mundialMetadata,
  },
  "recursos/blog/cyberday-ventas-online-ecommerce": {
    component: CyberdayPage,
    sourceMetadata: cyberdayMetadata,
  },
  "recursos/blog/cross-selling-up-selling-ecommerce": {
    component: CrossSellingPage,
    sourceMetadata: crossSellingMetadata,
  },
  "recursos/blog/contenido-enriquecido-tecnologia-ecommerce": {
    component: ContenidoEnriquecidoPage,
    sourceMetadata: contenidoEnriquecidoMetadata,
  },
};

const latamRedirects: Record<string, string> = {
  "plataforma/assistant": canonicalRoutes.latam.assistant,
  "plataforma/content": canonicalRoutes.latam.content,
  "plataforma/connect": canonicalRoutes.latam.connect,
  "plataforma/digital-shelf-analytics": canonicalRoutes.latam.dsa,
  "recursos/blog": canonicalRoutes.latam.blog,
  "recursos/whitepapers": canonicalRoutes.latam.recursos,
  "recursos/webinars": canonicalRoutes.latam.recursos,
  "recursos/webinars/la-experiencia-digital-hoy-define-la-decision-de-compra": canonicalRoutes.latam.recursos,
  // Páginas eliminadas — redirigen a destinos relevantes
  demo: canonicalRoutes.latam.contacto,
  pricing: canonicalRoutes.latam.contacto,
  plataforma: canonicalRoutes.latam.home,
  "nosotros/equipo": canonicalRoutes.latam.nosotros,
  soluciones: canonicalRoutes.latam.home,
  "soluciones/marketplaces": canonicalRoutes.latam.home,
  "soluciones/gestion-catalogo": canonicalRoutes.latam.home,
  "soluciones/optimizacion-pdps": canonicalRoutes.latam.home,
  "soluciones/analytics": canonicalRoutes.latam.dsa,
  industrias: canonicalRoutes.latam.home,
  "industrias/consumer-goods": canonicalRoutes.latam.home,
  "industrias/electronica": canonicalRoutes.latam.home,
  "industrias/belleza": canonicalRoutes.latam.home,
  "industrias/hogar": canonicalRoutes.latam.home,
  "casos-de-exito": canonicalRoutes.latam.home,
};

function resolveTitle(metadata?: Metadata, fallback?: string) {
  if (!metadata?.title) return fallback ?? "Omnitok LATAM";
  if (typeof metadata.title === "string") return metadata.title;
  if ("absolute" in metadata.title && metadata.title.absolute) return metadata.title.absolute;
  if ("default" in metadata.title && metadata.title.default) return metadata.title.default;
  return fallback ?? "Omnitok LATAM";
}

function buildAlternates(entry?: Partial<Record<MarketKey, string>>) {
  if (!entry) return undefined;
  return {
    ...(entry.latam ? { es: entry.latam, "x-default": entry.latam } : {}),
    ...(entry.usa ? { "en-US": entry.usa } : {}),
  };
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const key = slug?.join("/") ?? "";

  if (key === "blog") {
    return buildMetadata({
      title: "Blog Omnitok LATAM",
      description: "Alias para el blog LATAM de Omnitok.",
      path: "/es/blog",
      locale: "es",
      robots: { index: false, follow: true },
    });
  }

  const entry = latamPages[key];
  if (!entry) return {};

  const title = resolveTitle(entry.sourceMetadata, entry.manualTitle);
  const description =
    entry.sourceMetadata?.description ?? entry.manualDescription ?? "Omnitok LATAM";
  const alternates = buildAlternates(entry.alternates);
  const keywords =
    entry.keywords ??
    (Array.isArray(entry.sourceMetadata?.keywords)
      ? entry.sourceMetadata.keywords.filter((keyword): keyword is string => typeof keyword === "string")
      : undefined);
  const ogImages =
    Array.isArray(entry.sourceMetadata?.openGraph?.images) &&
    entry.sourceMetadata.openGraph.images.length > 0
      ? entry.sourceMetadata.openGraph.images[0]
      : undefined;

  return {
    ...entry.sourceMetadata,
    ...buildMetadata({
      title,
      description,
      path: key ? `/es/${key}` : "/es",
      locale: "es",
      alternates,
      keywords,
      openGraphImage: typeof ogImages === "string" ? ogImages : undefined,
    }),
    openGraph: {
      ...entry.sourceMetadata?.openGraph,
      title,
      description,
      url: key ? `/es/${key}` : "/es",
      locale: "es_CL",
    },
    twitter: {
      ...entry.sourceMetadata?.twitter,
      title,
      description,
    },
  };
}

export default async function LatamCatchAllPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const key = slug?.join("/") ?? "";

  if (latamRedirects[key]) {
    redirect(latamRedirects[key]);
  }

  const entry = latamPages[key];
  if (!entry) {
    notFound();
  }

  const PageComponent = entry.component;
  return <PageComponent />;
}
