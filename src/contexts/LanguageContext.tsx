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
