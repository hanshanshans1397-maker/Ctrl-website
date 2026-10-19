/**
 * Temporary production fallbacks until Vercel Environment Variables are set.
 * Prefer process.env.* — remove hardcoded values once env is available.
 *
 * RESEND_API_KEY must stay in Vercel env (GitHub push protection blocks it in git).
 * If /apply already sends mail in production, the key is already configured.
 */

const TEMP_RESEND_FROM_EMAIL = 'CTRL Europe <noreply@ctrleurope.com>';
const TEMP_APPLY_TO_EMAIL = 'ctrleurope@seznam.cz';
const TEMP_SITE_URL = 'https://ctrleurope.com';
const TEMP_RUN_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbx-lmy-k0ujqbsfGNJEoUhk582zi1UnODeArt-tgT5aY0CWmduYeo_1ZBldnVezFw-s_g/exec';

export function getResendApiKey() {
  return process.env.RESEND_API_KEY || '';
}

export function getResendFromEmail() {
  return process.env.RESEND_FROM_EMAIL || TEMP_RESEND_FROM_EMAIL;
}

export function getApplyToEmail() {
  return process.env.APPLY_TO_EMAIL || TEMP_APPLY_TO_EMAIL;
}

export function getSiteUrl() {
  return (process.env.SITE_URL || TEMP_SITE_URL).replace(/\/$/, '');
}

export function getRunSheetsWebhookUrl() {
  return process.env.RUN_SHEETS_WEBHOOK_URL || TEMP_RUN_SHEETS_WEBHOOK_URL;
}
