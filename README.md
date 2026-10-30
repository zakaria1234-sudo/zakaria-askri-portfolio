# Portfolio — Zakaria Askri

Portfolio professionnel de **Zakaria Askri**, développeur Full-Stack JavaScript.
Site statique généré avec Next.js, orienté preuve technique : projets, architecture,
qualité logicielle et systèmes d'information de santé.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (tokens dans `src/app/globals.css`)
- `next/font` (Inter + JetBrains Mono), `next/image`
- Aucune dépendance d'animation, aucun CMS, aucun analytics

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

Le site est servi sur `http://localhost:3000`.

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (statique) |
| `npm run start` | Serveur de production local |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript sans émission |

## Structure

```text
src/
├─ app/           routes, layout, styles globaux
├─ components/
│  ├─ layout/     header, navigation mobile, footer
│  ├─ sections/   sections de la page d'accueil
│  ├─ projects/   cartes et blocs d'étude de cas
│  └─ ui/         primitives du design system
├─ content/       données éditoriales typées (source de vérité)
└─ lib/           utilitaires, configuration du site
```

## Modifier le contenu

Tout le contenu vit dans `src/content/`. Aucun texte éditorial ne doit être écrit
dans un composant.

| Fichier | Contenu |
| --- | --- |
| `profile.ts` | Identité, accroche, disponibilité, CV |
| `socials.ts` | GitHub, LinkedIn, email |
| `skills.ts` | Groupes de compétences |
| `experiences.ts` | Expériences professionnelles |
| `education.ts` | Formation |
| `discipline.ts` | Sport et discipline |
| `projects/*.ts` | Études de cas |

Un projet passe en ligne uniquement lorsque `status: "published"`. Tant qu'il est
en `draft`, il n'est ni listé, ni généré, ni indexé.

## Déploiement

Vercel Hobby, déploiement automatique depuis `main`.

Variables d'environnement :

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique, sans slash final |
| `NEXT_PUBLIC_ALLOW_INDEX` | `true` uniquement en production validée |

## Confidentialité

Le projet HIS AI Workflow est présenté de façon **conceptuelle**. Aucun code
propriétaire, aucune donnée patient, aucun credential, aucune adresse interne
n'est publié. Voir `docs/content-inventory.md`.

## Documents

- `docs/decisions.md` — décisions d'architecture validées
- `docs/content-inventory.md` — inventaire de contenu et informations manquantes
