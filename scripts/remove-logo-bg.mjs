/**
 * Logo background removal — v3
 *
 * Estrategia:
 * 1. Detecta color de fondo SOLO desde las 4 esquinas (evita falsos positivos de borde)
 * 2. Si las 4 esquinas ya son transparentes → el logo ya fue procesado; sólo hace defringe
 * 3. Si hay esquinas opacas → BFS flood fill + defringe
 * 4. Defringe: elimina halos de color de fondo en pixels del borde del logo
 * 5. Erosión suave para remover último pixel de halo
 * 6. Compresión PNG máxima
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "../public/integrations");

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

/**
 * Detecta el color de fondo muestreando SÓLO las 4 esquinas.
 * Devuelve { r, g, b } si hay esquinas opacas, o null si todas son transparentes.
 */
function detectBgColorFromCorners(pixels, width, height, channels) {
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];

  const opaque = [];
  for (const [x, y] of corners) {
    const idx = (y * width + x) * channels;
    if (pixels[idx + 3] > 10) {
      opaque.push({ r: pixels[idx], g: pixels[idx + 1], b: pixels[idx + 2] });
    }
  }

  if (opaque.length === 0) return null;

  const avg = opaque.reduce((a, c) => ({ r: a.r + c.r, g: a.g + c.g, b: a.b + c.b }), { r: 0, g: 0, b: 0 });
  return { r: Math.round(avg.r / opaque.length), g: Math.round(avg.g / opaque.length), b: Math.round(avg.b / opaque.length) };
}

async function processLogo(filename, options = {}) {
  const {
    tolerance = 30,   // radio para BFS flood fill
    defringe = 50,    // radio para defringe pass
    assumedBg = { r: 255, g: 255, b: 255 }, // bg asumido si ya fue procesado
    erode = 1,
  } = options;

  const inputPath = path.join(DIR, filename);

  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  const bg = detectBgColorFromCorners(pixels, width, height, channels);

  let bgR, bgG, bgB;
  let didFloodFill = false;

  if (bg) {
    // ── Hay fondo a eliminar ──────────────────────────────────────────────
    bgR = bg.r; bgG = bg.g; bgB = bg.b;

    const visited = new Uint8Array(width * height);
    const queue = [];
    const seed = (x, y) => { const px = y * width + x; if (!visited[px]) queue.push(px); };
    seed(0, 0); seed(width - 1, 0); seed(0, height - 1); seed(width - 1, height - 1);

    let removed = 0;
    while (queue.length > 0) {
      const px = queue.pop();
      if (visited[px]) continue;
      visited[px] = 1;

      const idx = px * channels;
      const a = pixels[idx + 3];

      // pixels ya transparentes: marcar y propagar
      if (a < 10) {
        const x = px % width, y = Math.floor(px / width);
        if (x > 0) queue.push(px - 1); if (x < width - 1) queue.push(px + 1);
        if (y > 0) queue.push(px - width); if (y < height - 1) queue.push(px + width);
        continue;
      }

      const r = pixels[idx], g = pixels[idx + 1], b = pixels[idx + 2];
      if (colorDist(r, g, b, bgR, bgG, bgB) > tolerance) continue;

      pixels[idx + 3] = 0;
      removed++;
      const x = px % width, y = Math.floor(px / width);
      if (x > 0) queue.push(px - 1); if (x < width - 1) queue.push(px + 1);
      if (y > 0) queue.push(px - width); if (y < height - 1) queue.push(px + width);
    }

    didFloodFill = true;
    console.log(`  FILL  ${filename.padEnd(20)} bg:rgb(${bgR},${bgG},${bgB}) → ${removed.toLocaleString()} px removed`);
  } else {
    // ── Logo ya procesado: sólo defringe con bg asumido ──────────────────
    bgR = assumedBg.r; bgG = assumedBg.g; bgB = assumedBg.b;
    console.log(`  DEFR  ${filename.padEnd(20)} (corners transparent, defringe with rgb(${bgR},${bgG},${bgB}))`);
  }

  // ── Defringe pass ─────────────────────────────────────────────────────────
  let deframeCount = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = y * width + x;
      const idx = px * channels;
      if (pixels[idx + 3] === 0) continue;

      let hasBgNeighbor = false;
      for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          if (pixels[(ny * width + nx) * channels + 3] === 0) { hasBgNeighbor = true; break; }
        }
      }
      if (!hasBgNeighbor) continue;

      const r = pixels[idx], g = pixels[idx + 1], b = pixels[idx + 2];
      const dist = colorDist(r, g, b, bgR, bgG, bgB);
      if (dist < defringe) {
        const ratio = dist / defringe;
        pixels[idx + 3] = Math.round(pixels[idx + 3] * ratio);
        deframeCount++;
      }
    }
  }

  // ── Erosión suave del borde ───────────────────────────────────────────────
  if (erode > 0) {
    const snap = new Uint8Array(width * height);
    for (let px = 0; px < width * height; px++) snap[px] = pixels[px * channels + 3];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const px = y * width + x;
        if (snap[px] === 0) continue;
        let minA = snap[px];
        for (let dy = -erode; dy <= erode; dy++) {
          for (let dx = -erode; dx <= erode; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              minA = Math.min(minA, snap[ny * width + nx]);
            }
          }
        }
        if (minA < snap[px]) pixels[px * channels + 3] = Math.round((snap[px] + minA) / 2);
      }
    }
  }

  // ── Guardar PNG optimizado ────────────────────────────────────────────────
  const tmpPath = inputPath + ".tmp.png";
  await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(tmpPath);
  fs.renameSync(tmpPath, inputPath);

  const kb = Math.round(fs.statSync(inputPath).size / 1024);
  console.log(`        ${filename.padEnd(20)} ${width}x${height} → ${kb}KB  (defringe: ${deframeCount} px)`);
}

