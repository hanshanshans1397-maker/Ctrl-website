import { isEmailFormat } from "../../shared/email.js";
import {
  INQUIRY_AUDIENCES,
  INQUIRY_FORMATS,
  INQUIRY_TOPICS,
  inquiryLabel,
} from "../../shared/workshopInquiry.js";
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

function requireChoice(list, value, field) {
  const label = inquiryLabel(list, value);
  if (!label) {
    throw badRequest("Missing required fields", [field]);
  }
  return label;
}

export async function handleWorkshopInquiry(body = {}) {
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

  const type = body.type === "partner" ? "partner" : body.type === "request" ? "request" : "";
  if (!type) {
    throw badRequest("Missing required fields", ["type"]);
  }

  const email = line(body.email, 254);
  if (!isEmailFormat(email)) {
    throw badRequest("Missing required fields", ["email"]);
  }

  const phone = line(body.phone, 40);
  const note = block(body.note, 2000);
  const lang = body.lang === "en" ? "en" : "cs";
  const langLabel = lang === "en" ? "Angličtina" : "Čeština";

  if (type === "request") {
    const name = line(body.name, 120);
    const organization = line(body.organization, 160);
    const missing = [];
    if (!name) missing.push("name");
    if (!organization) missing.push("organization");
    if (missing.length) throw badRequest("Missing required fields", missing);

    const audience = requireChoice(INQUIRY_AUDIENCES, body.audience, "audience");
    const topic = requireChoice(INQUIRY_TOPICS, body.topic, "topic");
    const format = body.format ? inquiryLabel(INQUIRY_FORMATS, body.format) : "";
    if (body.format && !format) {
      throw badRequest("Missing required fields", ["format"]);
    }

    const participantsRaw = line(body.participants, 6);
    let participants = "";
    if (participantsRaw) {
      const count = Number(participantsRaw);
      if (!Number.isInteger(count) || count < 1 || count > 500) {
        throw badRequest("Missing required fields", ["participants"]);
      }
      participants = String(count);
    }

    await sendEmail(
      buildWorkshopInquiryEmail({
        subject: `CTRL Europe — Poptávka workshopu — ${organization}`,
        replyTo: email,
        fields: [
          ["Jméno a příjmení", name],
          ["Organizace / škola", organization],
          ["E-mail", email],
          ["Telefon", phone],
          ["Cílová skupina", audience],
          ["Téma", topic],
          ["Forma", format],
          ["Počet účastníků", participants],
          ["Preferovaný termín", line(body.date, 120)],
          ["Místo konání", line(body.place, 160)],
          ["Poznámka", note],
          ["Jazyk webu", langLabel],
        ],
      }),
    );

    return { ok: true };
  }

  const school = line(body.school, 160);
  const address = block(body.address, 300);
  const contact = line(body.contact, 160);
  const missing = [];
  if (!school) missing.push("school");
  if (!address) missing.push("address");
  if (!contact) missing.push("contact");
  if (missing.length) throw badRequest("Missing required fields", missing);

  await sendEmail(
    buildWorkshopInquiryEmail({
      subject: `CTRL Europe — Partnerská škola — ${school}`,
      replyTo: email,
      fields: [
        ["Název školy", school],
        ["Adresa", address],
        ["Kontaktní osoba a funkce", contact],
        ["E-mail", email],
        ["Telefon", phone],
        ["Počet tříd / studentů", line(body.size, 80)],
        ["Témata", block(body.topics, 500)],
        ["Poznámka", note],
        ["Jazyk webu", langLabel],
      ],
    }),
  );

  return { ok: true };
}
