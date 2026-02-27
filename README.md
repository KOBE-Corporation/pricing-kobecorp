# KOBE Corporation Pricing

Page de tarification des offres SaaS, Full-Control et hébergement de **KOBE Corporation** (Yaoundé, Cameroun). Application React avec support multilingue (FR/EN).

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS** pour le style
- **React Router** pour la navigation
- **Heroicons** pour les icônes

## Démarrage en local

```bash
npm install
npm run dev
```

L’app est disponible sur `http://localhost:5173` (ou le port indiqué par Vite).

## Scripts

| Commande       | Description                |
|----------------|----------------------------|
| `npm run dev`  | Serveur de développement   |
| `npm run build`| Build de production (TS + Vite) |
| `npm run preview` | Aperçu du build (prod locale) |
| `npm run lint` | Vérification ESLint        |

## Structure du projet

- `src/` — Code source (composants, pages, contextes, données)
- `src/components/` — Composants réutilisables (ex. `PricingCard`, sections)
- `src/pages/` — Pages (SaaS, Full-Control, etc.)
- `src/contexts/` — Contexte langue (FR/EN)
- `src/data/` — Données des forfaits et services
- `setup-pricing/` — Config déploiement (Dockerfile, `compose.yaml`, `.env`)

## Variables d’environnement (build)

Les variables Vite utilisées au build (contact, newsletter, nom d’app, URL) sont définies dans `setup-pricing/.env`. En CI, elles sont lues depuis ce fichier ou passées en build-args. Ne pas commiter de secrets : utiliser des variables de repo ou des secrets GitHub.

## Build Docker

```bash
cd setup-pricing
docker compose build
# ou depuis la racine :
docker build -f setup-pricing/Dockerfile .
```

Image publiée sur Docker Hub : `azerty78/pricing-kobecorp`.

## CI/CD (GitHub Actions)

Le workflow `.github/workflows/ci-cd.yml` s’exécute sur push/PR vers `main` ou `master` :

1. **Tags** — Création de tags Git (sémantiques ou dev)
2. **Build** — Build de l’image Docker et push vers Docker Hub
3. **Test** — Vérification du démarrage du conteneur (hors PR)
4. **Release** — Création d’une GitHub Release avec notes

**Secrets requis** : `DOCKERHUB_USERNAME`, `DOCKERHUB_PASSWORD`.

## Déploiement en production

Le pipeline publie uniquement l’image sur Docker Hub. Le déploiement sur le serveur se fait manuellement (ou via un autre outil) :

- **Docker Compose** : utiliser `setup-pricing/compose.yaml` (réseau `kobecorp-network`, reverse proxy attendu sur 80/443).
- **Docker seul** : `docker pull azerty78/pricing-kobecorp:latest` puis `docker run` avec le port exposé.

## Licence

Projet privé — KOBE Corporation.
