import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const csvPath = path.join(projectRoot, "omnitok_posts_migracion.csv");
const outputDir = path.join(projectRoot, "src", "data");
const publicBlogDir = path.join(projectRoot, "public", "blog");

const marketBasePath = {
  latam: "/es/blog",
  usa: "/en-us/blog",
};

const manualSlugOverrides = new Map([
  ["Mundial 2026: Cómo el contenido de producto impulsa ventas.", "mundial-2026-ecommerce-contenido-producto"],
  ["Contenido enriquecido en tecnología: cómo mejorar la experiencia de compra online", "contenido-enriquecido-tecnologia-ecommerce"],
  ["¿Cómo implementar el cross-selling y el up-selling de manera efectiva?", "cross-selling-up-selling-ecommerce"],
  ["¡Impulsa las ventas de tu e-commerce en fechas claves del retail!", "cyberday-ventas-online-ecommerce"],
  ["MAP Enforcement KPIs: How to Tell If Your MAP Program Is Actually Working", "map-enforcement-kpis"],
  ["Out of Sight, Out of Control: What Brands Miss by Deprioritizing Walmart", "walmart-map-monitoring"],
  ["Prime Day, Blind Spots, and the Hidden Cost of Invisibility", "amazon-prime-day-map-monitoring"],
  ["Authorized ≠ Compliant: Why Your Trusted Retailers Might Be Doing the Most Harm", "authorized-retailers-map-violations"],
]);

const manualCategoryOverrides = new Map([
  ["Mundial 2026: Cómo el contenido de producto impulsa ventas.", "Digital Shelf"],
  ["Contenido enriquecido en tecnología: cómo mejorar la experiencia de compra online", "Contenido enriquecido"],
  ["¿Cómo implementar el cross-selling y el up-selling de manera efectiva?", "Ecommerce"],
  ["¡Impulsa las ventas de tu e-commerce en fechas claves del retail!", "Ecommerce"],
  ["MAP Enforcement KPIs: How to Tell If Your MAP Program Is Actually Working", "MAP Enforcement"],
  ["Out of Sight, Out of Control: What Brands Miss by Deprioritizing Walmart", "MAP Monitoring"],
  ["Prime Day, Blind Spots, and the Hidden Cost of Invisibility", "MAP Monitoring"],
  ["Authorized ≠ Compliant: Why Your Trusted Retailers Might Be Doing the Most Harm", "Unauthorized Sellers"],
]);

const duplicateCanonicalTitles = new Set([
  "¿Cómo implementar el cross-selling y el up-selling de manera efectiva?",
  "To Build or Buy: The Tech Dilemma Facing Brands",
]);

const fallbackImages = {
  latam: "/blog/fallback-latam.svg",
  usa: "/blog/fallback-usa.svg",
};

function parseCsv(text) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      field = "";
      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    field += char;
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...body] = rows;
  return body.map((values) =>
    Object.fromEntries(header.map((key, index) => [key, values[index] ?? ""]))
  );
}

function normalizeText(value) {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[’‘]/g, "'")
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/Pervasive\s*Mind/gi, "Omnitok")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/'s\b/g, "s")
    .replace(/&/g, " and ")
    .replace(/≠/g, " not ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeSpacing(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([¿¡])\s+/g, "$1")
    .trim();
}

function capitalizeFirst(value) {
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}

function inferMarket(row) {
  return row.Mercado === "USA" ? "usa" : "latam";
}

function extractOriginalPath(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "") || "/";
  } catch {
    return url;
  }
}

function inferCategory(row, market) {
  const title = row["Nombre del post"];
  if (manualCategoryOverrides.has(title)) return manualCategoryOverrides.get(title);

  const haystack = `${title} ${row["Categorías"]} ${row["Texto del post"]}`.toLowerCase();

  if (market === "usa") {
    if (haystack.includes("unauthorized")) return "Unauthorized Sellers";
    if (haystack.includes("amazon") || haystack.includes("prime day")) return "MAP Monitoring";
    if (haystack.includes("walmart")) return "MAP Monitoring";
    if (haystack.includes("legal")) return "MAP Compliance";
    if (haystack.includes("data") || haystack.includes("provider") || haystack.includes("coverage")) return "MAP Data";
    if (haystack.includes("enforcement")) return "MAP Enforcement";
    return "MAP Compliance";
  }

  if (haystack.includes("contenido enriquecido")) return "Contenido enriquecido";
  if (haystack.includes("ia") || haystack.includes("inteligencia artificial")) return "IA para ecommerce";
  if (haystack.includes("cross-selling") || haystack.includes("up-selling")) return "Ecommerce";
  if (haystack.includes("omnicanal")) return "Retail omnicanal";
  if (haystack.includes("velocidad")) return "Experiencia digital";
  if (haystack.includes("mundial")) return "Digital Shelf";
  return "Ecommerce";
}

