import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const postsPath = path.join(rootDir, "src", "data", "blog-posts.generated.json");
const redirectsPath = path.join(rootDir, "src", "data", "blog-redirects.generated.json");
const trackerPath = path.join(rootDir, "src", "data", "blog-migration-tracker.generated.json");

const overrides = {
  "mundial-2026-ecommerce-contenido-producto": {
    slug: "mundial-2026-contenido-de-producto-para-ecommerce",
    title: "Mundial 2026: cómo preparar tu contenido de producto para vender más",
    h1: "Mundial 2026: cómo preparar tu contenido de producto para vender más",
    metaDescription:
      "Descubre cómo preparar fichas de producto, activos y ejecución digital para aprovechar el tráfico y la demanda que generará el Mundial 2026 en ecommerce.",
    primaryKeyword: "contenido de producto para ecommerce",
  },
  "cross-selling-up-selling-ecommerce": {
    slug: "cross-selling-y-up-selling-en-ecommerce",
    title: "Cross-selling y up-selling en ecommerce: cómo aplicarlos sin fricción",
    h1: "Cross-selling y up-selling en ecommerce: cómo aplicarlos sin fricción",
    metaDescription:
      "Aprende cómo aplicar estrategias de cross-selling y up-selling en ecommerce para aumentar ticket promedio sin deteriorar la experiencia de compra.",
    primaryKeyword: "cross-selling y up-selling en ecommerce",
  },
  "automatizacion-de-contenido-en-el-retail-la-nueva-frontera-competitiva": {
    slug: "automatizacion-de-contenido-en-retail",
    title: "Automatización de contenido en retail: cómo escalar sin perder consistencia",
    h1: "Automatización de contenido en retail: cómo escalar sin perder consistencia",
    metaDescription:
      "Conoce cómo la automatización de contenido en retail ayuda a acelerar publicaciones, reducir errores y sostener una ejecución digital más consistente.",
    primaryKeyword: "automatización de contenido en retail",
  },
  "contenido-enriquecido-en-retail": {
    slug: "contenido-enriquecido-en-retail",
    title: "Contenido enriquecido en retail: cómo mejorar la experiencia de compra digital",
    h1: "Cómo el contenido enriquecido mejora la experiencia de compra en retail digital",
    metaDescription:
      "Descubre qué es el contenido enriquecido en retail, qué formatos generan más impacto y cómo mejora la experiencia de compra y la conversión en ecommerce.",
    primaryKeyword: "contenido enriquecido en retail",
  },
  "tendencias-en-experiencias-de-compra-digital-el-futuro-del-retail-2025": {
    slug: "tendencias-de-compra-digital-en-retail-2025",
    title: "Tendencias de compra digital en retail para 2025",
    h1: "Tendencias de compra digital en retail para 2025",
    metaDescription:
      "Revisa las principales tendencias de compra digital en retail para 2025 y cómo afectan contenido, experiencia de producto y ejecución en ecommerce.",
    primaryKeyword: "tendencias de compra digital en retail",
  },
  "el-impacto-del-contenido-enriquecido-en-las-decisiones-de-compra-para-mejoramiento-del-hogar": {
    slug: "contenido-enriquecido-en-mejoramiento-del-hogar",
    title: "Contenido enriquecido en mejoramiento del hogar: qué impulsa la decisión de compra",
    h1: "Contenido enriquecido en mejoramiento del hogar: qué impulsa la decisión de compra",
    metaDescription:
      "Descubre cómo el contenido enriquecido ayuda a mejorar fichas de producto y decisión de compra en categorías de mejoramiento del hogar.",
    primaryKeyword: "contenido enriquecido en mejoramiento del hogar",
  },
  "el-rol-del-contenido-enriquecido-en-las-decisiones-de-compra-de-alimentos-en-supermercados-online": {
    slug: "contenido-enriquecido-en-supermercados-online",
    title: "Contenido enriquecido en supermercados online: cómo influye en la compra",
    h1: "Contenido enriquecido en supermercados online: cómo influye en la compra",
    metaDescription:
      "Analiza cómo el contenido enriquecido mejora la elección de productos y la confianza del shopper en supermercados online.",
    primaryKeyword: "contenido enriquecido en supermercados online",
  },
  "por-que-el-contenido-enriquecido-es-el-nuevo-diferenciador-en-las-paginas-de-producto-de-tecnologia": {
    slug: "contenido-enriquecido-en-tecnologia",
    title: "Contenido enriquecido en tecnología: cómo mejorar páginas de producto",
    h1: "Contenido enriquecido en tecnología: cómo mejorar páginas de producto",
    metaDescription:
      "Aprende por qué el contenido enriquecido en tecnología ayuda a explicar mejor el producto, diferenciar variantes y mejorar la conversión en PDP.",
    primaryKeyword: "contenido enriquecido en tecnología",
  },
  "de-que-forma-el-contenido-enriquecido-transforma-la-experiencia-de-compra-de-consumo-masivo-en-retail-digital": {
    slug: "contenido-enriquecido-en-consumo-masivo",
    title: "Contenido enriquecido en consumo masivo: cómo mejorar la experiencia de compra",
    h1: "Contenido enriquecido en consumo masivo: cómo mejorar la experiencia de compra",
    metaDescription:
      "Descubre cómo el contenido enriquecido en consumo masivo ayuda a explicar beneficios, reducir fricción y mejorar la experiencia de compra digital.",
    primaryKeyword: "contenido enriquecido en consumo masivo",
  },
  "por-que-el-modelo-chino-de-liveshopping-no-funciona-en-occidente-y-como-optimizar-las-pdps-puede-ser-la-clave-del-exito": {
    slug: "liveshopping-en-occidente-y-optimizacion-de-pdps",
    title: "Liveshopping en Occidente: qué aprender y cómo optimizar las PDPs",
    h1: "Liveshopping en Occidente: qué aprender y cómo optimizar las PDPs",
    metaDescription:
      "Entiende por qué el liveshopping no se replica igual en Occidente y cómo optimizar PDPs puede generar mejores resultados en ecommerce.",
    primaryKeyword: "liveshopping en occidente",
  },
  "contenido-enriquecido-en-belleza-y-cuidado-personal-como-conectar-con-el-consumidor-digital": {
    slug: "contenido-enriquecido-en-belleza",
    title: "Contenido enriquecido en belleza y cuidado personal: cómo conectar mejor",
    h1: "Contenido enriquecido en belleza y cuidado personal: cómo conectar mejor",
    metaDescription:
      "Descubre cómo mejorar fichas, activos visuales y experiencia de producto con contenido enriquecido en belleza y cuidado personal.",
    primaryKeyword: "contenido enriquecido en belleza y cuidado personal",
  },
  "optimizacion-del-contenido-clave-para-una-presencia-digital-exitosa": {
    slug: "optimizacion-de-contenido-para-ejecucion-digital",
    title: "Optimización de contenido para una mejor ejecución digital",
    h1: "Optimización de contenido para una mejor ejecución digital",
    metaDescription:
      "Aprende cómo optimizar contenido de producto para mejorar consistencia, visibilidad y ejecución digital en retailers y marketplaces.",
    primaryKeyword: "optimización de contenido para ejecución digital",
  },
  "el-futuro-del-e-commerce-fusion-de-tecnologia-y-experiencia-del-cliente": {
    slug: "futuro-del-ecommerce-y-experiencia-del-cliente",
    title: "El futuro del ecommerce: tecnología y experiencia del cliente",
    h1: "El futuro del ecommerce: tecnología y experiencia del cliente",
    metaDescription:
      "Explora cómo tecnología, contenido y experiencia del cliente están redefiniendo el futuro del ecommerce para las marcas.",
    primaryKeyword: "futuro del ecommerce",
  },
  "consumidor-digital-que-caracteristicas-tiene-el-visitante-de-tu-marca": {
    slug: "consumidor-digital-en-ecommerce",
    title: "Consumidor digital: cómo entender mejor al visitante de tu marca",
    h1: "Consumidor digital: cómo entender mejor al visitante de tu marca",
    metaDescription:
      "Conoce las características del consumidor digital y cómo usar ese entendimiento para mejorar contenido, experiencia y conversión.",
    primaryKeyword: "consumidor digital en ecommerce",
  },
  "como-utilizar-la-inteligencia-artificial-para-optimizar-la-retencion-de-clientes": {
    slug: "ia-para-retencion-de-clientes",
    title: "IA para retención de clientes: casos de uso y oportunidades reales",
    h1: "IA para retención de clientes: casos de uso y oportunidades reales",
    metaDescription:
      "Descubre cómo usar inteligencia artificial para mejorar retención de clientes, personalización y experiencia de compra en ecommerce.",
    primaryKeyword: "IA para retención de clientes",
  },
  "la-psicologia-detras-de-las-decisiones-de-compra-y-su-impacto-en-el-e-commerce": {
    slug: "psicologia-de-compra-en-ecommerce",
    title: "Psicología de compra en ecommerce: qué factores influyen más",
    h1: "Psicología de compra en ecommerce: qué factores influyen más",
    metaDescription:
      "Analiza los factores de psicología de compra que influyen en ecommerce y cómo aplicarlos sin sacrificar claridad ni experiencia.",
    primaryKeyword: "psicología de compra en ecommerce",
  },
  "cyberday-ventas-online-ecommerce": {
    slug: "cyberday-contenido-de-producto-para-ecommerce",
    title: "Cómo vender más en CyberDay con mejor contenido de producto",
    h1: "Cómo vender más en CyberDay con mejor contenido de producto",
    metaDescription:
      "Prepara tu ecommerce para CyberDay con mejores fichas, activos visuales y ejecución digital que ayuden a convertir más tráfico en ventas.",
    primaryKeyword: "CyberDay ecommerce",
  },
  "como-potenciar-el-contenido-emocional-con-ayuda-de-la-ia": {
    slug: "ia-para-contenido-emocional",
    title: "Cómo usar IA para potenciar el contenido emocional",
    h1: "Cómo usar IA para potenciar el contenido emocional",
    metaDescription:
      "Aprende cómo la inteligencia artificial puede ayudarte a crear contenido emocional más relevante para ecommerce y retail digital.",
    primaryKeyword: "IA para contenido emocional",
  },
  "potencia-tu-estrategia-de-e-commerce-y-aumenta-las-ventas-con-omnitok": {
    slug: "estrategia-de-ecommerce-para-aumentar-ventas",
    title: "Estrategia de ecommerce para aumentar ventas: dónde enfocarse primero",
    h1: "Estrategia de ecommerce para aumentar ventas: dónde enfocarse primero",
    metaDescription:
      "Revisa en qué áreas conviene enfocarse primero para mejorar una estrategia de ecommerce y aumentar ventas con mejor ejecución digital.",
    primaryKeyword: "estrategia de ecommerce para aumentar ventas",
  },
  "descubre-como-la-ia-conversacional-puede-impulsar-tus-ventas": {
    slug: "ia-conversacional-para-ventas",
    title: "IA conversacional para ventas: cómo mejorar la experiencia de compra",
    h1: "IA conversacional para ventas: cómo mejorar la experiencia de compra",
    metaDescription:
      "Descubre cómo la IA conversacional puede mejorar atención, orientación y ventas dentro de la experiencia de compra digital.",
    primaryKeyword: "IA conversacional para ventas",
  },
  "transforma-la-venta-online-con-la-asistencia-virtual-personalizada": {
    slug: "asistencia-virtual-para-venta-online",
    title: "Asistencia virtual personalizada: cómo mejorar la venta online",
    h1: "Asistencia virtual personalizada: cómo mejorar la venta online",
    metaDescription:
      "Conoce cómo la asistencia virtual personalizada ayuda a resolver dudas, acompañar la compra y mejorar la conversión en ecommerce.",
    primaryKeyword: "asistencia virtual personalizada",
  },
  "rompe-las-barreras-entre-el-consumidor-y-tu-producto-gracias-al-contenido-emocional": {
    slug: "contenido-emocional-en-ecommerce",
    title: "Contenido emocional en ecommerce: cómo acercar el producto al consumidor",
    h1: "Contenido emocional en ecommerce: cómo acercar el producto al consumidor",
    metaDescription:
      "Descubre cómo el contenido emocional en ecommerce ayuda a conectar mejor con el consumidor y a reforzar la decisión de compra.",
    primaryKeyword: "contenido emocional en ecommerce",
  },
  "como-superar-los-desafios-y-conquistar-al-cliente-en-el-retail-omnicanal": {
    slug: "desafios-del-retail-omnicanal",
    title: "Retail omnicanal: cómo superar sus principales desafíos",
    h1: "Retail omnicanal: cómo superar sus principales desafíos",
    metaDescription:
      "Revisa los principales desafíos del retail omnicanal y qué decisiones ayudan a mejorar la experiencia del cliente y la ejecución digital.",
    primaryKeyword: "retail omnicanal",
  },
  "como-lograr-una-experiencia-de-compra-cohesiva-en-el-retail-omnicanal": {
    slug: "experiencia-de-compra-omnicanal",
    title: "Experiencia de compra omnicanal: cómo lograr una experiencia coherente",
    h1: "Experiencia de compra omnicanal: cómo lograr una experiencia coherente",
    metaDescription:
      "Aprende cómo construir una experiencia de compra omnicanal coherente entre ecommerce, retailers y puntos de contacto digitales.",
    primaryKeyword: "experiencia de compra omnicanal",
  },
  "por-que-la-velocidad-de-carga-de-las-paginas-es-importante": {
    slug: "velocidad-de-carga-en-ecommerce",
    title: "Velocidad de carga en ecommerce: por qué impacta conversión y UX",
    h1: "Velocidad de carga en ecommerce: por qué impacta conversión y UX",
    metaDescription:
      "Entiende por qué la velocidad de carga en ecommerce impacta experiencia de usuario, rendimiento y conversión en páginas de producto.",
    primaryKeyword: "velocidad de carga en ecommerce",
  },
  "ejemplos-de-softwares-de-oficina-para-cada-equipo-de-trabajo": {
    slug: "software-colaborativo-para-equipos",
    title: "Software colaborativo para equipos: ejemplos y criterios para elegir mejor",
    h1: "Software colaborativo para equipos: ejemplos y criterios para elegir mejor",
    metaDescription:
      "Explora ejemplos de software colaborativo para equipos y qué criterios conviene evaluar antes de elegir una herramienta.",
    primaryKeyword: "software colaborativo para equipos",
  },
};

