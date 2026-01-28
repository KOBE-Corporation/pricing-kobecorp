// Exemples d'applications métier extraits de SERVICES_DATA.json
// Services avec detailedDescription, valueProposition, possibleFeatures

export interface ApplicationExampleTranslation {
  title: string;
  description: string;
  detailedDescription: string;
  valueProposition: string;
  features: string[];
  possibleFeatures: string[];
}

export interface ApplicationExample {
  id: string;
  icon: string;
  sector: { fr: string; en: string };
  colors: { gradient: string; background: string; text: string };
  translations: {
    fr: ApplicationExampleTranslation;
    en: ApplicationExampleTranslation;
  };
}

export const applicationsExamples: ApplicationExample[] = [
  {
    id: 'ecommerce',
    icon: 'ShoppingBagIcon',
    sector: { fr: 'Retail & Commerce', en: 'Retail' },
    colors: {
      gradient: 'from-green-500 to-green-600',
      background: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
    },
    translations: {
      fr: {
        title: 'E-commerce',
        description: 'Boutiques en ligne qui convertissent',
        detailedDescription:
          'Solution e-commerce complète pour lancer et gérer votre boutique en ligne. Du catalogue produits à la gestion des commandes, du traitement des paiements à la relation client, nous vous proposons une solution clé en main adaptée à vos besoins métier.',
        valueProposition:
          'Augmentez vos ventes avec une boutique en ligne professionnelle, accessible 24/7, avec des solutions de paiement intégrées et une expérience client optimisée.',
        features: [
          'Intégration paiement',
          'Gestion des stocks',
          'Panier d\'achat',
          'Tableau de bord admin',
        ],
        possibleFeatures: [
          'Catalogue produits avec catégories et filtres',
          'Panier d\'achat et processus de commande',
          'Intégration paiement (cartes, mobile money)',
          'Gestion et suivi des commandes',
          'Compte client et historique des commandes',
          'Gestion des stocks avec alertes',
          'Système de coupons et promotions',
          'Avis et notes produits',
          'Marketplace multi-vendeurs (optionnel)',
          'Application mobile (optionnel)',
        ],
      },
      en: {
        title: 'E-commerce',
        description: 'Online stores that convert',
        detailedDescription:
          'Complete e-commerce solution to launch and manage your online store. From product catalog to order management, payment processing to customer relationship, we provide a turnkey solution adapted to your business needs.',
        valueProposition:
          'Increase your sales with a professional online store, accessible 24/7, with integrated payment solutions and optimized customer experience.',
        features: [
          'Payment integration',
          'Inventory management',
          'Shopping cart',
          'Admin dashboard',
        ],
        possibleFeatures: [
          'Product catalog with categories and filters',
          'Shopping cart and checkout process',
          'Payment integration (cards, mobile money)',
          'Order management and tracking',
          'Customer account and order history',
          'Inventory management with alerts',
          'Coupon and promotion system',
          'Product reviews and ratings',
          'Multi-vendor marketplace (optional)',
          'Mobile application (optional)',
        ],
      },
    },
  },
  {
    id: 'inventory',
    icon: 'CubeIcon',
    sector: { fr: 'Retail & Commerce', en: 'Retail' },
    colors: {
      gradient: 'from-teal-500 to-teal-600',
      background: 'bg-teal-100 dark:bg-teal-900/30',
      text: 'text-teal-600 dark:text-teal-400',
    },
    translations: {
      fr: {
        title: 'Gestion de Stock',
        description: 'Système complet de gestion de stock pour votre entreprise',
        detailedDescription:
          'Système complet de gestion de stock pour suivre vos produits en temps réel, gérer les entrées et sorties, générer des rapports et optimiser vos niveaux de stock. Idéal pour les magasins de détail, entrepôts et centres de distribution.',
        valueProposition:
          'Réduisez les ruptures de stock et les surstocks, optimisez vos coûts de stockage et gagnez du temps avec une gestion automatisée des stocks.',
        features: [
          'Suivi de stock en temps réel',
          'Alertes de stock faible',
          'Catégorisation des produits',
          'Rapports et analyses de stock',
        ],
        possibleFeatures: [
          'Suivi de stock en temps réel',
          'Gestion des entrées et sorties de produits',
          'Alertes de stock faible',
          'Catégorisation et recherche de produits',
          'Rapports et analyses de stock',
          'Scan de codes-barres (optionnel)',
          'Gestion multi-entrepôts (optionnel)',
          'Gestion des fournisseurs',
          'Gestion des commandes d\'achat',
          'Valorisation des stocks et intégration comptable',
        ],
      },
      en: {
        title: 'Inventory Management',
        description: 'Complete stock management system for your business',
        detailedDescription:
          'Complete inventory management system to track your products in real time, manage entries and exits, generate reports and optimize your stock levels. Ideal for retail stores, warehouses and distribution centers.',
        valueProposition:
          'Reduce stockouts and overstock, optimize your inventory costs and save time with automated stock management.',
        features: [
          'Real-time stock tracking',
          'Low stock alerts',
          'Product categorization',
          'Stock reports & analytics',
        ],
        possibleFeatures: [
          'Real-time stock tracking',
          'Product entry and exit management',
          'Low stock alerts',
          'Product categorization and search',
          'Stock reports and analytics',
          'Barcode scanning (optional)',
          'Multi-warehouse management (optional)',
          'Supplier management',
          'Purchase order management',
          'Stock valuation and accounting integration',
        ],
      },
    },
  },
  {
    id: 'restaurant',
    icon: 'BuildingStorefrontIcon',
    sector: { fr: 'Restaurant', en: 'Restaurant' },
    colors: {
      gradient: 'from-red-500 to-red-600',
      background: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-600 dark:text-red-400',
    },
    translations: {
      fr: {
        title: 'Gestion de Restaurant',
        description: 'Solution complète pour restaurants et établissements de restauration',
        detailedDescription:
          'Solution complète de gestion de restaurant pour optimiser vos opérations de la prise de commande à la livraison. Gérez votre menu, réservations, commandes, affichage cuisine et paiements en un seul endroit.',
        valueProposition:
          'Améliorez votre rapidité de service, réduisez les erreurs et augmentez la satisfaction client avec un système de gestion de restaurant intégré.',
        features: [
          'Gestion des menus',
          'Système de réservation de tables',
          'Suivi des commandes',
          'Affichage cuisine',
        ],
        possibleFeatures: [
          'Gestion des menus avec catégories et prix',
          'Système de réservation de tables',
          'Prise de commande (sur place, à emporter, livraison)',
          'Affichage cuisine',
          'Suivi des commandes et mises à jour de statut',
          'Traitement des paiements (espèces, carte, mobile money)',
          'Programme de fidélité (optionnel)',
          'Intégration gestion de livraison',
          'Gestion des stocks d\'ingrédients',
          'Rapports de ventes et analyses',
        ],
      },
      en: {
        title: 'Restaurant Management',
        description: 'Complete solution for restaurant and food service businesses',
        detailedDescription:
          'Complete restaurant management solution to optimize your operations from order taking to delivery. Manage your menu, reservations, orders, kitchen display and payments all in one place.',
        valueProposition:
          'Improve your service speed, reduce errors and increase customer satisfaction with an integrated restaurant management system.',
        features: [
          'Menu management',
          'Table reservation system',
          'Order tracking',
          'Kitchen display system',
        ],
        possibleFeatures: [
          'Menu management with categories and prices',
          'Table reservation system',
          'Order taking (dine-in, takeaway, delivery)',
          'Kitchen display system',
          'Order tracking and status updates',
          'Payment processing (cash, card, mobile money)',
          'Customer loyalty program (optional)',
          'Delivery management integration',
          'Inventory management for ingredients',
          'Sales reports and analytics',
        ],
      },
    },
  },
  {
    id: 'billing',
    icon: 'CalculatorIcon',
    sector: { fr: 'Finance & Comptabilité', en: 'Finance' },
    colors: {
      gradient: 'from-emerald-500 to-emerald-600',
      background: 'bg-emerald-100 dark:bg-emerald-900/30',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
    translations: {
      fr: {
        title: 'Logiciel de Facturation',
        description: 'Système professionnel de facturation et de factures',
        detailedDescription:
          'Logiciel professionnel de facturation pour créer, envoyer et suivre vos factures. Gérez vos clients, suivez les paiements, gérez les taxes et générez des rapports financiers.',
        valueProposition:
          'Gagnez du temps sur les tâches administratives, améliorez votre gestion de trésorerie et maintenez des factures professionnelles conformes aux réglementations locales.',
        features: [
          'Génération de factures',
          'Suivi des paiements',
          'Gestion des taxes',
          'Rapports financiers',
        ],
        possibleFeatures: [
          'Création et personnalisation de factures',
          'Numérotation automatique des factures',
          'Gestion de la base de données clients',
          'Suivi des paiements et rappels',
          'Calcul et gestion des taxes',
          'Méthodes de paiement multiples',
          'Modèles de factures',
          'Rapports financiers (ventes, impayés)',
          'Export PDF et Excel',
          'Intégration avec logiciels comptables (optionnel)',
        ],
      },
      en: {
        title: 'Billing Software',
        description: 'Professional invoicing and billing system',
        detailedDescription:
          'Professional invoicing and billing software to create, send and track your invoices. Manage your customers, track payments, handle taxes and generate financial reports.',
        valueProposition:
          'Save time on administrative tasks, improve your cash flow management and maintain professional invoices compliant with local regulations.',
        features: [
          'Invoice generation',
          'Payment tracking',
          'Tax management',
          'Financial reports',
        ],
        possibleFeatures: [
          'Invoice creation and customization',
          'Automatic invoice numbering',
          'Customer database management',
          'Payment tracking and reminders',
          'Tax calculation and management',
          'Multiple payment methods',
          'Invoice templates',
          'Financial reports (sales, unpaid)',
          'PDF and Excel export',
          'Accounting software integration (optional)',
        ],
      },
    },
  },
  {
    id: 'salon',
    icon: 'ScissorsIcon',
    sector: { fr: 'Beauté & Bien-être', en: 'Beauty' },
    colors: {
      gradient: 'from-pink-600 to-pink-700',
      background: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-600 dark:text-pink-400',
    },
    translations: {
      fr: {
        title: 'Gestion de Salon & Beauté',
        description: 'Système de gestion de salon de beauté et spa',
        detailedDescription:
          'Solution complète de gestion pour salons de beauté et spas. Gérez les rendez-vous, services, planning du personnel, historique clients et paiements dans un système intégré.',
        valueProposition:
          'Optimisez vos opérations de salon, réduisez les rendez-vous manqués, améliorez la satisfaction client et augmentez vos revenus avec une gestion automatisée des rendez-vous et suivi client.',
        features: [
          'Planification des rendez-vous',
          'Catalogue de services',
          'Gestion du personnel',
          'Historique clients',
        ],
        possibleFeatures: [
          'Système de réservation en ligne',
          'Catalogue de services avec tarifs',
          'Planification et gestion du personnel',
          'Base de données clients et historique',
          'Programme de fidélité et récompenses',
          'Traitement des paiements (espèces, carte, mobile money)',
          'Rappels par SMS et email',
          'Gestion des stocks produits',
          'Rapports de ventes et analyses',
          'Support multi-emplacements (optionnel)',
        ],
      },
      en: {
        title: 'Salon & Beauty Management',
        description: 'Beauty salon and spa management system',
        detailedDescription:
          'Complete management solution for beauty salons and spas. Manage appointments, services, staff schedules, customer history and payments all in one integrated system.',
        valueProposition:
          'Optimize your salon operations, reduce no-shows, improve customer satisfaction and increase revenue with automated appointment management and customer tracking.',
        features: [
          'Appointment scheduling',
          'Service catalog',
          'Staff management',
          'Customer history',
        ],
        possibleFeatures: [
          'Online appointment booking system',
          'Service catalog with pricing',
          'Staff scheduling and management',
          'Customer database and history',
          'Loyalty program and rewards',
          'Payment processing (cash, card, mobile money)',
          'SMS and email reminders',
          'Inventory management for products',
          'Sales reports and analytics',
          'Multi-location support (optional)',
        ],
      },
    },
  },
];
