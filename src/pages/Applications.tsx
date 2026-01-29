import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DevicePhoneMobileIcon, ComputerDesktopIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/24/outline';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import SectionFeatures from '../components/SectionFeatures';
import ApplicationServiceCard from '../components/ApplicationServiceCard';
import { applicationsServices } from '../data/applicationsServices';
import { getServicesByCategory, getCategoryLabel } from '../data/servicesData';
import type { ServiceCategory } from '../types/servicesData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  ServerIcon,
};

const CATEGORY_KEYS: (ServiceCategory | 'all')[] = ['all', 'web', 'ecommerce', 'apps', 'business', 'vertical'];

const Applications = () => {
  const { t, tLang, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const lang = language as 'fr' | 'en';
  const filteredServices = getServicesByCategory(selectedCategory);

  // SEO : titre et meta description
  useEffect(() => {
    document.title = t('applications.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('applications.meta.description'));
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t('applications.hero.title')}
        subtitle={t('applications.hero.subtitle')}
        primaryCta={{
          label: t('applications.hero.primaryCta'),
          href: '#contact',
          variant: 'primary',
        }}
        secondaryCta={{
          label: t('applications.hero.secondaryCta'),
          href: '/saas',
          variant: 'outline',
        }}
      />

      {/* Types d'Applications */}
      <SectionFeatures
        titleFr={tLang('applications.sectionTypes.titleFr', 'fr')}
        titleEn={tLang('applications.sectionTypes.titleEn', 'en')}
        subtitleFr={tLang('applications.sectionTypes.subtitleFr', 'fr')}
        subtitleEn={tLang('applications.sectionTypes.subtitleEn', 'en')}
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
              {t('applications.servicesSection.title')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              {t('applications.servicesSection.subtitle')}
            </p>

            {/* Filtre par catégorie */}
            <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label={t('applications.servicesSection.filterLabel')}>
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
              {filteredServices.length} {filteredServices.length <= 1 ? t('applications.servicesSection.serviceCountOne') : t('applications.servicesSection.serviceCountPlural')}
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
        titleFr={tLang('applications.cta.title', 'fr')}
        titleEn={tLang('applications.cta.title', 'en')}
        subtitleFr={tLang('applications.cta.subtitle', 'fr')}
        subtitleEn={tLang('applications.cta.subtitle', 'en')}
        mailSubjectSuffix="Projet Applications"
      />
    </div>
  );
};

export default Applications;
