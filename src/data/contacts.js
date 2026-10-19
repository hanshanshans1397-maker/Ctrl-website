import { BOARD_REST, FOUNDER } from "./leadership";
import { CONTACT_EMAIL } from "../utils/socialLinks";

const jakub = BOARD_REST.find((member) => member.id === "jakub");
const iris = BOARD_REST.find((member) => member.id === "iris");
const dominik = BOARD_REST.find((member) => member.id === "dominik");

export const ORGANIZATION_CONTACT = {
  id: "organization",
  roleCs: "Organizace",
  roleEn: "Organization",
  email: CONTACT_EMAIL,
  scopeCs:
    "Obecná schránka CTRL Europe. Sem patří vše, co nemá konkrétního adresáta.",
  scopeEn:
    "The general inbox for CTRL Europe. For anything that does not have a specific addressee.",
};

export const CONTACT_DIRECTORY = [
  {
    id: FOUNDER.id,
    name: FOUNDER.name,
    initials: FOUNDER.initials,
    photo: FOUNDER.photo,
    roleCs: "Prezident a zakladatel",
    roleEn: "President and founder",
    email: "jan_krejci@outlook.com",
    phone: "+420 777 447 605",
    scopeCs: "Přímý kontakt na prezidenta a zakladatele.",
    scopeEn: "Direct contact for the president and founder.",
  },
  {
    id: jakub.id,
    name: jakub.name,
    initials: jakub.initials,
    photo: jakub.photo,
    roleCs: "Zástupce předsednictva",
    roleEn: "Board representative",
    email: "kuba.rasovsky08@gmail.com",
    phone: "+420 776 122 008",
    scopeCs:
      "Informace za předsednictvo, plány organizace a vše, co se týká práce vedení.",
    scopeEn:
      "Information on behalf of the executive board, the organization's plans, and anything that concerns the board's work.",
  },
  {
    id: iris.id,
    name: iris.name,
    initials: iris.initials,
    photo: iris.photo,
    roleCs: "Zástupkyně kanceláře prezidenta",
    roleEn: "Deputy, Office of the President",
    email: "irismariazamfir@gmail.com",
    phone: "+420 733 475 773",
    scopeCs:
      "Cesty a program prezidenta, informace k jeho práci, domlouvání schůzek a první kontakt pro organizace.",
    scopeEn:
      "The president's travel and programme, information on his work, scheduling meetings, and the first contact for organizations.",
  },
  {
    id: dominik.id,
    name: dominik.name,
    initials: dominik.initials,
    photo: dominik.photo,
    roleCs: "Předseda hlavní rady",
    roleEn: "Chairman of Main Council",
    email: "seveladominik2008@gmail.com",
    phone: "+420 601 312 551",
    scopeCs:
      "Národní koordinátoři a CTRL týmy, plány v zemích CTRL, rozvoj a expanze. Kontakt pro spolupracující školy.",
    scopeEn:
      "National coordinators and CTRL teams, plans in CTRL countries, growth and expansion. The contact for partner schools.",
  },
];
