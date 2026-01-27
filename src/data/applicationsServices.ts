// Services d'applications extraits de SERVICES_DATA.json
// Catégorie "apps" : web-app, mobile, desktop, api

export interface ApplicationService {
  id: string;
  icon: string;
  category: string;
  sector: {
    fr: string;
    en: string;
  };
  translations: {
    fr: {
      title: string;
      description: string;
      features: string[];
    };
    en: {
      title: string;
      description: string;
      features: string[];
    };
  };
}

export const applicationsServices: ApplicationService[] = [
  {
    id: 'web-app',
    icon: 'CodeBracketIcon',
    category: 'apps',
    sector: {
      fr: 'Applications',
      en: 'Apps',
    },
    translations: {
      fr: {
        title: 'Applications Web',
        description: 'Solutions métier sur mesure',
        features: [
          'Fonctionnalités personnalisées',
          'Authentification utilisateur',
          'Intégration base de données',
          'Développement API',
        ],
      },
      en: {
        title: 'Web Applications',
        description: 'Custom business solutions',
        features: [
          'Custom features',
          'User authentication',
          'Database integration',
          'API development',
        ],
      },
    },
  },
  {
    id: 'mobile',
    icon: 'DevicePhoneMobileIcon',
    category: 'apps',
    sector: {
      fr: 'Applications',
      en: 'Apps',
    },
    translations: {
      fr: {
        title: 'Applications Mobile',
        description: 'Apps mobiles cross-platform',
        features: [
          'iOS & Android',
          'Kotlin Multiplatform',
          'Performance native',
          'Support hors ligne',
        ],
      },
      en: {
        title: 'Mobile Applications',
        description: 'Cross-platform mobile apps',
        features: [
          'iOS & Android',
          'Kotlin Multiplatform',
          'Native performance',
          'Offline support',
        ],
      },
    },
  },
  {
    id: 'desktop',
    icon: 'ComputerDesktopIcon',
    category: 'apps',
    sector: {
      fr: 'Outils internes',
      en: 'Internal',
    },
    translations: {
      fr: {
        title: 'Applications Desktop',
        description: 'Applications desktop natives',
        features: [
          'Cross-platform',
          'Interface native',
          'Intégration système',
          'Mode hors ligne',
        ],
      },
      en: {
        title: 'Desktop Applications',
        description: 'Native desktop applications',
        features: [
          'Cross-platform',
          'Native UI',
          'System integration',
          'Offline mode',
        ],
      },
    },
  },
  {
    id: 'api',
    icon: 'ServerIcon',
    category: 'apps',
    sector: {
      fr: 'APIs & Intégrations',
      en: 'Backend',
    },
    translations: {
      fr: {
        title: 'Développement API',
        description: 'APIs RESTful et GraphQL',
        features: [
          'API REST',
          'GraphQL',
          'Documentation',
          'Sécurité & Auth',
        ],
      },
      en: {
        title: 'API Development',
        description: 'RESTful and GraphQL APIs',
        features: [
          'REST API',
          'GraphQL',
          'Documentation',
          'Security & Auth',
        ],
      },
    },
  },
];
