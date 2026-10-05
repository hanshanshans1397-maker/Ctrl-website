import { createClient } from '@supabase/supabase-js';
import { getResendFromEmail, getSiteUrl } from '../api/lib/env.js';
import { NEWSLETTER_GROUPS } from '../api/lib/newsletter.js';
import { TEMPLATES } from './newsletter-templates.js';

const BATCH_SIZE = 100;

function usageHint() {
  const groups = NEWSLETTER_GROUPS.join(', ');
  const templates = Object.keys(TEMPLATES).join(', ');
  return `Použití: node --env-file=.env scripts/send-newsletter.js --group <skupina> --template <šablona> [--dry-run | --to email | --yes]\nSkupiny: ${groups}\nŠablony: ${templates}`;
}

function parseArgs(argv) {
  const args = {
    group: null,
    template: null,
    dryRun: false,
    to: null,
    yes: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--group') {
      args.group = argv[i + 1] ?? null;
      i += 1;
    } else if (arg === '--template') {
      args.template = argv[i + 1] ?? null;
      i += 1;
    } else if (arg === '--to') {
      args.to = argv[i + 1] ?? null;
      i += 1;
    } else if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg === '--yes') {
      args.yes = true;
    }
  }

  return args;
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Chybí proměnná ${name} v .env.`);
    process.exit(1);
  }
  return value;
}

function buildUnsubscribeHtml(lang, token) {
  const url = `${getSiteUrl()}/newsletter/unsubscribe?token=${token}`;
  const label = lang === 'en' ? 'Unsubscribe' : 'Odhlásit odběr';
  return `<p><a href="${url}">${label}</a></p>`;
}

function chunk(items, size) {
  const result = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

async function sendBatch(apiKey, emails) {
  const response = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emails),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Resend batch error (${response.status}): ${text}`);
  }

  return response.json();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.group || !NEWSLETTER_GROUPS.includes(args.group)) {
    console.error(`Neplatná nebo chybějící skupina.\n${usageHint()}`);
    process.exit(1);
  }

  if (!args.template || !TEMPLATES[args.template]) {
    console.error(`Neplatná nebo chybějící šablona.\n${usageHint()}`);
    process.exit(1);
  }

  const supabaseUrl = requireEnv('SUPABASE_URL');
  const supabaseKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const resendKey = requireEnv('RESEND_API_KEY');

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('email, lang, unsubscribe_token, preferences, status')
    .eq('status', 'subscribed')
    .contains('preferences', [args.group]);

  if (error) {
    console.error('Nepodařilo se načíst odběratele ze Supabase:', error.message);
    process.exit(1);
  }

  let recipients = data ?? [];

  if (args.to) {
    const target = args.to.trim().toLowerCase();
    recipients = recipients.filter((row) => row.email === target);
    if (recipients.length === 0) {
      console.error(`Adresa ${target} v této skupině není přihlášená.`);
      process.exit(1);
    }
  }

  if (args.dryRun) {
    console.log(`Dry-run: ${recipients.length} adres(a). Nic se neposílá.`);
    return;
  }

  if (!args.to && !args.yes) {
    console.error(
      `Na celou skupinu (${recipients.length} adres) je potřeba --yes. Nebo použij --to / --dry-run.`,
    );
    process.exit(1);
  }

  const template = TEMPLATES[args.template];
  const from = getResendFromEmail();

  const emails = recipients.map((row) => ({
    from,
    to: [row.email],
    subject: template.subject,
    html: `${template.html}${buildUnsubscribeHtml(row.lang, row.unsubscribe_token)}`,
  }));

  let sent = 0;
  let failed = 0;

  for (const batch of chunk(emails, BATCH_SIZE)) {
    try {
      await sendBatch(resendKey, batch);
      sent += batch.length;
    } catch (err) {
      console.error(err.message);
      failed += batch.length;
    }
  }

  console.log(`Odesláno: ${sent}. Chyby: ${failed}.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
