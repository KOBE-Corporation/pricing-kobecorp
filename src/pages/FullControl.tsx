import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Cog6ToothIcon,
  LockClosedIcon,
  CommandLineIcon,
  ServerStackIcon,
  KeyIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { fullControlPlans } from '../data/fullControlPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

const FullControl = () => {
  const { t, tLang, language } = useLanguage();
  const location = useLocation();

  // Scroll vers la section correspondant au hash (#hero, #forfaits, #missions, #processus)
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // SEO : titre, meta description et canonical
  useEffect(() => {
    document.title = t('fullControl.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('fullControl.meta.description'));
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/full-control`);
    }
  }, [language, t]);

  const featureIcons = [Cog6ToothIcon, LockClosedIcon, CommandLineIcon, ServerStackIcon];
  const features = [0, 1, 2, 3].map((i) => ({
    icon: featureIcons[i],
    titleFr: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'fr'),
    titleEn: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'en'),
    descriptionFr: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'fr'),
    descriptionEn: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'en'),
  }));

  return (
    <div className="min-h-screen bg-white">
      <section id="hero">
        <PageHero
          title={t('fullControl.hero.title')}
          subtitle={t('fullControl.hero.subtitle')}
          highlightLine={language === 'en' ? t('fullControl.hero.highlightLineEn') : undefined}
          primaryCta={{
            label: t('fullControl.hero.primaryCta'),
            href: '#forfaits',
            variant: 'primary',
          }}
secondaryCta={{
          label: t('fullControl.hero.secondaryCta'),
          href: '/contact',
          variant: 'outline',
        }}
        />
      </section>

      <section id="services">
        <SectionFeatures
          titleFr={tLang('fullControl.sectionFeatures.title', 'fr')}
          titleEn={tLang('fullControl.sectionFeatures.title', 'en')}
          subtitleFr={tLang('fullControl.sectionFeatures.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.sectionFeatures.subtitle', 'en')}
          items={features}
        />
      </section>

      {/* Pricing Section */}
      <section id="forfaits" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-brand-100 text-brand-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('fullControl.pricing.badge')}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-600 mb-4">
              {t('fullControl.pricing.heading')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {t('fullControl.pricing.description')}
            </p>
            {/* Délais mis en avant : 65 / 110 / 180 jours */}
            <p className="font-sans text-base font-semibold text-brand-600 mb-4">
              {t('fullControl.pricing.deliveryLevels')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
                <KeyIcon className="h-4 w-4 text-brand-500" aria-hidden />
                <span className="text-neutral-700">{t('fullControl.pricing.badgeCodeOwnership')}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('fullControl.pricing.badgeDevis48h')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullControlPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  {t('fullControl.pricing.paymentNote')}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {t('fullControl.pricing.plansIncludeNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section - Missions */}
      <section id="missions">
        <IncludedFeaturesSection
          titleFr={tLang('fullControl.included.title', 'fr')}
          titleEn={tLang('fullControl.included.title', 'en')}
          subtitleFr={tLang('fullControl.included.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.included.subtitle', 'en')}
          items={[
            { icon: KeyIcon, titleFr: tLang('fullControl.included.items.0.title', 'fr'), titleEn: tLang('fullControl.included.items.0.title', 'en'), descFr: tLang('fullControl.included.items.0.desc', 'fr'), descEn: tLang('fullControl.included.items.0.desc', 'en') },
            { icon: ServerStackIcon, titleFr: tLang('fullControl.included.items.1.title', 'fr'), titleEn: tLang('fullControl.included.items.1.title', 'en'), descFr: tLang('fullControl.included.items.1.desc', 'fr'), descEn: tLang('fullControl.included.items.1.desc', 'en') },
            { icon: CommandLineIcon, titleFr: tLang('fullControl.included.items.2.title', 'fr'), titleEn: tLang('fullControl.included.items.2.title', 'en'), descFr: tLang('fullControl.included.items.2.desc', 'fr'), descEn: tLang('fullControl.included.items.2.desc', 'en') },
            { icon: DocumentTextIcon, titleFr: tLang('fullControl.included.items.3.title', 'fr'), titleEn: tLang('fullControl.included.items.3.title', 'en'), descFr: tLang('fullControl.included.items.3.desc', 'fr'), descEn: tLang('fullControl.included.items.3.desc', 'en') },
            { icon: ServerStackIcon, titleFr: tLang('fullControl.included.items.4.title', 'fr'), titleEn: tLang('fullControl.included.items.4.title', 'en'), descFr: tLang('fullControl.included.items.4.desc', 'fr'), descEn: tLang('fullControl.included.items.4.desc', 'en') },
            { icon: ShieldCheckIcon, titleFr: tLang('fullControl.included.items.5.title', 'fr'), titleEn: tLang('fullControl.included.items.5.title', 'en'), descFr: tLang('fullControl.included.items.5.desc', 'fr'), descEn: tLang('fullControl.included.items.5.desc', 'en') },
            { icon: LockClosedIcon, titleFr: tLang('fullControl.included.items.6.title', 'fr'), titleEn: tLang('fullControl.included.items.6.title', 'en'), descFr: tLang('fullControl.included.items.6.desc', 'fr'), descEn: tLang('fullControl.included.items.6.desc', 'en') },
            { icon: AcademicCapIcon, titleFr: tLang('fullControl.included.items.7.title', 'fr'), titleEn: tLang('fullControl.included.items.7.title', 'en'), descFr: tLang('fullControl.included.items.7.desc', 'fr'), descEn: tLang('fullControl.included.items.7.desc', 'en') },
            { icon: Cog6ToothIcon, titleFr: tLang('fullControl.included.items.8.title', 'fr'), titleEn: tLang('fullControl.included.items.8.title', 'en'), descFr: tLang('fullControl.included.items.8.desc', 'fr'), descEn: tLang('fullControl.included.items.8.desc', 'en') },
          ]}
          cols={{ md: 2, lg: 3 }}
        />
      </section>

      {/* Stack Technique Section */}
      <section id="processus" className="py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-600 mb-4">
              {t('fullControl.stack.title')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('fullControl.stack.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle text-center"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {t(`fullControl.stack.items.${i}.title`)}
                </h3>
                <p className="font-sans text-sm text-neutral-600">
                  {t(`fullControl.stack.items.${i}.tech`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section>
        <ComparisonSection />
      </section>
    </div>
  );
};

export default FullControl;
