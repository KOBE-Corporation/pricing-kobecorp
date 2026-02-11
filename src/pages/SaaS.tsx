import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CodeBracketIcon, ServerIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { saasPlans } from '../data/saasPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

type DynamicSaasPlan = (typeof saasPlans)[number] & {
  originalPrice?: number;
};

const SaaS = () => {
  const { language, t, tLang } = useLanguage();
  const location = useLocation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<DynamicSaasPlan | null>(null);

  // Scroll vers la section correspondant au hash (#hero, #services, #forfaits, etc.)
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
    document.title = t('saas.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('saas.meta.description'));
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}${location.pathname}`);
    }
  }, [language, t, location.pathname]);

  // Prix annuels (économies : Good Deal -30 000 F, Pro -50 000 F, Ultra -60 000 F)
  const annualPrices = {
    'good-deal': 156000,
    'pro': 282400,
    'ultra': 430800,
  };

  const annualSavingsByPlan = {
    'good-deal': 30000,
    'pro': 50000,
    'ultra': 60000,
  };

  // Créer les plans avec prix dynamiques
  const plansWithDynamicPricing: DynamicSaasPlan[] = saasPlans.map((plan) => {
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
    <div className="min-h-screen bg-white antialiased">
      <section id="hero">
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
      </section>

      <section
        id="services"
        aria-label={language === 'fr' ? 'Nos services SaaS' : 'Our SaaS services'}
      >
        <SectionFeatures
          titleFr={tLang('saas.sectionFeatures.title', 'fr')}
          titleEn={tLang('saas.sectionFeatures.title', 'en')}
          subtitleFr={tLang('saas.sectionFeatures.subtitle', 'fr')}
          subtitleEn={tLang('saas.sectionFeatures.subtitle', 'en')}
          items={features}
          badgeLabelFr="Services"
          badgeLabelEn="Services"
        />
      </section>

      {/* Pricing Section */}
      <section
        id="forfaits"
        className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-brand-50/20"
        aria-label={language === 'fr' ? 'Forfaits et tarifs' : 'Plans and pricing'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-500/10 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('saas.pricing.badge')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
              {t('saas.pricing.heading')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('saas.pricing.description')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-brand-50 border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700">
                <svg className="h-4 w-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('saas.pricing.badge15days')}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-800">
                <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {t('saas.pricing.badgeFast')}
              </span>
            </div>
          </header>

          {/* Toggle Mensuel / Annuel */}
          <div className="flex flex-col items-center gap-4 mb-12" role="group" aria-label={language === 'fr' ? 'Période de facturation' : 'Billing period'}>
            <div className="inline-flex p-1.5 rounded-xl bg-white border border-neutral-200 shadow-sm ring-1 ring-neutral-900/5">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                aria-pressed={billingPeriod === 'monthly'}
                aria-label={language === 'fr' ? 'Facturation mensuelle' : 'Monthly billing'}
                className={`relative rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  billingPeriod === 'monthly'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {t('saas.pricing.monthly')}
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                aria-pressed={billingPeriod === 'annual'}
                aria-label={language === 'fr' ? 'Facturation annuelle (économisez)' : 'Annual billing (save)'}
                className={`relative rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  billingPeriod === 'annual'
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {t('saas.pricing.annual')}
                {billingPeriod === 'annual' && (
                  <span className="absolute -top-1.5 -right-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 shadow-sm">
                    {t('saas.pricing.discountBadge')}
                  </span>
                )}
              </button>
            </div>
            {billingPeriod === 'annual' && (
              <p className="text-center text-sm font-semibold text-emerald-700">
                {t('saas.pricing.savingsNote')}
              </p>
            )}
          </div>

          {/* Grille des forfaits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plansWithDynamicPricing.map((plan, index) => (
              <div
                key={plan.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <PricingCard
                  plan={plan}
                  billingPeriod={billingPeriod}
                  annualSavings={annualSavingsByPlan[plan.id as keyof typeof annualSavingsByPlan]}
                  monthlyPrice={saasPlans.find((p) => p.id === plan.id)?.price}
                  onSelect={(p) => setSelectedPlan(p as DynamicSaasPlan)}
                />
              </div>
            ))}
          </div>

          {/* Note HT */}
          <div className="mt-14 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200 px-6 py-5 shadow-pricing max-w-2xl mx-auto">
            <p className="font-sans text-sm font-semibold text-neutral-700 flex items-center gap-2">
              <svg className="h-5 w-5 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('saas.pricing.pricesHT')}
            </p>
            <p className="font-sans text-sm text-neutral-600 text-center">
              {t('saas.pricing.economyNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <section id="missions">
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
          badgeLabelFr="Missions"
          badgeLabelEn="Missions"
        />
      </section>

      {/* Comparaison SaaS vs Full-Control */}
      <section id="processus">
        <ComparisonSection />
      </section>

      {/* Modal détails forfait */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'fr' ? `Détails du forfait ${selectedPlan.name}` : `Plan details ${selectedPlan.name}`}
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-neutral-200 p-6 md:p-8">
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="sr-only">{language === 'fr' ? 'Fermer la fenêtre' : 'Close dialog'}</span>
              ×
            </button>

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {selectedPlan.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {selectedPlan.description}
                </p>
              </div>

              <div className="rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3">
                <p className="text-sm font-medium text-neutral-700">
                  {language === 'fr' ? 'Tarif du forfait' : 'Plan price'}
                </p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  {selectedPlan.price.toLocaleString('fr-FR')} {selectedPlan.currency} / {selectedPlan.period}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-700 mb-2">
                  {language === 'fr' ? 'Ce qui est inclus :' : 'What is included:'}
                </p>
                <ul className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {selectedPlan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="text-sm text-neutral-700 flex gap-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {language === 'fr' ? 'Fermer' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaaS;
