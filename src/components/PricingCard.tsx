import { PricingPlan } from '../types/pricing';
import { XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { CheckIcon as CheckIconSolid } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

interface ExtendedPricingPlan extends PricingPlan {
  originalPrice?: number;
}

interface PricingCardProps {
  plan: ExtendedPricingPlan;
  annualSavings?: number;
  billingPeriod?: 'monthly' | 'annual';
  monthlyPrice?: number;
  onSelect?: (plan: ExtendedPricingPlan) => void;
}

const formatXAF = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

const PricingCard = ({ plan, annualSavings, billingPeriod = 'monthly', monthlyPrice, onSelect }: PricingCardProps) => {
  const { t, language } = useLanguage();
  const formatAmount = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });
  const equivLabel = t('saas.pricing.equivalentPerMonth').replace('{amount}', formatAmount(monthlyPrice ?? 0));
  const isPopular = plan.popular ?? false;
  const oldPricesByPlan: Record<string, number> = {
    'good-deal': 250000,
    'pro': 400000,
    'ultra': 650000,
  };
  const oldPrice = oldPricesByPlan[plan.id];
  const previewLimit = 6;
  const visibleFeatures = plan.features.slice(0, previewLimit);
  const remainingFeaturesCount = Math.max(plan.features.length - previewLimit, 0);

  return (
    <article
      className={`pricing-card relative flex flex-col rounded-3xl border bg-white overflow-hidden ${
        isPopular
          ? 'border-brand-400 shadow-pricing-popular ring-1 ring-brand-300/70 pricing-card-popular hover:border-brand-500'
          : 'border-neutral-300 shadow-pricing hover:shadow-pricing-hover hover:border-brand-300'
      }`}
    >
      {/* Bandeau populaire */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7 pt-8">
        {/* En-tête */}
        <header className="mb-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-[1.75rem] sm:text-[2rem] font-semibold text-ink tracking-tight leading-none">
              # {plan.name}
            </h3>
            {isPopular && (
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-brand-500 px-2 py-1 text-[11px] sm:text-xs font-semibold text-white shadow-sm">
                <SparklesIcon className="hidden sm:block h-3.5 w-3.5" />
                {language === 'fr' ? 'Bon plan' : t('pricing.popular')}
              </span>
            )}
          </div>
          <p className="mt-3 font-sans text-base sm:text-[1.03rem] text-neutral-700 leading-relaxed max-w-[300px]">
            {plan.description}
          </p>
        </header>

        {/* Bloc prix */}
        <div className="mb-6">
          {plan.price === 0 ? (
            <div className="rounded-xl bg-neutral-50 px-6 py-5 text-center">
              <span className="font-display text-2xl font-semibold text-ink">
                {plan.period === 'devis'
                  ? (t('pricing.customQuote') || 'Devis sur mesure')
                  : plan.period}
              </span>
              {plan.priceRange && (
                <div className="mt-3">
                  <p className="font-display text-lg font-semibold text-ink">
                    {language === 'fr' ? 'Prix discutable' : 'Negotiable price'}
                  </p>
                  <p className="font-sans text-xs text-neutral-500 mt-1">
                    {language === 'fr'
                      ? `selon le périmètre (${plan.priceRange.deliveryDays} jours estimés)`
                      : `depending on scope (${plan.priceRange.deliveryDays} estimated days)`}
                  </p>
                </div>
              )}
              {plan.period === 'devis' && (
                <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {language === 'fr' ? 'Devis sous 48h' : 'Quote within 48h'}
                </span>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {billingPeriod === 'monthly' && oldPrice != null && (
                <p className="font-sans text-sm text-neutral-500 line-through">
                  {formatAmount(oldPrice)} F (HT)
                  <span className="ml-1.5 text-xs font-medium text-amber-600/90" title={language === 'fr' ? 'Ces tarifs ne sont plus d\'actualité' : 'These prices are no longer current'}>
                    {language === 'fr' ? '(Prix obsolète)' : '(Obsolete)'}
                  </span>
                </p>
              )}

              <div className="rounded-2xl border border-brand-100 bg-white px-4 py-4 shadow-sm">
                <div className="rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 px-3 sm:px-4 py-3.5 sm:py-4 text-white shadow-md border border-brand-400/30">
                  <div className="w-full text-center whitespace-nowrap">
                  <p className="font-display font-semibold leading-[1.15] tracking-tight tabular-nums text-[clamp(1.18rem,3.2vw,1.72rem)]">
                      {formatAmount(plan.price)}
                      <span className="ml-1 text-[clamp(0.82rem,1.8vw,1.05rem)] align-top"> f</span>
                    <span className="ml-1 font-display text-[clamp(0.66rem,1.45vw,0.84rem)] align-middle">
                        / {plan.period} (HT)
                      </span>
                    </p>
                  </div>
                </div>

                {billingPeriod === 'monthly' && monthlyPrice != null && annualSavings != null && annualSavings > 0 && (
                  <>
                    <div className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50/40 px-3 py-2.5">
                      <p className="text-sm font-medium text-neutral-700 leading-snug">
                        {language === 'fr'
                          ? `Paiement annuel : ${formatAmount(monthlyPrice * 12 - annualSavings)} f (HT) au lieu de ${formatAmount(monthlyPrice * 12)} f (HT)`
                          : `Annual payment: ${formatAmount(monthlyPrice * 12 - annualSavings)} f (excl. tax) instead of ${formatAmount(monthlyPrice * 12)} f (excl. tax)`}
                      </p>
                    </div>
                    <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/50 px-3 py-2.5">
                      <p className="text-sm font-semibold text-emerald-700 leading-snug">
                        • {language === 'fr'
                          ? `Economie de ${formatAmount(annualSavings)} F par an par rapport au paiement mensuel.`
                          : `Save ${formatAmount(annualSavings)} F per year compared to monthly payment.`}
                      </p>
                    </div>
                  </>
                )}

                {billingPeriod === 'annual' && monthlyPrice != null && (
                  <p className="text-center font-sans text-sm font-semibold text-brand-600 mt-3">
                    {equivLabel}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Liste des fonctionnalités */}
        <ul className="flex-1 space-y-2.5 mb-7 border-t border-neutral-200/80 pt-5">
          {visibleFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 mt-0.5">
                  <CheckIconSolid className="h-3 w-3" />
                </span>
              ) : (
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 mt-0.5">
                  <XMarkIcon className="h-3.5 w-3.5" />
                </span>
              )}
              <span
                className={`font-sans text-sm leading-snug ${
                  feature.included ? 'text-neutral-700' : 'text-neutral-400 line-through'
                }`}
              >
                {feature.name}
              </span>
            </li>
          ))}
          {remainingFeaturesCount > 0 && (
            <li className="pt-1">
              <span className="inline-flex items-center rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                +{remainingFeaturesCount} {language === 'fr' ? 'autres fonctionnalités' : 'more features'}
              </span>
            </li>
          )}
        </ul>

        {/* CTA */}
        <button
          type="button"
          onClick={() => {
            if (onSelect) {
              onSelect(plan);
              return;
            }
            if (!plan.ctaLink) return;
            if (plan.ctaLink.startsWith('mailto:')) {
              window.location.href = plan.ctaLink;
              return;
            }
            const element = document.querySelector(plan.ctaLink);
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl font-semibold py-3 px-6 text-sm transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[0.98] ${
            isPopular
              ? 'bg-brand-500 text-white shadow-md hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 hover:shadow-md hover:-translate-y-0.5'
          }`}
        >
          {plan.ctaText}
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
