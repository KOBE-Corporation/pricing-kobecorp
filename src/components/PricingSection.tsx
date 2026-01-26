import { PricingPlan } from '../types/pricing';
import PricingCard from './PricingCard';

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection = ({ plans }: PricingSectionProps) => {
  return (
    <section id="forfaits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre forfait
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos offres adaptées à vos besoins. Tous nos forfaits incluent
            un support client dédié.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