function inferPrimaryKeyword(row, market) {
  const title = normalizeText(row["Nombre del post"]);
  const titleLower = title.toLowerCase();
  const haystack = `${title} ${row["Texto del post"]}`.toLowerCase();

  if (market === "usa") {
    if (titleLower.includes("introduction to map compliance")) return "what is MAP compliance";
    if (titleLower.includes("common misconceptions")) return "MAP compliance myths";
    if (titleLower.includes("protect your brand and bottom line")) return "MAP policies for brand protection";
    if (titleLower.includes("legal considerations")) return "MAP policy legal considerations";
    if (titleLower.includes("accurate data matters")) return "MAP compliance data";
    if (titleLower.includes("data silos")) return "data silos in MAP compliance";
    if (titleLower.includes("technology for better map compliance")) return "MAP compliance technology";
    if (titleLower.includes("cross-departmental collaboration")) return "MAP compliance culture";
    if (titleLower.includes("selecting map products")) return "products to include in a MAP policy";
    if (titleLower.includes("holiday")) return "holiday MAP compliance";
    if (titleLower.includes("rebates")) return "profitable MAP enforcement";
    if (titleLower.includes("future-proofing")) return "future-proof MAP strategy";
    if (titleLower.includes("reset your map program")) return "MAP program reset";
    if (titleLower.includes("executive engagement")) return "MAP executive engagement";
    if (titleLower.includes("monitoring myths")) return "MAP monitoring myths";
    if (titleLower.includes("poor map enforcement")) return "cost of poor MAP enforcement";
    if (titleLower.includes("tactical steps")) return "MAP enforcement strategy";
    if (titleLower.includes("build or buy")) return "build vs buy MAP monitoring software";
    if (titleLower.includes("friend, foe")) return "Amazon MAP compliance";
    if (titleLower.includes("hands in the cookie jar")) return "MAP enforcement process";
    if (titleLower.includes("blocked, banned")) return "ecommerce data extraction for MAP monitoring";
    if (titleLower.includes("what clean map data")) return "clean MAP data";
    if (titleLower.includes("5 metrics")) return "MAP compliance metrics";
    if (titleLower.includes("loopholes")) return "MAP policy loopholes";
    if (titleLower.includes("data you can't see")) return "hidden gaps in MAP monitoring";
    if (titleLower.includes("crap list")) return "amazon MAP monitoring";
    if (titleLower.includes("moving the needle")) return "MAP violation reduction";
    if (titleLower.includes("roi of map")) return "ROI of MAP enforcement";
    if (titleLower.includes("too comfortable with your map provider")) return "MAP provider evaluation";
    if (titleLower.includes("supply chain")) return "MAP and distribution control";
    if (titleLower.includes("auditing their map program quarterly")) return "quarterly MAP program audit";
    if (titleLower.includes("unauthorized") || titleLower.includes("resellers")) return "unauthorized seller monitoring";
    if (titleLower.includes("walmart")) return "walmart MAP monitoring";
    if (titleLower.includes("prime day") || titleLower.includes("amazon")) return "amazon MAP monitoring";
    if (haystack.includes("legal")) return "MAP policy legal considerations";
    if (haystack.includes("data") || haystack.includes("coverage")) return "MAP monitoring data";
    if (haystack.includes("kpi")) return "MAP enforcement KPIs";
    if (haystack.includes("executive")) return "MAP program management";
    if (haystack.includes("supply chain")) return "MAP enforcement strategy";
    if (haystack.includes("provider")) return "MAP monitoring provider";
    if (haystack.includes("policy")) return "MAP compliance";
    return "MAP monitoring";
  }

  if (titleLower.includes("softwares de oficina")) return "software colaborativo para equipos";
  if (haystack.includes("mundial")) return "contenido de producto para ecommerce";
  if (haystack.includes("contenido enriquecido") && haystack.includes("tecnolog")) return "contenido enriquecido en tecnologia";
  if (haystack.includes("contenido enriquecido") && haystack.includes("belleza")) return "contenido enriquecido en belleza";
  if (haystack.includes("contenido enriquecido") && haystack.includes("alimentos")) return "contenido enriquecido en supermercados online";
  if (haystack.includes("contenido enriquecido") && haystack.includes("hogar")) return "contenido enriquecido para mejoramiento del hogar";
  if (haystack.includes("contenido enriquecido")) return "contenido enriquecido para ecommerce";
  if (titleLower.includes("fechas claves del retail")) return "ventas ecommerce en fechas clave";
  if (haystack.includes("cross-selling") || haystack.includes("up-selling")) return "cross-selling y up-selling en ecommerce";
  if (haystack.includes("retail omnicanal")) return "experiencia de compra omnicanal";
  if (haystack.includes("asistencia virtual")) return "asistente virtual para ecommerce";
  if (haystack.includes("ia conversacional")) return "IA conversacional en ecommerce";
  if (haystack.includes("retencion")) return "retencion de clientes en ecommerce";
  if (haystack.includes("velocidad")) return "velocidad de carga ecommerce";
  if (haystack.includes("psicolog")) return "psicologia del consumidor en ecommerce";
  if (haystack.includes("automatiz")) return "automatizacion de contenido en retail";
  if (haystack.includes("software")) return "software colaborativo para equipos";
  return "digital shelf para ecommerce";
}

