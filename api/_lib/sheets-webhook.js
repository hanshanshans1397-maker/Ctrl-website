import https from 'node:https';

const WEBHOOK_TIMEOUT_MS = 25000;

export function sheetsFailed(detail) {
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
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };

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
        const status = res.statusCode ?? 0;
        const location = res.headers.location ?? '';
        // doPost has already appended the row. Don't wait for the redirect body.
        if (status >= 300 && status < 400) {
          finish({ status, location, text: '' });
          res.destroy();
          return;
        }

        let text = '';
        res.on('data', (chunk) => {
          text += chunk;
        });
        res.on('end', () => {
          finish({ status, location, text });
        });
      },
    );

    req.on('timeout', () => {
      req.destroy(new Error('Apps Script webhook timed out'));
    });
    req.on('error', (error) => fail(error));
    req.write(body);
    req.end();
  });
}

export async function appendSheetRow(webhookUrl, payload, logLabel = 'Sheets') {
  let result;
  try {
    result = await postToAppsScript(webhookUrl, payload);
  } catch (error) {
    console.error(`${logLabel} webhook fetch failed:`, error);
    throw sheetsFailed();
  }

  if (result.status >= 300 && result.status < 400) {
    return;
  }

  if (isRedirectedDoGet(result.text)) return;

  if (result.status < 200 || result.status >= 300 || looksLikeAppsScriptError(result.text)) {
    console.error(
      `${logLabel} webhook rejected:`,
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
