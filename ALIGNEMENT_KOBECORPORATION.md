# Plan d'alignement Pricing → Kobecorporation

Objectif : même identité visuelle et comportement UX (couleurs, typo, header/footer, animations, composants, liens), en conservant le contenu métier pricing (forfaits SaaS, Full-Control, hébergement, souscription).

Référence design : `../kobecorporation/CHARTE_GRAPHIQUE.md`

---

## Phase 0 — Référence et audit

- [ ] Captures côte à côte kobecorporation vs pricing-kobecorp
- [ ] Matrice des écarts (logo, couleurs, header, footer, animations)
- [ ] Liste des composants à porter vs adapter

---

## Phase 1 — Fondations design ✅ terminée

- [x] Synchroniser `tailwind.config.js` (tokens brand, accent, neutral, ink, shadows)
- [x] Synchroniser `src/index.css` (animations kobe + utilitaires pricing)
- [x] Asset `public/logo-nom.jpeg` aligné sur kobecorporation
- [x] Composants UI : `src/components/ui/Button`, `Card`, `Badge`, `OptimizedImage`
- [x] Références logo dans Header/Footer (`/logo-nom.jpeg`)
- [x] Mettre à jour `index.html`, `manifest.json`, `useSEO.ts` vers `logo-nom.jpeg`

---

## Phase 2 — Header et navigation

- [ ] Header sticky identique (glass, logo + slogan, `shadow-subtle`)
- [ ] Porter `NavigationMenu` + `MobileNavigationMenu`
- [ ] Créer `src/data/navigation.ts` (liens pricing + liens vers site principal)
- [ ] Scroll ancres (`headerOffset`, même logique que kobe)
- [ ] Toggle FR/EN et CTA contact

---

## Phase 3 — Footer et liens transverses

- [ ] Footer 5 colonnes (modèle kobecorporation)
- [ ] Liens inter-sites (pricing ↔ kobecorporation.com)
- [ ] Réseaux sociaux et contact unifiés
- [ ] Bandeau copyright / slogan
- [ ] (Optionnel) `CookieConsent`

---

## Phase 4 — Animations et fluidité

- [ ] Porter `useScrollAnimation`
- [ ] Transitions globales + `low-perf-mode` dans `App.tsx`
- [ ] Harmoniser hovers cartes forfaits (`shadow-card-hover`, `brand`)
- [ ] (Optionnel) `PageLoader` léger entre routes

---

## Phase 5 — Pages et contenu pricing

- [ ] Unifier `PageHero` sur le hero kobe
- [ ] Pages : SaaS, Full-Control, Hébergement, Applications, Contact, SaaS detail
- [ ] Formulaires (contact, souscription) : focus ring `brand-500`
- [ ] FAQ et tableaux comparaison : palette `brand` uniforme

---

## Phase 6 — SEO, accessibilité, i18n

- [ ] Composant `SEO` + JSON-LD
- [ ] Clés i18n alignées (`nav.*`, `footer.*`)
- [ ] Focus visible, contrastes WCAG

---

## Phase 7 — Validation et déploiement

- [ ] Tests visuels desktop / mobile
- [ ] `npm run lint`, `tsc`, `build`
- [ ] CI/CD + smoke test sur `pricing.kobecorporation.com`

---

## Ordre d'exécution

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7
```

Validation utilisateur recommandée après chaque phase avant la suivante.
