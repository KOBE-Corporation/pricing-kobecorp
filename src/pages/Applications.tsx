import { useLanguage } from '../contexts/LanguageContext';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  ServerIcon,
  ShoppingBagIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ScissorsIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';
import { applicationsServices } from '../data/applicationsServices';
import { applicationsExamples } from '../data/applicationsExamples';

// Mapping des icônes (types d'applications)
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  ServerIcon,
};

// Mapping des icônes (exemples métier)
const exampleIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBagIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ScissorsIcon,
};

const Applications = () => {
  const { t, language } = useLanguage();

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
            <Button variant="outline" size="lg" href="/saas">
              {t('nav.saas')}
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
            {applicationsServices.map((service) => {
              const Icon = iconMap[service.icon] || CodeBracketIcon;
              const translation = service.translations[language];
              
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-subtle hover:border-brand-300 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-xl p-3 flex-shrink-0"
                      style={{ backgroundColor: '#f0f7ff' }}
                    >
                      <Icon className="h-8 w-8" style={{ color: '#0a7aff' }} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-600 mb-2">
                          {service.sector[language]}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-ink mb-2">
                          {translation.title}
                        </h3>
                        <p className="font-sans text-neutral-600 mb-4">
                          {translation.description}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {translation.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="h-4 w-4 flex-shrink-0" style={{ color: '#0a7aff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-sans text-sm text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exemples d'applications métier */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr' ? 'Exemples d\'applications métier' : 'Business Application Examples'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Nous concevons des applications sur mesure pour votre secteur. Voici quelques exemples concrets de solutions que nous pouvons développer pour vous.'
                : 'We design custom applications for your industry. Here are some concrete examples of solutions we can develop for you.'}
            </p>
          </div>

          <div className="space-y-12">
            {applicationsExamples.map((example) => {
              const Icon = exampleIconMap[example.icon] || CodeBracketIcon;
              const tr = example.translations[language];
              const isGreen = example.id === 'ecommerce';
              const isTeal = example.id === 'inventory';
              const isRed = example.id === 'restaurant';
              const isEmerald = example.id === 'billing';
              const isPink = example.id === 'salon';
              const iconBg = isGreen ? 'bg-green-100' : isTeal ? 'bg-teal-100' : isRed ? 'bg-red-100' : isEmerald ? 'bg-emerald-100' : 'bg-pink-100';
              const iconColor = isGreen ? 'text-green-600' : isTeal ? 'text-teal-600' : isRed ? 'text-red-600' : isEmerald ? 'text-emerald-600' : 'text-pink-600';
              const badgeBg = isGreen ? 'bg-green-50 text-green-700' : isTeal ? 'bg-teal-50 text-teal-700' : isRed ? 'bg-red-50 text-red-700' : isEmerald ? 'bg-emerald-50 text-emerald-700' : 'bg-pink-50 text-pink-700';
              const checkColor = isGreen ? '#059669' : isTeal ? '#0d9488' : isRed ? '#dc2626' : isEmerald ? '#059669' : '#db2777';

              return (
                <article
                  key={example.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-subtle hover:border-neutral-300 hover:shadow-card-hover transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`rounded-xl p-4 flex-shrink-0 ${iconBg}`}>
                      <Icon className={`h-10 w-10 ${iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeBg} mb-3`}>
                        {example.sector[language]}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                        {tr.title}
                      </h3>
                      <p className="font-sans text-neutral-600 mb-4 leading-relaxed">
                        {tr.detailedDescription}
                      </p>
                      <div className="rounded-xl bg-neutral-100 px-4 py-3 mb-6">
                        <p className="font-sans text-sm font-medium text-ink">
                          {tr.valueProposition}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-semibold text-ink uppercase tracking-wide mb-3">
                          {language === 'fr' ? 'Fonctionnalités possibles' : 'Possible features'}
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tr.possibleFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: checkColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="font-sans text-sm text-neutral-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
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
