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
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import SectionFeatures from '../components/SectionFeatures';
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
      <PageHero
        title={language === 'fr' ? 'Applications' : 'Applications'}
        subtitle={
          language === 'fr'
            ? 'Développement d\'applications sur mesure pour tous types de plateformes : mobile, web, desktop et backend.'
            : 'Custom application development for all types of platforms: mobile, web, desktop and backend.'
        }
        primaryCta={{
          label: language === 'fr' ? 'Démarrer un projet' : 'Start a Project',
          href: '#contact',
          variant: 'primary',
        }}
        secondaryCta={{
          label: t('nav.saas'),
          href: '/saas',
          variant: 'outline',
        }}
      />

      {/* App Types Section (factorisée) */}
      <SectionFeatures
        titleFr="Types d'Applications"
        titleEn="Application Types"
        subtitleFr="Nous développons tous types d'applications selon vos besoins."
        subtitleEn="We develop all types of applications according to your needs."
        items={applicationsServices.map((service) => {
          const Icon = iconMap[service.icon] || CodeBracketIcon;
          return {
            icon: Icon,
            titleFr: service.translations.fr.title,
            titleEn: service.translations.en.title,
            descriptionFr: service.translations.fr.description,
            descriptionEn: service.translations.en.description,
          };
        })}
      />

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

      {/* CTA Section commune */}
      <ContactCTA
        id="contact"
        titleFr="Prêt à développer votre application ?"
        titleEn="Ready to develop your application?"
        subtitleFr="Contactez-nous pour discuter de votre projet d'application."
        subtitleEn="Contact us to discuss your application project."
        mailSubjectSuffix="Projet Applications"
      />
    </div>
  );
};

export default Applications;
