import { PricingPlan } from '../types/pricing';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-105 ${
        plan.popular
          ? 'ring-2 ring-blue-600 transform scale-105'
          : 'border border-gray-200'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Populaire
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm">{plan.description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-xl text-gray-600 ml-2">{plan.currency}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">/{plan.period}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-300 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <span
              className={`text-gray-700 ${
                feature.included ? '' : 'line-through text-gray-400'
              }`}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          plan.popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
        onClick={() => {
          if (plan.ctaLink) {
            window.location.href = plan.ctaLink;
          }
        }}
      >
        {plan.ctaText}
      </button>
    </div>
  );
};

export default PricingCard;
