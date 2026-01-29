import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DevicePhoneMobileIcon, ComputerDesktopIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/24/outline';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import SectionFeatures from '../components/SectionFeatures';
import ApplicationServiceCard from '../components/ApplicationServiceCard';
import { applicationsServices } from '../data/applicationsServices';
import {
  getServicesByCategory,
  getCategoryLabel,
  uiTexts,
} from '../data/servicesData';
import type { ServiceCategory } from '../types/servicesData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  ServerIcon,
};

const CATEGORY_KEYS: (ServiceCategory | 'all')[] = ['all', 'web', 'ecommerce', 'apps', 'business', 'vertical'];

const Applications = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const lang = language as 'fr' | 'en';
  const filteredServices = getServicesByCategory(selectedCategory);

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

      {/* Types d'Applications */}
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

      {/* Tous nos services (SERVICES_DATA.json) – filtre par catégorie */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {lang === 'fr' ? (uiTexts?.fr?.allServicesTitle ?? 'Tous nos services') : (uiTexts?.en?.allServicesTitle ?? 'All our services')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              {lang === 'fr' ? (uiTexts?.fr?.allServicesSubtitle ?? 'Des solutions complètes pour tous vos besoins digitaux') : (uiTexts?.en?.allServicesSubtitle ?? 'Complete solutions for all your digital needs')}
            </p>

            {/* Filtre par catégorie */}
            <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label={language === 'fr' ? 'Filtrer par catégorie' : 'Filter by category'}>
              {CATEGORY_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === key
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-brand-300 hover:bg-brand-50'
                  }`}
                >
                  {getCategoryLabel(key, lang)}
                </button>
              ))}
            </div>
            <p className="mt-4 font-sans text-sm text-neutral-500">
              {filteredServices.length} {language === 'fr' ? (filteredServices.length <= 1 ? 'service' : 'services') : (filteredServices.length === 1 ? 'service' : 'services')}
            </p>
          </div>

          <div className="space-y-12">
            {filteredServices.map((service) => (
              <ApplicationServiceCard key={service.id} service={service} variant="auto" />
            ))}
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
