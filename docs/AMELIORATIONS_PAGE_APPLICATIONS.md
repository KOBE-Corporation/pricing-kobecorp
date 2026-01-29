# Page Applications – Améliorations

**Dernière mise à jour :** après création du composant `ApplicationServiceCard` et affichage des services depuis `SERVICES_DATA.json`.

---

## 1. Ce qui a été fait

### 1.1 Composant `ApplicationServiceCard`

- **Rôle :** Affiche un service issu de `SERVICES_DATA.json` (structure type lignes 519–568 : titre, description, detailedDescription, valueProposition, features, possibleFeatures).
- **Emplacement :** `src/components/ApplicationServiceCard.tsx`.
- **Props :** `service` (objet Service), `variant` (`'auto' | 'compact' | 'detailed'`).
  - **auto :** affiche la version détaillée (detailedDescription, valueProposition, possibleFeatures) si le service les contient, sinon version compacte (description + features).
  - **compact :** toujours description + features.
  - **detailed :** toujours la version détaillée (si champs absents, affichage dégradé).
- **Contenu affiché :** secteur (badge), icône (couleurs du service), titre, description ou detailedDescription, encadré valueProposition si présent, liste de fonctionnalités (features ou possibleFeatures) avec check.
- **Icônes :** mapping de tous les noms d’icônes du JSON vers les composants Heroicons (GlobeAltIcon, DocumentTextIcon, ShoppingBagIcon, BuildingStorefrontIcon, etc.).

### 1.2 Données et types

- **Types :** `src/types/servicesData.ts` – `Service`, `ServiceTranslation`, `ServiceColors`, `ServicesDataRoot`, `hasDetailedContent(service)`.
- **Chargement :** `src/data/servicesData.ts` – import de `SERVICES_DATA.json` (racine du projet : `../../SERVICES_DATA.json`), export de `allServices`, `getServicesByCategory(category)`, `getCategoryLabel(key, lang)`, `categories`, `uiTexts`.

### 1.3 Page Applications

- **Section « Tous nos services » :** liste tous les services de `SERVICES_DATA.json` via `ApplicationServiceCard` (variant `auto`).
- **Filtre par catégorie :** onglets (Tous, Sites & Vitrines, E-commerce, Apps, Business, Métiers spécifiques) avec `getCategoryLabel` et libellés issus de `SERVICES_DATA.json` → `categories`.
- **Accessibilité :** `role="tablist"`, `role="tab"`, `aria-selected` sur les boutons de filtre.
- **Compteur :** « X service(s) » sous les onglets.

---

## 2. Améliorations proposées

### 2.1 Priorité haute

| Amélioration | Détail |
|--------------|--------|
| **Import JSON fiable** | Si l’import `../../SERVICES_DATA.json` échoue au build (selon l’environnement), copier `SERVICES_DATA.json` dans `src/data/` et utiliser `import rawData from './SERVICES_DATA.json'` dans `servicesData.ts`. |
| **Meta description** | Comme sur SaaS/Full-Control : dans un `useEffect`, définir `document.title` et `<meta name="description">` pour la page Applications (titres FR/EN). |
| **Centraliser les textes (i18n)** | Déplacer les chaînes encore en dur (titres Hero, « Types d’Applications », « Démarrer un projet », CTA, etc.) dans `LanguageContext` sous une clé `applications.*`. |

### 2.2 Priorité moyenne

| Amélioration | Détail |
|--------------|--------|
| **Recherche texte** | Utiliser `uiTexts.searchPlaceholder` et un champ de recherche qui filtre les services par titre/description (FR/EN) en plus du filtre par catégorie. |
| **Lien « Demander un devis » par service** | Sur chaque carte, bouton ou lien « Demander un devis » ouvrant un `mailto` avec sujet pré-rempli (ex. « Devis – [Nom du service] »). |
| **Ancre / scroll** | Clic sur un onglet catégorie fait défiler la page vers la section `#services` si besoin (déjà présent comme id). |
| **SEO** | Titre de page dédié (ex. « Applications – Kobe Corporation ») et meta description spécifique aux applications. |

### 2.3 Priorité basse

| Amélioration | Détail |
|--------------|--------|
| **Animation** | Appliquer `animate-fadeInUp` aux cartes ou au conteneur de la liste pour un effet au scroll. |
| **Grille / cartes compactes** | Option d’affichage en grille (2 colonnes) pour les services sans detailedDescription, au lieu d’une seule colonne. |
| **Indication des forfaits éligibles** | Afficher sur la carte les forfaits SaaS/Full-Control éligibles (`service.eligiblePlans`) sous forme de petits badges ou d’une ligne de texte. |
| **Partage de la section « Types d’Applications »** | Alimenter cette section à partir de `SERVICES_DATA.json` (catégorie `apps` ou champs dédiés) pour une seule source de vérité. |

---

## 3. Fichiers concernés

- `src/components/ApplicationServiceCard.tsx` – composant d’affichage d’un service.
- `src/types/servicesData.ts` – types et `hasDetailedContent`.
- `src/data/servicesData.ts` – chargement JSON, `getServicesByCategory`, `getCategoryLabel`.
- `src/pages/Applications.tsx` – Hero, Types d’applications, section « Tous nos services » avec filtre, CTA.
- `SERVICES_DATA.json` – source des services (racine du projet).

---

## 4. Synthèse

- **Composant :** `ApplicationServiceCard` affiche correctement un service au format 519–568 de `SERVICES_DATA.json` (avec ou sans detailedDescription/valueProposition/possibleFeatures).
- **Page :** La section « Tous nos services » affiche tous les services avec filtre par catégorie (Tous, Web, E-commerce, Apps, Business, Vertical).
- **Suite possible :** Meta description + i18n Applications, recherche texte, CTA « Devis » par carte, animations et option grille.
