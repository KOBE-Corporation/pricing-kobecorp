import { PricingPlan } from '../types/pricing';
import PricingCard from './PricingCard';

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection = ({ plans }: PricingSectionProps) => {
  return (
    <section
      id="forfaits"
      className="relative overflow-hidden pt-4 pb-8 md:pt-6 md:pb-12 lg:pt-8 lg:pb-16 min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{ isolation: 'isolate' }}
    >
      {/* Fond avec grille et formes géométriques */}
      <div
        className="absolute inset-0 overflow-hidden bg-white"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Grille de fond */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Formes géométriques flottantes */}
        <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape"></div>
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border"></div>
        <div
          className="absolute top-1/2 right-1/4 h-20 w-20 border-2 border-brand-300/60 animate-rotate-slow"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            transformOrigin: 'center',
          }}
        ></div>
        <div
          className="absolute top-40 left-1/3 h-16 w-16 rounded-lg border-2 border-accent-300/60 animate-float-shape"
          style={{ transform: 'rotate(-15deg)' }}
        ></div>
        <div className="absolute bottom-40 right-1/3 h-12 w-12 rounded-full border-2 border-accent-300/55 animate-float-gentle animate-pulse-border"></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold text-ink mb-4">
            Choisissez votre forfait
          </h2>
          <p className="font-sans text-xl text-neutral-600 max-w-2xl mx-auto">
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
