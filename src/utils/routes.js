export const DARK_HERO_ROUTES = [
  '/',
  '/summit',
  '/about',
  '/workshops',
  '/events',
  '/join',
  '/news',
  '/apply',
  '/newsletter',
  '/newsletter/preferences',
  '/newsletter/unsubscribe',
];

export function hasDarkHero(pathname) {
  return DARK_HERO_ROUTES.includes(pathname);
}
