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
| `/articles` | Články |
| `/research` | Výzkum |
| `/join` | Zapojit se |
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
