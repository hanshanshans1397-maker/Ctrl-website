import { EVENTS } from './events.js';
import { NEWS, getNewsBySlug } from '../src/data/news.js';
import { SITE_NAME, getPageKeyForPath, getPageMeta, normalizePath } from './pageMetaData.js';

const LANGS = ['cs', 'en'];

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Text bloky v news.js mohou být string, nebo pole stringů a { text, href }. */
function inline(value) {
  if (Array.isArray(value)) {
    return value
      .map((part) =>
        typeof part === 'string'
          ? esc(part)
          : part.href
            ? `<a href="${esc(part.href)}">${esc(part.text)}</a>`
            : esc(part.text),
      )
      .join('');
  }
  return esc(value);
}

function renderSection(section, lang) {
  switch (section.type) {
    case 'h2':
      return `<h2>${inline(section[lang])}</h2>`;
    case 'h3':
      return `<h3>${inline(section[lang])}</h3>`;
    case 'p':
      return `<p>${inline(section[lang])}</p>`;
    case 'quote':
      return `<blockquote><p>${inline(section[lang])}</p>${
        section.author?.[lang] ? `<footer>${esc(section.author[lang])}</footer>` : ''
      }</blockquote>`;
    case 'facts':
      return `<dl>${(section.items || [])
        .map((i) => `<dt>${esc(i.label?.[lang])}</dt><dd>${esc(i.value?.[lang])}</dd>`)
        .join('')}</dl>`;
    default:
      return '';
  }
}

function renderArticle(article, lang) {
  return `<article lang="${lang}">
<h1>${esc(article.title?.[lang])}</h1>
<p><time datetime="${esc(article.published || article.date)}">${esc(article.published || article.date)}</time></p>
<p>${esc(article.excerpt?.[lang])}</p>
${(article.sections || []).map((s) => renderSection(s, lang)).join('\n')}
</article>`;
}

function renderEvents(lang, origin) {
  const isEn = lang === 'en';
  return `<section lang="${lang}"><h2>${isEn ? 'Events' : 'Akce'}</h2><ul>${EVENTS.map(
    (e) =>
      `<li><strong>${esc(e.name)}</strong> (${esc(isEn ? e.categoryEn : e.categoryCs)}): ${esc(
        isEn ? e.descEn : e.descCs,
      )}</li>`,
  ).join('')}</ul></section>`;
}

function renderNewsList(lang, origin) {
  const isEn = lang === 'en';
  return `<section lang="${lang}"><h2>${isEn ? 'News' : 'Aktuality'}</h2><ul>${NEWS.map(
    (a) =>
      `<li><a href="${origin}/news/${esc(a.slug)}">${esc(a.title?.[lang])}</a> (${esc(
        a.published || a.date,
      )}): ${esc(a.excerpt?.[lang])}</li>`,
  ).join('')}</ul></section>`;
}

function buildJsonLd({ path, origin, meta, article }) {
  const url = `${origin}${path}`;
  const orgRef = { '@id': `${origin}/#organization` };
  if (article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title?.cs,
      alternativeHeadline: article.title?.en,
      description: article.excerpt?.cs,
      datePublished: article.published || article.date,
      inLanguage: ['cs', 'en'],
      mainEntityOfPage: url,
      image: meta?.image ? `${origin}${meta.image}` : undefined,
      author: orgRef,
      publisher: orgRef,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': path === '/about' ? 'AboutPage' : 'WebPage',
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: ['cs', 'en'],
    isPartOf: { '@id': `${origin}/#website` },
    publisher: orgRef,
  };
}

/**
 * Plnotextové HTML pro AI crawlery (GPTBot, ClaudeBot, PerplexityBot, ...),
 * které nespouštějí JavaScript a v SPA by jinak viděly jen prázdný #root.
 */
export function renderAiHtml({ pathname, origin }) {
  const path = normalizePath(pathname);
  const url = `${origin}${path === '/' ? '/' : path}`;
  const newsMatch = path.match(/^\/news\/([^/]+)$/);
  const article = newsMatch ? getNewsBySlug(newsMatch[1]) : null;
  const pageKey = getPageKeyForPath(path);

  const metaFor = (lang) =>
    article?.meta?.[lang] ?? getPageMeta(pageKey, lang);
  const csMeta = metaFor('cs');

  const body = LANGS.map((lang) => {
    const meta = metaFor(lang);
    if (article) return renderArticle(article, lang);

    let extra = '';
    if (pageKey === 'events') extra = renderEvents(lang, origin);
    if (pageKey === 'aktuality') extra = renderNewsList(lang, origin);
    return `<section lang="${lang}"><h1>${esc(meta.title)}</h1><p>${esc(meta.description)}</p></section>${extra}`;
  }).join('\n<hr />\n');

  const jsonLd = buildJsonLd({ path: path === '/' ? '/' : path, origin, meta: csMeta, article });

  return `<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8" />
<title>${esc(csMeta.title)}</title>
<meta name="description" content="${esc(csMeta.description)}" />
<link rel="canonical" href="${esc(url)}" />
<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
</head>
<body>
<header><a href="${origin}/">${SITE_NAME}</a> · <a href="${origin}/llms.txt">llms.txt</a> · <a href="${origin}/sitemap.xml">sitemap</a></header>
<main>
${body}
</main>
<footer><p>${SITE_NAME}, z. s. · info@ctrleurope.com</p></footer>
</body>
</html>`;
}
