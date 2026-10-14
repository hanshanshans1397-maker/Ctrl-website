const EMAIL_MAX_LENGTH = 254;

// x@y.z: something before @, a domain, a dot, and a non-empty ending.
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

export function isEmailFormat(value) {
  const email = String(value ?? '').trim();
  if (!email || email.length > EMAIL_MAX_LENGTH) return false;
  return EMAIL_RE.test(email);
}
