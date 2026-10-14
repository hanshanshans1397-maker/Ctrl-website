# Newsletter — zadání pro agenta

Člověk, který tohle zadání zadává, má jen základní zkušenost s vibecodingem. Kód píšeš ty. Jeho zastav jen tam, kde musí kliknout v cizím účtu nebo něco vyzkoušet očima. V těch místech mu napiš přesný postup z části **Zastávky**. Nepožaduj po něm, aby vymýšlel architekturu, psal SQL, sahal do kódu nebo rozhodoval, jak to zabezpečit.

Neměň pravidla v tomhle souboru. Když narazíš na chybu, oprav ji sám. Člověku řekni jednou větou, co se stalo a co má udělat on, ne aby to ladil v kódu.

Nepřidávej veřejnou cestu, která posílá e-maily. Rozeslání je jen lokální skript.

## Co má vzniknout

Člověk otevře `/newsletter`, napíše e-mail, zaškrtne skupiny a souhlas. `POST /api/newsletter/subscribe` řádek uloží do Supabase. V každém mailu je odkaz na obyčejnou stránku `/newsletter/unsubscribe?token=…`. Ta stránka teprve zavolá `POST /api/newsletter/unsubscribe`. V mailu nikdy není adresa začínající `/api/`. Hromadné odeslání dělá `scripts/send-newsletter.js` u něj na počítači. Na internetu žádné „pošli newsletter“ není.

Projekt je Vite + React Router. API jsou soubory ve složce `api/` (vzor `api/apply.js` a `api/lib/handle-apply.js`). Lokální vývoj je obsluhuje plugin `jsonApiDevPlugin` v `vite.config.js`. Resend už je v `api/lib/send-email.js`. Supabase v projektu ještě není. Framer Motion v projektu není — nepřidávej ho. Vzhled drž u stávajících stránek (Tailwind, světlá stránka jako formulář). Do `DARK_HERO_ROUTES` v `src/utils/routes.js` newsletter nepřidávej.

## Soubory

Vytvoř nebo uprav jen tohle:

| soubor | co |
|---|---|
| `src/pages/NewsletterPage.jsx` | stránka s formulářem |
| `src/pages/NewsletterUnsubscribePage.jsx` | stránka z mailu, která zavolá odhlášení |
| `src/hooks/useNewsletterForm.js` | odeslání formuláře, stejně jako `useApplyForm.js` volá `/api/apply` |
| `src/App.jsx` | route `newsletter` a `newsletter/unsubscribe` |
| `src/components/Footer.jsx` | odkaz Newsletter / Newsletter v sloupci Kontakt, vedle přihlášky |
| `shared/pageMetaData.js` | klíče `newsletter` a `newsletterUnsubscribe` v `PAGE_META` a obě cesty v `PATH_TO_PAGE_KEY` |
| `README.md` | řádky `/newsletter` a `/newsletter/unsubscribe` v tabulce rout |
| `api/lib/newsletter.js` | validace, Supabase klient, upsert, odhlášení |
| `api/newsletter/subscribe.js` | Vercel handler, tvar jako `api/apply.js` |
| `api/newsletter/unsubscribe.js` | Vercel handler pro POST, vrací JSON |
| `vite.config.js` | oba POST endpointy v `jsonApiDevPlugin` |
| `scripts/newsletter-templates.js` | šablony mailů |
| `scripts/send-newsletter.js` | rozeslání |
| `.env.example` | prázdné `SUPABASE_URL=` a `SUPABASE_SERVICE_ROLE_KEY=` |
| `package.json` | závislost `@supabase/supabase-js` (`npm install`) |

Navigaci v hlavičce neměň. Endpoint `/api/newsletter/send` nezakládej. Do frontendu nepřidávej Supabase klienta ani proměnnou začínající `VITE_`, která by nesla klíč.

## Tabulka

SQL nespouštěj sám, pokud nemáš přístup do Supabase toho člověka. V zastávce 1 mu ho dej zkopírovat.

