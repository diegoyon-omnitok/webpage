/**
 * ════════════════════════════════════════════════════════════════════════════
 *  BIBLIOTECA DE RECURSOS · fuente única de verdad
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Para publicar un recurso nuevo basta con agregar un objeto a `resources`.
 *  No hay que crear páginas, rutas ni componentes: la biblioteca (/es/recursos)
 *  y la landing (/es/recursos/<slug>) se generan solas, y el slug se suma al
 *  sitemap automáticamente.
 *
 *  Checklist para agregar un recurso:
 *    1. Duplicar un bloque existente de más abajo y completar los campos.
 *    2. Subir la portada a `public/recursos/` (o dejar `cover: null` y se usa
 *       la portada generada con el diseño de marca).
 *    3. Crear el formulario en HubSpot (o reutilizar el genérico) y pegar su
 *       `hubspotFormId`. Si se deja vacío, la landing muestra un aviso interno
 *       en lugar de un formulario roto.
 *    4. `ebookIdentifier` es el valor que viaja a HubSpot en el campo oculto
 *       `recurso_descargado`. Usar el mismo string que el slug.
 *
 *  NOTA: el contenido marcado como DEMO es de prueba y debe revisarse antes de
 *  difundirlo. No incluir estadísticas, porcentajes ni datos de clientes que no
 *  estén verificados.
 */

export type ResourceType = "ebook" | "guia" | "reporte" | "estudio";

export type ResourceTopic =
  | "ecommerce"
  | "product-experience"
  | "pdp"
  | "digital-shelf"
  | "analytics"
  | "contenido-de-producto"
  | "retail";

export type Resource = {
  /** Última parte de la URL: /es/recursos/<slug> */
  slug: string;
  title: string;
  type: ResourceType;
  /** Temáticas para los filtros. La primera se muestra en la tarjeta. */
  topics: ResourceTopic[];
  /** Bajada corta: se usa en la tarjeta de la biblioteca y en la landing. */
  description: string;
  /** Bullets de la sección "En este recurso aprenderás". */
  learnings: string[];
  /**
   * Resumen del contenido que se muestra en la landing, bajo la cabecera.
   * Es opcional: un recurso puede publicarse solo con `description` y `learnings`.
   */
  summary?: {
    /** Pregunta o gancho que abre el resumen. */
    hook?: string;
    /** Párrafos de contexto y metodología. */
    paragraphs: string[];
    /** Cifras duras del estudio (solo datos verificados). */
    stats?: { value: string; label: string }[];
    /** Título del bloque de hallazgos. */
    findingsTitle?: string;
    /** Hallazgos: etiqueta corta + explicación. */
    findings?: { label: string; text: string }[];
    /** Conclusión principal, destacada al cierre del resumen. */
    takeaway?: string;
    /** Frase que invita a descargar, sobre el botón. */
    downloadInvite?: string;
  };
  /** Ruta dentro de /public. `null` = portada generada con el diseño de marca. */
  cover: string | null;
  coverAlt?: string;
  /**
   * Proporción con la que se muestra la portada en la landing:
   *   "portrait" (por defecto) → 4:5, para portadas tipo tapa de ebook
   *   "wide"                    → 16:9, para banners horizontales
   *   "page"                    → 4:3, para la primera página de un PDF
   * Evita que un banner 1920×1080 se recorte como si fuera una tapa vertical,
   * y que a la portada de un reporte se le corten el titular o las cifras.
   */
  coverAspect?: "portrait" | "wide" | "page";
  /**
   * Ruta del PDF dentro de /public. Si está, el formulario entrega el archivo
   * apenas se envía (además de registrar el lead en HubSpot). Si no está, la
   * pantalla de éxito dice que el recurso llega por correo, y la entrega queda
   * en manos del workflow de HubSpot.
   *
   * Los PDF viven en `public/recursos/pdf/` y esa carpeta está bloqueada en
   * `robots.ts` para que el archivo no se indexe y la gente llegue por la landing.
   */
  file?: string;
  /** Línea corta que va bajo el título en la portada generada. */
  coverSubtitle?: string;
  /** ISO (YYYY-MM-DD). Ordena la biblioteca de más nuevo a más antiguo. */
  date: string;
  /** Destacado: aparece primero y más grande en la biblioteca. */
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  /**
   * ID del formulario de HubSpot para este recurso.
   * "" (vacío) = todavía no creado; la landing lo indica en pantalla.
   */
  hubspotFormId: string;
  /** Valor enviado a HubSpot en el campo oculto `recurso_descargado`. */
  ebookIdentifier: string;
  /** Slugs de otros recursos para el bloque "Sigue aprendiendo". */
  relatedResources: string[];
  /** CTA comercial del pie de la landing. */
  productCta?: {
    href: string;
    label: string;
  };
  /** Contenido de prueba pendiente de revisión editorial. */
  isDemo?: boolean;
};

