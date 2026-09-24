import { getApplyToEmail, getResendApiKey, getResendFromEmail, getSiteUrl } from './env.js';

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getLogoUrl() {
  return `${getSiteUrl()}/ctrl_logo_bez_pozadi.png`;
}

function emailRow(label, value) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e1d9;font-weight:600;vertical-align:top;width:38%;color:#0d1117;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e1d9;color:#0d1117;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

function confirmationRow(label, value) {
  if (!value) return "";
  return `<tr>
    <td class="email-row-label" style="padding:10px 0;border-bottom:1px solid rgba(29,78,216,0.12);font-family:Geist Mono,Consolas,monospace;font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:#1d4ed8;vertical-align:top;width:42%;">${escapeHtml(label)}</td>
    <td class="email-row-value" style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(29,78,216,0.12);font-size:14px;line-height:1.5;color:#0b1020;font-weight:500;word-break:break-word;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
  </tr>`;
}

function wrapEmail(title, rows) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#fafaf7;font-family:Geist,Arial,sans-serif;color:#0d1117;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e4e1d9;border-radius:8px;padding:24px;">
      <h1 style="margin:0 0 20px;font-size:20px;font-weight:700;letter-spacing:-0.3px;">${escapeHtml(title)}</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px;line-height:1.5;">${rows}</table>
    </div>
  </body>
</html>`;
}

function wrapConfirmationEmail({
  isEn,
  eyebrow,
  headline,
  greeting,
  intro,
  summaryTitle,
  rows,
  outro,
  ctaHref,
  ctaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
}) {
  const siteUrl = getSiteUrl();
  const logoUrl = getLogoUrl();
  const resolvedEyebrow =
    eyebrow ?? (isEn ? "Member application" : "Přihláška člena");
  const resolvedHeadline =
    headline ?? (isEn ? "Thank you for applying." : "Děkujeme za přihlášku.");
  const resolvedCtaHref = ctaHref || siteUrl;
  const resolvedCtaLabel =
    ctaLabel ?? (isEn ? "Visit website" : "Navštívit web");
  const tagline = isEn
    ? "Building digital resilience for the next European generation."
    : "Budujeme digitální odolnost pro novou evropskou generaci.";

  const secondaryCta =
    secondaryCtaHref && secondaryCtaLabel
      ? `<td class="email-cta-cell" style="padding-left:10px;">
          <a class="email-cta-link email-cta-link--ghost" href="${escapeHtml(secondaryCtaHref)}" style="display:inline-block;padding:14px 24px;font-size:14px;font-weight:600;color:#0b1020;text-decoration:none;border:1px solid rgba(11,16,32,0.18);border-radius:8px;">
            ${escapeHtml(secondaryCtaLabel)} &rarr;
          </a>
        </td>`
      : "";

  return `<!DOCTYPE html>
