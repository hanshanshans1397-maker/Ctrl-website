import { getNewsBySlug } from '../src/data/news.js';

export const PAGE_META = {
  home: {
    cs: {
      title: 'CTRL Europe | Digitální odolnost pro novou evropskou generaci',
      description:
        'CTRL Europe — Budujeme digitální odolnost pro novou evropskou generaci.',
      image: '/og-image.jpg',
    },
    en: {
      title: 'CTRL Europe | Digital resilience for a new European generation',
      description:
        'CTRL Europe — Building digital resilience for a new European generation.',
      image: '/og-image.jpg',
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
  events: {
    cs: {
      title: 'Akce | CTRL Europe',
      description:
        'Soutěže, konference a setkání, kde se mladí lidé učí, potkávají a mění věci kolem sebe.',
    },
    en: {
      title: 'Events | CTRL Europe',
      description:
        'Competitions, conferences and gatherings where young people learn, meet and change things around them.',
    },
  },
  workshops: {
    cs: {
      title: 'Workshopy | CTRL Europe',
      description:
        'Workshopy, které se dají zažít. Učíme mladé i dospělé poznat manipulaci, dezinformace a deepfaky.',
      image: '/photos/workshopy.png',
    },
    en: {
      title: 'Workshops | CTRL Europe',
      description:
        'Workshops you can experience. We teach young people and adults to recognize manipulation, disinformation and deepfakes.',
      image: '/photos/workshopy.png',
    },
  },
  newsletter: {
    cs: {
      title: 'Newsletter | CTRL Europe',
      description:
        'Přihlaste se k newsletteru CTRL Europe — summit, workshopy, běh a aktuality.',
    },
    en: {
      title: 'Newsletter | CTRL Europe',
      description:
        'Subscribe to the CTRL Europe newsletter — summit, workshops, run, and updates.',
    },
  },
  newsletterUnsubscribe: {
    cs: {
      title: 'Odhlášení | CTRL Europe',
      description: 'Odhlášení z newsletteru CTRL Europe.',
    },
    en: {
      title: 'Unsubscribe | CTRL Europe',
      description: 'Unsubscribe from the CTRL Europe newsletter.',
    },
  },
  notFound: {
    cs: {
      title: '404 | CTRL Europe',
      description: 'Stránka nebyla nalezena.',
    },
    en: {
      title: '404 | CTRL Europe',
      description: 'Page not found.',
    },
  },
  newsletterPreferences: {
    cs: {
      title: 'Předvolby newsletteru | CTRL Europe',
      description: 'Změna témat newsletteru CTRL Europe.',
    },
    en: {
      title: 'Newsletter preferences | CTRL Europe',
      description: 'Change your CTRL Europe newsletter topics.',
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
  '/newsletter': 'newsletter',
  '/newsletter/preferences': 'newsletterPreferences',
  '/newsletter/unsubscribe': 'newsletterUnsubscribe',
  '/summit': 'summit',
  '/workshops': 'workshops',
  '/events': 'events',
};

export const DEFAULT_OG_IMAGE = '/og-image.jpg';
export const DEFAULT_OG_IMAGE_WIDTH = 1024;
export const DEFAULT_OG_IMAGE_HEIGHT = 537;
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
