export const CONTACT_EMAIL = 'info@ctrleurope.com';


export const INSTAGRAM_URLS = {
  cs: 'https://www.instagram.com/ctrleurope.cz/',
  en: 'https://www.instagram.com/ctrleurope.eu/',
};

export const TIKTOK_URL = 'https://www.tiktok.com/@ctrleurope.cz';


export function getInstagramUrl(isEn) {
  return isEn ? INSTAGRAM_URLS.en : INSTAGRAM_URLS.cs;
}
