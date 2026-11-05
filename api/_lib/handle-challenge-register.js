import {
  normalizeChallengeRegistration,
  validateChallengeRegistration,
} from '../../shared/challengeRegister.js';
import { getChallengeSheetsWebhookUrl } from './env.js';
import {
  buildChallengeRegisterConfirmationEmail,
  buildChallengeRegisterOrgEmail,
  sendEmail,
} from './send-email.js';
import { appendSheetRow, sheetsFailed } from './sheets-webhook.js';

function badRequest(message, fields) {
  const error = new Error(message);
  error.status = 400;
  error.fields = fields;
  return error;
}

function deliverEmails(registration, lang) {
  return Promise.all([
    sendEmail(buildChallengeRegisterOrgEmail(registration)).catch((error) => {
      console.error('Challenge register org email failed:', error);
      throw error;
    }),
    sendEmail(
      buildChallengeRegisterConfirmationEmail(registration, lang),
    ).catch((error) => {
      console.error('Challenge register confirmation email failed:', error);
    }),
  ]);
}

export async function handleChallengeRegisterSubmission(body = {}, { defer } = {}) {
  if (body._gotcha) {
    return { ok: true };
  }

  const registration = normalizeChallengeRegistration(body);
  const check = validateChallengeRegistration(registration);
  if (!check.ok) {
    throw badRequest('Invalid registration', check.fields);
  }

  const webhookUrl = getChallengeSheetsWebhookUrl();
  const members = registration.members.join('\n');

  if (webhookUrl) {
    await appendSheetRow(
      webhookUrl,
      {
        school: registration.school,
        city: registration.city,
        contact: registration.contact,
        email: registration.email,
        phone: registration.phone,
        count: registration.members.length,
        members,
        note: registration.note,
      },
      'Challenge register',
    );
  }

  const lang = body.lang === 'en' ? 'en' : 'cs';
  const delivery = deliverEmails(registration, lang).then(([orgResult]) => orgResult);

  if (!webhookUrl) {
    try {
      await delivery;
    } catch {
      throw sheetsFailed('Registration could not be saved');
    }
    return { ok: true, stored: 'email' };
  }

  if (typeof defer === 'function') {
    defer(delivery.catch(() => {}));
  } else {
    await delivery.catch(() => {});
  }

  return { ok: true, stored: 'sheet' };
}
