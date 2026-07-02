export const CONTACT_EMAIL = 'ctrleurope@seznam.cz';

export const INSTAGRAM_URLS = {
  cs: 'https://www.instagram.com/ctrleurope.cz/',
  en: 'https://www.instagram.com/ctrleurope.eu/',
};

export function getInstagramUrl(isEn) {
  return isEn ? INSTAGRAM_URLS.en : INSTAGRAM_URLS.cs;
}
