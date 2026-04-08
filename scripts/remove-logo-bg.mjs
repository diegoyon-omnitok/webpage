import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir  = path.join(__dirname, "../public/clients");
const outputDir = path.join(__dirname, "../public/clients");

const files = (await readdir(inputDir)).filter(f => f.endsWith(".png"));

for (const file of files) {
  const inputPath  = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(".png", "-clean.png"));

  const img   = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  // Sample corners to detect background color
  const getPixel = (x, y) => {
    const idx = (y * width + x) * channels;
    return { r: buf[idx], g: buf[idx+1], b: buf[idx+2], a: channels === 4 ? buf[idx+3] : 255 };
  };

  const corners = [
    getPixel(0, 0), getPixel(width-1, 0),
    getPixel(0, height-1), getPixel(width-1, height-1),
  ];
  const avg = corners.reduce((acc, p) => ({
    r: acc.r + p.r/4, g: acc.g + p.g/4, b: acc.b + p.b/4
  }), { r: 0, g: 0, b: 0 });

  const isDarkBg  = avg.r < 40 && avg.g < 40 && avg.b < 40;
  const isLightBg = avg.r > 215 && avg.g > 215 && avg.b > 215;

  console.log(`${file}: avg bg (${Math.round(avg.r)},${Math.round(avg.g)},${Math.round(avg.b)}) → ${isDarkBg ? "DARK" : isLightBg ? "LIGHT" : "MIXED"}`);

  // Create RGBA output buffer
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const si = i * channels;
    const di = i * 4;
    const r = buf[si], g = buf[si+1], b = buf[si+2];
    const a = channels === 4 ? buf[si+3] : 255;

    let alpha = a;

    if (isDarkBg) {
      // Remove pixels close to black
      const darkness = Math.max(r, g, b);
      if (darkness < 35) alpha = 0;
      else if (darkness < 55) alpha = Math.round((darkness - 35) / 20 * 255);
    } else if (isLightBg) {
      // Remove pixels close to white
      const lightness = Math.min(r, g, b);
      if (lightness > 220) alpha = 0;
      else if (lightness > 200) alpha = Math.round((220 - lightness) / 20 * 255);
    }

    out[di]   = r;
    out[di+1] = g;
    out[di+2] = b;
    out[di+3] = alpha;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log(`  → saved ${path.basename(outputPath)}`);
}

console.log("Done.");
