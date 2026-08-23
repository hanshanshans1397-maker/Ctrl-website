# CTRL Europe Website

React aplikace s React Routerem. Původní statické HTML stránky jsou v `_legacy/`.

## Struktura

```
src/
  components/     # sdílené komponenty (Navbar, Footer, Layout, Cursor)
  context/        # LangContext (CS/EN přepínání)
  hooks/          # scroll reveal, animace, formuláře
  pages/          # stránky aplikace
    generated/    # obsah stránek (generovaný z _legacy/*.html)
  styles/
    site.css      # globální styly
public/           # favicon, obrázky
_legacy/          # původní HTML soubory (referenční)
```

## Příkazy

```bash
npm install
npm run dev      # vývoj na http://localhost:5173
npm run build    # produkční build do dist/
npm run preview  # náhled buildu
```

## Routing

| Cesta | Stránka |
|-------|---------|
| `/` | Domů |
| `/about` | O nás |
| `/news` | Aktuality (vč. článků a výzkumu) |
| `/join` | Zapojit se |
| `/apply` | Přihláška člena |
| `/summit` | Summit |
| `/workshops` | Workshopy |
| `/article-template` | Šablona článku |

## Úpravy obsahu

- **Navbar / Footer / layout** → `src/components/`
- **Texty konkrétní stránky** → `src/pages/generated/*Content.jsx`
- **Styly** → `src/styles/site.css`
- **Nová stránka** → přidej route v `App.jsx`, vytvoř `*Page.jsx` a content komponentu

Pro hromadný převod HTML z `_legacy/` lze znovu spustit:

```bash
node scripts/html-to-jsx.mjs
```

Po regeneraci zkontroluj JSX (zejména vnořené `<a>` tagy a chybějící uzavírací elementy).

## Přihláška člena — odesílání e-mailu (Resend)

Formulář na `/apply` posílá přihlášku přes Vercel API (`/api/apply`) na e-mail pomocí [Resend](https://resend.com).

1. Založ účet na Resend a vytvoř API klíč.
2. Zkopíruj `.env.example` → `.env` a doplň hodnoty.
3. V Resend ověř odesílací doménu (produkce) nebo pro test použij `onboarding@resend.dev` (e-maily dorazí jen na účet registrovaný v Resend).
4. Na Vercelu nastav stejné proměnné v **Project → Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `APPLY_TO_EMAIL` (výchozí `ctrleurope@seznam.cz`)
   - `SITE_URL` (veřejná URL webu pro logo v potvrzovacím e-mailu, např. `https://ctrleurope.com`)

Lokální test API endpointu (včetně odesílání):

```bash
npm run dev:vercel
```

Samotné `npm run dev` spustí jen frontend — `/api/apply` funguje až s `vercel dev` nebo po deployi na Vercel.