function inferSecondaryKeywords(primaryKeyword, market, category) {
  if (market === "usa") {
    const base = [
      "MAP compliance",
      "MAP enforcement",
      "MAP monitoring software",
      "minimum advertised price policy",
      "pricing compliance",
      "brand protection for ecommerce",
      "unauthorized seller monitoring",
      "digital shelf analytics",
    ];
    return Array.from(new Set([primaryKeyword, ...base])).filter((keyword) => keyword !== primaryKeyword).slice(0, 6);
  }

  const base = [
    "digital shelf analytics",
    "contenido enriquecido",
    "gestion de contenido de producto",
    "fichas de producto",
    "conversion en PDP",
    "retailers y marketplaces",
    "ejecucion digital",
    "ecommerce para marcas",
  ];
  if (category === "IA para ecommerce") {
    base.unshift("IA conversacional", "asistente de compra para ecommerce");
  }
  return Array.from(new Set([primaryKeyword, ...base])).filter((keyword) => keyword !== primaryKeyword).slice(0, 6);
}

function inferSearchIntent(primaryKeyword, market) {
  if (market === "usa") {
    if (primaryKeyword.includes("provider") || primaryKeyword.includes("software")) return "commercial-investigation";
    return "informational";
  }
  if (primaryKeyword.includes("software")) return "commercial-investigation";
  return "informational";
}

function buildRelatedLinks(market, primaryKeyword, category) {
  if (market === "usa") {
    const links = [
      {
        title: "MAP monitoring software",
        description: "See how Omnitok helps brand teams monitor violations, protect margins and act faster across retailers and marketplaces.",
        href: "/en-us/map-monitoring",
        anchor: "Explore MAP monitoring",
      },
      {
        title: "Digital Shelf Analytics",
        description: "Connect pricing, availability and content signals in one workflow to support channel and ecommerce teams.",
        href: "/en-us/digital-shelf-analytics",
        anchor: "View Digital Shelf Analytics",
      },
      {
        title: "Talk to the Omnitok team",
        description: "If you are reviewing your MAP program or current provider, we can help you benchmark the next step.",
        href: "/en-us/contact",
        anchor: "Talk to sales",
      },
    ];
    if (category === "Unauthorized Sellers") {
      links[0].description =
        "Learn how Omnitok helps brands detect unauthorized sellers and enforce pricing policy with better marketplace visibility.";
    }
    if (primaryKeyword.includes("amazon")) {
      links[1].description =
        "Use digital shelf data to connect Amazon pricing, assortment and content visibility with your broader MAP program.";
    }
    return links;
  }

  const links = [
    {
      title: "Contenido enriquecido para ecommerce",
      description: "Activa experiencias de producto más claras, visuales y persuasivas para aumentar conversion en retail digital.",
      href: "/es/contenido-enriquecido",
      anchor: "Explorar contenido enriquecido",
    },
    {
      title: "Gestion de contenido de producto",
      description: "Centraliza, adapta y distribuye tu contenido de producto a retailers y marketplaces sin depender de procesos manuales.",
      href: "/es/gestion-de-contenido-de-producto",
      anchor: "Ver Omnitok Connect",
    },
    {
      title: "Digital Shelf Analytics",
      description: "Monitorea ejecucion digital, contenido, precios y disponibilidad para detectar fricciones que impactan la conversion.",
      href: "/es/digital-shelf-analytics",
      anchor: "Descubrir Digital Shelf Analytics",
    },
  ];

  if (category === "IA para ecommerce") {
    links[0] = {
      title: "Asistente de compra para ecommerce",
      description: "Ayuda a los shoppers a resolver dudas y avanzar con mayor confianza dentro del PDP.",
      href: "/es/asistente-de-compra",
      anchor: "Ver asistente de compra",
    };
  }

  return links;
}

