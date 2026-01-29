import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  /** Retourne la traduction pour une langue donnée (pour centraliser textes FR/EN). */
  tLang: (path: string, lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer depuis localStorage ou détecter depuis le navigateur
    const stored = localStorage.getItem('kobe-language') as Language;
    if (stored && (stored === 'fr' || stored === 'en')) {
      return stored;
    }
    // Détection automatique
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kobe-language', lang);
  };

  // Import des traductions
  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        saas: 'SaaS',
        fullControl: 'Full-Control',
        hosting: 'Hébergement',
        applications: 'Applications',
        pricing: 'Forfaits',
        about: 'À propos',
        contact: 'Contact',
        viewOffers: 'Voir les offres',
      },
      footer: {
        quickLinks: 'Liens rapides',
        followUs: 'Suivez-nous',
        available247: 'Disponible 24/7',
        copyright: '© 2025 KOBE Corporation. Tous droits réservés.',
        legal: {
          privacy: 'Mentions légales',
          terms: 'Politique de confidentialité',
        },
      },
      pricing: {
        title: 'Choisissez votre forfait',
        subtitle: 'Découvrez nos offres adaptées à vos besoins. Tous nos forfaits incluent un support client dédié.',
        cta: 'Commencer',
        choosePlan: 'Choisir ce forfait',
        contactUs: 'Nous contacter',
        popular: 'Populaire',
        customQuote: 'Devis sur mesure',
        contactForQuote: 'Contactez-nous pour un devis',
      },
      contact: {
        title: 'Des questions sur nos forfaits ?',
        subtitle: 'Contactez notre équipe pour obtenir plus d\'informations',
        cta: 'Nous contacter',
      },
      hero: {
        badge: 'Nos Offres',
        title: 'Trouvez le Forfait Parfait pour Votre Projet',
        subtitle: 'Des solutions sur mesure pour tous vos besoins technologiques',
        cta1: 'Voir les forfaits',
        cta2: 'Nous contacter',
      },
      saas: {
        meta: {
          title: 'Services SaaS – Kobe Corporation',
          description: 'Solution SaaS rapide et autonome : applications disponibles en 15 jours max. Hébergement, maintenance et support inclus. Forfaits Good Deal, Pro et Ultra.',
        },
        hero: {
          title: 'Services SaaS',
          subtitle: 'Solution rapide et autonome : applications disponibles et configurées en 15 jours maximum. Développez et déployez des applications SaaS performantes et scalables pour transformer votre entreprise.',
          highlightLine: '✓ Mise en production rapide — ✓ Hébergement et maintenance inclus — ✓ Sans équipe technique',
          primaryCta: 'Voir les forfaits',
          secondaryCta: 'Nous contacter',
        },
        sectionFeatures: {
          title: 'Nos Services SaaS',
          subtitle: 'Des solutions complètes pour créer, déployer et maintenir vos applications SaaS.',
          features: [
            { title: 'Développement SaaS sur mesure', description: 'Créez des applications SaaS scalables et performantes adaptées à vos besoins spécifiques.' },
            { title: 'Infrastructure Cloud', description: 'Déploiement et gestion de votre infrastructure cloud pour une disponibilité maximale.' },
            { title: 'Analytics & Reporting', description: "Intégration d'outils d'analyse avancés pour suivre les performances de votre SaaS." },
            { title: 'Sécurité & Conformité', description: 'Mise en place de mesures de sécurité robustes et conformité aux standards internationaux.' },
          ],
        },
        pricing: {
          badge: 'Nos Forfaits SaaS',
          heading: 'Choisissez le forfait adapté à vos besoins',
          description: "Tous nos forfaits incluent l'hébergement sécurisé, la maintenance, les mises à jour de sécurité, l'accès 24/7, le certificat SSL et les sauvegardes automatisées.",
          badge15days: 'Applications disponibles et configurées : 15 jours maximum',
          badgeFast: 'Solution rapide et autonome',
          monthly: 'Mensuel',
          annual: 'Annuel',
          discountBadge: '-16%',
          savingsNote: "Économisez 30 000 F à 60 000 F selon le forfait (jusqu'à 60 000 F sur Ultra)",
          pricesHT: 'Tous les prix sont hors taxes (HT)',
          economyNote: "💰 Économisez 16% avec le paiement annuel (30 000 F à 60 000 F d'économies selon le forfait)",
        },
        included: {
          title: 'Inclus dans tous les forfaits',
          subtitle: 'Ces fonctionnalités sont communes à tous nos forfaits SaaS',
          items: [
            { title: 'Hébergement sécurisé', desc: 'Application hébergée sur des serveurs sécurisés' },
            { title: 'Maintenance & mises à jour', desc: 'Maintenance régulière et mises à jour de sécurité' },
            { title: "Accès 24/7", desc: "Disponibilité continue de l'application" },
            { title: 'Certificat SSL (HTTPS)', desc: 'Connexion sécurisée et chiffrée' },
            { title: 'Sauvegardes automatisées', desc: 'Sauvegardes régulières des données' },
            { title: 'Support technique', desc: 'Assistance technique selon le niveau du forfait' },
          ],
        },
        cta: {
          title: 'Prêt à lancer votre SaaS ?',
          subtitle: 'Contactez-nous pour discuter de votre projet SaaS.',
        },
      },
      fullControl: {
        meta: {
          title: 'Full-Control – Kobe Corporation',
          description: 'Solutions Full-Control : 100% propriété du code, infrastructure dédiée. Délais 65, 110 ou 180 jours. Devis personnalisé sous 48h.',
        },
        hero: {
          title: 'Full-Control',
          subtitle: 'Prenez le contrôle total de votre infrastructure avec nos solutions Full-Control. Liberté, sécurité et performance maximales.',
          highlightLineEn: 'Your Infrastructure, Your Rules.',
          primaryCta: 'Voir les forfaits',
          secondaryCta: 'Nous contacter',
        },
        sectionFeatures: {
          title: 'Avantages Full-Control',
          subtitle: "Profitez d'un contrôle total sur votre infrastructure et vos données.",
          features: [
            { title: 'Contrôle Total', description: 'Accédez à tous les paramètres et configurations de votre infrastructure sans limitations.' },
            { title: 'Sécurité Avancée', description: 'Gérez votre propre sécurité avec des outils de monitoring et de protection avancés.' },
            { title: 'Accès Root/Admin', description: 'Accès complet au système pour personnaliser et optimiser selon vos besoins.' },
            { title: 'Infrastructure Dédiée', description: 'Serveurs et ressources dédiés exclusivement à votre entreprise pour des performances optimales.' },
          ],
        },
        pricing: {
          badge: 'Nos Forfaits Full-Control',
          heading: 'Choisissez le forfait adapté à votre projet',
          description: 'Avec Full-Control, vous possédez 100% du code source et de la propriété intellectuelle. Autonomie totale garantie.',
          badgeCodeOwnership: '100% propriété du code source',
          badgeDevis48h: 'Devis personnalisé sous 48h',
          deliveryLevels: '3 niveaux de délais : 65 / 110 / 180 jours',
          paymentNote: 'Paiement : 50% à la signature, 50% à la livraison',
          plansIncludeNote: '💡 Tous les forfaits incluent : Code source complet, API REST, Front-end, Documentation, VPS (année 1), SSL, Domaine, Formation et Support post-livraison',
        },
        included: {
          title: 'Inclus dans tous les forfaits Full-Control',
          subtitle: "Ces éléments sont communs à tous nos forfaits Full-Control",
          items: [
            { title: 'Code source complet', desc: '100% propriété du client, transfert complet à la livraison' },
            { title: 'API REST (Backend)', desc: 'Architecture backend complète et documentée' },
            { title: 'Front-end complet', desc: 'Interface utilisateur complète et responsive' },
            { title: 'Documentation', desc: 'Documentation technique et utilisateur (40-200 pages selon forfait)' },
            { title: 'VPS (Année 1)', desc: 'Serveur Virtuel Privé personnalisable selon vos besoins' },
            { title: 'Certificat SSL', desc: 'Sécurité HTTPS incluse' },
            { title: 'Nom de domaine', desc: 'Domaine personnalisé inclus (1 an ou à vie selon forfait)' },
            { title: 'Formation', desc: 'Sessions de formation incluses (2-4 sessions selon forfait)' },
            { title: 'Support post-livraison', desc: 'Support technique inclus (1-6 mois selon forfait)' },
          ],
        },
        stack: {
          title: 'Stack Technique & Infrastructure',
          subtitle: 'Technologies modernes, robustes et scalables pour tous vos projets',
          items: [
            { title: 'Backend', tech: 'Spring Boot (Kotlin/Java)' },
            { title: 'Frontend', tech: 'React + Vite + TypeScript' },
            { title: 'Base de données', tech: 'MongoDB' },
            { title: 'Cache', tech: 'Redis (Speed & Normal)' },
            { title: 'Sécurité', tech: 'JWT, HTTPS, OWASP Top 10' },
            { title: 'Conteneurs', tech: 'Docker (Normal)' },
            { title: 'CI/CD', tech: 'Pipelines automatisés (Normal)' },
            { title: 'Infrastructure', tech: 'VPS Ubuntu + Nginx' },
          ],
        },
        cta: {
          title: 'Prêt à prendre le contrôle total ?',
          subtitle: 'Contactez-nous pour discuter de votre projet Full-Control et obtenir un devis personnalisé.',
        },
      },
      applications: {
        meta: {
          title: 'Applications – Kobe Corporation',
          description: 'Développement d\'applications sur mesure : mobile, web, desktop, API. E-commerce, gestion restaurant, facturation, CRM et solutions métier. Demandez un devis.',
        },
        hero: {
          title: 'Applications',
          subtitle: 'Développement d\'applications sur mesure pour tous types de plateformes : mobile, web, desktop et backend.',
          primaryCta: 'Démarrer un projet',
          secondaryCta: 'Voir SaaS',
        },
        sectionTypes: {
          titleFr: "Types d'Applications",
          titleEn: 'Application Types',
          subtitleFr: "Nous développons tous types d'applications selon vos besoins.",
          subtitleEn: 'We develop all types of applications according to your needs.',
        },
        servicesSection: {
          title: 'Tous nos services',
          subtitle: 'Des solutions complètes pour tous vos besoins digitaux',
          filterLabel: 'Filtrer par catégorie',
          serviceCountOne: 'service',
          serviceCountPlural: 'services',
        },
        cta: {
          title: 'Prêt à développer votre application ?',
          subtitle: "Contactez-nous pour discuter de votre projet d'application.",
        },
        eligiblePlansLabel: 'Forfaits éligibles',
      },
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        saas: 'SaaS',
        fullControl: 'Full-Control',
        hosting: 'Hosting',
        applications: 'Applications',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        viewOffers: 'View Offers',
      },
      footer: {
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        available247: 'Available 24/7',
        copyright: '© 2025 KOBE Corporation. All rights reserved.',
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
        },
      },
      pricing: {
        title: 'Choose Your Plan',
        subtitle: 'Discover our offers tailored to your needs. All our plans include dedicated customer support.',
        cta: 'Get Started',
        choosePlan: 'Choose This Plan',
        contactUs: 'Contact Us',
        popular: 'Popular',
        customQuote: 'Custom Quote',
        contactForQuote: 'Contact us for a quote',
      },
      contact: {
        title: 'Questions About Our Plans?',
        subtitle: 'Contact our team to get more information',
        cta: 'Contact Us',
      },
      hero: {
        badge: 'Our Offers',
        title: 'Find the Perfect Plan for Your Project',
        subtitle: 'Custom solutions for all your technology needs',
        cta1: 'View Plans',
        cta2: 'Contact Us',
      },
      saas: {
        meta: {
          title: 'SaaS Services – Kobe Corporation',
          description: 'Fast, autonomous SaaS: applications available within 15 days. Hosting, maintenance and support included. Good Deal, Pro and Ultra plans.',
        },
        hero: {
          title: 'SaaS Services',
          subtitle: 'Fast, autonomous solution: applications available and configured within 15 days max. Develop and deploy performant, scalable SaaS applications to transform your business.',
          highlightLine: '✓ Quick launch — ✓ Hosting & maintenance included — ✓ No technical team required',
          primaryCta: 'View Plans',
          secondaryCta: 'Contact Us',
        },
        sectionFeatures: {
          title: 'Our SaaS Services',
          subtitle: 'Complete solutions to create, deploy and maintain your SaaS applications.',
          features: [
            { title: 'Custom SaaS Development', description: 'Build scalable and performant SaaS applications tailored to your specific needs.' },
            { title: 'Cloud Infrastructure', description: 'Deploy and manage your cloud infrastructure for maximum availability.' },
            { title: 'Analytics & Reporting', description: 'Integration of advanced analytics tools to track your SaaS performance.' },
            { title: 'Security & Compliance', description: 'Implementation of robust security measures and compliance with international standards.' },
          ],
        },
        pricing: {
          badge: 'Our SaaS Plans',
          heading: 'Choose the plan that fits your needs',
          description: 'All our plans include secure hosting, maintenance, security updates, 24/7 access, SSL certificate and automated backups.',
          badge15days: 'Applications available and configured: 15 days maximum',
          badgeFast: 'Fast & autonomous solution',
          monthly: 'Monthly',
          annual: 'Annual',
          discountBadge: '-16%',
          savingsNote: 'Save 30,000 to 60,000 FCFA depending on plan (up to 60,000 F on Ultra)',
          pricesHT: 'All prices are excluding taxes (HT)',
          economyNote: '💰 Save 16% with annual payment (30,000 to 60,000 FCFA savings depending on plan)',
        },
        included: {
          title: 'Included in all plans',
          subtitle: 'These features are common to all our SaaS plans',
          items: [
            { title: 'Secure hosting', desc: 'Application hosted on secure servers' },
            { title: 'Maintenance & updates', desc: 'Regular maintenance and security updates' },
            { title: '24/7 access', desc: 'Continuous application availability' },
            { title: 'SSL Certificate (HTTPS)', desc: 'Secure and encrypted connection' },
            { title: 'Automated backups', desc: 'Regular data backups' },
            { title: 'Technical support', desc: 'Technical assistance according to plan level' },
          ],
        },
        cta: {
          title: 'Ready to launch your SaaS?',
          subtitle: 'Contact us to discuss your SaaS project.',
        },
      },
      fullControl: {
        meta: {
          title: 'Full Control – Kobe Corporation',
          description: 'Full Control solutions: 100% code ownership, dedicated infrastructure. Delivery in 65, 110 or 180 days. Personalized quote within 48h.',
        },
        hero: {
          title: 'Full Control',
          subtitle: 'Take full control of your infrastructure with our Full Control solutions. Maximum freedom, security and performance.',
          highlightLineEn: 'Your Infrastructure, Your Rules.',
          primaryCta: 'View Plans',
          secondaryCta: 'Contact Us',
        },
        sectionFeatures: {
          title: 'Full-Control Benefits',
          subtitle: 'Enjoy total control over your infrastructure and data.',
          features: [
            { title: 'Full Control', description: 'Access all settings and configurations of your infrastructure without limitations.' },
            { title: 'Advanced Security', description: 'Manage your own security with advanced monitoring and protection tools.' },
            { title: 'Root/Admin Access', description: 'Full system access to customize and optimize according to your needs.' },
            { title: 'Dedicated Infrastructure', description: 'Servers and resources dedicated exclusively to your business for optimal performance.' },
          ],
        },
        pricing: {
          badge: 'Our Full Control Plans',
          heading: 'Choose the plan that fits your project',
          description: 'With Full Control, you own 100% of the source code and intellectual property. Total autonomy guaranteed.',
          badgeCodeOwnership: '100% source code ownership',
          badgeDevis48h: 'Personalized quote within 48h',
          deliveryLevels: '3 delivery levels: 65 / 110 / 180 days',
          paymentNote: 'Payment: 50% at signing, 50% at delivery',
          plansIncludeNote: '💡 All plans include: Complete source code, REST API, Front-end, Documentation, VPS (year 1), SSL, Domain, Training and Post-delivery support',
        },
        included: {
          title: 'Included in all Full-Control plans',
          subtitle: 'These elements are common to all our Full-Control plans',
          items: [
            { title: 'Complete source code', desc: '100% client ownership, complete transfer at delivery' },
            { title: 'REST API (Backend)', desc: 'Complete and documented backend architecture' },
            { title: 'Complete Front-end', desc: 'Complete and responsive user interface' },
            { title: 'Documentation', desc: 'Technical and user documentation (40-200 pages depending on plan)' },
            { title: 'VPS (Year 1)', desc: 'Customizable Virtual Private Server according to your needs' },
            { title: 'SSL Certificate', desc: 'HTTPS security included' },
            { title: 'Domain name', desc: 'Custom domain included (1 year or lifetime depending on plan)' },
            { title: 'Training', desc: 'Training sessions included (2-4 sessions depending on plan)' },
            { title: 'Post-delivery support', desc: 'Technical support included (1-6 months depending on plan)' },
          ],
        },
        stack: {
          title: 'Technical Stack & Infrastructure',
          subtitle: 'Modern, robust and scalable technologies for all your projects',
          items: [
            { title: 'Backend', tech: 'Spring Boot (Kotlin/Java)' },
            { title: 'Frontend', tech: 'React + Vite + TypeScript' },
            { title: 'Database', tech: 'MongoDB' },
            { title: 'Cache', tech: 'Redis (Speed & Normal)' },
            { title: 'Security', tech: 'JWT, HTTPS, OWASP Top 10' },
            { title: 'Containers', tech: 'Docker (Normal)' },
            { title: 'CI/CD', tech: 'Automated pipelines (Normal)' },
            { title: 'Infrastructure', tech: 'VPS Ubuntu + Nginx' },
          ],
        },
        cta: {
          title: 'Ready to take full control?',
          subtitle: 'Contact us to discuss your Full-Control project and get a personalized quote.',
        },
      },
      applications: {
        meta: {
          title: 'Applications – Kobe Corporation',
          description: 'Custom application development: mobile, web, desktop, API. E-commerce, restaurant management, billing, CRM and business solutions. Request a quote.',
        },
        hero: {
          title: 'Applications',
          subtitle: 'Custom application development for all types of platforms: mobile, web, desktop and backend.',
          primaryCta: 'Start a Project',
          secondaryCta: 'View SaaS',
        },
        sectionTypes: {
          titleFr: "Types d'Applications",
          titleEn: 'Application Types',
          subtitleFr: "Nous développons tous types d'applications selon vos besoins.",
          subtitleEn: 'We develop all types of applications according to your needs.',
        },
        servicesSection: {
          title: 'All our services',
          subtitle: 'Complete solutions for all your digital needs',
          filterLabel: 'Filter by category',
          serviceCountOne: 'service',
          serviceCountPlural: 'services',
        },
        cta: {
          title: 'Ready to develop your application?',
          subtitle: 'Contact us to discuss your application project.',
        },
        eligiblePlansLabel: 'Eligible plans',
      },
    },
  };

  const getByPath = (obj: any, path: string): string => {
    const keys = path.split('.');
    let value: any = obj;
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation missing for path: ${path}`);
        return path;
      }
    }
    return typeof value === 'string' ? value : path;
  };

  const t = (path: string): string => getByPath(translations[language], path);
  const tLang = (path: string, lang: Language): string => getByPath(translations[lang], path);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
