import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import {
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  StopCircleIcon,
  InformationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import ModalInfoCard, { type InfoCardTone } from '../components/ModalInfoCard';
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

  useSEO({
    title: t('saas.meta.title'),
    description: t('saas.meta.description'),
    path: location.pathname || '/',
  });

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

  const handleSelectedPlanAction = () => {
    if (!selectedPlan?.ctaLink) return;
    if (selectedPlan.ctaLink.startsWith('mailto:')) {
      window.location.href = selectedPlan.ctaLink;
      return;
    }
    const element = document.querySelector(selectedPlan.ctaLink);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const modelDetailCards = [
    {
      title: language === 'fr' ? 'Pour qui est ce modèle ?' : 'Who is this model for?',
      description:
        language === 'fr'
          ? 'Idéal pour les entrepreneurs et entreprises qui veulent lancer rapidement, avec un coût mensuel maîtrisé.'
          : 'Ideal for entrepreneurs and companies who want to launch fast with controlled monthly costs.',
      icon: UserGroupIcon,
      tone: 'rose',
    },
    {
      title:
        language === 'fr'
          ? 'Propriété intellectuelle & droits'
          : 'Intellectual property & rights',
      description:
        language === 'fr'
          ? "L'application est opérée en mode SaaS : vous utilisez le logiciel, mais le code source et la propriété intellectuelle restent chez Kobe Corporation."
          : 'The application is operated in SaaS mode: you use the software, but source code and intellectual property remain with Kobe Corporation.',
      icon: KeyIcon,
      tone: 'slate',
    },
    {
      title: language === 'fr' ? 'Vos responsabilités' : 'Your responsibilities',
      description:
        language === 'fr'
          ? "Définir vos besoins métier, valider les grands choix fonctionnels et respecter les conditions d'utilisation."
          : 'Define your business needs, validate major functional choices, and follow usage conditions.',
      icon: ClipboardDocumentCheckIcon,
      tone: 'slate',
    },
    {
      title: language === 'fr' ? 'Nos responsabilités' : 'Our responsibilities',
      description:
        language === 'fr'
          ? "Héberger et maintenir l'application, assurer les mises à jour, la sécurité et les corrections prévues dans le forfait."
          : 'Host and maintain the app, ensure updates, security, and fixes included in the plan.',
      icon: WrenchScrewdriverIcon,
      tone: 'indigo',
    },
    {
      title: language === 'fr' ? 'Sécurité & sauvegardes' : 'Security & backups',
      description:
        language === 'fr'
          ? 'Chiffrement, certificat SSL, sauvegardes et bonnes pratiques de sécurité sont inclus selon le forfait.'
          : 'Encryption, SSL certificate, backups and security best practices are included according to your plan.',
      icon: ShieldCheckIcon,
      tone: 'indigo',
    },
    {
      title: language === 'fr' ? 'Disponibilité & support' : 'Availability & support',
      description:
        language === 'fr'
          ? "L'application reste accessible 24/7 avec support et interventions dans le cadre des engagements du forfait."
          : 'The application remains available 24/7 with support and interventions covered by your plan commitments.',
      icon: ServerIcon,
      tone: 'slate',
    },
  ];

  return (
    <div className="min-h-screen bg-white antialiased">
      <section id="hero">
        <PageHero
          title={t('saas.hero.title')}
          subtitle={t('saas.hero.subtitle')}
          highlightLine={t('saas.hero.highlightLine')}
          countdownTargetDate="2026-03-30T00:00:00"
          countdownLabel={language === 'fr' ? 'Lancement Officel des Forfait SaaS' : 'Official SaaS plans launch'}
          countdownFinishedLabel={language === 'fr' ? 'Lancement officiel en cours' : 'Official launch is live'}
          countdownDateLabel={language === 'fr' ? 'Date officielle : 30/03/2026 à 00:00' : 'Official date: 30/03/2026 at 00:00'}
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
            <h2 className="mb-6 font-display text-4xl leading-[1.1] text-ink transition-all duration-1000 ease-out md:text-5xl lg:text-6xl">
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
          <div className="flex gap-4 overflow-x-auto px-1 pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:items-stretch md:overflow-visible md:px-0 md:pb-0">
            {plansWithDynamicPricing.map((plan, index) => (
              <div
                key={plan.id}
                className="animate-fadeInUp min-w-[290px] max-w-[320px] flex-shrink-0 snap-start md:min-w-0 md:max-w-none md:flex-shrink"
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
          <div className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="sr-only">{language === 'fr' ? 'Fermer la fenêtre' : 'Close dialog'}</span>
              ×
            </button>

            <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/95 backdrop-blur px-6 md:px-8 pt-6 md:pt-7 pb-4 pr-14">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-200">
                  {language === 'fr' ? 'Détail du forfait' : 'Plan details'}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                  {selectedPlan.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                {selectedPlan.description}
              </p>
            </header>

            <div className="space-y-6 overflow-y-auto px-6 md:px-8 py-5 md:py-6 max-h-[calc(100vh-2rem-8rem)]">
              <div className="rounded-2xl bg-gradient-to-r from-brand-50/80 to-white border border-brand-100 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {language === 'fr' ? 'Tarif du forfait' : 'Plan price'}
                </p>
                <p className="mt-1 text-2xl font-display font-semibold text-ink">
                  {selectedPlan.price.toLocaleString('fr-FR')} {selectedPlan.currency}
                  <span className="text-base font-sans text-neutral-500"> / {selectedPlan.period}</span>
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-700 mb-3">
                  {language === 'fr' ? 'Ce qui est inclus :' : 'What is included:'}
                </p>
                <p className="mb-3 text-xs font-medium text-red-600">
                  {language === 'fr'
                    ? 'Les éléments marqués × sont inclus mais considérés comme indésirables dans ce forfait.'
                    : 'Items marked with × are included but considered undesirable in this plan.'}
                </p>
                <ul className="space-y-2 rounded-xl border border-neutral-200 bg-neutral-50/60 p-4">
                  {selectedPlan.features.map((feature) => (
                    <li key={feature.name} className="text-sm flex items-start gap-3">
                      {feature.included ? (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          ✓
                        </span>
                      ) : (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                          ×
                        </span>
                      )}
                      <span className={feature.included ? 'text-neutral-700' : 'text-red-600 font-medium'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <section className="space-y-3 pt-1">
                <h4 className="text-sm font-semibold text-neutral-800">
                  {language === 'fr' ? 'Cadre du modèle SaaS' : 'SaaS model framework'}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {modelDetailCards.map((card) => (
                    <ModalInfoCard
                      key={card.title}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      tone={card.tone as InfoCardTone}
                    />
                  ))}
                </div>
                <ModalInfoCard
                  icon={KeyIcon}
                  tone="amber"
                  title={language === 'fr' ? 'Nom de domaine personnalisé (règle importante)' : 'Custom domain (important rule)'}
                  description={
                    language === 'fr' ? (
                      <>
                        Le nom de domaine personnalisé est offert uniquement en paiement annuel.
                        Sans paiement annuel, le domaine par défaut est du type{' '}
                        <span className="font-semibold text-ink">votre-entreprise.</span>
                        <span className="font-semibold text-brand-700">kb-saas.com</span>.
                      </>
                    ) : (
                      <>
                        The custom domain is offered only with annual billing.
                        Without annual billing, the default domain follows{' '}
                        <span className="font-semibold text-ink">your-company.</span>
                        <span className="font-semibold text-brand-700">kb-saas.com</span>.
                      </>
                    )
                  }
                />
                <ModalInfoCard
                  icon={StopCircleIcon}
                  tone="neutral"
                  title={language === 'fr' ? "Si vous arrêtez l'abonnement" : 'If you stop the subscription'}
                  description={
                    language === 'fr'
                      ? "L'accès à l'application est suspendu après le préavis prévu. Une sauvegarde des données peut être fournie selon le contrat."
                      : 'Access to the application is suspended after the required notice period. A data backup may be provided according to the contract.'
                  }
                />
                <ModalInfoCard
                  icon={InformationCircleIcon}
                  tone="blue"
                  title={language === 'fr' ? 'Information importante' : 'Important information'}
                  description={
                    language === 'fr'
                      ? "Cette fiche n'est pas un contrat juridique, mais une explication claire du modèle. Les détails définitifs sont validés ensemble."
                      : 'This sheet is not a legal contract, but a clear explanation of the model. Final details are validated together.'
                  }
                />
              </section>

              <div className="pt-1 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {language === 'fr' ? 'Fermer' : 'Close'}
                </button>
                <button
                  type="button"
                  onClick={handleSelectedPlanAction}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {selectedPlan.ctaText || (language === 'fr' ? 'Choisir ce forfait' : 'Choose this plan')}
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
