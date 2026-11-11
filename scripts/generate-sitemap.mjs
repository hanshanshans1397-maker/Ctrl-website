import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ORIGIN = (process.env.SITE_URL || 'https://ctrleurope.com').replace(/\/$/, '');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// news.js importuje bez přípony, proto slugy a data čteme z textu.
const newsSource = readFileSync(join(root, 'src', 'data', 'news.js'), 'utf8');
const NEWS = [...newsSource.matchAll(/slug:\s*"([^"]+)",\s*date:\s*"([^"]+)"/g)].map(
  (m) => ({ slug: m[1], date: m[2] }),
);

const pages = [
  ['/', 1.0],
  ['/summit', 0.9],
  ['/workshops', 0.9],
  ['/events', 0.8],
  ['/about', 0.8],
  ['/news', 0.7],
  ['/join', 0.6],
  ['/newsletter', 0.4],
  ['/privacy', 0.2],
];

const urls = [
  ...pages.map(([path, priority]) => ({ path, priority })),
  ...NEWS.map((a) => ({ path: `/news/${a.slug}`, priority: 0.6, lastmod: a.date })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${ORIGIN}${u.path === '/' ? '/' : u.path}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
