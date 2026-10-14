const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Token z odkazu v e-mailu — musí být UUID, jinak stránku neukazujeme. */
export function isValidUnsubscribeToken(token) {
  return typeof token === 'string' && UUID_RE.test(token.trim());
}
