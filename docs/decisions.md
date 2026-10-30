# Décisions d'architecture — Portfolio Zakaria Askri

Statut : **validées** le 2026-10-30. Toute remise en cause doit être documentée ici.

| ID | Décision | Statut | Conséquence |
| --- | --- | --- | --- |
| D-01 | Projet situé dans `C:\Users\zakar\dev\zakaria-askri-portfolio`, hors OneDrive | Validé | Évite les conflits de synchronisation sur `node_modules` et `.next` |
| D-02 | Nouveau dépôt Git dans le projet, remote existant, historique préservé, `.git` parasite du dossier utilisateur neutralisé | Validé | Aucun `--force`, aucun fichier personnel publié |
| D-03 | Français uniquement en V1 ; anglais en V2 sous `/en` | Validé | Pas de `next-intl`, pas de route `[locale]` |
| D-04 | Contact par `mailto:` + copie d'adresse, aucun formulaire backend | Validé | Aucune API route, aucune surface de spam |
| D-05 | Thème sombre uniquement | Validé | Pas de toggle, pas de `next-themes` |
| D-06 | CV en PDF uniquement | Validé | Pas de page CV HTML à maintenir |
| D-07 | HIS AI Workflow présenté conceptuellement, code privé, schémas redessinés | Validé | Aucune capture non redactée, aucun lien de dépôt |
| D-08 | Animations CSS natives + `IntersectionObserver` | Validé | Aucune librairie d'animation |
| D-09 | Déploiement sur Vercel Hobby | Validé | Déploiement automatique depuis `main` |
| D-10 | Domaine gratuit `*.vercel.app` | Validé | Domaine personnalisé hors périmètre V1 |
| D-11 | Aucune photo de profil en V1 | Validé | Hero typographique |
| D-12 | Aucun analytics en V1 | Validé | Aucun cookie, aucune bannière |
| D-13 | Composants UI maison, pas de shadcn/Radix | Validé | Dix primitives maximum |
| D-14 | Études de cas en TypeScript typé, pas de MDX | Validé | Contenu validé par le compilateur |

## Contraintes techniques durables

- **Contenu** : toute la donnée éditoriale vit dans `src/content/`, jamais dans les composants.
- **Composants client** : uniquement `MobileNav` et `CopyEmailButton`.
- **Secrets** : aucun secret en V1. Deux variables publiques seulement (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ALLOW_INDEX`).
- **Indexation** : `NEXT_PUBLIC_ALLOW_INDEX` reste à `false` jusqu'à la validation finale.
- **Confidentialité HIS** : toute capture d'écran passe la checklist de `docs/content-inventory.md` avant publication.
- **Casse des fichiers** : tout en minuscules pour rester compatible avec le système de fichiers Linux de Vercel.
