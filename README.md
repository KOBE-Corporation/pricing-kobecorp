# KOBE Corporation Pricing

Page de tarification des offres SaaS, Full-Control et hébergement de **KOBE Corporation** (Yaoundé, Cameroun). Application React avec support multilingue (FR/EN).

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS**
- **React Router**
- **Heroicons**

## Démarrage en local

```bash
npm ci --legacy-peer-deps
npm run dev
```

L’app est disponible sur `http://localhost:5173` (ou le port indiqué par Vite).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (TypeScript + Vite) |
| `npm run preview` | Aperçu du build local |
| `npm run lint` | Vérification ESLint |

## Structure

- `src/` — Code source (composants, pages, contextes, données)
- `setup-pricing/` — Docker, Nginx interne, `compose.yaml` (déploiement VPS)

## Variables d’environnement (build Vite)

Définir dans `setup-pricing/.env` en local (fichier **non versionné**). En CI, utiliser les secrets GitHub :

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_CONTACT_TEMPLATE_ID`
- `VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID`
- `VITE_APP_NAME` / `VITE_APP_URL` (valeurs par défaut dans le workflow)

## Docker (production)

Build multi-stage : Vite → **Nginx Alpine** (fichiers statiques, port 80 interne).

```bash
# Depuis la racine du dépôt
docker build -f setup-pricing/Dockerfile .
```

Image Docker Hub : `azerty78/pricing-kobecorp:latest`

Sur le VPS :

```bash
cd ~/kobe-corporation/pricing-kobecorp/setup-pricing
docker compose -f compose.yaml pull
docker compose -f compose.yaml up -d --force-recreate --remove-orphans
```

Le reverse proxy Nginx du VPS est géré dans un dépôt séparé (Cloudflare Flexible SSL).

## CI/CD

Workflow : `.github/workflows/cicd.yml`

1. Qualité : lint, typecheck, tests, TruffleHog, `npm audit`
2. Build Vite
3. Build image Docker + Trivy + SBOM
4. Push Docker Hub + signature Cosign
5. Déploiement VPS : `docker pull` + `docker compose up -d`
6. Smoke test conteneur

**Secrets GitHub** : `DOCKERHUB_USERNAME`, `DOCKERHUB_PASSWORD`, `VITE_EMAILJS_*`, `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY` (optionnel : `VPS_PORT`, `VPS_DEPLOY_DIR`).

## Licence

Projet privé — KOBE Corporation.