const overrideEntries = Object.values(overrides);

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
}

function isHeadingCandidate(line) {
  if (!line || line.startsWith("- ")) return false;
  if (line.length > 92) return false;
  if (/[.!?]$/.test(line)) return false;
  const words = line.split(/\s+/).length;
  return words >= 2 && words <= 12 && /^[A-ZÁÉÍÓÚÑ¿]/.test(line);
}

function isListItem(line) {
  return line.startsWith("- ");
}

function shouldJoinWithPrevious(line, previousLine) {
  if (!previousLine) return false;
  if (isListItem(line) || isListItem(previousLine)) return false;
  if (/^[a-záéíóúñ]/.test(line)) return true;
  if (/^[,.;:)\]]/.test(line)) return true;
  if (previousLine.endsWith(",") || previousLine.endsWith(":") || previousLine.endsWith("(")) return true;
  if (line.split(/\s+/).length <= 2 && !/[.!?]$/.test(line)) return true;
  return false;
}

function formatRawText(rawText) {
  const initialLines = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const collapsedLines = [];
  for (const line of initialLines) {
    const previousLine = collapsedLines.at(-1);
    if (previousLine && shouldJoinWithPrevious(line, previousLine)) {
      collapsedLines[collapsedLines.length - 1] = normalizeWhitespace(`${previousLine} ${line}`);
      continue;
    }

    collapsedLines.push(normalizeWhitespace(line));
  }

  const output = [];

  for (let index = 0; index < collapsedLines.length; index += 1) {
    const line = collapsedLines[index];
    const previous = collapsedLines[index - 1] ?? "";
    const next = collapsedLines[index + 1] ?? "";

    if (isHeadingCandidate(line)) {
      if (output.at(-1) !== "") output.push("");
      output.push(line);
      if (next) output.push("");
      continue;
    }

    if (isListItem(line)) {
      if (!isListItem(previous) && output.at(-1) !== "") output.push("");
      output.push(line);
      if (!isListItem(next) && next) output.push("");
      continue;
    }

    output.push(line);
    if (next && !isListItem(next) && !isHeadingCandidate(next)) output.push("");
  }

  return output
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function buildExcerpt(rawText) {
  const firstParagraph = rawText.split("\n\n").find(Boolean) ?? rawText;
  const clean = normalizeWhitespace(firstParagraph);
  return clean.length > 180 ? `${clean.slice(0, 177).trimEnd()}...` : clean;
}

function buildSeoTitle(title) {
  return `${title} | Omnitok`;
}

function buildSecondaryKeywords(primaryKeyword) {
  const keyword = primaryKeyword.toLowerCase();

  if (keyword.includes("contenido enriquecido")) {
    return [
      "contenido enriquecido para ecommerce",
      "fichas de producto",
      "gestion de contenido de producto",
      "conversion en PDP",
      "digital shelf analytics",
      "retailers y marketplaces",
    ];
  }

  if (keyword.includes("omnicanal")) {
    return [
      "experiencia de compra omnicanal",
      "retail omnicanal",
      "customer journey",
      "ecommerce omnicanal",
      "ejecucion digital",
      "retailers y marketplaces",
    ];
  }

  if (keyword.includes("ia")) {
    return [
      "inteligencia artificial en ecommerce",
      "automatizacion comercial",
      "experiencia de compra digital",
      "personalizacion en ecommerce",
      "ventas online",
      "asistente virtual",
    ];
  }

  if (keyword.includes("cross-selling") || keyword.includes("up-selling")) {
    return [
      "venta cruzada",
      "upselling en ecommerce",
      "aumentar ticket promedio",
      "conversion en ecommerce",
      "estrategias de venta",
      "experiencia de compra digital",
    ];
  }

  if (keyword.includes("velocidad de carga")) {
    return [
      "core web vitals",
      "rendimiento web",
      "conversion en ecommerce",
      "experiencia de usuario",
      "paginas de producto",
      "velocidad de sitio",
    ];
  }

  if (keyword.includes("psicología") || keyword.includes("psicologia")) {
    return [
      "decision de compra",
      "comportamiento del consumidor",
      "ecommerce para marcas",
      "conversion digital",
      "experiencia del cliente",
      "paginas de producto",
    ];
  }

  if (keyword.includes("consumidor digital")) {
    return [
      "comportamiento del consumidor",
      "customer journey",
      "experiencia de compra digital",
      "ecommerce para marcas",
      "conversion digital",
      "retailers y marketplaces",
    ];
  }

  return [
    "contenido de producto",
    "ecommerce para marcas",
    "retail digital",
    "conversion en PDP",
    "digital shelf analytics",
    "retailers y marketplaces",
  ];
}

function buildAltText(primaryKeyword) {
  return `Ilustración sobre ${primaryKeyword} para marcas que venden en retailers y marketplaces`;
}

function updateTracker(tracker, oldPath, post) {
  tracker.newUrl = post.path;
  tracker.primaryKeyword = post.primaryKeyword;
  tracker.secondaryKeywords = post.secondaryKeywords;
  tracker.redirectDestination = post.path;
  tracker.seoTitle = post.seoTitle;
  tracker.metaDescription = post.metaDescription;
  tracker.h1 = post.h1;
  tracker.finalAltText = post.coverImageAlt;
  tracker.optimizationNotes =
    "Spanish blog post refined with a shorter SEO slug, cleaner metadata, formatted paragraphs, stronger copy framing and brand-aligned editorial presentation.";

  if (oldPath !== post.path) {
    tracker.redirectSource = post.originalPath;
  }
}

async function main() {
  const posts = JSON.parse(await readFile(postsPath, "utf8"));
  const redirects = JSON.parse(await readFile(redirectsPath, "utf8"));
  const trackerRoot = JSON.parse(await readFile(trackerPath, "utf8"));
  const trackerItems = Array.isArray(trackerRoot) ? trackerRoot : trackerRoot.items ?? [];

  for (const post of posts) {
    if (post.market !== "latam") continue;

    const override = overrides[post.slug] ?? overrideEntries.find((entry) => entry.slug === post.slug);
    if (!override) continue;

    const oldPath = post.path;
    const oldSlug = post.slug;

    post.slug = override.slug;
    post.path = `/es/blog/${override.slug}`;
    post.title = override.title;
    post.h1 = override.h1;
    post.seoTitle = buildSeoTitle(override.title);
    post.metaDescription = override.metaDescription;
    post.primaryKeyword = override.primaryKeyword;
    post.secondaryKeywords = buildSecondaryKeywords(override.primaryKeyword);
    post.coverImageAlt = buildAltText(override.primaryKeyword);
    post.rawText = formatRawText(post.rawText);
    post.excerpt = buildExcerpt(post.rawText);
    post.bodyHash = `refined-${override.slug}`;

    if (oldPath !== post.path) {
      post.legacyPaths = Array.from(new Set([oldPath, ...post.legacyPaths]));
      redirects[oldPath] = post.path;
    }

    for (const legacyPath of post.legacyPaths) {
      redirects[legacyPath] = post.path;
    }

    redirects[post.originalPath] = post.path;

    const trackerEntry =
      trackerItems.find((entry) => entry.currentUrl === post.originalUrl) ??
      trackerItems.find((entry) => entry.newUrl === oldPath) ??
      trackerItems.find((entry) => entry.redirectDestination === oldPath);

    if (trackerEntry) {
      updateTracker(trackerEntry, oldPath, post);
    }

    if (oldSlug !== post.slug) {
      console.log(`Updated ${oldSlug} -> ${post.slug}`);
    } else {
      console.log(`Refined ${post.slug}`);
    }
  }

  await writeFile(postsPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  await writeFile(redirectsPath, `${JSON.stringify(redirects, null, 2)}\n`, "utf8");
  if (!Array.isArray(trackerRoot)) {
    trackerRoot.items = trackerItems;
  }
  await writeFile(trackerPath, `${JSON.stringify(trackerRoot, null, 2)}\n`, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
