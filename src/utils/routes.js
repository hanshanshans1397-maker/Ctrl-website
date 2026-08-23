export const DARK_HERO_ROUTES = [
  '/',
  '/summit',
  '/about',
  '/workshops',
  '/join',
  '/news',
  '/apply',
];

export function hasDarkHero(pathname) {
  return DARK_HERO_ROUTES.includes(pathname);
}
