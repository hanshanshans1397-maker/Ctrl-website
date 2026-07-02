import {
  absoluteOgImage,
  getPageMetaForPath,
} from './shared/pageMetaData.js';
import { renderOgHtml } from './shared/renderOgHtml.js';

const SITE_ORIGIN = (process.env.SITE_URL || 'https://ctrleurope.com').replace(/\/$/, '');

const SOCIAL_BOT_PATTERN =
  /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|Discordbot|TelegramBot|Pinterest|Google-Structured-Data-Testing-Tool|bingbot/i;

export const config = {
  matcher: [
    '/((?!api/|_next/|assets/|favicon\\.png|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|otf|json|xml|txt|webmanifest|mp4|webm|pdf|zip)$).*)',
  ],
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (!SOCIAL_BOT_PATTERN.test(userAgent)) {
    return;
  }

  const url = new URL(request.url);
  const meta = getPageMetaForPath(url.pathname, 'cs');
  const pageUrl = `${SITE_ORIGIN}${url.pathname}`;
  const image = absoluteOgImage(SITE_ORIGIN, meta);

  return new Response(
    renderOgHtml({
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      image,
      locale: 'cs_CZ',
    }),
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    },
  );
}
