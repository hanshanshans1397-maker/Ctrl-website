import { getNewsBySlug } from '../src/data/news.js';

export const PAGE_META = {
  home: {
    cs: {
      title: 'CTRL Europe | Digitální odolnost pro novou evropskou generaci',
      description:
        'CTRL Europe — Budujeme digitální odolnost pro novou evropskou generaci.',
      image: '/photos/hero.png',
    },
    en: {
      title: 'CTRL Europe | Digital resilience for a new European generation',
      description:
        'CTRL Europe — Building digital resilience for a new European generation.',
      image: '/photos/hero.png',
    },
  },
  about: {
    cs: {
      title: 'O nás | CTRL Europe',
      description:
        'Kdo jsme, na co se zaměřujeme a proč budujeme digitální odolnost nové generace v Česku a Evropě.',
      image: '/photos/team.jpg',
    },
    en: {
      title: 'About us | CTRL Europe',
      description:
        'Who we are, what we focus on, and why we build digital resilience for the next generation in Czechia and Europe.',
      image: '/photos/team.jpg',
    },
  },
  aktuality: {
    cs: {
      title: 'Aktuality | CTRL Europe',
      description:
        'Novinky, články a výzkum z CTRL Europe — události, projekty a oznámení.',
    },
    en: {
      title: 'News | CTRL Europe',
      description:
        'News, articles and research from CTRL Europe — events, projects and announcements.',
    },
  },
  join: {
    cs: {
      title: 'Zapojit se | CTRL Europe',
      description:
        'Připojte se k síti CTRL Europe — pro jednotlivce, organizace a partnery.',
      image: '/photos/member-heart.jpg',
    },
    en: {
      title: 'Get involved | CTRL Europe',
      description:
        'Join the CTRL Europe network — for individuals, organisations and partners.',
      image: '/photos/member-heart.jpg',
    },
  },
  apply: {
    cs: {
      title: 'Přihláška | CTRL Europe',
      description: 'Přihláška do členské sítě CTRL Europe.',
    },
    en: {
      title: 'Application | CTRL Europe',
      description: 'Apply to join the CTRL Europe membership network.',
    },
  },
  summit: {
    cs: {
      title: 'CTRL Summit 2026 | CTRL Europe',
      description:
        'CTRL Summit 2026 — vlajková konference CTRL Europe v Brně.',
      image: '/2026.png',
    },
    en: {
      title: 'CTRL Summit 2026 | CTRL Europe',
      description:
        'CTRL Summit 2026 — the flagship CTRL Europe conference in Brno.',
      image: '/2026.png',
    },
  },
  workshops: {
    cs: {
      title: 'Workshopy | CTRL Europe',
      description:
        'Workshopy a vzdělávací programy CTRL Europe pro digitální odolnost.',
      image: '/photos/workshopy.png',
    },
    en: {
      title: 'Workshops | CTRL Europe',
      description:
        'Workshops and training programmes from CTRL Europe for digital resilience.',
      image: '/photos/workshopy.png',
    },
  },
  'article-template': {
    cs: {
      title: 'Článek | CTRL Europe',
      description: 'Článek CTRL Europe.',
    },
    en: {
      title: 'Article | CTRL Europe',
      description: 'Article from CTRL Europe.',
    },
  },
};

export const PATH_TO_PAGE_KEY = {
  '/': 'home',
  '/about': 'about',
  '/news': 'aktuality',
  '/join': 'join',
  '/apply': 'apply',
  '/summit': 'summit',
  '/workshops': 'workshops',
};

export const DEFAULT_OG_IMAGE = '/photos/hero.png';
export const SITE_NAME = 'CTRL Europe';

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

export function getPageKeyForPath(pathname) {
  return PATH_TO_PAGE_KEY[normalizePath(pathname)] || 'home';
}

export function getPageMeta(pageKey, lang = 'cs') {
  const locale = lang === 'en' ? 'en' : 'cs';
  return PAGE_META[pageKey]?.[locale] ?? PAGE_META.home[locale];
}

export function getPageMetaForPath(pathname, lang = 'cs') {
  const path = normalizePath(pathname);
  const newsMatch = path.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const article = getNewsBySlug(newsMatch[1]);
    const locale = lang === 'en' ? 'en' : 'cs';
    if (article?.meta?.[locale]) return article.meta[locale];
  }
  return getPageMeta(getPageKeyForPath(path), lang);
}

export function absoluteOgImage(origin, meta) {
  const path = meta?.image || DEFAULT_OG_IMAGE;
  return `${origin.replace(/\/$/, '')}${path}`;
}