function buildActionTaken(row, duplicateOf) {
  if (duplicateOf) return "consolidated-duplicate";
  const urlPath = extractOriginalPath(row.URL);
  if (urlPath === "/1-2" || urlPath.includes("donec-tincidunt")) return "migrated-with-new-seo-slug";
  return "migrated-and-optimized";
}

function buildTitle(row, primaryKeyword, market) {
  const title = normalizeText(row["Nombre del post"]).replace(/\.$/, "");
  if (market === "usa") {
    if (title === "To Build or Buy: The Tech Dilemma Facing Brands") {
      return "Build vs Buy MAP Monitoring Software: How Brands Should Evaluate the Tradeoff";
    }
    if (title === "Legal Considerations for Implementing MAP Policies") {
      return "MAP Policy Legal Considerations: What Brand Teams Need to Review Before Launch";
    }
    return title.replace("Authorized ? Compliant", "Authorized Retailers and MAP Compliance");
  }

  if (title === "Ejemplos de softwares de oficina para cada equipo de trabajo") {
    return "Software colaborativo para equipos: ejemplos y criterios para elegir mejor";
  }
  return title;
}

function buildH1(row, seoTitle, market) {
  if (market === "usa") return seoTitle.replace(/\s+\|\s+Omnitok$/, "");
  return seoTitle.replace(/\s+\|\s+Omnitok$/, "");
}

function buildSeoTitle(row, title, primaryKeyword, market) {
  if (market === "usa") return `${title} | Omnitok`;
  if (!title.toLowerCase().includes("omnitok")) return `${title} | Omnitok`;
  return title;
}

function buildMetaDescription(row, primaryKeyword, market, category) {
  if (market === "usa") {
    return `${capitalizeFirst(primaryKeyword)} for brands: practical guidance to improve pricing compliance, retailer relationships and MAP program performance.`;
  }

  if (category === "IA para ecommerce") {
    return `Guia sobre ${primaryKeyword} para mejorar la experiencia de compra, reducir fricciones en el PDP y apoyar la conversion en retail digital.`;
  }
  return `Guia sobre ${primaryKeyword} para mejorar experiencia de compra, ejecucion digital y conversion en retailers y marketplaces.`;
}

function buildExcerpt(rawText) {
  const lines = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !shouldSkipBlock(line));

  const excerptLines = [];
  for (const line of lines) {
    if (isHeadingBlock(line) || /^[A-ZÁÉÍÓÚÑ¿][^:]{2,90}:$/.test(line)) break;
    excerptLines.push(line);
    if (normalizeSpacing(excerptLines.join(" ")).length >= 190) break;
  }

  const plain = normalizeSpacing(excerptLines.join(" "));
  if (plain.length <= 180) return plain;
  return `${plain.slice(0, 177).trim()}...`;
}

function formatDateLabel(dateString, market) {
  const date = new Date(dateString);
  const locale = market === "usa" ? "en-US" : "es-CL";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatDateIso(dateString) {
  return new Date(dateString).toISOString().slice(0, 10);
}

function estimateReadTime(text, market) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.ceil(words / 190));
  return market === "usa" ? `${minutes} min read` : `${minutes} min de lectura`;
}

