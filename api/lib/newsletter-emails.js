import { getSiteUrl } from './env.js';
import {
  confirmationRow,
  sendEmail,
  wrapConfirmationEmail,
} from './send-email.js';

const PREFERENCE_LABELS = {
  news: { cs: 'Aktuality', en: 'News' },
  workshops: { cs: 'Workshopy', en: 'Workshops' },
  summit: { cs: 'Summit', en: 'Summit' },
  run: { cs: 'CTRL Run', en: 'CTRL Run' },
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

function preferenceRows(preferences, lang) {
  const isEn = lang === 'en';
  return confirmationRow(
    isEn ? 'Topics' : 'Skupiny',
    formatPreferences(preferences, lang),
  );
}

export function buildSubscribedEmail({ email, lang, preferences, token }) {
  const isEn = lang === 'en';
  const siteUrl = getSiteUrl();

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
        ? 'You can change your topics anytime by submitting the form again, or unsubscribe using the button below.'
        : 'Skupiny můžete změnit opětovným odesláním formuláře, nebo se odhlásit tlačítkem níže.',
      ctaHref: siteUrl,
      ctaLabel: isEn ? 'Visit website' : 'Navštívit web',
      secondaryCtaHref: unsubscribeUrl(token),
      secondaryCtaLabel: isEn ? 'Unsubscribe' : 'Odhlásit odběr',
    }),
  };
}

export function buildPreferencesUpdatedEmail({ email, lang, preferences, token }) {
  const isEn = lang === 'en';
  const siteUrl = getSiteUrl();

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
      summaryTitle: isEn ? 'Current topics' : 'Aktuální skupiny',
      rows: preferenceRows(preferences, lang),
      outro: isEn
        ? 'You can update them again anytime on the website, or unsubscribe using the button below.'
        : 'Kdykoli je můžete znovu upravit na webu, nebo se odhlásit tlačítkem níže.',
      ctaHref: `${siteUrl}/newsletter`,
      ctaLabel: isEn ? 'Open newsletter' : 'Otevřít newsletter',
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
