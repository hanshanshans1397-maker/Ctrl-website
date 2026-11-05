export const MIN_TEAM_MEMBERS = 2;
export const MAX_TEAM_MEMBERS = 6;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 200) {
  return String(value ?? '').trim().slice(0, max);
}

export function parseMembers(raw) {
  return String(raw ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function normalizeChallengeRegistration(body = {}) {
  const members = parseMembers(body.members).slice(0, MAX_TEAM_MEMBERS + 8);
  return {
    school: clean(body.school, 160),
    city: clean(body.city, 80),
    contact: clean(body.contact, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    members,
    note: clean(body.note, 800),
    consent: body.consent === true || body.consent === 'true' || body.consent === 'on',
  };
}

export function validateChallengeRegistration(registration) {
  const fields = [];

  if (registration.school.length < 2) fields.push('school');
  if (registration.city.length < 2) fields.push('city');
  if (registration.contact.length < 2) fields.push('contact');
  if (!EMAIL_RE.test(registration.email)) fields.push('email');

  const digits = registration.phone.replace(/\D/g, '');
  if (digits.length < 9 || digits.length > 15) fields.push('phone');

  if (
    registration.members.length < MIN_TEAM_MEMBERS ||
    registration.members.length > MAX_TEAM_MEMBERS ||
    registration.members.some((name) => name.length < 2)
  ) {
    fields.push('members');
  }

  if (!registration.consent) fields.push('consent');

  return { ok: fields.length === 0, fields };
}