function isHeadingBlock(block) {
  if (!block) return false;
  if (block.length > 110) return false;
  if (/[.!?]$/.test(block)) return false;
  const lower = block.toLowerCase();
  if (lower.startsWith("contáctanos") || lower.startsWith("contactanos")) return false;
  const words = block.split(/\s+/).length;
  return words <= 12;
}

function shouldSkipBlock(block) {
  const normalized = block.trim().toLowerCase();
  return [
    "contáctanos",
    "contactanos",
    "agenda una demo",
    "comienza ahora",
    "share:",
    "tags:",
  ].includes(normalized);
}

function buildContentHtml(rawText) {
  const clean = normalizeText(rawText);
  const blocks = clean.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const htmlBlocks = [];
  let pendingList = [];

  function flushList() {
    if (!pendingList.length) return;
    htmlBlocks.push(
      `<ul>${pendingList.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    );
    pendingList = [];
  }

  for (const block of blocks) {
    if (shouldSkipBlock(block)) continue;

    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (!lines.length) continue;

    if (lines.every((line) => line.startsWith("- "))) {
      flushList();
      htmlBlocks.push(
        `<ul>${lines.map((line) => `<li>${escapeHtml(line.replace(/^- /, ""))}</li>`).join("")}</ul>`
      );
      continue;
    }

    if (lines.length > 1 && lines.every((line) => line.length < 110 && !/[.!?]$/.test(line))) {
      pendingList.push(...lines);
      continue;
    }

    flushList();

    const merged = lines.join(" ").replace(/\s+/g, " ").trim();
    if (isHeadingBlock(merged)) {
      htmlBlocks.push(`<h2>${escapeHtml(merged)}</h2>`);
      continue;
    }

    if (/^[A-ZÁÉÍÓÚÑ][^:]+:\s/.test(merged) && merged.length < 180) {
      const [lead, ...rest] = merged.split(":");
      htmlBlocks.push(`<h3>${escapeHtml(lead)}</h3>`);
      if (rest.join(":").trim()) {
        htmlBlocks.push(`<p>${escapeHtml(rest.join(":").trim())}</p>`);
      }
      continue;
    }

    htmlBlocks.push(`<p>${escapeHtml(merged)}</p>`);
  }

  flushList();
  return htmlBlocks.join("\n");
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; OmnitokMigrationBot/1.0)",
    },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Failed HTML ${response.status} for ${url}`);
  return response.text();
}

function resolveImageUrl(html, postUrl) {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*(?:wp-post-image|attachment-post-thumbnail|featured|hero)[^"']*["']/i,
    /<img[^>]+src=["']([^"']+)["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      try {
        return new URL(match[1], postUrl).href;
      } catch {
        continue;
      }
    }
  }
  return null;
}

function extensionFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"].includes(ext)) return ext;
  } catch {
    return ".jpg";
  }
  return ".jpg";
}

async function downloadImage(imageUrl, market, slug) {
  const ext = extensionFromUrl(imageUrl);
  const marketDir = path.join(publicBlogDir, market);
  await fs.mkdir(marketDir, { recursive: true });
  const filename = `${slug}${ext}`;
  const targetPath = path.join(marketDir, filename);

  try {
    await fs.access(targetPath);
    return { localPath: `/blog/${market}/${filename}`, filename, recovered: true };
  } catch {
    // Continue.
  }

  const response = await fetch(imageUrl, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; OmnitokMigrationBot/1.0)",
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`Failed image ${response.status} for ${imageUrl}`);
  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(targetPath, Buffer.from(arrayBuffer));
  return { localPath: `/blog/${market}/${filename}`, filename, recovered: true };
}

function buildAltText(title, primaryKeyword, market) {
  if (market === "usa") {
    return `Illustration for ${primaryKeyword} and ecommerce brand protection`;
  }
  return `Imagen destacada sobre ${primaryKeyword} para marcas que venden en retail digital`;
}

