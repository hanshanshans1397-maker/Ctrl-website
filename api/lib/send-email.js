function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getSiteUrl() {
  return (process.env.SITE_URL || "https://ctrleurope.com").replace(/\/$/, "");
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
    <td style="padding:10px 0;border-bottom:1px solid rgba(29,78,216,0.12);font-family:Geist Mono,Consolas,monospace;font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:#1d4ed8;vertical-align:top;width:42%;">${escapeHtml(label)}</td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(29,78,216,0.12);font-size:14px;line-height:1.5;color:#0b1020;font-weight:500;">${escapeHtml(value)}</td>
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
  greeting,
  intro,
  summaryTitle,
  rows,
  outro,
}) {
  const siteUrl = getSiteUrl();
  const logoUrl = getLogoUrl();
  const eyebrow = isEn ? "Member application" : "Přihláška člena";
  const headline = isEn ? "Thank you for applying." : "Děkujeme za přihlášku.";
  const websiteLabel = isEn ? "Visit website" : "Navštívit web";
  const tagline = isEn
    ? "Building digital resilience for the next European generation."
    : "Budujeme digitální odolnost pro novou evropskou generaci.";

  return `<!DOCTYPE html>
<html lang="${isEn ? "en" : "cs"}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(headline)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f3;font-family:Geist,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#0b1020;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f3;">
      <tr>
        <td align="center" style="padding:40px 20px 48px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;">
            <tr>
              <td style="padding:0 0 28px;text-align:center;">
                <a href="${escapeHtml(siteUrl)}" style="text-decoration:none;">
                  <img src="${escapeHtml(logoUrl)}" alt="CTRL Europe" width="148" style="display:inline-block;width:148px;max-width:100%;height:auto;border:0;" />
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:#0b1020;border-radius:12px 12px 0 0;padding:28px 32px 24px;">
                <p style="margin:0 0 10px;font-family:Geist Mono,Consolas,monospace;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#4a7bff;">
                  <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#4a7bff;vertical-align:middle;margin-right:8px;"></span>
                  ${escapeHtml(eyebrow)}
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.1;font-weight:800;letter-spacing:-0.8px;color:#f5f5f3;">
                  ${escapeHtml(headline)}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;border:1px solid rgba(11,16,32,0.08);border-top:none;border-radius:0 0 12px 12px;padding:32px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;font-weight:600;color:#0b1020;">${escapeHtml(greeting)}</p>
                <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#6b7280;">${escapeHtml(intro)}</p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
                  <tr>
                    <td style="background:#eff4ff;border:1px solid rgba(29,78,216,0.14);border-left:3px solid #1d4ed8;border-radius:8px;padding:20px 22px;">
                      <h2 style="margin:0 0 14px;font-size:13px;line-height:1.4;font-weight:700;letter-spacing:-0.2px;color:#0b1020;">${escapeHtml(summaryTitle)}</h2>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${rows}</table>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#0b1020;">${escapeHtml(outro)}</p>

                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="border-radius:8px;background:#0b1020;">
                      <a href="${escapeHtml(siteUrl)}" style="display:inline-block;padding:14px 24px;font-size:14px;font-weight:600;color:#f5f5f3;text-decoration:none;">
                        ${escapeHtml(websiteLabel)} &rarr;
                      </a>
                    </td>
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
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.RESEND_FROM_EMAIL || "CTRL Europe <no-reply@ctrleurope.com>";
  const recipient = to || process.env.APPLY_TO_EMAIL || "ctrleurope@seznam.cz";

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
