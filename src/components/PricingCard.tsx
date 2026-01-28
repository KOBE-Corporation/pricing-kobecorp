import { PricingPlan } from '../types/pricing';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

interface ExtendedPricingPlan extends PricingPlan {
  originalPrice?: number;
}

const formatXAF = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

const PricingCard = ({ plan }: { plan: ExtendedPricingPlan }) => {
  const { t, language } = useLanguage();
  return (
    <div
      className={`relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
        plan.popular
          ? 'ring-2 ring-brand-500 border-brand-300 shadow-card-hover transform scale-105'
          : 'border-neutral-200 shadow-card hover:border-brand-300 hover:shadow-card-hover'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span 
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm"
            style={{ 
              background: 'linear-gradient(to right, #f0f7ff, #e0efff)',
              color: '#0066e6'
            }}
          >
            <StarIcon className="h-3 w-3" />
            {t('pricing.popular')}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-semibold text-ink mb-2">
          {plan.name}
        </h3>
        <p className="font-sans text-sm text-neutral-600">{plan.description}</p>
      </div>

      <div className="text-center mb-6">
        {plan.price === 0 ? (
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-semibold text-ink mb-2">
              {plan.period === 'devis' 
                ? (t('pricing.customQuote') || 'Devis sur mesure')
                : plan.period}
            </span>
            {plan.priceRange && (
              <div className="text-center mb-2">
                <p className="font-display text-xl font-semibold text-ink">
                  {formatXAF(plan.priceRange.min)} – {formatXAF(plan.priceRange.max)} F CFA
                </p>
                <p className="font-sans text-xs text-neutral-500 mt-1">
                  {language === 'fr'
                    ? `pour ${plan.priceRange.deliveryDays} jours de développement`
                    : `for ${plan.priceRange.deliveryDays} days of development`}
                </p>
              </div>
            )}
            <p className="font-sans text-sm text-neutral-600">
              {plan.period === 'devis'
                ? plan.priceRange
                  ? (language === 'fr' ? 'Fourchette indicative (XAF)' : 'Indicative range (XAF)')
                  : (t('pricing.contactForQuote') || 'Contactez-nous pour un devis')
                : ''}
            </p>
            {plan.period === 'devis' && (
              <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {language === 'fr' ? 'Devis sous 48h' : 'Quote within 48h'}
              </span>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-center">
              <span className="font-display text-5xl font-semibold text-ink">
                {plan.price.toLocaleString('fr-FR')}
              </span>
              <span className="font-sans text-xl text-neutral-600 ml-2">
                {plan.currency}
              </span>
            </div>
            <p className="font-sans text-sm text-neutral-500 mt-2">/{plan.period}</p>
            {plan.originalPrice && (
              <p className="font-sans text-xs text-neutral-400 mt-1 line-through">
                {plan.originalPrice.toLocaleString('fr-FR')} {plan.currency} / {language === 'fr' ? 'mois' : 'month'}
              </p>
            )}
          </>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckIcon className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: '#0a7aff' }} />
            ) : (
              <XMarkIcon className="h-6 w-6 text-neutral-300 mr-3 flex-shrink-0" />
            )}
            <span
              className={`font-sans text-sm ${
                feature.included
                  ? 'text-neutral-700'
                  : 'line-through text-neutral-400'
              }`}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 py-3 px-6 ${
          plan.popular
            ? 'text-white shadow-md hover:shadow-lg'
            : 'bg-white text-neutral-700 border border-neutral-200 shadow-subtle hover:shadow-md'
        }`}
        style={plan.popular ? { backgroundColor: '#0a7aff' } : {}}
        onMouseEnter={(e) => {
          if (plan.popular) {
            e.currentTarget.style.backgroundColor = '#0066e6';
          } else {
            e.currentTarget.style.borderColor = '#7cc2ff';
            e.currentTarget.style.backgroundColor = '#f0f7ff';
            e.currentTarget.style.color = '#0066e6';
          }
        }}
        onMouseLeave={(e) => {
          if (plan.popular) {
            e.currentTarget.style.backgroundColor = '#0a7aff';
          } else {
            e.currentTarget.style.borderColor = '#e8e8e8';
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#404040';
          }
        }}
        onClick={() => {
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
      >
        {plan.ctaText}
      </button>
    </div>
  );
};

export default PricingCard;
