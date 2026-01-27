import { useLanguage } from '../contexts/LanguageContext';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';

const Applications = () => {
  const { t, language } = useLanguage();

  const appTypes = [
    {
      icon: DevicePhoneMobileIcon,
      titleFr: 'Applications Mobiles',
      titleEn: 'Mobile Applications',
      descriptionFr:
        'Développement d\'applications iOS et Android natives ou cross-platform avec React Native, Flutter.',
      descriptionEn: 'Development of native or cross-platform iOS and Android applications with React Native, Flutter.',
    },
    {
      icon: ComputerDesktopIcon,
      titleFr: 'Applications Desktop',
      titleEn: 'Desktop Applications',
      descriptionFr:
        'Applications desktop multiplateformes avec Electron, .NET, ou technologies natives.',
      descriptionEn: 'Cross-platform desktop applications with Electron, .NET, or native technologies.',
    },
    {
      icon: GlobeAltIcon,
      titleFr: 'Applications Web',
      titleEn: 'Web Applications',
      descriptionFr:
        'Applications web modernes avec React, Vue, Angular, ou frameworks backend Node.js, Python, PHP.',
      descriptionEn: 'Modern web applications with React, Vue, Angular, or backend frameworks Node.js, Python, PHP.',
    },
    {
      icon: CommandLineIcon,
      titleFr: 'Applications Backend/API',
      titleEn: 'Backend/API Applications',
      descriptionFr:
        'Développement d\'APIs RESTful, GraphQL, microservices et architectures serverless.',
      descriptionEn: 'Development of RESTful APIs, GraphQL, microservices and serverless architectures.',
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
            {language === 'fr' ? 'Applications' : 'Applications'}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {language === 'fr'
              ? 'Développement d\'applications sur mesure pour tous types de plateformes : mobile, web, desktop et backend.'
              : 'Custom application development for all types of platforms: mobile, web, desktop and backend.'}
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

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr' ? 'Types d\'Applications' : 'Application Types'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Nous développons tous types d\'applications selon vos besoins.'
                : 'We develop all types of applications according to your needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => {
              const Icon = type.icon;
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
                        {language === 'fr' ? type.titleFr : type.titleEn}
                      </h3>
                      <p className="font-sans text-neutral-600">
                        {language === 'fr' ? type.descriptionFr : type.descriptionEn}
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
              ? 'Prêt à développer votre application ?'
              : 'Ready to develop your application?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de votre projet d\'application.'
              : 'Contact us to discuss your application project.'}
          </p>
          <Button variant="primary" size="lg" href={`mailto:contact@kobecorporation.com`}>
            {t('contact.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Applications;