```sql
create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  preferences text[] not null default '{}',
  lang text not null default 'cs',
  status text not null default 'subscribed',
  unsubscribe_token uuid not null unique default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint newsletter_subscribers_email_lower check (email = lower(email)),
  constraint newsletter_subscribers_lang check (lang in ('cs', 'en')),
  constraint newsletter_subscribers_status check (status in ('subscribed', 'unsubscribed')),
  constraint newsletter_subscribers_preferences check (
    preferences <@ array['workshops', 'summit', 'run', 'partners', 'media']::text[]
  )
);

alter table newsletter_subscribers enable row level security;
```

Žádnou policy pro `anon` ani `authenticated` nepřidávej. Čte a zapisuje jen server přes `SUPABASE_SERVICE_ROLE_KEY`.

Povolené skupiny: `workshops`, `summit`, `run`, `partners`, `media`.

Upsert podle `email`: přepiš `preferences`, `lang`, nastav `status` na `subscribed`, posuň `updated_at`. `unsubscribe_token` a `created_at` v upsertu neposílej, ať se při opakovaném zápisu nezmění. E-mail ukládej oříznutý a malými písmeny.

## Stránka

`usePageMeta('newsletter')`. Texty česky i anglicky přes existující přepínač (`LangContext`, třídy `cs` / `en` jako na ostatních stránkách).

Přesné texty:

| | CS | EN |
|---|---|---|
| label | Newsletter | Newsletter |
| nadpis | Zůstaňte v obraze. | Stay in the loop. |
| perex | Napíšeme, když bude nový summit, workshop, běh nebo zpráva. | We will write when there is a new summit, workshop, run, or update. |
| e-mail | E-mail | Email |
| skupiny | Workshopy, Summit, Sportovní akce, Spolupráce, Média a podcasty | Workshops, Summit, Sports events, Partnerships, Media and podcasts |
| souhlas | Souhlasím se zasíláním newsletteru na tento e-mail. Odhlásit se můžu kdykoli odkazem v mailu. | I agree to receive the newsletter at this email. I can unsubscribe anytime from a link in the email. |
| tlačítko | Přihlásit se | Subscribe |
| úspěch | Hotovo. Až bude něco nového, ozveme se. | Done. We will be in touch when there is something new. |
| chyba | Nepodařilo se uložit. Zkuste to znovu. | Could not save. Please try again. |

Hodnoty checkboxů posílej jako `workshops`, `summit`, `run`, `partners`, `media`, ne jako viditelný popisek. Alespoň jedna skupina. Souhlas je povinný checkbox. Skryté pole `_gotcha` (honeypot) jako u přihlášky: když přijde vyplněné, API vrátí `{ "ok": true }` a nic nezapíše.

`fetch('/api/newsletter/subscribe', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body })`.

Tělo:

```json
{
  "email": "anna@example.com",
  "preferences": ["news", "summit"],
  "lang": "cs",
  "consent": true,
  "_gotcha": ""
}
```

`lang` ber z přepínače (`en` nebo `cs`). Po úspěchu formulář schovej a ukaž větu o úspěchu. Po chybě ukaž jen větu z tabulky, nikdy text z Supabase ani stack.

## Subscribe API

`api/newsletter/subscribe.js` bere POST a OPTIONS, jinak 405. Logiku dej do `api/lib/newsletter.js`.

Odmítni 400, když:

- `consent` není `true`
- e-mail po oříznutí není rozumná adresa (obsahuje jedno `@`, bez mezer, délka nejvýš 254)
- `preferences` není neprázdné pole, nebo obsahuje něco mimo pět skupin
- `lang` není `cs` ani `en`

Úspěch je jen `{ "ok": true }`. Žádný token, žádný e-mail, žádný seznam. Resend nevolej. Když chybí env nebo spadne Supabase, do prohlížeče vrať 500 s obecnou větou `Could not save` a podrobnost jen do server logu.

Ve `vite.config.js` přidej route `/api/newsletter/subscribe` do `jsonApiDevPlugin`, ať funguje `npm run dev`.

