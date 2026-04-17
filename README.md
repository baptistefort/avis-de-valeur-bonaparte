# Avis de Valeur — Bonaparte Art de Vivre

Éditeur web de génération d'avis de valeur immobilier pour l'agence Maison BONAPARTE.

Chaque consultant personnalise les 9 pages (couverture, introduction, caractéristiques, analyse marché, prix, présentation de la marque, mandat, diffusion, contact) puis exporte un PDF A4 prêt à être remis au client.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4 pour le design system (palette gold/beige, typographies Caudex + Montserrat auto-hébergées)
- Zustand pour l'état du document
- Puppeteer côté serveur + pdf-lib pour la génération PDF pixel-perfect

## Développement local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Build production

```bash
npm run build
npm start
```

## Déploiement

Dockerfile fourni pour hébergement conteneur (Render, Railway, Fly.io, VPS). Le serveur doit avoir Chromium disponible pour que l'export PDF fonctionne (le Dockerfile installe les dépendances système nécessaires).

## Structure

```
src/
  app/
    page.tsx              Editor (route principale)
    api/export-pdf/       Génération PDF via Puppeteer
    print/[page]/         Rendu d'une page individuelle pour capture
  components/
    Editor.tsx            Orchestrateur UI + zoom + export
    Editable{Text,Image}  Primitives d'édition inline
    pages/                9 composants-pages aux dimensions PDF exactes
  store/
    useDocumentStore.ts   État global Zustand
public/
  fonts/                  Caudex + Montserrat (.woff2)
  images/                 Photos par défaut, logo, brochure
```
