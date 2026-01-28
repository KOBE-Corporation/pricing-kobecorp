import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CodeBracketIcon, ServerIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { saasPlans } from '../data/saasPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import ContactCTA from '../components/ContactCTA';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

const SaaS = () => {
  const { language, t, tLang } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  // SEO : titre et meta description par page
  useEffect(() => {
    document.title = t('saas.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('saas.meta.description'));
  }, [language]);

  // Prix annuels avec économie de 16%
  const annualPrices = {
    'good-deal': 156000,
    'pro': 258400,
    'ultra': 430800,
  };

  // Créer les plans avec prix dynamiques
  const plansWithDynamicPricing = saasPlans.map((plan) => {
    if (billingPeriod === 'annual') {
      return {
        ...plan,
        price: annualPrices[plan.id as keyof typeof annualPrices],
        period: language === 'fr' ? 'an' : 'year',
        originalPrice: plan.price,
      };
    }
    return {
      ...plan,
      period: language === 'fr' ? 'mois' : 'month',
    };
  });

  const featureIcons = [CodeBracketIcon, ServerIcon, ChartBarIcon, ShieldCheckIcon];
  const features = [0, 1, 2, 3].map((i) => ({
    icon: featureIcons[i],
    titleFr: tLang(`saas.sectionFeatures.features.${i}.title`, 'fr'),
    titleEn: tLang(`saas.sectionFeatures.features.${i}.title`, 'en'),
    descriptionFr: tLang(`saas.sectionFeatures.features.${i}.description`, 'fr'),
    descriptionEn: tLang(`saas.sectionFeatures.features.${i}.description`, 'en'),
  }));

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={t('saas.hero.title')}
        subtitle={t('saas.hero.subtitle')}
        highlightLine={t('saas.hero.highlightLine')}
        primaryCta={{
          label: t('saas.hero.primaryCta'),
          href: '#forfaits',
          variant: 'primary',
        }}
        secondaryCta={{
          label: t('saas.hero.secondaryCta'),
          href: '#contact',
          variant: 'outline',
        }}
      />

      <SectionFeatures
        titleFr={tLang('saas.sectionFeatures.title', 'fr')}
        titleEn={tLang('saas.sectionFeatures.title', 'en')}
        subtitleFr={tLang('saas.sectionFeatures.subtitle', 'fr')}
        subtitleEn={tLang('saas.sectionFeatures.subtitle', 'en')}
        items={features}
      />

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
                {t('saas.pricing.badge')}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {t('saas.pricing.heading')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {t('saas.pricing.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
                <svg className="h-4 w-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-neutral-700">{t('saas.pricing.badge15days')}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-green-50 border border-green-200 text-green-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{t('saas.pricing.badgeFast')}</span>
              </div>
            </div>
          </div>

          {/* Billing Toggle - Accessible (ARIA) */}
          <div className="flex justify-center mb-8" role="group" aria-label={language === 'fr' ? 'Période de facturation' : 'Billing period'}>
            <div className="inline-flex items-center gap-3 p-1 rounded-full bg-white border border-neutral-200 shadow-subtle">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                aria-pressed={billingPeriod === 'monthly'}
                aria-label={language === 'fr' ? 'Facturation mensuelle' : 'Monthly billing'}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-brand-50'
                }`}
              >
                {t('saas.pricing.monthly')}
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                aria-pressed={billingPeriod === 'annual'}
                aria-label={language === 'fr' ? 'Facturation annuelle (économisez 16 %)' : 'Annual billing (save 16%)'}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-brand-50'
                }`}
              >
                {t('saas.pricing.annual')}
                {billingPeriod === 'annual' && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {t('saas.pricing.discountBadge')}
                  </span>
                )}
              </button>
            </div>
          </div>
          {billingPeriod === 'annual' && (
            <p className="text-center text-sm font-semibold text-green-700 mb-6">
              {t('saas.pricing.savingsNote')}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plansWithDynamicPricing.map((plan) => (
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
                  {t('saas.pricing.pricesHT')}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {t('saas.pricing.economyNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <IncludedFeaturesSection
        titleFr={tLang('saas.included.title', 'fr')}
        titleEn={tLang('saas.included.title', 'en')}
        subtitleFr={tLang('saas.included.subtitle', 'fr')}
        subtitleEn={tLang('saas.included.subtitle', 'en')}
        items={[0, 1, 2, 3, 4, 5].map((i) => ({
          titleFr: tLang(`saas.included.items.${i}.title`, 'fr'),
          titleEn: tLang(`saas.included.items.${i}.title`, 'en'),
          descFr: tLang(`saas.included.items.${i}.desc`, 'fr'),
          descEn: tLang(`saas.included.items.${i}.desc`, 'en'),
        }))}
        cols={{ md: 2, lg: 2 }}
      />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* CTA Section commune */}
      <ContactCTA
        id="contact"
        titleFr={tLang('saas.cta.title', 'fr')}
        titleEn={tLang('saas.cta.title', 'en')}
        subtitleFr={tLang('saas.cta.subtitle', 'fr')}
        subtitleEn={tLang('saas.cta.subtitle', 'en')}
        mailSubjectSuffix="Projet SaaS"
      />
    </div>
  );
};

export default SaaS;
