export const TICKET_VALUES = ['Základní', 'Studentské', 'Rodinné'];
export const FAMILY_MAX_ADULTS = 2;
export const FAMILY_MAX_CHILDREN = 3;
export const MAX_PEOPLE = 10;

const TICKETS = new Set(TICKET_VALUES);

function toCount(value) {
  if (typeof value === 'number' && Number.isInteger(value)) return value;
  if (typeof value === 'string' && /^-?\d+$/.test(value.trim())) {
    return Number(value.trim());
  }
  return NaN;
}

function czechCount(count, one, few) {
  return `${count} ${count === 1 ? one : few}`;
}

export function formatSheetTicket(ticket, adults, children) {
  if (ticket !== 'Rodinné') return ticket;
  return `Rodinné (${czechCount(adults, 'dospělý', 'dospělí')}, ${czechCount(children, 'dítě', 'děti')})`;
}

export function familyExceedsMax(adults, children) {
  return adults > FAMILY_MAX_ADULTS || children > FAMILY_MAX_CHILDREN;
}

export function sheetPeopleCount(ticket, adults, children) {
  if (ticket === 'Rodinné') return adults + children;
  return 1;
}

export function parsePeople(rawPeople) {
  if (!Array.isArray(rawPeople)) return [];
  return rawPeople.slice(0, MAX_PEOPLE).map((person, index) => {
    const ticket = String(person?.ticket ?? '').trim();
    const adults = toCount(person?.adults);
    const children = toCount(person?.children);
    return {
      index,
      name: String(person?.name ?? '').trim(),
      ticket,
      adults,
      children,
    };
  });
}

export function validatePeople(people) {
  if (!Array.isArray(people) || people.length === 0) {
    return { ok: false, fields: ['people'] };
  }

  if (people.length > MAX_PEOPLE) {
    return { ok: false, fields: ['people'] };
  }

  const fields = [];

  people.forEach((person) => {
    if (!person.name || person.name.length < 2) {
      fields.push(`people.${person.index}.name`);
    }
    if (!TICKETS.has(person.ticket)) {
      fields.push(`people.${person.index}.ticket`);
      return;
    }
    if (person.ticket !== 'Rodinné') return;

    if (
      Number.isNaN(person.adults) ||
      Number.isNaN(person.children) ||
      person.adults < 0 ||
      person.children < 0
    ) {
      fields.push(`people.${person.index}.family`);
      return;
    }

    if (familyExceedsMax(person.adults, person.children)) {
      fields.push(`people.${person.index}.family`);
      return;
    }

    if (person.adults < 1 || person.adults + person.children < 1) {
      fields.push(`people.${person.index}.family`);
    }
  });

  if (fields.length > 0) {
    return { ok: false, fields };
  }

  return { ok: true, fields: [] };
}
