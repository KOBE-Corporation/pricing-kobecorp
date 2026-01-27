import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
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
    },
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let value: any = translations[language];
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation missing for path: ${path}`);
        return path;
      }
    }
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
