import {
  FAMILY_MAX_ADULTS,
  FAMILY_MAX_CHILDREN,
  formatSheetTicket,
  parsePeople,
  sheetPeopleCount,
  validatePeople,
} from '../../shared/runRegister.js';
import { getRunSheetsWebhookUrl } from './env.js';
import { appendSheetRow, sheetsFailed } from './sheets-webhook.js';
import { buildRunRegisterConfirmationEmail, sendEmail } from './send-email.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getWebhookUrl() {
  return getRunSheetsWebhookUrl();
}

function badRequest(message, fields) {
  const error = new Error(message);
  error.status = 400;
  error.fields = fields;
  return error;
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
    }, 'Run register');
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