// ── Configuración por logo ────────────────────────────────────────────────────
// assumedBg: qué color de fondo tenía originalmente (para defringe si ya está procesado)
const WHITE = { r: 255, g: 255, b: 255 };
const BLACK = { r: 0,   g: 0,   b: 0   };

const logos = [
  // Fondo blanco original
  { file: "naldo.png",        tolerance: 30, defringe: 55, assumedBg: WHITE },
  { file: "tottus.png",       tolerance: 28, defringe: 50, assumedBg: WHITE },
  { file: "sodimac.png",      tolerance: 30, defringe: 55, assumedBg: WHITE },
  { file: "diggit.png",       tolerance: 30, defringe: 55, assumedBg: WHITE },
  { file: "mercadolibre.png", tolerance: 30, defringe: 55, assumedBg: WHITE },
  { file: "hiraoka.png",      tolerance: 28, defringe: 50, assumedBg: WHITE },
  { file: "costco.png",       tolerance: 25, defringe: 45, assumedBg: WHITE },
  { file: "easy.png",         tolerance: 25, defringe: 45, assumedBg: WHITE },
  { file: "liverpool.png",    tolerance: 25, defringe: 45, assumedBg: WHITE },
  { file: "plazavea.png",     tolerance: 25, defringe: 45, assumedBg: WHITE },
  // Fondo con leve gris
  { file: "alkosto.png",      tolerance: 22, defringe: 42, assumedBg: { r: 248, g: 249, b: 251 } },
  // Logos circulares (fondo blanco fuera del círculo)
  { file: "jumbo.png",        tolerance: 22, defringe: 40, assumedBg: WHITE },
  { file: "paris.png",        tolerance: 22, defringe: 40, assumedBg: WHITE },
  // Fondo negro original
  { file: "falabella.png",    tolerance: 30, defringe: 55, assumedBg: BLACK },
  { file: "oncity.png",       tolerance: 30, defringe: 55, assumedBg: BLACK },
];

console.log("Logo background removal v3\n");
for (const { file, tolerance, defringe, assumedBg } of logos) {
  try {
    await processLogo(file, { tolerance, defringe, assumedBg, erode: 1 });
  } catch (e) {
    console.error(`  ERROR ${file}: ${e.message}`);
  }
}
console.log("\nDone.");
