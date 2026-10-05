import { createClient } from '@supabase/supabase-js';
import {
  buildPreferencesUpdatedEmail,
  buildSubscribedEmail,
  buildUnsubscribedEmail,
  sendNewsletterTransactional,
} from './newsletter-emails.js';

export const NEWSLETTER_GROUPS = ['news', 'workshops', 'summit', 'run'];

const EMAIL_MAX_LENGTH = 254;
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function badRequest(message, fields) {
  const error = new Error(message);
  error.status = 400;
  error.fields = fields;
  return error;
}

function serverError(message) {
  const error = new Error(message);
  error.status = 500;
  return error;
}

export function isValidEmail(value) {
  const email = String(value ?? '').trim().toLowerCase();
  if (!email || email.length > EMAIL_MAX_LENGTH) return false;
  if (/\s/.test(email)) return false;
  const at = email.indexOf('@');
  if (at <= 0 || at !== email.lastIndexOf('@')) return false;
  if (at === email.length - 1) return false;
  return true;
}

export function normalizeEmail(value) {
  return String(value ?? '').trim().toLowerCase();
}

export function isValidPreferences(preferences) {
  if (!Array.isArray(preferences) || preferences.length === 0) return false;
  return preferences.every((item) => NEWSLETTER_GROUPS.includes(item));
}

export function isValidLang(lang) {
  return lang === 'cs' || lang === 'en';
}

export function isValidUnsubscribeToken(token) {
  return typeof token === 'string' && UUID_RE.test(token.trim());
}

function samePreferences(a = [], b = []) {
  const left = [...a].sort().join(',');
  const right = [...b].sort().join(',');
  return left === right;
}

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    throw serverError('SUPABASE_URL is not configured');
  }
  if (!key) {
    throw serverError('SUPABASE_SERVICE_ROLE_KEY is not configured');
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

async function sendOrLog(label, payload) {
  try {
    await sendNewsletterTransactional(payload);
  } catch (error) {
    console.error(`${label}:`, error);
  }
}

export async function handleNewsletterSubscribe(body = {}) {
  if (body._gotcha) {
    return { ok: true };
  }

  if (body.consent !== true) {
    throw badRequest('Consent is required', ['consent']);
  }

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    throw badRequest('Invalid email', ['email']);
  }

  const preferences = Array.isArray(body.preferences)
    ? [...new Set(body.preferences)]
    : body.preferences;
  if (!isValidPreferences(preferences)) {
    throw badRequest('Invalid preferences', ['preferences']);
  }

  const lang = body.lang;
  if (!isValidLang(lang)) {
    throw badRequest('Invalid lang', ['lang']);
  }

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (error) {
    console.error('Newsletter subscribe env error:', error.message);
    throw serverError('Could not save');
  }

  const { data: existing, error: existingError } = await supabase
    .from('newsletter_subscribers')
    .select('email, preferences, lang, status, unsubscribe_token')
    .eq('email', email)
    .maybeSingle();

  if (existingError) {
    console.error('Newsletter subscribe lookup error:', existingError);
    throw serverError('Could not save');
  }

  const { data: saved, error } = await supabase
    .from('newsletter_subscribers')
    .upsert(
      {
        email,
        preferences,
        lang,
        status: 'subscribed',
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'email' },
    )
    .select('email, preferences, lang, unsubscribe_token')
    .single();

  if (error || !saved) {
    console.error('Newsletter subscribe Supabase error:', error);
    throw serverError('Could not save');
  }

  const wasActive = existing?.status === 'subscribed';
  const preferencesChanged =
    wasActive && !samePreferences(existing.preferences, preferences);

  if (!wasActive) {
    await sendOrLog(
      'Newsletter subscribed email failed',
      buildSubscribedEmail({
        email: saved.email,
        lang: saved.lang,
        preferences: saved.preferences,
        token: saved.unsubscribe_token,
      }),
    );
  } else if (preferencesChanged) {
    await sendOrLog(
      'Newsletter preferences email failed',
      buildPreferencesUpdatedEmail({
        email: saved.email,
        lang: saved.lang,
        preferences: saved.preferences,
        token: saved.unsubscribe_token,
      }),
    );
  }

  return { ok: true };
}

export async function handleNewsletterUnsubscribe(body = {}) {
  const token = typeof body.token === 'string' ? body.token.trim() : '';

  if (!isValidUnsubscribeToken(token)) {
    return { ok: true };
  }

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (error) {
    console.error('Newsletter unsubscribe env error:', error.message);
    throw serverError('Could not unsubscribe');
  }

  const { data: existing, error: lookupError } = await supabase
    .from('newsletter_subscribers')
    .select('email, lang, status, unsubscribe_token')
    .eq('unsubscribe_token', token)
    .maybeSingle();

  if (lookupError) {
    console.error('Newsletter unsubscribe lookup error:', lookupError);
    throw serverError('Could not unsubscribe');
  }

  if (!existing) {
    return { ok: true };
  }

  if (existing.status === 'unsubscribed') {
    return { ok: true };
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'unsubscribed',
      updated_at: new Date().toISOString(),
    })
    .eq('unsubscribe_token', token);

  if (error) {
    console.error('Newsletter unsubscribe Supabase error:', error);
    throw serverError('Could not unsubscribe');
  }

  await sendOrLog(
    'Newsletter unsubscribed email failed',
    buildUnsubscribedEmail({
      email: existing.email,
      lang: existing.lang,
    }),
  );

  return { ok: true };
}