<html lang="${isEn ? "en" : "cs"}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <title>${escapeHtml(resolvedHeadline)}</title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
      html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
      body { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      a { text-decoration: none; }
      @media only screen and (max-width: 620px) {
        .email-outer { padding: 20px 12px 28px !important; }
        .email-hero { padding: 22px 18px 20px !important; border-radius: 10px 10px 0 0 !important; }
        .email-body { padding: 22px 18px !important; border-radius: 0 0 10px 10px !important; }
        .email-headline { font-size: 24px !important; line-height: 1.2 !important; }
        .email-summary { padding: 16px !important; }
        .email-row-label,
        .email-row-value {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .email-row-label {
          padding: 12px 0 2px !important;
          border-bottom: none !important;
        }
        .email-row-value {
          padding: 0 0 12px !important;
        }
        .email-cta-wrap,
        .email-cta-wrap tbody,
        .email-cta-wrap tr {
          display: block !important;
          width: 100% !important;
        }
        .email-cta-cell {
          display: block !important;
          width: 100% !important;
          padding: 0 0 10px !important;
          background: transparent !important;
        }
        .email-cta-link {
          display: block !important;
          width: 100% !important;
          box-sizing: border-box !important;
          text-align: center !important;
          background: #0b1020 !important;
          color: #f5f5f3 !important;
          border-radius: 8px !important;
        }
        .email-cta-link--ghost {
          background: #ffffff !important;
          color: #0b1020 !important;
          border: 1px solid rgba(11,16,32,0.18) !important;
        }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f3;font-family:Geist,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#0b1020;">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
      ${escapeHtml(resolvedHeadline)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f3;width:100%;">
      <tr>
        <td class="email-outer" align="center" style="padding:40px 20px 48px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
            <tr>
              <td style="padding:0 0 28px;text-align:center;">
                <a href="${escapeHtml(siteUrl)}" style="text-decoration:none;">
                  <img src="${escapeHtml(logoUrl)}" alt="CTRL Europe" width="148" style="display:inline-block;width:148px;max-width:100%;height:auto;border:0;" />
                </a>
              </td>
            </tr>
            <tr>
              <td class="email-hero" style="background:#0b1020;border-radius:12px 12px 0 0;padding:28px 32px 24px;">
                <p style="margin:0 0 10px;font-family:Geist Mono,Consolas,monospace;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#4a7bff;">
                  <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#4a7bff;vertical-align:middle;margin-right:8px;"></span>
                  ${escapeHtml(resolvedEyebrow)}
                </p>
                <h1 class="email-headline" style="margin:0;font-size:28px;line-height:1.1;font-weight:800;letter-spacing:-0.8px;color:#f5f5f3;">
                  ${escapeHtml(resolvedHeadline)}
                </h1>
              </td>
            </tr>
            <tr>
              <td class="email-body" style="background:#ffffff;border:1px solid rgba(11,16,32,0.08);border-top:none;border-radius:0 0 12px 12px;padding:32px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;font-weight:600;color:#0b1020;">${escapeHtml(greeting)}</p>
                <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#6b7280;">${escapeHtml(intro)}</p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;width:100%;">
                  <tr>
                    <td class="email-summary" style="background:#eff4ff;border:1px solid rgba(29,78,216,0.14);border-left:3px solid #1d4ed8;border-radius:8px;padding:20px 22px;">
                      <h2 style="margin:0 0 14px;font-size:13px;line-height:1.4;font-weight:700;letter-spacing:-0.2px;color:#0b1020;">${escapeHtml(summaryTitle)}</h2>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;">${rows}</table>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#0b1020;">${escapeHtml(outro).replaceAll("\n", "<br />")}</p>

                <table role="presentation" class="email-cta-wrap" cellspacing="0" cellpadding="0" style="width:auto;">
                  <tr>
                    <td class="email-cta-cell" style="border-radius:8px;background:#0b1020;">
                      <a class="email-cta-link" href="${escapeHtml(resolvedCtaHref)}" style="display:inline-block;padding:14px 24px;font-size:14px;font-weight:600;color:#f5f5f3;text-decoration:none;">
                        ${escapeHtml(resolvedCtaLabel)} &rarr;
                      </a>
                    </td>
                    ${secondaryCta}
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 12px 0;text-align:center;">
                <p style="margin:0 0 8px;font-size:12px;line-height:1.6;color:#6b7280;">${escapeHtml(tagline)}</p>
                <p style="margin:0;font-family:Geist Mono,Consolas,monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;">
                  CTRL Europe &middot; <a href="${escapeHtml(siteUrl)}" style="color:#4a7bff;text-decoration:none;">ctrleurope.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendEmail({ subject, html, to, replyTo }) {
  const apiKey = getResendApiKey();
  const from = getResendFromEmail();
  const recipient = to || getApplyToEmail();

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error (${response.status}): ${errorText}`);
  }

  return response.json();
}

export function buildApplyEmail(body) {
  const isEn = body.lang === "en";
  const subject = isEn
    ? "CTRL Europe — Member Application"
    : "CTRL Europe — Přihláška člena";
  const title = subject;

  const rows = [
    emailRow(isEn ? "First name" : "Jméno", body.firstName),
    emailRow(isEn ? "Last name" : "Příjmení", body.lastName),
    emailRow(isEn ? "Date of birth" : "Datum narození", body.birthDate),
    emailRow(isEn ? "Phone" : "Telefon", body.phone),
    emailRow("E-mail", body.email),
    emailRow(isEn ? "City" : "Město", body.city),
    emailRow(isEn ? "Country" : "Země", body.country),
    emailRow(
      isEn ? "School / employment" : "Škola nebo zaměstnání",
      body.school,
    ),
    emailRow(isEn ? "Cells of interest" : "Zájem o buňky", body.cells),
    emailRow(isEn ? "Skills" : "Dovednosti", body.skills),
    emailRow(isEn ? "Languages" : "Jazyky", body.languages),
    emailRow(isEn ? "Hours per week" : "Hodin týdně", body.hoursPerWeek),
    emailRow(isEn ? "Involvement" : "Forma zapojení", body.involvement),
    emailRow(isEn ? "Motivation" : "Motivace", body.motivation),
    emailRow(
      isEn ? "How they heard about us" : "Kde slyšeli o nás",
      body.hearAbout,
    ),
  ].join("");

  return {
    subject,
    html: wrapEmail(title, rows),
    replyTo: body.email,
  };
}

export function buildApplyConfirmationEmail(body) {
  const isEn = body.lang === "en";
  const firstName = String(body.firstName ?? "").trim();

  const subject = isEn
    ? "Thank you for your application — CTRL Europe"
    : "Děkujeme za přihlášku — CTRL Europe";

  const greeting = isEn
    ? `Hi${firstName ? ` ${firstName}` : ""},`
    : `Ahoj${firstName ? ` ${firstName}` : ""},`;

  const intro = isEn
    ? "Thank you for applying to CTRL Europe. We received your application and appreciate your interest in joining our network of young people building digital resilience across Central and Eastern Europe."
    : "Děkujeme, že ses rozhodl/a podat přihlášku do CTRL Europe. Tvou přihlášku jsme přijali a vážíme si tvého zájmu o zapojení do naší sítě mladých lidí, kteří budují digitální odolnost ve střední a východní Evropě.";

  const summaryTitle = isEn ? "What you chose" : "Co jsi vybral/a";

  const rows = [
    confirmationRow(isEn ? "Cells of interest" : "Zájem o buňky", body.cells),
    confirmationRow(isEn ? "Skills" : "Dovednosti", body.skills),
    confirmationRow(isEn ? "Involvement" : "Forma zapojení", body.involvement),
    confirmationRow(isEn ? "Hours per week" : "Hodin týdně", body.hoursPerWeek),
  ].join("");

  const outro = isEn
    ? "We will review your application and get back to you within a few business days with next steps. If you are under 15, we may need consent from a legal guardian."
    : "Tvou přihlášku projdeme a brzy se ti ozveme s dalšími informacemi — obvykle do několika pracovních dní. Pokud je ti méně než 15 let, budeme potřebovat souhlas zákonného zástupce.";

  return {
    subject,
    html: wrapConfirmationEmail({
      isEn,
      greeting,
      intro,
      summaryTitle,
      rows,
      outro,
    }),
    to: body.email,
  };
}

const TICKET_LABELS = {
  Základní: { cs: "Základní", en: "Standard" },
  Studentské: { cs: "Studentské", en: "Student" },
  Rodinné: { cs: "Rodinné", en: "Family" },
  "Studentské afterparty": {
    cs: "Studentské — jen afterparty",
    en: "Student afterparty only",
  },
};

function formatTicketForEmail(person, isEn) {
  const base = TICKET_LABELS[person.ticket]?.[isEn ? "en" : "cs"] ?? person.ticket;
  if (person.ticket !== "Rodinné") return base;
  if (isEn) {
    const adults = `${person.adults} adult${person.adults === 1 ? "" : "s"}`;
    const children = `${person.children} child${person.children === 1 ? "" : "ren"}`;
    return `${base} (${adults}, ${children})`;
  }
  const adults =
    person.adults === 1 ? "1 dospělý" : `${person.adults} dospělí`;
  const children =
    person.children === 1 ? "1 dítě" : `${person.children} děti`;
  return `${base} (${adults}, ${children})`;
}

export function buildRunRegisterConfirmationEmail({ email, people, lang }) {
  const isEn = lang === "en";
  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/news/charitativni-beh`;
  const cancelEmail = "ctrleurope@seznam.cz";

  const totalPeople = people.reduce(
    (sum, person) =>
      sum +
      (person.ticket === "Rodinné" ? person.adults + person.children : 1),
    0,
  );

  const firstName = String(people[0]?.name ?? "")
    .trim()
    .split(/\s+/)[0];

  const peopleLines = people
    .map((person) => `${person.name} — ${formatTicketForEmail(person, isEn)}`)
    .join("\n");

  const subject = isEn
    ? "CTRL Run registration confirmed — CTRL Europe"
    : "Potvrzení registrace na CTRL Run — CTRL Europe";

  const greeting = isEn
    ? `Hi${firstName ? ` ${firstName}` : ""},`
    : `Ahoj${firstName ? ` ${firstName}` : ""},`;

  const intro = isEn
    ? "Thank you for registering for CTRL Run. We have received your reservation and look forward to seeing you at Komec."
    : "Děkujeme za registraci na CTRL Run. Rezervaci jsme přijali a těšíme se na vás u Komecu.";

  const summaryTitle = isEn ? "Your registration" : "Vaše registrace";

  const rows = [
    confirmationRow(
      isEn ? "Date" : "Datum",
      isEn ? "Saturday 3 October 2026" : "sobota 3. října 2026",
    ),
    confirmationRow(
      isEn ? "Location" : "Místo",
      isEn
        ? "Komec sports complex, Brno-Komárov"
        : "Sportovní areál Komec, Brno-Komárov",
    ),
    confirmationRow(
      isEn ? "People" : "Počet osob",
      String(totalPeople),
    ),
    confirmationRow(isEn ? "Registered" : "Přihlášení", peopleLines),
  ].join("");

  const outro = isEn
    ? `If you need to cancel your reservation, write to ${cancelEmail}.\n\nYou can also revisit the event page or our website using the buttons below.`
    : `Pokud chcete rezervaci zrušit, napište na ${cancelEmail}.\n\nAktualitu k běhu i web CTRL Europe otevřete tlačítky níže.`;

  return {
    subject,
    html: wrapConfirmationEmail({
      isEn,
      eyebrow: "CTRL Run",
      headline: isEn ? "You’re registered." : "Jste registrováni.",
      greeting,
      intro,
      summaryTitle,
      rows,
      outro,
      ctaHref: articleUrl,
      ctaLabel: isEn ? "Open event page" : "Otevřít aktualitu",
      secondaryCtaHref: siteUrl,
      secondaryCtaLabel: isEn ? "ctrleurope.com" : "ctrleurope.com",
    }),
    to: email,
    replyTo: cancelEmail,
  };
}