export const resourceTypeLabels: Record<ResourceType, string> = {
  ebook: "Ebook",
  guia: "Guía",
  reporte: "Reporte",
  estudio: "Estudio",
};

export const resourceTopicLabels: Record<ResourceTopic, string> = {
  ecommerce: "eCommerce",
  "product-experience": "Product Experience",
  pdp: "PDP",
  "digital-shelf": "Digital Shelf",
  analytics: "Analytics",
  "contenido-de-producto": "Contenido de producto",
  retail: "Retail",
};

export const resourceTypeOrder: ResourceType[] = ["ebook", "guia", "reporte", "estudio"];

export const resourceTopicOrder: ResourceTopic[] = [
  "ecommerce",
  "product-experience",
  "pdp",
  "digital-shelf",
  "analytics",
  "contenido-de-producto",
  "retail",
];

/* ────────────────────────────────────────────────────────────────────────────
   RECURSOS PUBLICADOS
   ──────────────────────────────────────────────────────────────────────────── */

export const resources: Resource[] = [
  // ╭──────────────────────────────────────────────────────────────────────╮
  // │ Estado del Digital Shelf en Chile 2026                                │
  // │ Cifras entregadas por el equipo de Omnitok (no modificar sin validar):│
  // │ 7.588 productos homologados · 807.057 observaciones · 63% · 41,7% ·   │
  // │ 6 días · ~70/100. El PDF final aún no existe: la entrega se configura │
  // │ en el workflow de HubSpot.                                            │
  // ╰──────────────────────────────────────────────────────────────────────╯
  {
    slug: "estado-digital-shelf-chile-2026",
    title: "Estado del Digital Shelf en Chile 2026",
    type: "estudio",
    topics: ["digital-shelf", "analytics", "retail", "ecommerce"],
    description:
      "Un mes de monitoreo diario en grandes retailers de Chile para entender qué encuentra realmente un shopper cuando busca un producto.",
    learnings: [
      "Cuánto varía el precio de un mismo producto entre retailers.",
      "Con qué frecuencia un SKU desaparece y cuánto tarda en volver.",
      "Cómo se concentra la visibilidad en la primera página de búsqueda.",
      "Qué tan distinta puede ser la calidad de una PDP según el canal.",
      "Por qué la ejecución se gestiona SKU por SKU y retailer por retailer.",
    ],
    // Portada real del reporte: primera página del PDF v3, rasterizada a 1600px.
    cover: "/recursos/estado-digital-shelf-chile-2026-portada.jpg",
    coverAlt:
      "Portada del estudio Estado del Digital Shelf en Chile 2026, con las cifras del análisis: 7.588 SKUs homologados, 807.057 observaciones, 1.050 posiciones top 10 y 291 PDPs auditadas",
    coverAspect: "page",
    file: "/recursos/pdf/estado-digital-shelf-chile-2026.pdf",
    // La pregunta gancho vive en el resumen, no aquí: así no se repite.
    coverSubtitle: "Ejecución digital en grandes retailers de Chile · Edición 2026",
    date: "2026-08-12",
    featured: true,
    seoTitle: "Estudio: Estado del Digital Shelf en Chile 2026 | Omnitok",
    seoDescription:
      "Estudio de Omnitok sobre la ejecución digital en retailers de Chile: precio, disponibilidad, posicionamiento y calidad de las páginas de producto. Descárgalo gratis.",
    hubspotFormId: "", // usa el formulario genérico de recursos
    ebookIdentifier: "estado-digital-shelf-chile-2026",
    relatedResources: [],
    productCta: {
      href: "/es/digital-shelf-analytics",
      label: "Conoce Omnitok DSA",
    },
    summary: {
      hook: "¿Qué encuentra realmente un shopper cuando busca tu producto en un retailer?",
      paragraphs: [
        "Una marca puede definir su estrategia de precios, contenido, disponibilidad y posicionamiento. Pero cuando sus productos llegan a retailers y marketplaces, la ejecución final puede ser muy distinta entre un canal y otro.",
        "Para entender qué está ocurriendo realmente, en Omnitok analizamos durante un mes la ejecución de miles de productos en grandes retailers de Chile. Observamos diariamente precios y disponibilidad, registramos posiciones de búsqueda y auditamos manualmente páginas de producto.",
        "Más de 7.500 productos y 800 mil observaciones después, encontramos diferencias importantes entre lo que una marca planifica y lo que finalmente encuentra el consumidor.",
      ],
      stats: [
        { value: "7.588", label: "productos homologados" },
        { value: "807.057", label: "observaciones de precio y presencia" },
        { value: "1 mes", label: "de monitoreo diario" },
      ],
      findingsTitle: "Cuatro hallazgos del estudio",
      findings: [
        {
          label: "Precio",
          text: "El 63% de los productos comparables presentó diferencias superiores al 10% entre retailers.",
        },
        {
          label: "Disponibilidad",
          text: "41,7% de los SKUs tuvo al menos una ausencia de dos días o más durante el período analizado, y el tiempo típico para volver a estar visible fue de seis días.",
        },
        {
          label: "Posicionamiento",
          text: "La primera página puede ofrecer muchas marcas, pero una parte mucho menor concentra la mayor parte de la visibilidad. Además, quién lidera cambia significativamente entre retailers.",
        },
        {
          label: "Página de producto",
          text: "La PDP promedio obtiene alrededor de 70 puntos sobre 100. Y para un mismo SKU, la calidad puede cambiar considerablemente dependiendo del retailer donde el shopper lo encuentre.",
        },
      ],
      takeaway:
        "La ejecución digital no se gestiona solamente a nivel de marca. Se gestiona SKU por SKU y retailer por retailer.",
      downloadInvite:
        "Descarga el estudio completo y conoce qué está ocurriendo con el Digital Shelf en Chile.",
    },
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────────────────────── */

/** Recursos ordenados: destacado primero, luego por fecha descendente. */
export function getAllResources(): Resource[] {
  return [...resources].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.date.localeCompare(a.date);
  });
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function isResourceSlug(slug: string): boolean {
  return resources.some((resource) => resource.slug === slug);
}

/**
 * Recursos relacionados. Usa los `relatedResources` declarados y, si faltan,
 * completa con los que comparten temática (y luego con los más recientes).
 */
export function getRelatedResources(resource: Resource, limit = 3): Resource[] {
  const picked: Resource[] = [];
  const push = (candidate?: Resource) => {
    if (!candidate) return;
    if (candidate.slug === resource.slug) return;
    if (picked.some((item) => item.slug === candidate.slug)) return;
    if (picked.length >= limit) return;
    picked.push(candidate);
  };

  resource.relatedResources.forEach((slug) => push(getResourceBySlug(slug)));

  if (picked.length < limit) {
    getAllResources()
      .filter((candidate) => candidate.topics.some((topic) => resource.topics.includes(topic)))
      .forEach(push);
  }

  if (picked.length < limit) {
    getAllResources().forEach(push);
  }

  return picked;
}

export function resourcePath(slug: string): string {
  return `/es/recursos/${slug}`;
}

/**
 * Artículo + sustantivo del tipo de recurso, para que los textos digan
 * "el ebook" / "la guía" / "el reporte" en lugar de un genérico "el recurso".
 */
export function resourceNoun(type: ResourceType): string {
  switch (type) {
    case "guia":
      return "la guía";
    case "reporte":
      return "el reporte";
    case "estudio":
      return "el estudio";
    default:
      return "el ebook";
  }
}

/** Solo el sustantivo, sin artículo: "ebook", "guía", "reporte", "estudio". */
export function resourceNounBare(type: ResourceType): string {
  return resourceNoun(type).replace(/^(el|la)\s+/, "");
}

/** "En este ebook aprenderás" / "En esta guía aprenderás" */
export function resourceLearnHeading(type: ResourceType): string {
  const noun = resourceNoun(type);
  return noun.startsWith("la ")
    ? `En esta ${resourceNounBare(type)} aprenderás:`
    : `En este ${resourceNounBare(type)} aprenderás:`;
}
