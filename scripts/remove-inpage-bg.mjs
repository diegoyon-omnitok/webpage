import sharp from 'sharp';
import { copyFileSync } from 'fs';

copyFileSync(
  'C:\\Users\\mishe\\Desktop\\Omnitok Page\\omnitok omnitok content.png',
  'public/omnitok-content-inpage-orig.png'
);

const { data, info } = await sharp('public/omnitok-content-inpage-orig.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// Background color detected: ~R236 G235 B245 (light lavender)
// Also pure white R255 G255 B255 at some areas
const BG_R = 236, BG_G = 235, BG_B = 245;
const TOLERANCE = 28;

function isBg(x, y) {
  const p = (y * width + x) * channels;
  if (data[p + 3] === 0) return true; // already transparent
  const r = data[p], g = data[p + 1], b = data[p + 2];
  return (
    Math.abs(r - BG_R) <= TOLERANCE &&
    Math.abs(g - BG_G) <= TOLERANCE &&
    Math.abs(b - BG_B) <= TOLERANCE
  );
}

const visited = new Uint8Array(width * height);
const queue = [];

// Seed: find border pixels adjacent to transparent that match background
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const p = (y * width + x) * channels;
    if (data[p + 3] === 0) {
      // Check neighbors — if a neighbor is opaque bg, seed it
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
        const np = (ny * width + nx) * channels;
        if (data[np + 3] > 0 && isBg(nx, ny) && !visited[ny * width + nx]) {
          visited[ny * width + nx] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

// BFS flood fill
let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head++];
  const p = (y * width + x) * channels;
  data[p + 3] = 0; // make transparent

  for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
    const nx = x + dx, ny = y + dy;
    if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
    if (visited[ny * width + nx]) continue;
    if (!isBg(nx, ny)) continue;
    visited[ny * width + nx] = 1;
    queue.push([nx, ny]);
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile('public/omnitok-content-inpage.png');

console.log('Done');
