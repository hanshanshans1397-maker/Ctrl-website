import sharp from 'sharp';
import { stat } from 'node:fs/promises';

// [source, target, maxWidth]
const JOBS = [
  ['public/photos/hero.png', 'public/photos/hero.webp', 1920],
  ['public/photos/workshop-audience.png', 'public/photos/workshop-audience.webp', 1400],
  ['public/photos/member-heart.jpg', 'public/photos/member-heart.webp', 1400],
  ['public/photos/workshopy.png', 'public/photos/workshopy.webp', 1920],
  ['public/photos/vyzkum.png', 'public/photos/vyzkum.webp', 1920],
  ['public/photos/ClenskyProjektClenove.png', 'public/photos/ClenskyProjektClenove.webp', 1920],
  ['public/photos/Seminar.jpg', 'public/photos/Seminar.webp', 1920],
  ['public/photos/stage.jpg', 'public/photos/stage.webp', 1400],
  ['public/photos/team.jpg', 'public/photos/team.webp', 1400],
  ['public/IMG_4222.jpeg', 'public/IMG_4222.webp', 900],
  ['public/2026.png', 'public/2026.webp', 1200],
];

for (const [src, dest, width] of JOBS) {
  try {
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);
    const before = (await stat(src)).size;
    const after = (await stat(dest)).size;
    console.log(`${dest}: ${(before / 1024).toFixed(0)}kB -> ${(after / 1024).toFixed(0)}kB`);
  } catch (err) {
    console.error(`FAILED ${src}: ${err.message}`);
  }
}
