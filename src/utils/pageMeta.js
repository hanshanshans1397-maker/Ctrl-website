import {
  PAGE_META,
  SITE_NAME,
  absoluteOgImage,
} from '../../shared/pageMetaData.js';

export { PAGE_META };

const SITE_ORIGIN = (import.meta.env.VITE_SITE_URL || 'https://ctrleurope.com').replace(
  /\/$/,
  '',
);

function setMetaByAttr(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaName(name, content) {
  setMetaByAttr('name', name, content);
}

function setMetaProperty(property, content) {
  setMetaByAttr('property', property, content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

export function setMetaDescription(content) {
  setMetaName('description', content);
}

export function applyPageMeta(pageKey, isEn) {
  const meta = PAGE_META[pageKey]?.[isEn ? 'en' : 'cs'];
  if (!meta) return;

  const url = `${SITE_ORIGIN}${window.location.pathname}`;
  const image = absoluteOgImage(SITE_ORIGIN, meta);
  const locale = isEn ? 'en_US' : 'cs_CZ';

  document.title = meta.title;
  setMetaDescription(meta.description);
  setCanonical(url);

  setMetaProperty('og:type', 'website');
  setMetaProperty('og:site_name', SITE_NAME);
  setMetaProperty('og:title', meta.title);
  setMetaProperty('og:description', meta.description);
  setMetaProperty('og:url', url);
  setMetaProperty('og:image', image);
  setMetaProperty('og:image:secure_url', image);
  setMetaProperty('og:locale', locale);

  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', meta.title);
  setMetaName('twitter:description', meta.description);
  setMetaName('twitter:image', image);
}