## Odhlášení

Dva kusy. Člověk v mailu vidí jen stránku. API je schované za ní.

Stránka `src/pages/NewsletterUnsubscribePage.jsx`, route `newsletter/unsubscribe` v `src/App.jsx`. Do patičky ji nedávej. Token čte z query `?token=`. Hned po otevření zavolá:

```json
POST /api/newsletter/unsubscribe
{ "token": "<uuid z adresy>" }
```

Samotná stránka do Supabase nesahá. Než request doběhne, ukaž krátce „Odhlašuji…“ / „Unsubscribing…“. Pak vždy stejnou větu, ať byl token platný nebo ne:

| | CS | EN |
|---|---|---|
| výsledek | Pokud byl odkaz platný, odběr newsletteru je ukončený. | If the link was valid, the newsletter subscription is cancelled. |
| chyba sítě | Nepodařilo se odhlásit. Otevři odkaz z mailu ještě jednou. | Could not unsubscribe. Open the link from the email again. |

`usePageMeta('newsletterUnsubscribe')`. Titulek stránky: „Odhlášení \| CTRL Europe“ / „Unsubscribe \| CTRL Europe“.

`POST /api/newsletter/unsubscribe` vezmi do `jsonApiDevPlugin` vedle subscribe. Platný token: nastav `status` na `unsubscribed`, `updated_at` na teď. Token neměň. Neplatný, prázdný nebo ne-UUID token: nic neměň. V obou případech vrať jen `{ "ok": true }`. Ať z odpovědi nejde poznat, jestli token existoval. GET na tohle API neobsluhuj. HTML ať vrací jen React stránka, ne endpoint.

## Skript na rozeslání

`scripts/send-newsletter.js` je ESM (`"type": "module"` v `package.json`). Nespouští ho web. Člověk ho spustí sám.

Šablony v `scripts/newsletter-templates.js`:

```js
export const TEMPLATES = {
  test: {
    subject: 'CTRL Europe — test newsletteru',
    html: '<p>Tohle je testovací zpráva newsletteru CTRL Europe.</p>',
  },
};
```

Další ostré šablony přidávej sem jako další klíče. Předmět a HTML nikdy neber z argumentů příkazové řádky.

Příkazy, které člověku později napíšeš:

```bash
node --env-file=.env scripts/send-newsletter.js --group news --template test --dry-run
node --env-file=.env scripts/send-newsletter.js --group news --template test --to jeho@email.cz
node --env-file=.env scripts/send-newsletter.js --group news --template test --yes
```

Chování:

1. `--group` musí být jedna ze čtyř skupin. `--template` musí být klíč v `TEMPLATES`. Jinak skonči dřív, než sáhneš na Resend, a vypiš které skupiny a šablony existují.
2. Ze Supabase vezmi řádky `status = subscribed`, jejichž `preferences` obsahují danou skupinu (filtr `contains`).
3. `--dry-run` nic nepošle. Vypiš jen počet adres.
4. `--to adresa` pošle jen tomu jednomu řádku, a jen když v tom výběru je. Když není, skonči bez odeslání a napiš, že adresa v té skupině není přihlášená.
5. Bez `--dry-run`, bez `--to` a bez `--yes` nic neposílej. Vypiš, že na celou skupinu je potřeba `--yes`.
6. S `--yes` pošli celé skupině.
7. Každému sestav vlastní HTML: šablona plus odstavec s odkazem `{getSiteUrl()}/newsletter/unsubscribe?token={unsubscribe_token}`. Základ URL ber z `getSiteUrl()` v `api/lib/env.js`. `from` ber z `getResendFromEmail()`. Odkaz nesmí obsahovat `/api/`. Viditelný text odkazu: „Odhlásit odběr“ a anglicky „Unsubscribe“, podle `lang` řádku.
8. Posílej na `POST https://api.resend.com/emails/batch` po nejvýš 100 mailech, hlavička `Authorization: Bearer` + `RESEND_API_KEY`. Jeden mail = jeden příjemce v `to`, ať má každý svůj odkaz. Nedávej adresy do společného `bcc`.
9. Na konci vypiš počet odeslaných a počet chyb. Seznam adres nevypisuj.

