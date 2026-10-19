import { buildApplyConfirmationEmail, buildApplyEmail, sendEmail } from './send-email.js';

export async function handleApplySubmission(body = {}) {
  if (body._gotcha) {
    return { ok: true };
  }

  const required = ['firstName', 'lastName', 'birthDate', 'email', 'motivation', 'involvement'];
  const missing = required.filter((field) => !String(body[field] ?? '').trim());
  if (missing.length > 0) {
    const error = new Error('Missing required fields');
    error.status = 400;
    error.fields = missing;
    throw error;
  }

  await sendEmail(buildApplyEmail(body));

  try {
    await sendEmail(buildApplyConfirmationEmail(body));
  } catch (error) {
    console.error('Apply confirmation email failed:', error);
  }

  return { ok: true };
}
