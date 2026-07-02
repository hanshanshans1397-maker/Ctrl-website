export const DARK_HERO_ROUTES = [
  '/',
  '/summit',
  '/about',
  '/workshops',
  '/research',
  '/join',
  '/articles',
  '/aktuality',
  '/apply',
];

export function hasDarkHero(pathname) {
  return DARK_HERO_ROUTES.includes(pathname);
}
