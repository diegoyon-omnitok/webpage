import sharp from 'sharp';

const { data, info } = await sharp('C:\\Users\\mishe\\Desktop\\Omnitok Page\\omnitok omnitok content.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
console.log(`Image: ${width}x${height}`);

// Dense sampling to find the actual card background
for (let y = 200; y <= 600; y += 100) {
  for (let x = 200; x <= 600; x += 100) {
    const i = (y * width + x) * channels;
    console.log(`(${x},${y}): R=${data[i]} G=${data[i+1]} B=${data[i+2]} A=${data[i+3]}`);
  }
}
