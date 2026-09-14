import https from 'node:https';
import {
  FAMILY_MAX_ADULTS,
  FAMILY_MAX_CHILDREN,
  formatSheetTicket,
  parsePeople,
  sheetPeopleCount,
  validatePeople,
} from '../../shared/runRegister.js';
import { buildRunRegisterConfirmationEmail, sendEmail } from './send-email.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEBHOOK_TIMEOUT_MS = 25000;

function getWebhookUrl() {
  return (
    process.env.RUN_SHEETS_WEBHOOK_URL ||
    'https://script.google.com/macros/s/AKfycbx-lmy-k0ujqbsfGNJEoUhk582zi1UnODeArt-tgT5aY0CWmduYeo_1ZBldnVezFw-s_g/exec'
  );
}

function badRequest(message, fields) {
  const error = new Error(message);
  error.status = 400;
  error.fields = fields;
  return error;
}

function sheetsFailed(detail) {
  const error = new Error(detail || 'Failed to save registration');
  error.status = 502;
  return error;
}

function extractAppsScriptError(text) {
  const plain = text
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  const match = plain.match(
    /(?:TypeError|SyntaxError|ReferenceError|Nebyla nalezena funkce skriptu)[\s\S]{0,200}/i,
  );
  return match ? match[0].trim() : plain.slice(0, 200);
}

function isRedirectedDoGet(text) {
  return /Nebyla nalezena funkce skriptu:\s*doGet|Script function not found:\s*doGet/i.test(
    text,
  );
}

function looksLikeAppsScriptError(text) {
  if (isRedirectedDoGet(text)) return false;
  return /TypeError|SyntaxError|appendRow|Nebyla nalezena|Script function not found/i.test(
    text,
  );
}

/**
 * POST to Apps Script without following the post-write redirect.
 * A 302 means doPost already ran and appended the row.
 * Uses IPv4 explicitly — Node fetch on some networks hangs on IPv6.
 */
function postToAppsScript(webhookUrl, payload) {
  const url = new URL(webhookUrl);
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: url.hostname,
        path: `${url.pathname}${url.search}`,
        method: 'POST',
        family: 4,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Content-Length': Buffer.byteLength(body),
        },
        timeout: WEBHOOK_TIMEOUT_MS,
      },
      (res) => {
        let text = '';
        res.on('data', (chunk) => {
          text += chunk;
        });
        res.on('end', () => {
          resolve({
            status: res.statusCode ?? 0,
            location: res.headers.location ?? '',
            text,
          });
        });
      },
    );

    req.on('timeout', () => {
      req.destroy(new Error('Apps Script webhook timed out'));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function appendSheetRow(webhookUrl, payload) {
  let result;
  try {
    result = await postToAppsScript(webhookUrl, payload);
  } catch (error) {
    console.error('Run register webhook fetch failed:', error);
    throw sheetsFailed();
  }

  // Successful doPost responds with 302 to googleusercontent.com/macros/echo
  if (result.status >= 300 && result.status < 400) {
    return;
  }

  if (isRedirectedDoGet(result.text)) return;

  if (result.status < 200 || result.status >= 300 || looksLikeAppsScriptError(result.text)) {
    console.error(
      'Run register webhook rejected:',
      result.status,
      extractAppsScriptError(result.text),
    );
    throw sheetsFailed();
  }

  const trimmed = result.text.trim();
  if (trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed.ok === false) {
        throw sheetsFailed();
      }
    } catch (error) {
      if (error.status === 502) throw error;
    }
  }
}

export async function handleRunRegisterSubmission(body = {}) {
  if (body._gotcha) {
    return { ok: true };
  }

  const email = String(body.email ?? '').trim();
  const people = parsePeople(body.people);

  if (!email) {
    throw badRequest('Missing required fields', ['email']);
  }

  if (!EMAIL_RE.test(email)) {
    throw badRequest('Invalid email', ['email']);
  }

  const peopleCheck = validatePeople(people);
  if (!peopleCheck.ok) {
    const isFamilyLimit = peopleCheck.fields.some((field) => field.endsWith('.family'));
    throw badRequest(
      isFamilyLimit
        ? `Family entry allows max ${FAMILY_MAX_ADULTS} adults and ${FAMILY_MAX_CHILDREN} children`
        : 'Invalid registration',
      peopleCheck.fields,
    );
  }

  const webhookUrl = getWebhookUrl();
  if (!webhookUrl) {
    throw sheetsFailed('Sheets webhook is not configured');
  }

  for (const person of people) {
    await appendSheetRow(webhookUrl, {
      name: person.name,
      email,
      ticket: formatSheetTicket(person.ticket, person.adults, person.children),
      count: sheetPeopleCount(person.ticket, person.adults, person.children),
    });
  }

  try {
    await sendEmail(
      buildRunRegisterConfirmationEmail({
        email,
        people,
        lang: body.lang === 'en' ? 'en' : 'cs',
      }),
    );
  } catch (error) {
    console.error('Run register confirmation email failed:', error);
  }

  return { ok: true };
}
