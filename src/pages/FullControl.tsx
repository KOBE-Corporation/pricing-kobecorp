import { useLanguage } from '../contexts/LanguageContext';
import {
  Cog6ToothIcon,
  LockClosedIcon,
  CommandLineIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';

const FullControl = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Cog6ToothIcon,
      titleFr: 'Contrôle Total',
      titleEn: 'Full Control',
      descriptionFr:
        'Accédez à tous les paramètres et configurations de votre infrastructure sans limitations.',
      descriptionEn: 'Access all settings and configurations of your infrastructure without limitations.',
    },
    {
      icon: LockClosedIcon,
      titleFr: 'Sécurité Avancée',
      titleEn: 'Advanced Security',
      descriptionFr:
        'Gérez votre propre sécurité avec des outils de monitoring et de protection avancés.',
      descriptionEn: 'Manage your own security with advanced monitoring and protection tools.',
    },
    {
      icon: CommandLineIcon,
      titleFr: 'Accès Root/Admin',
      titleEn: 'Root/Admin Access',
      descriptionFr:
        'Accès complet au système pour personnaliser et optimiser selon vos besoins.',
      descriptionEn: 'Full system access to customize and optimize according to your needs.',
    },
    {
      icon: ServerStackIcon,
      titleFr: 'Infrastructure Dédiée',
      titleEn: 'Dedicated Infrastructure',
      descriptionFr:
        'Serveurs et ressources dédiés exclusivement à votre entreprise pour des performances optimales.',
      descriptionEn: 'Servers and resources dedicated exclusively to your business for optimal performance.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[500px]">
        <div
          className="absolute inset-0 overflow-hidden bg-white"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape"></div>
          <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink mb-6">
            {language === 'fr' ? 'Full-Control' : 'Full-Control'}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {language === 'fr'
              ? 'Prenez le contrôle total de votre infrastructure avec nos solutions Full-Control. Liberté, sécurité et performance maximales.'
              : 'Take full control of your infrastructure with our Full-Control solutions. Maximum freedom, security and performance.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="#contact">
              {language === 'fr' ? 'Démarrer un projet' : 'Start a Project'}
            </Button>
            <Button variant="outline" size="lg" href="/#forfaits">
              {t('nav.pricing')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr' ? 'Avantages Full-Control' : 'Full-Control Benefits'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Profitez d\'un contrôle total sur votre infrastructure et vos données.'
                : 'Enjoy total control over your infrastructure and data.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-subtle hover:border-brand-300 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-xl p-3 flex-shrink-0"
                      style={{ backgroundColor: '#f0f7ff' }}
                    >
                      <Icon className="h-8 w-8" style={{ color: '#0a7aff' }} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink mb-2">
                        {language === 'fr' ? feature.titleFr : feature.titleEn}
                      </h3>
                      <p className="font-sans text-neutral-600">
                        {language === 'fr' ? feature.descriptionFr : feature.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr'
              ? 'Besoin d\'un contrôle total ?'
              : 'Need full control?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour découvrir nos solutions Full-Control.'
              : 'Contact us to discover our Full-Control solutions.'}
          </p>
          <Button variant="primary" size="lg" href={`mailto:contact@kobecorporation.com`}>
            {t('contact.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FullControl;