Když chybí `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` nebo `RESEND_API_KEY`, skonči srozumitelnou větou, která proměnná chybí. Hodnotu klíče nevypisuj.

## Bezpečnost, kterou nesmíš obejít

- Veřejně existuje jen subscribe (zápis vlastního e-mailu), stránka `/newsletter/unsubscribe` a její POST, který umí jen přepnout jeden token na `unsubscribed`.
- V odeslaném mailu je odkaz na `/newsletter/unsubscribe?token=…`. Adresa `/api/…` v mailu není.
- `RESEND_API_KEY` a `SUPABASE_SERVICE_ROLE_KEY` zůstávají v env na serveru a v lokálním `.env`. Nepřijdou do gitu, do `VITE_` proměnné ani do Reactu.
- Anon klíč Supabase do projektu nedávej.
- RLS zůstane zapnuté a bez veřejných policies.
- Subscribe nesmí umět spustit rozeslání, číst cizí řádky ani vracet token.
- `.env` necommituj. Do `.env.example` jen prázdné názvy.

## Zastávky

Až dojdeš k zastávce, přestaň a napiš člověku text z ní. Pokračuj v kódu, teprve až napíše, že je hotovo. Kód, který na klíče ještě nečeká (stránka, API, skript), můžeš napsat před zastávkou 1. Nepiš mu, ať něco kóduje.

### Zastávka 1 — přístup do Supabase

Projekt v Supabase už existuje. Nový nezakládej a člověku neříkej, ať ho zakládá.

Napiš mu:

> Napiš Nikovi. On ti dá přihlašovací údaje do Supabase.
>
> Až se s nimi dostaneš do projektu, udělej tohle. Nový projekt nezakládej.
>
> 1. Vlevo **SQL Editor** → **New query**. Vlož celý SQL, který ti pošlu pod tímhle postupem, a dej **Run**. Má skončit bez červené chyby.
> 2. Vlevo **Project Settings** (ozubené kolečko) → **API**.
> 3. Zkopíruj **Project URL**.
> 4. U **Project API keys** zkopíruj **service_role** (secret). To není klíč `anon` / `public`. `anon` nekopíruj a nikam ho nedávej.
> 5. V kořeni projektu otevři soubor `.env` (ne `.env.example`). Když `.env` nemáš, zkopíruj `.env.example` na `.env`. Na konec přidej dva řádky a hodnoty vlož za rovnítko, bez uvozovek a bez mezer:
>
> ```
> SUPABASE_URL=sem-project-url
> SUPABASE_SERVICE_ROLE_KEY=sem-service-role
> ```
>
> 6. Soubor ulož. `.env` se do gitu nedává. Heslo ani klíče mi do chatu neposílej.
> 7. Napiš mi jen: hotovo.

Pod ten postup vlož SQL z části **Tabulka**.

### Zastávka 2 — vyzkoušet zápis

Až je kód napsaný a zastávka 1 hotová, spusť `npm run dev`, pokud už neběží. Napiš mu:

> Otevři http://localhost:5173/newsletter
>
> 1. Vyplň svůj e-mail, zaškrtni Aktuality, zaškrtni souhlas a odešli. Máš vidět větu, že je hotovo.
> 2. Pošli stejný e-mail znovu, tentokrát se zaškrtnutým Summitem. Zase má vyjít úspěch, ne chyba.
> 3. V Supabase vlevo **Table Editor** → `newsletter_subscribers`. Má tam být jeden řádek s tvým e-mailem malými písmeny, skupiny `news` a `summit`, stav `subscribed`.
> 4. Zkus odeslat formulář bez souhlasu a bez zaškrtnuté skupiny. Nemá se uložit druhý řádek.
>
> Napiš mi, jestli to tak je. Když ne, napiš co vidíš na stránce, kód neřeš.