function inferSlug(row, market, usedSlugs) {
  const title = normalizeText(row["Nombre del post"]);
  let candidate = manualSlugOverrides.get(title);
  if (!candidate) {
    candidate = slugify(title);
  }

  if (candidate === "como-implementar-el-cross-selling-y-el-up-selling-de-manera-efectiva") {
    candidate = manualSlugOverrides.get(title) ?? "cross-selling-up-selling-ecommerce";
  }

  let unique = candidate;
  let index = 2;
  while (usedSlugs.has(`${market}:${unique}`)) {
    unique = `${candidate}-${index}`;
    index += 1;
  }
  usedSlugs.add(`${market}:${unique}`);
  return unique;
}

function hashBody(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function main() {
  const csvText = await fs.readFile(csvPath, "utf8");
  const rows = parseCsv(csvText).filter((row) => row.Estado === "publish");
  const sortedRows = [...rows].sort(
    (a, b) => new Date(a["Fecha publicación"]).getTime() - new Date(b["Fecha publicación"]).getTime()
  );

  const duplicateTargetByTitle = new Map();
  const titleGroups = new Map();
  for (const row of sortedRows) {
    const title = normalizeText(row["Nombre del post"]);
    const group = titleGroups.get(title) ?? [];
    group.push(row);
    titleGroups.set(title, group);
  }

  for (const [title, group] of titleGroups.entries()) {
    if (!duplicateCanonicalTitles.has(title)) continue;
    const canonical = [...group].sort(
      (a, b) => new Date(b["Fecha publicación"]).getTime() - new Date(a["Fecha publicación"]).getTime()
    )[0];
    for (const row of group) {
      duplicateTargetByTitle.set(row.URL, canonical.URL);
    }
  }

  const usedSlugs = new Set();
  const canonicalUrlBySourceUrl = new Map();
  const canonicalRecords = [];
  const tracker = [];
  let recoveredImageCount = 0;
  let fallbackImageCount = 0;

  for (const [index, row] of sortedRows.entries()) {
    const market = inferMarket(row);
    const normalizedBody = normalizeText(row["Texto del post"]);
    const duplicateSource = duplicateTargetByTitle.get(row.URL);
    if (duplicateSource && duplicateSource !== row.URL) {
      continue;
    }

    const title = normalizeText(row["Nombre del post"]);
    const slug = inferSlug(row, market, usedSlugs);
    const canonicalPath = `${marketBasePath[market]}/${slug}`;
    canonicalUrlBySourceUrl.set(row.URL, canonicalPath);

    const category = inferCategory(row, market);
    const primaryKeyword = inferPrimaryKeyword(row, market);
    const secondaryKeywords = inferSecondaryKeywords(primaryKeyword, market, category);
    const searchIntent = inferSearchIntent(primaryKeyword, market);
    const contentHtml = buildContentHtml(normalizedBody);
    const excerpt = buildExcerpt(normalizedBody);
    const seoTitleBase = buildTitle(row, primaryKeyword, market);
    const seoTitle = buildSeoTitle(row, seoTitleBase, primaryKeyword, market);
    const h1 = buildH1(row, seoTitleBase, market);
    const originalPath = extractOriginalPath(row.URL);
    const readTime = estimateReadTime(normalizedBody, market);
    const dateLabel = formatDateLabel(row["Fecha publicación"], market);
    const publishedAt = formatDateIso(row["Fecha publicación"]);
    const legacyPaths = [originalPath];

    if (market === "latam") {
      legacyPaths.push(`/recursos/blog/${slug}`, `/es/recursos/blog/${slug}`);
    } else {
      legacyPaths.push(`/en-us/resources/blog/${slug}`);
    }

    let imageOriginalUrl = null;
    let coverImage = fallbackImages[market];
    try {
      const html = await fetchHtml(row.URL);
      imageOriginalUrl = resolveImageUrl(html, row.URL);
      if (imageOriginalUrl) {
        const downloaded = await downloadImage(imageOriginalUrl, market, slug);
        coverImage = downloaded.localPath;
        recoveredImageCount += 1;
      } else {
        fallbackImageCount += 1;
      }
    } catch {
      fallbackImageCount += 1;
    }

    const coverImageAlt = buildAltText(seoTitleBase, primaryKeyword, market);
    const relatedLinks = buildRelatedLinks(market, primaryKeyword, category);
    const bodyHash = hashBody(normalizedBody);

    canonicalRecords.push({
      id: `${market}-${slug}`,
      market,
      category,
      slug,
      title: seoTitleBase,
      seoTitle,
      metaDescription: buildMetaDescription(row, primaryKeyword, market, category),
      h1,
      excerpt,
      publishedAt,
      dateLabel,
      readTime,
      path: canonicalPath,
      originalUrl: row.URL,
      originalPath,
      legacyPaths: Array.from(new Set(legacyPaths)),
      primaryKeyword,
      secondaryKeywords,
      searchIntent,
      coverImage,
      coverImageAlt,
      imageOriginalUrl,
      relatedLinks,
      bodyHash,
      rawText: normalizedBody,
      contentHtml,
      language: market === "usa" ? "en-US" : "es",
    });

    if ((index + 1) % 5 === 0 || index === sortedRows.length - 1) {
      console.log(`Processed ${index + 1}/${sortedRows.length}: ${title}`);
    }
  }

  const canonicalByOriginalUrl = new Map(canonicalRecords.map((record) => [record.originalUrl, record]));

  for (const row of sortedRows) {
    const market = inferMarket(row);
    const duplicateSource = duplicateTargetByTitle.get(row.URL);
    const canonicalRecord =
      duplicateSource && duplicateSource !== row.URL
        ? canonicalByOriginalUrl.get(duplicateSource)
        : canonicalByOriginalUrl.get(row.URL);

    if (!canonicalRecord) continue;

    canonicalUrlBySourceUrl.set(row.URL, canonicalRecord.path);
    tracker.push({
      currentTitle: normalizeText(row["Nombre del post"]),
      currentUrl: row.URL,
      newUrl: canonicalRecord.path,
      finalMarket: market,
      primaryKeyword: canonicalRecord.primaryKeyword,
      secondaryKeywords: canonicalRecord.secondaryKeywords,
      actionTaken: buildActionTaken(row, duplicateSource && duplicateSource !== row.URL),
      redirectSource: extractOriginalPath(row.URL),
      redirectDestination: canonicalRecord.path,
      seoTitle: canonicalRecord.seoTitle,
      metaDescription: canonicalRecord.metaDescription,
      h1: canonicalRecord.h1,
      imageOriginalFound: Boolean(canonicalRecord.imageOriginalUrl),
      finalImageUsed: canonicalRecord.coverImage,
      finalAltText: canonicalRecord.coverImageAlt,
      finalFilename: path.basename(canonicalRecord.coverImage),
      optimizationNotes:
        duplicateSource && duplicateSource !== row.URL
          ? "Consolidated duplicate into a single canonical article to avoid cannibalization."
          : "Migrated to canonical market-specific blog path with refreshed metadata, cleaned structure and internal linking hooks.",
    });
  }

  canonicalRecords.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  tracker.sort((a, b) => a.currentUrl.localeCompare(b.currentUrl));

  const redirectMap = Object.fromEntries(
    tracker.flatMap((item) => {
      const sourcePath = extractOriginalPath(item.currentUrl);
      const candidates = [sourcePath];
      if (item.finalMarket === "latam") {
        const slug = item.newUrl.split("/").at(-1);
        candidates.push(`/recursos/blog/${slug}`, `/es/recursos/blog/${slug}`);
      } else {
        const slug = item.newUrl.split("/").at(-1);
        candidates.push(`/en-us/resources/blog/${slug}`);
      }
      return Array.from(new Set(candidates)).map((candidate) => [candidate, item.redirectDestination]);
    })
  );

  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(publicBlogDir, { recursive: true });
  await fs.writeFile(
    path.join(outputDir, "blog-posts.generated.json"),
    `${JSON.stringify(canonicalRecords, null, 2)}\n`
  );
  await fs.writeFile(
    path.join(outputDir, "blog-migration-tracker.generated.json"),
    `${JSON.stringify(
      {
        sourcePosts: rows.length,
        canonicalPosts: canonicalRecords.length,
        recoveredImageCount,
        fallbackImageCount,
        items: tracker,
      },
      null,
      2
    )}\n`
  );
  await fs.writeFile(
    path.join(outputDir, "blog-redirects.generated.json"),
    `${JSON.stringify(redirectMap, null, 2)}\n`
  );

  console.log(
    JSON.stringify(
      {
        sourcePosts: rows.length,
        canonicalPosts: canonicalRecords.length,
        recoveredImageCount,
        fallbackImageCount,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
