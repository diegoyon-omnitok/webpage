import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, '../public/Imagen de portada.jpg');
const outputPath = path.join(__dirname, '../public/portada-transparent.png');

const image = sharp(inputPath);
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

// Threshold for "white" pixels (R,G,B all above this value)
const THRESHOLD = 235;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels;
    const r = pixels[idx];
    const g = pixels[idx + 1];
    const b = pixels[idx + 2];

    // How "white" this pixel is (0 = not white, 255 = pure white)
    const whiteness = Math.min(r, g, b);

    if (whiteness >= THRESHOLD) {
      // Fully transparent for near-white pixels
      const alpha = Math.max(0, 255 - Math.round((whiteness - THRESHOLD) * (255 / (255 - THRESHOLD)) * 3));
      pixels[idx + 3] = alpha;
    }
  }
}

await sharp(Buffer.from(pixels), {
  raw: { width, height, channels },
})
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`Done → ${outputPath}`);