### Zastávka 3 — vyzkoušet odhlášení

Z tabulky v Table Editoru mu řekni, ať zkopíruje jen hodnotu `unsubscribe_token` u svého řádku (ne e-mail, ne service role).

> Pořád nech běžet web. Do prohlížeče vlož (v adrese nesmí být `/api/`):
>
> `http://localhost:5173/newsletter/unsubscribe?token=SEM-VLOZ-TOKEN`
>
> Máš vidět normální stránku webu, že pokud byl odkaz platný, odběr je ukončený. V Table Editoru obnov řádek: `status` je `unsubscribed`.
>
> Pak tu samou stránku otevři znovu s tokenem `00000000-0000-4000-8000-000000000000`. Stránka má vypadat stejně a v tabulce se nic dalšího nemá změnit.
>
> Až to uvidíš, v Table Editoru si u svého řádku přepni `status` zpátky na `subscribed` a nech zaškrtnuté skupiny. Bez toho ti testovací mail nedorazí.
>
> Napiš mi: hotovo.

### Zastávka 4 — vyzkoušet jeden mail

Neposílej `--yes`. Napiš mu, ať v terminálu v kořeni projektu spustí přesně tyto dva příkazy a svůj e-mail doplní do druhého:

```bash
node --env-file=.env scripts/send-newsletter.js --group news --template test --dry-run
node --env-file=.env scripts/send-newsletter.js --group news --template test --to TVUJ@EMAIL
```

> První příkaz má vypsat počet a nic neposlat. Druhý má dojít jen na tebe. V mailu najeď na odkaz pro odhlášení: má vést na `/newsletter/unsubscribe?token=…`, ne na `/api/`. Otevři ho a zkontroluj, že se stav v tabulce změní na `unsubscribed`.
>
> Celou skupinu tímhle nezkoušej. Příkaz s `--yes` je až na ostré rozeslání, až bude v `scripts/newsletter-templates.js` hotová šablona a ty ji sám spustíš.
>
> Když příkaz napíše, že chybí `RESEND_API_KEY`, otevři `.env` a zkontroluj, že tam ten řádek je (stejný klíč, kterým už chodí přihlášky). Hodnotu mi neposílej.
>
> Napiš mi, jestli mail přišel a odkaz odhlásil.

### Zastávka 5 — klíče na Vercelu

Až lokální testy projdou, deploy nedělej, pokud o něj výslovně nepožádá. Napiš mu:

> Aby zápis fungoval i na ostrém webu, přidej na Vercelu dvě proměnné. Hodnoty jsou ty samé jako v tvém `.env`. Do chatu je nedávej.
>
> 1. Otevři projekt na https://vercel.com
> 2. **Settings** → **Environment Variables**
> 3. Přidej `SUPABASE_URL` a `SUPABASE_SERVICE_ROLE_KEY` pro **Production** (a Preview, pokud ho používáš).
> 4. Ulož. `RESEND_API_KEY` tam už být má, nový Resend klíč nezakládej.
>
> Až budeš chtít, ať to nasadím, napiš mi.

## Hotovo, když

- `/newsletter` uloží e-mail a skupiny a stejný e-mail podruhé nepřidá jako druhý řádek.
- Bez souhlasu nebo s neznámou skupinou API vrátí 400 a nic nezapíše.
- Odpověď subscribe je jen `{ "ok": true }`.
- Mail vede na stránku `/newsletter/unsubscribe`, ta zavolá API a přepne řádek na `unsubscribed`. V mailu není `/api/`. Neznámý token na té stránce vypadá stejně a nic nemění.
- Skript bez `--yes` nerozešle skupinu. S `--to` pošle jen tu jednu přihlášenou adresu. S `--dry-run` nepošle nic.
- V gitu, v Reactu ani v `VITE_` proměnné není service role klíč, Resend klíč ani seznam odběratelů.
- Cesta, která z webu volá Resend kvůli newsletteru, neexistuje.
