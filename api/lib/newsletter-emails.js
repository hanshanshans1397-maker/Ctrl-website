import { getSiteUrl } from './env.js';
import {
  confirmationRow,
  sendEmail,
  wrapConfirmationEmail,
} from './send-email.js';

const PREFERENCE_LABELS = {
  workshops: { cs: 'Workshopy', en: 'Workshops' },
  summit: { cs: 'Summit', en: 'Summit' },
  run: { cs: 'Sportovní akce', en: 'Sports events' },
  partners: { cs: 'Spolupráce', en: 'Partnerships' },
  media: { cs: 'Média a podcasty', en: 'Media and podcasts' },
};

function formatPreferences(preferences, lang) {
  const isEn = lang === 'en';
  return Object.keys(PREFERENCE_LABELS)
    .filter((key) => preferences.includes(key))
    .map((key) => PREFERENCE_LABELS[key][isEn ? 'en' : 'cs'])
    .join(', ');
}

function unsubscribeUrl(token) {
  return `${getSiteUrl()}/newsletter/unsubscribe?token=${token}`;
}

function preferencesUrl(token) {
  return `${getSiteUrl()}/newsletter/preferences?token=${token}`;
}

function preferenceRows(preferences, lang) {
  const isEn = lang === 'en';
  return confirmationRow(
    isEn ? 'Topics' : 'Témata',
    formatPreferences(preferences, lang),
  );
}

export function buildSubscribedEmail({ email, lang, preferences, token }) {
  const isEn = lang === 'en';

  return {
    to: email,
    subject: isEn
      ? 'You are subscribed — CTRL Europe'
      : 'Jste přihlášeni — CTRL Europe',
    html: wrapConfirmationEmail({
      isEn,
      eyebrow: 'Newsletter',
      headline: isEn ? 'You are subscribed.' : 'Jste přihlášeni.',
      greeting: isEn ? 'Hi,' : 'Ahoj,',
      intro: isEn
        ? 'Thank you for joining the CTRL Europe newsletter. We will write when there is something new in the groups you chose.'
        : 'Děkujeme za přihlášení k newsletteru CTRL Europe. Napíšeme, až bude něco nového ve skupinách, které jste zvolili.',
      summaryTitle: isEn ? 'Your subscription' : 'Váš odběr',
      rows: preferenceRows(preferences, lang),
      outro: isEn
        ? 'Want different topics later? Use the button below. You can also unsubscribe anytime.'
        : 'Chcete později jiná témata? Použijte tlačítko níže. Odhlásit se můžete kdykoli.',
      ctaHref: preferencesUrl(token),
      ctaLabel: isEn ? 'Change preferences' : 'Změnit předvolby',
      secondaryCtaHref: unsubscribeUrl(token),
      secondaryCtaLabel: isEn ? 'Unsubscribe' : 'Odhlásit odběr',
    }),
  };
}

export function buildAlreadySubscribedEmail({ email, lang, preferences, token }) {
  const isEn = lang === 'en';

  return {
    to: email,
    subject: isEn
      ? 'You are already subscribed — CTRL Europe'
      : 'Už jste přihlášeni — CTRL Europe',
    html: wrapConfirmationEmail({
      isEn,
      eyebrow: 'Newsletter',
      headline: isEn ? 'You are already subscribed.' : 'Už jste přihlášeni.',
      greeting: isEn ? 'Hi,' : 'Ahoj,',
      intro: isEn
        ? 'This email is already on the CTRL Europe newsletter. To pick different topics, use the button below.'
        : 'Tento e-mail už je v newsletteru CTRL Europe. Jiná témata vyberete tlačítkem níže.',
      summaryTitle: isEn ? 'Current topics' : 'Aktuální témata',
      rows: preferenceRows(preferences, lang),
      outro: isEn
        ? 'You can also unsubscribe anytime.'
        : 'Odhlásit se můžete kdykoli.',
      ctaHref: preferencesUrl(token),
      ctaLabel: isEn ? 'Change preferences' : 'Změnit předvolby',
      secondaryCtaHref: unsubscribeUrl(token),
      secondaryCtaLabel: isEn ? 'Unsubscribe' : 'Odhlásit odběr',
    }),
  };
}

export function buildPreferencesUpdatedEmail({ email, lang, preferences, token }) {
  const isEn = lang === 'en';

  return {
    to: email,
    subject: isEn
      ? 'Newsletter preferences updated — CTRL Europe'
      : 'Preference newsletteru aktualizovány — CTRL Europe',
    html: wrapConfirmationEmail({
      isEn,
      eyebrow: 'Newsletter',
      headline: isEn ? 'Preferences updated.' : 'Preference aktualizovány.',
      greeting: isEn ? 'Hi,' : 'Ahoj,',
      intro: isEn
        ? 'Your CTRL Europe newsletter preferences were changed.'
        : 'Vaše preference newsletteru CTRL Europe byly změněny.',
      summaryTitle: isEn ? 'Current topics' : 'Aktuální témata',
      rows: preferenceRows(preferences, lang),
      outro: isEn
        ? 'You can change them again anytime with the button below, or unsubscribe.'
        : 'Znovu je můžete kdykoli změnit tlačítkem níže, nebo se odhlásit.',
      ctaHref: preferencesUrl(token),
      ctaLabel: isEn ? 'Change preferences' : 'Změnit předvolby',
      secondaryCtaHref: unsubscribeUrl(token),
      secondaryCtaLabel: isEn ? 'Unsubscribe' : 'Odhlásit odběr',
    }),
  };
}

export function buildUnsubscribedEmail({ email, lang }) {
  const isEn = lang === 'en';
  const siteUrl = getSiteUrl();
  const newsletterUrl = `${siteUrl}/newsletter`;

  return {
    to: email,
    subject: isEn
      ? 'You are unsubscribed — CTRL Europe'
      : 'Byli jste odhlášeni — CTRL Europe',
    html: wrapConfirmationEmail({
      isEn,
      eyebrow: 'Newsletter',
      headline: isEn ? 'You are unsubscribed.' : 'Byli jste odhlášeni.',
      greeting: isEn ? 'Hi,' : 'Ahoj,',
      intro: isEn
        ? 'Your CTRL Europe newsletter subscription has been cancelled. You will no longer receive these emails.'
        : 'Odběr newsletteru CTRL Europe byl ukončen. Tyto e-maily už nebudete dostávat.',
      summaryTitle: isEn ? 'Status' : 'Stav',
      rows: confirmationRow(
        isEn ? 'Subscription' : 'Odběr',
        isEn ? 'Cancelled' : 'Ukončen',
      ),
      outro: isEn
        ? 'You can subscribe again anytime if you change your mind.'
        : 'Pokud si to rozmyslíte, můžete se kdykoli znovu přihlásit.',
      ctaHref: newsletterUrl,
      ctaLabel: isEn ? 'Subscribe again' : 'Přihlásit se znovu',
      secondaryCtaHref: siteUrl,
      secondaryCtaLabel: 'ctrleurope.com',
    }),
  };
}

export async function sendNewsletterTransactional(payload) {
  await sendEmail(payload);
}
