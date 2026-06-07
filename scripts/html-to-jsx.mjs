import fs from 'fs';
import path from 'path';

const LEGACY = path.resolve('_legacy');

function parseStyle(str) {
  const obj = {};
  str.split(';').forEach((part) => {
    const idx = part.indexOf(':');
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) return;
    const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[camelKey] = val;
  });
  return obj;
}

function decodeEntities(html) {
  return html
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&(\#8212|\#8211|\#39);/g, (m) => {
      const map = { '&#8212;': '—', '&#8211;': '–', '&#39;': "'" };
      return map[m] || m;
    })
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function normalizePath(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return null;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return null;
  let p = href.replace(/\.html$/i, '');
  if (p === 'index' || p === '' || p === '/') return '/';
  return p.startsWith('/') ? p : `/${p}`;
}

function htmlToJsx(html) {
  let s = html;

  s = s.replace(/<!--[\s\S]*?-->/g, '');

  s = s.replace(/<a\s([^>]*?)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, before, href, after, inner) => {
    const path = normalizePath(href);
    const attrs = `${before}${after}`.replace(/\sclass=/g, ' className=');
    if (!path) return `<a href="${href}"${attrs}>${inner}</a>`;
    return `<Link to="${path}"${attrs}>${inner}</Link>`;
  });

  s = s.replace(/\sclass=/g, ' className=');
  s = s.replace(/\sfor=/g, ' htmlFor=');

  s = s.replace(/\sonmouseover="([^"]*)"/gi, (_, code) => {
    const fn = code.replace(/this\./g, 'e.currentTarget.');
    return ` onMouseOver={(e) => { ${fn} }}`;
  });
  s = s.replace(/\sonmouseout="([^"]*)"/gi, (_, code) => {
    const fn = code.replace(/this\./g, 'e.currentTarget.');
    return ` onMouseOut={(e) => { ${fn} }}`;
  });

  s = s.replace(/\sstyle="([^"]*)"/g, (_, styleStr) => {
    return ` style={${JSON.stringify(parseStyle(styleStr))}}`;
  });

  s = s.replace(/<(area|base|br|col|embed|hr|img|input|meta|param|source|track|wbr)([^>]*?)>/gi, (m, tag, attrs) => {
    if (m.endsWith('/>')) return m;
    return `<${tag}${attrs} />`;
  });
  s = s.replace(/<canvas([^>]*?)><\/canvas>/gi, '<canvas$1></canvas>');
  s = s.replace(/<canvas([^>]*?)\s*\/>/gi, '<canvas$1></canvas>');

  return decodeEntities(s);
}

function extractPageContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return '';

  let body = bodyMatch[1];
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  body = body.replace(/<div id="cur"[\s\S]*?<\/div>\s*/gi, '');
  body = body.replace(/<nav[\s\S]*?<\/nav>\s*/gi, '');
  body = body.replace(/<div class="mobile-menu"[\s\S]*?<\/div>\s*/gi, '');
  body = body.replace(/<footer[\s\S]*?<\/footer>\s*/gi, '');
  body = body.replace(/<script[\s\S]*?<\/script>\s*/gi, '');

  const startMatch = body.match(/<(section|div class="page-hero")/i);
  if (startMatch) body = body.slice(body.indexOf(startMatch[0]));

  return body.trim();
}

function extractStyles(html) {
  const styles = [];
  const re = /<style>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html))) styles.push(m[1]);
  return styles.join('\n');
}

const pages = [
  { file: 'index.html', component: 'Home', exportName: 'HomePage' },
  { file: 'about.html', component: 'About', exportName: 'AboutPage' },
  { file: 'articles.html', component: 'Articles', exportName: 'ArticlesPage' },
  { file: 'research.html', component: 'Research', exportName: 'ResearchPage' },
  { file: 'join.html', component: 'Join', exportName: 'JoinPage' },
  { file: 'summit.html', component: 'Summit', exportName: 'SummitPage' },
  { file: 'workshops.html', component: 'Workshops', exportName: 'WorkshopsPage' },
  { file: 'article-template.html', component: 'ArticleTemplate', exportName: 'ArticleTemplatePage' },
];

const outDir = path.resolve('src/pages/generated');
fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
  const html = fs.readFileSync(path.join(LEGACY, page.file), 'utf8');
  const content = extractPageContent(html);
  const jsx = htmlToJsx(content);
  const wrapped = `import { Link } from 'react-router-dom';

export function ${page.exportName}Content() {
  return (
    <>
${jsx.split('\n').map((line) => (line ? '      ' + line : '')).join('\n')}
    </>
  );
}
`;
  fs.writeFileSync(path.join(outDir, `${page.component}Content.jsx`), wrapped);
  console.log('Generated', page.component);
}

const indexHtml = fs.readFileSync(path.join(LEGACY, 'index.html'), 'utf8');
const aboutHtml = fs.readFileSync(path.join(LEGACY, 'about.html'), 'utf8');
const summitHtml = fs.readFileSync(path.join(LEGACY, 'summit.html'), 'utf8');
const workshopsHtml = fs.readFileSync(path.join(LEGACY, 'workshops.html'), 'utf8');
const joinHtml = fs.readFileSync(path.join(LEGACY, 'join.html'), 'utf8');

const combinedCss = [
  extractStyles(indexHtml),
  extractStyles(aboutHtml),
  extractStyles(summitHtml),
  extractStyles(workshopsHtml),
  extractStyles(joinHtml),
].join('\n');

fs.mkdirSync(path.resolve('src/styles'), { recursive: true });
fs.writeFileSync(path.resolve('src/styles/site.css'), combinedCss);
console.log('Wrote site.css');
