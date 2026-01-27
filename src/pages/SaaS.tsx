import { useLanguage } from '../contexts/LanguageContext';
import { CodeBracketIcon, ServerIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const SaaS = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: CodeBracketIcon,
      titleFr: 'Développement SaaS sur mesure',
      titleEn: 'Custom SaaS Development',
      descriptionFr:
        'Créez des applications SaaS scalables et performantes adaptées à vos besoins spécifiques.',
      descriptionEn: 'Build scalable and performant SaaS applications tailored to your specific needs.',
    },
    {
      icon: ServerIcon,
      titleFr: 'Infrastructure Cloud',
      titleEn: 'Cloud Infrastructure',
      descriptionFr:
        'Déploiement et gestion de votre infrastructure cloud pour une disponibilité maximale.',
      descriptionEn: 'Deploy and manage your cloud infrastructure for maximum availability.',
    },
    {
      icon: ChartBarIcon,
      titleFr: 'Analytics & Reporting',
      titleEn: 'Analytics & Reporting',
      descriptionFr:
        'Intégration d\'outils d\'analyse avancés pour suivre les performances de votre SaaS.',
      descriptionEn: 'Integration of advanced analytics tools to track your SaaS performance.',
    },
    {
      icon: ShieldCheckIcon,
      titleFr: 'Sécurité & Conformité',
      titleEn: 'Security & Compliance',
      descriptionFr:
        'Mise en place de mesures de sécurité robustes et conformité aux standards internationaux.',
      descriptionEn: 'Implementation of robust security measures and compliance with international standards.',
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
            {language === 'fr' ? 'Services SaaS' : 'SaaS Services'}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {language === 'fr'
              ? 'Développez et déployez des applications SaaS performantes et scalables pour transformer votre entreprise.'
              : 'Develop and deploy performant and scalable SaaS applications to transform your business.'}
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
              {language === 'fr' ? 'Nos Services SaaS' : 'Our SaaS Services'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Des solutions complètes pour créer, déployer et maintenir vos applications SaaS.'
                : 'Complete solutions to create, deploy and maintain your SaaS applications.'}
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
              ? 'Prêt à lancer votre SaaS ?'
              : 'Ready to launch your SaaS?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de votre projet SaaS.'
              : 'Contact us to discuss your SaaS project.'}
          </p>
          <Button variant="primary" size="lg" href={`mailto:contact@kobecorporation.com`}>
            {t('contact.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SaaS;
