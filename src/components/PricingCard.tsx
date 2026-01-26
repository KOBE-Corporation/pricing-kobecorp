import { PricingPlan } from '../types/pricing';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
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
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm">
            <StarIcon className="h-3 w-3" />
            Populaire
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
        <div className="flex items-baseline justify-center">
          <span className="font-display text-5xl font-semibold text-ink">
            {plan.price}
          </span>
          <span className="font-sans text-xl text-neutral-600 ml-2">
            {plan.currency}
          </span>
        </div>
        <p className="font-sans text-sm text-neutral-500 mt-2">/{plan.period}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckIcon className="h-6 w-6 text-success-500 mr-3 flex-shrink-0" />
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
            ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg'
            : 'bg-white text-neutral-700 border border-neutral-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 shadow-subtle hover:shadow-md'
        }`}
        onClick={() => {
          if (plan.ctaLink) {
            const element = document.querySelector(plan.ctaLink);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
      >
        {plan.ctaText}
      </button>
    </div>
  );
};

export default PricingCard;
