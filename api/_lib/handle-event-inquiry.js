import { isEmailFormat } from "../../shared/email.js";
import { eventInquiryLabel } from "../../shared/events.js";
import { buildWorkshopInquiryEmail, sendEmail } from "./send-email.js";

const MIN_FILL_MS = 2500;

function line(value, max) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function block(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function badRequest(message, fields) {
  const error = new Error(message);
  error.status = 400;
  error.fields = fields;
  return error;
}

export async function handleEventInquiry(body = {}) {
  if (line(body._gotcha, 200)) {
    return { ok: true };
  }

  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt)) {
    throw badRequest("Missing required fields", ["startedAt"]);
  }
  const elapsed = Date.now() - startedAt;
  if (elapsed >= 0 && elapsed < MIN_FILL_MS) {
    return { ok: true };
  }

  if (body.consent !== true) {
    throw badRequest("Missing required fields", ["consent"]);
  }

  const name = line(body.name, 120);
  const organization = line(body.organization, 160);
  const email = line(body.email, 254);
  const message = block(body.message, 2000);
  const eventType = eventInquiryLabel(body.eventType);
  const missing = [];
  if (!name) missing.push("name");
  if (!organization) missing.push("organization");
  if (!isEmailFormat(email)) missing.push("email");
  if (!eventType) missing.push("eventType");
  if (!message) missing.push("message");
  if (missing.length) throw badRequest("Missing required fields", missing);

  const lang = body.lang === "en" ? "en" : "cs";

  await sendEmail(
    buildWorkshopInquiryEmail({
      subject: `CTRL Europe — Akce — ${organization}`,
      replyTo: email,
      fields: [
        ["Jméno", name],
        ["Organizace", organization],
        ["E-mail", email],
        ["Typ akce", eventType],
        ["Zpráva", message],
        ["Jazyk webu", lang === "en" ? "Angličtina" : "Čeština"],
      ],
    }),
  );

  return { ok: true };
}
