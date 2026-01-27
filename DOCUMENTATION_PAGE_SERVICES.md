# Documentation Complète - Page Services

**Version:** 1.0  
**Date:** 2024  
**Auteur:** Ben Djibril (Kone Djibril Benjamin)  
**Contact:** contact@kobecorporation.com

---

## Table des Matières

1. [Introduction](#introduction)
2. [Structure de la Page Services](#structure-de-la-page-services)
3. [Liste Complète des Services](#liste-complète-des-services)
4. [Boîtes de Dialogue](#boîtes-de-dialogue)
5. [Descriptions Textuelles Détaillées](#descriptions-textuelles-détaillées)
6. [Forfaits Éligibles par Service](#forfaits-éligibles-par-service)
7. [Stack Technique](#stack-technique)
8. [Structure des Données](#structure-des-données)
9. [Annexes](#annexes)

---

## 1. Introduction

Ce document fournit toutes les informations nécessaires pour recréer la page Services dans un autre programme. Il contient :

- ✅ Liste complète de tous les services disponibles
- ✅ Descriptions textuelles détaillées pour chaque service
- ✅ Contenu des boîtes de dialogue
- ✅ Fonctionnalités possibles pour chaque service
- ✅ Forfaits éligibles (SaaS et Full Control)
- ✅ Stack technique utilisée
- ✅ Structure des données et format JSON

**Objectif :** Permettre la recréation complète de la page Services avec toutes ses fonctionnalités dans n'importe quel framework ou langage.

---

## 2. Structure de la Page Services

### 2.1 Composants Principaux

La page Services est composée de plusieurs sections :

1. **ServicesHero** - Section hero avec titre et description
2. **ServicesPackages** - Affichage des forfaits SaaS et Full Control
3. **ServicesList** - Liste de tous les services disponibles avec filtres et recherche
4. **ServicesCTA** - Call-to-action final

### 2.2 Fonctionnalités

- ✅ **Filtres par catégorie** : Web, E-commerce, Apps, Business, Vertical, Tous
- ✅ **Barre de recherche** : Recherche textuelle dans les services
- ✅ **Cartes de services** : Affichage visuel de chaque service
- ✅ **Boîtes de dialogue** : Détails complets de chaque service
- ✅ **Navigation** : Liens vers la page Contact avec pré-remplissage

---

## 3. Liste Complète des Services

### 3.1 Catégories de Services

Les services sont organisés en 6 catégories :

1. **Web** - Services web génériques
2. **E-commerce** - Services de vente en ligne
3. **Apps** - Applications web, mobile, desktop, API
4. **Business** - Services métier généraux
5. **Vertical** - Services spécialisés par secteur d'activité
6. **Tous** - Tous les services (aucun filtre)

### 3.2 Liste Exhaustive des Services

#### Catégorie : Web

**1. Développement Web**
- **ID** : `web-dev`
- **Titre FR** : Développement Web
- **Titre EN** : Web Development
- **Description FR** : Sites web modernes et responsives
- **Description EN** : Modern, responsive websites
- **Fonctionnalités principales** :
  1. Design responsive
  2. Optimisation SEO
  3. Chargement rapide
  4. Frameworks modernes
- **Secteur** : Générique
- **Couleurs** : `from-blue-500 to-blue-600`, `bg-blue-100`, `text-blue-600`

**2. Sites Vitrines**
- **ID** : `showcase`
- **Titre FR** : Sites Vitrines
- **Titre EN** : Showcase Websites
- **Description FR** : Sites vitrines professionnels
- **Description EN** : Professional showcase sites
- **Fonctionnalités principales** :
  1. Design sur mesure
  2. SEO optimisé
  3. Formulaires de contact
  4. Performance optimale
- **Secteur** : Générique
- **Couleurs** : `from-purple-500 to-purple-600`, `bg-purple-100`, `text-purple-600`

**3. Portfolio**
- **ID** : `portfolio`
- **Titre FR** : Portfolio
- **Titre EN** : Portfolio
- **Description FR** : Portfolios personnels ou professionnels
- **Description EN** : Personal or professional portfolios
- **Fonctionnalités principales** :
  1. Design créatif
  2. Présentation de projets
  3. Intégration CV
  4. Liens réseaux sociaux
- **Secteur** : Personnel
- **Couleurs** : `from-pink-500 to-pink-600`, `bg-pink-100`, `text-pink-600`

#### Catégorie : E-commerce

**4. E-commerce**
- **ID** : `ecommerce`
- **Titre FR** : E-commerce
- **Titre EN** : E-commerce
- **Description FR** : Boutiques en ligne qui convertissent
- **Description EN** : Online stores that convert
- **Fonctionnalités principales** :
  1. Intégration paiement
  2. Gestion des stocks
  3. Panier d'achat
  4. Tableau de bord admin
- **Description détaillée FR** : Solution e-commerce complète pour lancer et gérer votre boutique en ligne. Du catalogue produits à la gestion des commandes, du traitement des paiements à la relation client, nous vous proposons une solution clé en main adaptée à vos besoins métier.
- **Description détaillée EN** : Complete e-commerce solution to launch and manage your online store. From product catalog to order management, payment processing to customer relationship, we provide a turnkey solution adapted to your business needs.
- **Plus-value FR** : Augmentez vos ventes avec une boutique en ligne professionnelle, accessible 24/7, avec des solutions de paiement intégrées et une expérience client optimisée.
- **Plus-value EN** : Increase your sales with a professional online store, accessible 24/7, with integrated payment solutions and optimized customer experience.
- **Fonctionnalités possibles** :
  - Catalogue produits avec catégories et filtres
  - Panier d'achat et processus de commande
  - Intégration paiement (cartes, mobile money)
  - Gestion et suivi des commandes
  - Compte client et historique des commandes
  - Gestion des stocks avec alertes
  - Système de coupons et promotions
  - Avis et notes produits
  - Marketplace multi-vendeurs (optionnel)
  - Application mobile (optionnel)
- **Forfaits éligibles** :
  - SaaS : goodDeal, pro, ultra
  - Full Control : normal, speed, ultraSpeed
- **Secteur** : Commerce de détail
- **Couleurs** : `from-green-500 to-green-600`, `bg-green-100`, `text-green-600`

**5. Point de Vente (PDV)**
- **ID** : `pos`
- **Titre FR** : Point de Vente (PDV)
- **Titre EN** : Point of Sale (POS)
- **Description FR** : Système complet de point de vente pour commerces
- **Description EN** : Complete POS system for retail businesses
- **Fonctionnalités principales** :
  1. Intégration caisse enregistreuse
  2. Traitement des paiements
  3. Impression de tickets
  4. Rapports de ventes
- **Secteur** : Commerce de détail
- **Couleurs** : `from-amber-500 to-amber-600`, `bg-amber-100`, `text-amber-600`

**6. Gestion de Marché**
- **ID** : `market`
- **Titre FR** : Gestion de Marché
- **Titre EN** : Market Management
- **Description FR** : Système de gestion de marché et vendeurs
- **Description EN** : Market and vendor management system
- **Fonctionnalités principales** :
  1. Enregistrement des vendeurs
  2. Gestion des stands
  3. Collecte des frais
  4. Analyses du marché
- **Secteur** : Marketplace
- **Couleurs** : `from-violet-600 to-violet-700`, `bg-violet-100`, `text-violet-600`

#### Catégorie : Apps

**7. Applications Web**
- **ID** : `web-app`
- **Titre FR** : Applications Web
- **Titre EN** : Web Applications
- **Description FR** : Solutions métier sur mesure
- **Description EN** : Custom business solutions
- **Fonctionnalités principales** :
  1. Fonctionnalités personnalisées
  2. Authentification utilisateur
  3. Intégration base de données
  4. Développement API
- **Secteur** : Applications
- **Couleurs** : `from-primary-500 to-primary-600`, `bg-primary-100`, `text-primary-600`

**8. Applications Mobile**
- **ID** : `mobile`
- **Titre FR** : Applications Mobile
- **Titre EN** : Mobile Applications
- **Description FR** : Apps mobiles cross-platform
- **Description EN** : Cross-platform mobile apps
- **Fonctionnalités principales** :
  1. iOS & Android
  2. Kotlin Multiplatform
  3. Performance native
  4. Support hors ligne
- **Secteur** : Applications
- **Couleurs** : `from-accent-500 to-accent-600`, `bg-accent-100`, `text-accent-600`

**9. Applications Desktop**
- **ID** : `desktop`
- **Titre FR** : Applications Desktop
- **Titre EN** : Desktop Applications
- **Description FR** : Applications desktop natives
- **Description EN** : Native desktop applications
- **Fonctionnalités principales** :
  1. Cross-platform
  2. Interface native
  3. Intégration système
  4. Mode hors ligne
- **Secteur** : Interne
- **Couleurs** : `from-indigo-500 to-indigo-600`, `bg-indigo-100`, `text-indigo-600`

**10. Développement API**
- **ID** : `api`
- **Titre FR** : Développement API
- **Titre EN** : API Development
- **Description FR** : APIs RESTful et GraphQL
- **Description EN** : RESTful and GraphQL APIs
- **Fonctionnalités principales** :
  1. API REST
  2. GraphQL
  3. Documentation
  4. Sécurité & Auth
- **Secteur** : Backend
- **Couleurs** : `from-orange-500 to-orange-600`, `bg-orange-100`, `text-orange-600`

#### Catégorie : Business

**11. DevOps & Cloud**
- **ID** : `devops`
- **Titre FR** : DevOps & Cloud
- **Titre EN** : DevOps & Cloud
- **Description FR** : Infrastructure et déploiement
- **Description EN** : Infrastructure and deployment
- **Fonctionnalités principales** :
  1. Pipelines CI/CD
  2. Docker & Kubernetes
  3. Déploiement cloud
  4. Monitoring & Logs
- **Secteur** : Infrastructure
- **Couleurs** : `from-cyan-500 to-cyan-600`, `bg-cyan-100`, `text-cyan-600`

**12. Conseil**
- **ID** : `consulting`
- **Titre FR** : Conseil
- **Titre EN** : Consulting
- **Description FR** : Conseil expert et audits
- **Description EN** : Expert advice and audits
- **Fonctionnalités principales** :
  1. Revue de code
  2. Audit architecture
  3. Optimisation performance
  4. Conseil technique
- **Secteur** : Conseil
- **Couleurs** : `from-yellow-500 to-yellow-600`, `bg-yellow-100`, `text-yellow-600`

**13. Gestion de Stock**
- **ID** : `inventory`
- **Titre FR** : Gestion de Stock
- **Titre EN** : Inventory Management
- **Description FR** : Système complet de gestion de stock pour votre entreprise
- **Description EN** : Complete stock management system for your business
- **Fonctionnalités principales** :
  1. Suivi de stock en temps réel
  2. Alertes de stock faible
  3. Catégorisation des produits
  4. Rapports et analyses de stock
- **Description détaillée FR** : Système complet de gestion de stock pour suivre vos produits en temps réel, gérer les entrées et sorties, générer des rapports et optimiser vos niveaux de stock. Idéal pour les magasins de détail, entrepôts et centres de distribution.
- **Description détaillée EN** : Complete inventory management system to track your products in real time, manage entries and exits, generate reports and optimize your stock levels. Ideal for retail stores, warehouses and distribution centers.
- **Plus-value FR** : Réduisez les ruptures de stock et les surstocks, optimisez vos coûts de stockage et gagnez du temps avec une gestion automatisée des stocks.
- **Plus-value EN** : Reduce stockouts and overstock, optimize your inventory costs and save time with automated stock management.
- **Fonctionnalités possibles** :
  - Suivi de stock en temps réel
  - Gestion des entrées et sorties de produits
  - Alertes de stock faible
  - Catégorisation et recherche de produits
  - Rapports et analyses de stock
  - Scan de codes-barres (optionnel)
  - Gestion multi-entrepôts (optionnel)
  - Gestion des fournisseurs
  - Gestion des commandes d'achat
  - Valorisation des stocks et intégration comptable
- **Forfaits éligibles** :
  - SaaS : goodDeal, pro, ultra
  - Full Control : normal, speed, ultraSpeed
- **Secteur** : Commerce de détail
- **Couleurs** : `from-teal-500 to-teal-600`, `bg-teal-100`, `text-teal-600`

**14. Logiciel de Facturation**
- **ID** : `billing`
- **Titre FR** : Logiciel de Facturation
- **Titre EN** : Billing Software
- **Description FR** : Système professionnel de facturation et de factures
- **Description EN** : Professional invoicing and billing system
- **Fonctionnalités principales** :
  1. Génération de factures
  2. Suivi des paiements
  3. Gestion des taxes
  4. Rapports financiers
- **Description détaillée FR** : Logiciel professionnel de facturation pour créer, envoyer et suivre vos factures. Gérez vos clients, suivez les paiements, gérez les taxes et générez des rapports financiers.
- **Description détaillée EN** : Professional invoicing and billing software to create, send and track your invoices. Manage your customers, track payments, handle taxes and generate financial reports.
- **Plus-value FR** : Gagnez du temps sur les tâches administratives, améliorez votre gestion de trésorerie et maintenez des factures professionnelles conformes aux réglementations locales.
- **Plus-value EN** : Save time on administrative tasks, improve your cash flow management and maintain professional invoices compliant with local regulations.
- **Fonctionnalités possibles** :
  - Création et personnalisation de factures
  - Numérotation automatique des factures
  - Gestion de la base de données clients
  - Suivi des paiements et rappels
  - Calcul et gestion des taxes
  - Méthodes de paiement multiples
  - Modèles de factures
  - Rapports financiers (ventes, impayés)
  - Export PDF et Excel
  - Intégration avec logiciels comptables (optionnel)
- **Forfaits éligibles** :
  - SaaS : goodDeal, pro, ultra
  - Full Control : normal, speed, ultraSpeed
- **Secteur** : Finance
- **Couleurs** : `from-emerald-500 to-emerald-600`, `bg-emerald-100`, `text-emerald-600`

**15. Gestion de Commandes**
- **ID** : `orders`
- **Titre FR** : Gestion de Commandes
- **Titre EN** : Order Management
- **Description FR** : Système efficace de traitement et suivi des commandes
- **Description EN** : Efficient order processing and tracking system
- **Fonctionnalités principales** :
  1. Création et suivi des commandes
  2. Mises à jour de statut
  3. Notifications clients
  4. Historique des commandes
- **Secteur** : Opérations
- **Couleurs** : `from-violet-500 to-violet-600`, `bg-violet-100`, `text-violet-600`

**16. Gestion de Clients (CRM)**
- **ID** : `crm`
- **Titre FR** : Gestion de Clients
- **Titre EN** : Customer Management
- **Description FR** : Système de gestion de la relation client
- **Description EN** : Customer relationship management system
- **Fonctionnalités principales** :
  1. Base de données clients
  2. Gestion des contacts
  3. Historique des interactions
  4. Analyses clients
- **Secteur** : CRM
- **Couleurs** : `from-rose-500 to-rose-600`, `bg-rose-100`, `text-rose-600`

**17. Logiciel de Comptabilité**
- **ID** : `accounting`
- **Titre FR** : Logiciel de Comptabilité
- **Titre EN** : Accounting Software
- **Description FR** : Comptabilité et gestion financière complète
- **Description EN** : Complete accounting and financial management
- **Fonctionnalités principales** :
  1. Grand livre général
  2. Comptes clients/fournisseurs
  3. États financiers
  4. Conformité fiscale
- **Secteur** : Finance
- **Couleurs** : `from-green-600 to-green-700`, `bg-green-100`, `text-green-600`

**18. Gestion de Paie**
- **ID** : `payroll`
- **Titre FR** : Gestion de Paie
- **Titre EN** : Payroll Management
- **Description FR** : Système de gestion de paie et RH
- **Description EN** : Employee payroll and HR management system
- **Fonctionnalités principales** :
  1. Calcul des salaires
  2. Déductions fiscales
  3. Génération de bulletins
  4. Dossiers employés
- **Secteur** : RH
- **Couleurs** : `from-emerald-600 to-emerald-700`, `bg-emerald-100`, `text-emerald-600`

#### Catégorie : Vertical (Services Spécialisés)

**19. Gestion de Restaurant**
- **ID** : `restaurant`
- **Titre FR** : Gestion de Restaurant
- **Titre EN** : Restaurant Management
- **Description FR** : Solution complète pour restaurants et établissements de restauration
- **Description EN** : Complete solution for restaurant and food service businesses
- **Fonctionnalités principales** :
  1. Gestion des menus
  2. Système de réservation de tables
  3. Suivi des commandes
  4. Affichage cuisine
- **Description détaillée FR** : Solution complète de gestion de restaurant pour optimiser vos opérations de la prise de commande à la livraison. Gérez votre menu, réservations, commandes, affichage cuisine et paiements en un seul endroit.
- **Description détaillée EN** : Complete restaurant management solution to optimize your operations from order taking to delivery. Manage your menu, reservations, orders, kitchen display and payments all in one place.
- **Plus-value FR** : Améliorez votre rapidité de service, réduisez les erreurs et augmentez la satisfaction client avec un système de gestion de restaurant intégré.
- **Plus-value EN** : Improve your service speed, reduce errors and increase customer satisfaction with an integrated restaurant management system.
- **Fonctionnalités possibles** :
  - Gestion des menus avec catégories et prix
  - Système de réservation de tables
  - Prise de commande (sur place, à emporter, livraison)
  - Affichage cuisine
  - Suivi des commandes et mises à jour de statut
  - Traitement des paiements (espèces, carte, mobile money)
  - Programme de fidélité (optionnel)
  - Intégration gestion de livraison
  - Gestion des stocks d'ingrédients
  - Rapports de ventes et analyses
- **Forfaits éligibles** :
  - SaaS : pro, ultra
  - Full Control : speed, ultraSpeed
- **Secteur** : Restaurant
- **Couleurs** : `from-red-500 to-red-600`, `bg-red-100`, `text-red-600`

**20. Gestion de Livraison**
- **ID** : `delivery`
- **Titre FR** : Gestion de Livraison
- **Titre EN** : Delivery Management
- **Description FR** : Système de suivi et gestion des livraisons
- **Description EN** : Delivery tracking and management system
- **Fonctionnalités principales** :
  1. Planification des livraisons
  2. Optimisation des itinéraires
  3. Suivi en temps réel
  4. Notifications de livraison
- **Secteur** : Logistique
- **Couleurs** : `from-sky-500 to-sky-600`, `bg-sky-100`, `text-sky-600`

**21. Système de Réservation**
- **ID** : `booking`
- **Titre FR** : Système de Réservation
- **Titre EN** : Booking System
- **Description FR** : Système de réservation et prise de rendez-vous en ligne
- **Description EN** : Online reservation and appointment booking system
- **Fonctionnalités principales** :
  1. Intégration calendrier
  2. Gestion des disponibilités
  3. Notifications par email
  4. Confirmation de réservation
- **Secteur** : Services
- **Couleurs** : `from-lime-500 to-lime-600`, `bg-lime-100`, `text-lime-600`

**22. Gestion de Pharmacie**
- **ID** : `pharmacy`
- **Titre FR** : Gestion de Pharmacie
- **Titre EN** : Pharmacy Management
- **Description FR** : Système complet de gestion de pharmacie
- **Description EN** : Complete pharmacy management system
- **Fonctionnalités principales** :
  1. Suivi des médicaments
  2. Gestion des ordonnances
  3. Alertes de péremption
  4. Dossiers patients
- **Secteur** : Santé
- **Couleurs** : `from-blue-600 to-blue-700`, `bg-blue-100`, `text-blue-600`

**23. Gestion de Salle de Sport**
- **ID** : `gym`
- **Titre FR** : Gestion de Salle de Sport
- **Titre EN** : Gym Management
- **Description FR** : Système de gestion de salle de sport et fitness
- **Description EN** : Fitness center and gym management system
- **Fonctionnalités principales** :
  1. Gestion des membres
  2. Suivi des abonnements
  3. Planification des cours
  4. Traitement des paiements
- **Secteur** : Sport
- **Couleurs** : `from-red-600 to-red-700`, `bg-red-100`, `text-red-600`

**24. Gestion de Salon & Beauté**
- **ID** : `salon`
- **Titre FR** : Gestion de Salon & Beauté
- **Titre EN** : Salon & Beauty Management
- **Description FR** : Système de gestion de salon de beauté et spa
- **Description EN** : Beauty salon and spa management system
- **Fonctionnalités principales** :
  1. Planification des rendez-vous
  2. Catalogue de services
  3. Gestion du personnel
  4. Historique clients
- **Description détaillée FR** : Solution complète de gestion pour salons de beauté et spas. Gérez les rendez-vous, services, planning du personnel, historique clients et paiements dans un système intégré.
- **Description détaillée EN** : Complete management solution for beauty salons and spas. Manage appointments, services, staff schedules, customer history and payments all in one integrated system.
- **Plus-value FR** : Optimisez vos opérations de salon, réduisez les rendez-vous manqués, améliorez la satisfaction client et augmentez vos revenus avec une gestion automatisée des rendez-vous et suivi client.
- **Plus-value EN** : Optimize your salon operations, reduce no-shows, improve customer satisfaction and increase revenue with automated appointment management and customer tracking.
- **Fonctionnalités possibles** :
  - Système de réservation en ligne
  - Catalogue de services avec tarifs
  - Planification et gestion du personnel
  - Base de données clients et historique
  - Programme de fidélité et récompenses
  - Traitement des paiements (espèces, carte, mobile money)
  - Rappels par SMS et email
  - Gestion des stocks produits
  - Rapports de ventes et analyses
  - Support multi-emplacements (optionnel)
- **Forfaits éligibles** :
  - SaaS : goodDeal, pro, ultra
  - Full Control : normal, speed, ultraSpeed
- **Secteur** : Beauté
- **Couleurs** : `from-pink-600 to-pink-700`, `bg-pink-100`, `text-pink-600`

**25. Gestion de Transport**
- **ID** : `transport`
- **Titre FR** : Gestion de Transport
- **Titre EN** : Transport Management
- **Description FR** : Système de gestion de transport et logistique
- **Description EN** : Transport and logistics management system
- **Fonctionnalités principales** :
  1. Suivi des véhicules
  2. Planification des itinéraires
  3. Gestion des chauffeurs
  4. Gestion du carburant
- **Secteur** : Logistique
- **Couleurs** : `from-slate-600 to-slate-700`, `bg-slate-100`, `text-slate-600`

**26. Gestion de Location**
- **ID** : `rental`
- **Titre FR** : Gestion de Location
- **Titre EN** : Rental Management
- **Description FR** : Gestion de location de biens et équipements
- **Description EN** : Property and equipment rental management
- **Fonctionnalités principales** :
  1. Liste des biens
  2. Gestion des réservations
  3. Suivi des paiements
  4. Gestion des contrats
- **Secteur** : Immobilier
- **Couleurs** : `from-amber-600 to-amber-700`, `bg-amber-100`, `text-amber-600`

**27. Intégration Mobile Money**
- **ID** : `mobile-money`
- **Titre FR** : Intégration Mobile Money
- **Titre EN** : Mobile Money Integration
- **Description FR** : Intégration des paiements mobile money (Orange Money, MTN Mobile Money)
- **Description EN** : Mobile money payment integration (Orange Money, MTN Mobile Money)
- **Fonctionnalités principales** :
  1. Passerelle de paiement
  2. Suivi des transactions
  3. Gestion des soldes
  4. Historique des paiements
- **Secteur** : Finance
- **Couleurs** : `from-orange-600 to-orange-700`, `bg-orange-100`, `text-orange-600`

**28. Gestion de Parking**
- **ID** : `parking`
- **Titre FR** : Gestion de Parking
- **Titre EN** : Parking Management
- **Description FR** : Système de gestion de parking et espaces
- **Description EN** : Parking lot and space management system
- **Fonctionnalités principales** :
  1. Allocation des espaces
  2. Traitement des paiements
  3. Contrôle d'accès
  4. Suivi des revenus
- **Secteur** : Mobilité
- **Couleurs** : `from-gray-600 to-gray-700`, `bg-gray-100`, `text-gray-600`

**29. Gestion Scolaire**
- **ID** : `school`
- **Titre FR** : Gestion Scolaire
- **Titre EN** : School Management
- **Description FR** : Système de gestion d'établissement scolaire
- **Description EN** : Educational institution management system
- **Fonctionnalités principales** :
  1. Gestion des élèves
  2. Suivi des notes
  3. Gestion des frais
  4. Bulletins de notes
- **Secteur** : Éducation
- **Couleurs** : `from-indigo-600 to-indigo-700`, `bg-indigo-100`, `text-indigo-600`

**30. Gestion Hospitalière**
- **ID** : `hospital`
- **Titre FR** : Gestion Hospitalière
- **Titre EN** : Hospital Management
- **Description FR** : Système de gestion d'établissement de santé
- **Description EN** : Healthcare facility management system
- **Fonctionnalités principales** :
  1. Dossiers patients
  2. Planification des rendez-vous
  3. Facturation médicale
  4. Intégration pharmacie
- **Secteur** : Santé
- **Couleurs** : `from-red-700 to-red-800`, `bg-red-100`, `text-red-600`

---

## 4. Boîtes de Dialogue

### 4.1 ServiceInfoDialog - Boîte de Dialogue de Service

Cette boîte de dialogue s'affiche lorsqu'un utilisateur clique sur "En savoir plus" pour un service.

#### Structure de la Boîte de Dialogue

**Header :**
- Titre du service
- Description courte
- Bouton de fermeture (X)

**Contenu :**

1. **Section "À propos de ce service"**
   - Icône : InformationCircleIcon
   - Description détaillée du service
   - Mise en évidence avec fond dégradé

2. **Section "Fonctionnalités principales"**
   - Icône : CheckCircleIcon
   - Liste des 4 fonctionnalités principales (feature1-4)
   - Affichage en grille 2 colonnes
   - Chaque fonctionnalité avec icône de validation

3. **Section "Plus-value du projet"** (si disponible)
   - Fond dégradé primary-500 à primary-600
   - Texte en blanc
   - Mise en évidence de la valeur ajoutée

4. **Section "Fonctionnalités pouvant être développées"**
   - Icône : CheckCircleIcon (accent)
   - Liste exhaustive des fonctionnalités possibles
   - Affichage en grille 2 colonnes
   - Chaque fonctionnalité avec icône de validation

5. **Section "Stack technique"**
   - Icône : CodeBracketIcon
   - Liste des technologies utilisées :
     - React
     - TypeScript
     - Spring Boot
     - MongoDB
     - AWS/Cloud/VPS
     - Docker
   - Affichage en badges

6. **Section "Demander un devis"**
   - Formulaire de contact avec :
     - Choix du type de forfait (SaaS ou Full Control)
     - Sélection du forfait spécifique
     - Choix de la méthode de contact (WhatsApp ou Email)
     - Informations de contact :
       - Nom complet *
       - Email *
       - Téléphone *
       - Entreprise (optionnel)
       - Message (optionnel)
   - Boutons d'action :
     - Annuler
     - Envoyer via WhatsApp/Email

#### Logique de la Boîte de Dialogue

**Mapping des IDs de services :**
```javascript
const serviceKeyMap = {
  'web-dev': 'serviceWebDev',
  'showcase': 'serviceShowcase',
  'portfolio': 'servicePortfolio',
  'ecommerce': 'serviceEcom',
  'web-app': 'serviceApp',
  'mobile': 'serviceMobile',
  'desktop': 'serviceDesktop',
  'api': 'serviceAPI',
  'devops': 'serviceDevOps',
  'consulting': 'serviceConsult',
  'inventory': 'serviceInventory',
  'restaurant': 'serviceRestaurant',
  'billing': 'serviceBilling',
  'orders': 'serviceOrders',
  'pos': 'servicePOS',
  'crm': 'serviceCRM',
  'delivery': 'serviceDelivery',
  'booking': 'serviceBooking',
  'pharmacy': 'servicePharmacy',
  'gym': 'serviceGym',
  'salon': 'serviceSalon',
  'transport': 'serviceTransport',
  'rental': 'serviceRental',
  'accounting': 'serviceAccounting',
  'payroll': 'servicePayroll',
  'mobile-money': 'serviceMobileMoney',
  'market': 'serviceMarket',
  'parking': 'serviceParking',
  'school': 'serviceSchool',
  'hospital': 'serviceHospital',
}
```

**Forfaits éligibles par défaut :**
- Si non spécifié, tous les services sont éligibles à tous les forfaits
- Format : `{ saas: ['goodDeal', 'pro', 'ultra'], fullControl: ['normal', 'speed', 'ultraSpeed'] }`

**Formatage des messages :**

**WhatsApp :**
```
Bonjour,

Je souhaite demander un devis pour le service : *[Nom du service]*

*Informations sur le forfait :*
- Type : [SaaS/Full Control]
- Forfait : [Nom du forfait]

*Mes informations :*
- Nom : [Nom]
- Email : [Email]
- Téléphone : [Téléphone]
- Entreprise : [Entreprise] (si fourni)
- Message : [Message] (si fourni)

Merci de me recontacter pour discuter de ce projet.
```

**Email :**
```
Bonjour,

Je souhaite demander un devis pour le service : [Nom du service]

Informations sur le forfait :
- Type : [SaaS/Full Control]
- Forfait : [Nom du forfait]

Mes informations :
- Nom : [Nom]
- Email : [Email]
- Téléphone : [Téléphone]
- Entreprise : [Entreprise] (si fourni)
- Message : [Message] (si fourni)

Merci de me recontacter pour discuter de ce projet.

Cordialement,
[Nom]
```

### 4.2 ServiceDetailsDialog - Boîte de Dialogue de Forfait

Cette boîte de dialogue s'affiche lorsqu'un utilisateur clique sur un forfait spécifique (SaaS ou Full Control).

#### Structure de la Boîte de Dialogue

**Header :**
- Badge indiquant le type (SaaS ou Full Control)
- Nom du forfait
- Prix (avec unité pour SaaS) ou Délai de livraison (pour Full Control)
- Description
- Bouton de fermeture (X)

**Contenu :**

1. **Section "Fonctionnalités incluses"**
   - Liste de toutes les fonctionnalités (feature1 à featureN)
   - Affichage avec icônes de validation

2. **Section "Détails du modèle"** (selon le type)
   - **SaaS** :
     - Facturation mensuelle ou annuelle
     - Pour qui est ce modèle ?
     - Propriété intellectuelle & droits
     - Vos responsabilités
     - Mes responsabilités
     - Si vous arrêtez l'abonnement
   - **Full Control** :
     - Pour qui est ce modèle ?
     - Propriété intellectuelle & droits
     - Vos responsabilités
     - Mes responsabilités
     - Si vous arrêtez la collaboration
     - Que comprend chaque forfait Full Control ?
     - Stack Technique
     - Infrastructure & Hébergement
     - Mesures de Sécurité
     - Formation Incluse
     - Support Post-Livraison
     - Garantie & Assurances
     - Limites & Exclusions

3. **Boutons d'action :**
   - "Choisir ce forfait" - Redirige vers Contact ou Services
   - "Parler à un expert" - Ouvre WhatsApp ou Email

---

## 5. Descriptions Textuelles Détaillées

### 5.1 Format des Descriptions

Chaque service peut avoir :

1. **Titre** (title) - Nom du service
2. **Description courte** (desc) - Description en une phrase
3. **Description détaillée** (detailedDescription) - Description complète (optionnel)
4. **Plus-value** (valueProposition) - Proposition de valeur (optionnel)
5. **Fonctionnalités principales** (feature1-4) - 4 fonctionnalités clés
6. **Fonctionnalités possibles** (possibleFeatures) - Liste exhaustive (optionnel)
7. **Forfaits éligibles** (eligiblePlans) - Forfaits disponibles (optionnel)

### 5.2 Services avec Descriptions Détaillées

#### E-commerce

**FR - Description détaillée :**
```
Solution e-commerce complète pour lancer et gérer votre boutique en ligne. Du catalogue produits à la gestion des commandes, du traitement des paiements à la relation client, nous vous proposons une solution clé en main adaptée à vos besoins métier.
```

**EN - Description détaillée :**
```
Complete e-commerce solution to launch and manage your online store. From product catalog to order management, payment processing to customer relationship, we provide a turnkey solution adapted to your business needs.
```

**FR - Plus-value :**
```
Augmentez vos ventes avec une boutique en ligne professionnelle, accessible 24/7, avec des solutions de paiement intégrées et une expérience client optimisée.
```

**EN - Plus-value :**
```
Increase your sales with a professional online store, accessible 24/7, with integrated payment solutions and optimized customer experience.
```

**Fonctionnalités possibles :**
- Catalogue produits avec catégories et filtres
- Panier d'achat et processus de commande
- Intégration paiement (cartes, mobile money)
- Gestion et suivi des commandes
- Compte client et historique des commandes
- Gestion des stocks avec alertes
- Système de coupons et promotions
- Avis et notes produits
- Marketplace multi-vendeurs (optionnel)
- Application mobile (optionnel)

#### Gestion de Stock

**FR - Description détaillée :**
```
Système complet de gestion de stock pour suivre vos produits en temps réel, gérer les entrées et sorties, générer des rapports et optimiser vos niveaux de stock. Idéal pour les magasins de détail, entrepôts et centres de distribution.
```

**EN - Description détaillée :**
```
Complete inventory management system to track your products in real time, manage entries and exits, generate reports and optimize your stock levels. Ideal for retail stores, warehouses and distribution centers.
```

**FR - Plus-value :**
```
Réduisez les ruptures de stock et les surstocks, optimisez vos coûts de stockage et gagnez du temps avec une gestion automatisée des stocks.
```

**EN - Plus-value :**
```
Reduce stockouts and overstock, optimize your inventory costs and save time with automated stock management.
```

**Fonctionnalités possibles :**
- Suivi de stock en temps réel
- Gestion des entrées et sorties de produits
- Alertes de stock faible
- Catégorisation et recherche de produits
- Rapports et analyses de stock
- Scan de codes-barres (optionnel)
- Gestion multi-entrepôts (optionnel)
- Gestion des fournisseurs
- Gestion des commandes d'achat
- Valorisation des stocks et intégration comptable

#### Gestion de Restaurant

**FR - Description détaillée :**
```
Solution complète de gestion de restaurant pour optimiser vos opérations de la prise de commande à la livraison. Gérez votre menu, réservations, commandes, affichage cuisine et paiements en un seul endroit.
```

**EN - Description détaillée :**
```
Complete restaurant management solution to optimize your operations from order taking to delivery. Manage your menu, reservations, orders, kitchen display and payments all in one place.
```

**FR - Plus-value :**
```
Améliorez votre rapidité de service, réduisez les erreurs et augmentez la satisfaction client avec un système de gestion de restaurant intégré.
```

**EN - Plus-value :**
```
Improve your service speed, reduce errors and increase customer satisfaction with an integrated restaurant management system.
```

**Fonctionnalités possibles :**
- Gestion des menus avec catégories et prix
- Système de réservation de tables
- Prise de commande (sur place, à emporter, livraison)
- Affichage cuisine
- Suivi des commandes et mises à jour de statut
- Traitement des paiements (espèces, carte, mobile money)
- Programme de fidélité (optionnel)
- Intégration gestion de livraison
- Gestion des stocks d'ingrédients
- Rapports de ventes et analyses

#### Logiciel de Facturation

**FR - Description détaillée :**
```
Logiciel professionnel de facturation pour créer, envoyer et suivre vos factures. Gérez vos clients, suivez les paiements, gérez les taxes et générez des rapports financiers.
```

**EN - Description détaillée :**
```
Professional invoicing and billing software to create, send and track your invoices. Manage your customers, track payments, handle taxes and generate financial reports.
```

**FR - Plus-value :**
```
Gagnez du temps sur les tâches administratives, améliorez votre gestion de trésorerie et maintenez des factures professionnelles conformes aux réglementations locales.
```

**EN - Plus-value :**
```
Save time on administrative tasks, improve your cash flow management and maintain professional invoices compliant with local regulations.
```

**Fonctionnalités possibles :**
- Création et personnalisation de factures
- Numérotation automatique des factures
- Gestion de la base de données clients
- Suivi des paiements et rappels
- Calcul et gestion des taxes
- Méthodes de paiement multiples
- Modèles de factures
- Rapports financiers (ventes, impayés)
- Export PDF et Excel
- Intégration avec logiciels comptables (optionnel)

#### Gestion de Salon & Beauté

**FR - Description détaillée :**
```
Solution complète de gestion pour salons de beauté et spas. Gérez les rendez-vous, services, planning du personnel, historique clients et paiements dans un système intégré.
```

**EN - Description détaillée :**
```
Complete management solution for beauty salons and spas. Manage appointments, services, staff schedules, customer history and payments all in one integrated system.
```

**FR - Plus-value :**
```
Optimisez vos opérations de salon, réduisez les rendez-vous manqués, améliorez la satisfaction client et augmentez vos revenus avec une gestion automatisée des rendez-vous et suivi client.
```

**EN - Plus-value :**
```
Optimize your salon operations, reduce no-shows, improve customer satisfaction and increase revenue with automated appointment management and customer tracking.
```

**Fonctionnalités possibles :**
- Système de réservation en ligne
- Catalogue de services avec tarifs
- Planification et gestion du personnel
- Base de données clients et historique
- Programme de fidélité et récompenses
- Traitement des paiements (espèces, carte, mobile money)
- Rappels par SMS et email
- Gestion des stocks produits
- Rapports de ventes et analyses
- Support multi-emplacements (optionnel)

---

## 6. Forfaits Éligibles par Service

### 6.1 Services avec Tous les Forfaits (Par Défaut)

La plupart des services sont éligibles à tous les forfaits :

**SaaS :** goodDeal, pro, ultra  
**Full Control :** normal, speed, ultraSpeed

**Services concernés :**
- web-dev, showcase, portfolio, ecommerce, web-app, mobile, desktop, api, devops, consulting, inventory, billing, orders, pos, crm, delivery, booking, pharmacy, gym, salon, transport, rental, accounting, payroll, mobile-money, market, parking, school, hospital

### 6.2 Services avec Restrictions

**Restaurant :**
- **SaaS :** pro, ultra (pas goodDeal)
- **Full Control :** speed, ultraSpeed (pas normal)

**Note :** Tous les autres services sont éligibles à tous les forfaits par défaut.

---

## 7. Stack Technique

### 7.1 Technologies Utilisées

Tous les services utilisent les technologies suivantes :

**Frontend :**
- React
- TypeScript
- Vite
- Tailwind CSS

**Backend :**
- Spring Boot (Kotlin/Java)
- RESTful API
- JWT Authentication

**Base de données :**
- MongoDB

**Infrastructure :**
- AWS/Cloud/VPS
- Docker (selon forfait)
- Nginx
- PM2

**Sécurité :**
- HTTPS/SSL
- JWT Tokens
- Input Validation
- XSS/CSRF Protection

### 7.2 Affichage dans la Boîte de Dialogue

Dans la section "Stack technique" de ServiceInfoDialog, les technologies sont affichées comme des badges :

- React
- TypeScript
- Spring Boot
- MongoDB
- AWS/Cloud/VPS
- Docker

---

## 8. Structure des Données

### 8.1 Format JSON pour un Service

```json
{
  "id": "ecommerce",
  "icon": "ShoppingBagIcon",
  "title": {
    "fr": "E-commerce",
    "en": "E-commerce"
  },
  "description": {
    "fr": "Boutiques en ligne qui convertissent",
    "en": "Online stores that convert"
  },
  "detailedDescription": {
    "fr": "Solution e-commerce complète pour lancer et gérer votre boutique en ligne...",
    "en": "Complete e-commerce solution to launch and manage your online store..."
  },
  "valueProposition": {
    "fr": "Augmentez vos ventes avec une boutique en ligne professionnelle...",
    "en": "Increase your sales with a professional online store..."
  },
  "features": {
    "main": [
      "Intégration paiement",
      "Gestion des stocks",
      "Panier d'achat",
      "Tableau de bord admin"
    ],
    "possible": [
      "Catalogue produits avec catégories et filtres",
      "Panier d'achat et processus de commande",
      "Intégration paiement (cartes, mobile money)",
      "Gestion et suivi des commandes",
      "Compte client et historique des commandes",
      "Gestion des stocks avec alertes",
      "Système de coupons et promotions",
      "Avis et notes produits",
      "Marketplace multi-vendeurs (optionnel)",
      "Application mobile (optionnel)"
    ]
  },
  "eligiblePlans": {
    "saas": ["goodDeal", "pro", "ultra"],
    "fullControl": ["normal", "speed", "ultraSpeed"]
  },
  "category": "ecommerce",
  "sector": {
    "fr": "Commerce de détail",
    "en": "Retail"
  },
  "colors": {
    "gradient": "from-green-500 to-green-600",
    "background": "bg-green-100 dark:bg-green-900/30",
    "text": "text-green-600 dark:text-green-400"
  }
}
```

### 8.2 Liste Complète des Services (Format JSON)

Voir le fichier `SERVICES_DATA.json` (à créer) pour la liste complète au format JSON.

### 8.3 Mapping des IDs vers les Clés de Traduction

```javascript
const serviceKeyMap = {
  'web-dev': 'serviceWebDev',
  'showcase': 'serviceShowcase',
  'portfolio': 'servicePortfolio',
  'ecommerce': 'serviceEcom',
  'web-app': 'serviceApp',
  'mobile': 'serviceMobile',
  'desktop': 'serviceDesktop',
  'api': 'serviceAPI',
  'devops': 'serviceDevOps',
  'consulting': 'serviceConsult',
  'inventory': 'serviceInventory',
  'restaurant': 'serviceRestaurant',
  'billing': 'serviceBilling',
  'orders': 'serviceOrders',
  'pos': 'servicePOS',
  'crm': 'serviceCRM',
  'delivery': 'serviceDelivery',
  'booking': 'serviceBooking',
  'pharmacy': 'servicePharmacy',
  'gym': 'serviceGym',
  'salon': 'serviceSalon',
  'transport': 'serviceTransport',
  'rental': 'serviceRental',
  'accounting': 'serviceAccounting',
  'payroll': 'servicePayroll',
  'mobile-money': 'serviceMobileMoney',
  'market': 'serviceMarket',
  'parking': 'serviceParking',
  'school': 'serviceSchool',
  'hospital': 'serviceHospital',
}
```

### 8.4 Catégories et Filtres

**Catégories disponibles :**
- `web` - Services web génériques
- `ecommerce` - Services de vente en ligne
- `apps` - Applications
- `business` - Services métier
- `vertical` - Services spécialisés

**Filtres dans l'interface :**
- Tous (all)
- Web (web)
- E-commerce (ecommerce)
- Apps (apps)
- Business (business)
- Vertical (vertical)

### 8.5 Secteurs d'Activité

**Secteurs disponibles :**
- Générique (generic)
- Personnel (personal)
- Commerce de détail (retail)
- Applications (apps)
- Interne (internal)
- Backend (backend)
- Infrastructure (infrastructure)
- Conseil (consulting)
- Restaurant (restaurant)
- Finance (finance)
- Opérations (operations)
- CRM (crm)
- Logistique (logistics)
- Services (services)
- Santé (health)
- Sport (sport)
- Beauté (beauty)
- Immobilier (realEstate)
- RH (hr)
- Marketplace (marketplace)
- Mobilité (mobility)
- Éducation (education)

---

## 9. Annexes

### 9.1 Icônes Utilisées

Les services utilisent des icônes Heroicons v24 (solid) :

- GlobeAltIcon - Web Development
- DocumentTextIcon - Showcase
- StarIcon - Portfolio
- ShoppingBagIcon - E-commerce
- CodeBracketIcon - Web Apps
- DevicePhoneMobileIcon - Mobile
- ComputerDesktopIcon - Desktop
- ServerIcon - API
- CommandLineIcon - DevOps
- WrenchScrewdriverIcon - Consulting
- CubeIcon - Inventory
- BuildingStorefrontIcon - Restaurant
- CalculatorIcon - Billing
- ClipboardDocumentListIcon - Orders
- CreditCardIcon - POS
- UserGroupIcon - CRM
- TruckIcon - Delivery
- CalendarIcon - Booking
- BeakerIcon - Pharmacy
- HeartIcon - Gym
- ScissorsIcon - Salon
- HomeIcon - Rental
- BanknotesIcon - Accounting
- CurrencyDollarIcon - Payroll
- WalletIcon - Mobile Money
- MapPinIcon - Market
- BuildingOfficeIcon - Parking
- AcademicCapIcon - School
- BuildingLibraryIcon - Hospital

### 9.2 Couleurs par Service

Chaque service a une palette de couleurs unique pour le design :

| Service | Gradient | Background | Text |
|---------|----------|------------|------|
| Web Dev | from-blue-500 to-blue-600 | bg-blue-100 | text-blue-600 |
| Showcase | from-purple-500 to-purple-600 | bg-purple-100 | text-purple-600 |
| Portfolio | from-pink-500 to-pink-600 | bg-pink-100 | text-pink-600 |
| E-commerce | from-green-500 to-green-600 | bg-green-100 | text-green-600 |
| Web App | from-primary-500 to-primary-600 | bg-primary-100 | text-primary-600 |
| Mobile | from-accent-500 to-accent-600 | bg-accent-100 | text-accent-600 |
| Desktop | from-indigo-500 to-indigo-600 | bg-indigo-100 | text-indigo-600 |
| API | from-orange-500 to-orange-600 | bg-orange-100 | text-orange-600 |
| DevOps | from-cyan-500 to-cyan-600 | bg-cyan-100 | text-cyan-600 |
| Consulting | from-yellow-500 to-yellow-600 | bg-yellow-100 | text-yellow-600 |
| Inventory | from-teal-500 to-teal-600 | bg-teal-100 | text-teal-600 |
| Restaurant | from-red-500 to-red-600 | bg-red-100 | text-red-600 |
| Billing | from-emerald-500 to-emerald-600 | bg-emerald-100 | text-emerald-600 |
| Orders | from-violet-500 to-violet-600 | bg-violet-100 | text-violet-600 |
| POS | from-amber-500 to-amber-600 | bg-amber-100 | text-amber-600 |
| CRM | from-rose-500 to-rose-600 | bg-rose-100 | text-rose-600 |
| Delivery | from-sky-500 to-sky-600 | bg-sky-100 | text-sky-600 |
| Booking | from-lime-500 to-lime-600 | bg-lime-100 | text-lime-600 |
| Pharmacy | from-blue-600 to-blue-700 | bg-blue-100 | text-blue-600 |
| Gym | from-red-600 to-red-700 | bg-red-100 | text-red-600 |
| Salon | from-pink-600 to-pink-700 | bg-pink-100 | text-pink-600 |
| Transport | from-slate-600 to-slate-700 | bg-slate-100 | text-slate-600 |
| Rental | from-amber-600 to-amber-700 | bg-amber-100 | text-amber-600 |
| Accounting | from-green-600 to-green-700 | bg-green-100 | text-green-600 |
| Payroll | from-emerald-600 to-emerald-700 | bg-emerald-100 | text-emerald-600 |
| Mobile Money | from-orange-600 to-orange-700 | bg-orange-100 | text-orange-600 |
| Market | from-violet-600 to-violet-700 | bg-violet-100 | text-violet-600 |
| Parking | from-gray-600 to-gray-700 | bg-gray-100 | text-gray-600 |
| School | from-indigo-600 to-indigo-700 | bg-indigo-100 | text-indigo-600 |
| Hospital | from-red-700 to-red-800 | bg-red-100 | text-red-600 |

### 9.3 Textes de l'Interface

**Filtres :**
- FR : "Tous", "Web", "E-commerce", "Apps", "Business", "Vertical"
- EN : "All", "Web", "E-commerce", "Apps", "Business", "Vertical"

**Barre de recherche :**
- FR : "Rechercher un service..."
- EN : "Search for a service..."

**Résultats de recherche :**
- FR : "service trouvé" / "services trouvés"
- EN : "service found" / "services found"

**Actions :**
- FR : "En savoir plus", "Contacter"
- EN : "Learn more", "Contact"

**Titre section :**
- FR : "Tous nos Services"
- EN : "All our Services"

**Sous-titre section :**
- FR : "Découvrez notre gamme complète de services de développement"
- EN : "Discover our complete range of development services"

### 9.4 Contacts

**WhatsApp :**
- Numéro : +237 655 938 501
- URL : `https://wa.me/237655938501`

**Email :**
- Adresse : bendjiril789@gmail.com
- URL : `mailto:bendjiril789@gmail.com`

**Format message WhatsApp :**
```
Bonjour,

Je souhaite demander un devis pour le service : *[Nom du service]*

*Informations sur le forfait :*
- Type : [SaaS/Full Control]
- Forfait : [Nom du forfait]

*Mes informations :*
- Nom : [Nom]
- Email : [Email]
- Téléphone : [Téléphone]
- Entreprise : [Entreprise] (si fourni)
- Message : [Message] (si fourni)

Merci de me recontacter pour discuter de ce projet.
```

**Format message Email :**
```
Bonjour,

Je souhaite demander un devis pour le service : [Nom du service]

Informations sur le forfait :
- Type : [SaaS/Full Control]
- Forfait : [Nom du forfait]

Mes informations :
- Nom : [Nom]
- Email : [Email]
- Téléphone : [Téléphone]
- Entreprise : [Entreprise] (si fourni)
- Message : [Message] (si fourni)

Merci de me recontacter pour discuter de ce projet.

Cordialement,
[Nom]
```

---

## 10. Structure JSON Complète

### 10.1 Exemple de Service Complet (E-commerce)

```json
{
  "id": "ecommerce",
  "icon": "ShoppingBagIcon",
  "category": "ecommerce",
  "sector": {
    "fr": "Commerce de détail",
    "en": "Retail"
  },
  "colors": {
    "gradient": "from-green-500 to-green-600",
    "background": "bg-green-100 dark:bg-green-900/30",
    "text": "text-green-600 dark:text-green-400"
  },
  "translations": {
    "fr": {
      "title": "E-commerce",
      "description": "Boutiques en ligne qui convertissent",
      "detailedDescription": "Solution e-commerce complète pour lancer et gérer votre boutique en ligne. Du catalogue produits à la gestion des commandes, du traitement des paiements à la relation client, nous vous proposons une solution clé en main adaptée à vos besoins métier.",
      "valueProposition": "Augmentez vos ventes avec une boutique en ligne professionnelle, accessible 24/7, avec des solutions de paiement intégrées et une expérience client optimisée.",
      "features": {
        "main": [
          "Intégration paiement",
          "Gestion des stocks",
          "Panier d'achat",
          "Tableau de bord admin"
        ],
        "possible": [
          "Catalogue produits avec catégories et filtres",
          "Panier d'achat et processus de commande",
          "Intégration paiement (cartes, mobile money)",
          "Gestion et suivi des commandes",
          "Compte client et historique des commandes",
          "Gestion des stocks avec alertes",
          "Système de coupons et promotions",
          "Avis et notes produits",
          "Marketplace multi-vendeurs (optionnel)",
          "Application mobile (optionnel)"
        ]
      }
    },
    "en": {
      "title": "E-commerce",
      "description": "Online stores that convert",
      "detailedDescription": "Complete e-commerce solution to launch and manage your online store. From product catalog to order management, payment processing to customer relationship, we provide a turnkey solution adapted to your business needs.",
      "valueProposition": "Increase your sales with a professional online store, accessible 24/7, with integrated payment solutions and optimized customer experience.",
      "features": {
        "main": [
          "Payment integration",
          "Inventory management",
          "Shopping cart",
          "Admin dashboard"
        ],
        "possible": [
          "Product catalog with categories and filters",
          "Shopping cart and checkout process",
          "Payment integration (cards, mobile money)",
          "Order management and tracking",
          "Customer account and order history",
          "Inventory management with alerts",
          "Coupon and promotion system",
          "Product reviews and ratings",
          "Multi-vendor marketplace (optional)",
          "Mobile application (optional)"
        ]
      }
    }
  },
  "eligiblePlans": {
    "saas": ["goodDeal", "pro", "ultra"],
    "fullControl": ["normal", "speed", "ultraSpeed"]
  }
}
```

---

## Conclusion

Ce document fournit toutes les informations nécessaires pour recréer la page Services dans un autre programme. Il contient :

- ✅ **30 services** documentés avec leurs descriptions complètes
- ✅ **Boîtes de dialogue** avec leur structure et contenu
- ✅ **Descriptions textuelles** détaillées pour les services principaux
- ✅ **Forfaits éligibles** pour chaque service
- ✅ **Stack technique** utilisée
- ✅ **Structure des données** au format JSON
- ✅ **Mapping des IDs** vers les clés de traduction
- ✅ **Couleurs et design** pour chaque service

Pour toute question supplémentaire ou pour obtenir des informations plus détaillées sur un service spécifique, n'hésitez pas à nous contacter.

---

**Document généré le :** 2024  
**Dernière mise à jour :** 2024  
**Version :** 1.0
