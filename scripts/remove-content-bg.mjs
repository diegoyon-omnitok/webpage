import sharp from 'sharp';

const { data, info } = await sharp('public/omnitok-content.png')
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const output = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  output[i * 4]     = r;
  output[i * 4 + 1] = g;
  output[i * 4 + 2] = b;

  const darkness = Math.max(r, g, b);
  if (darkness < 20) {
    output[i * 4 + 3] = 0;
  } else if (darkness < 40) {
    output[i * 4 + 3] = Math.round((darkness - 20) / 20 * 255);
  } else {
    output[i * 4 + 3] = 255;
  }
}

await sharp(output, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('public/omnitok-content-nobg.png');

console.log('done');
