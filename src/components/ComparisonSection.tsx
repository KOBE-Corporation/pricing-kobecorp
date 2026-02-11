import { useLanguage } from '../contexts/LanguageContext';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ComparisonSection = () => {
  const { language } = useLanguage();

  const comparisonData = [
    {
      criterion: language === 'fr' ? 'Paiement' : 'Payment',
      saas: language === 'fr' ? 'Récurrent (mensuel/annuel)' : 'Recurring (monthly/annual)',
      fullControl: language === 'fr' ? 'Unique (one-time)' : 'One-time',
    },
    {
      criterion: language === 'fr' ? 'Propriété du code' : 'Code ownership',
      saas: language === 'fr' ? 'Développeur' : 'Developer',
      fullControl: language === 'fr' ? 'Client (100%)' : 'Client (100%)',
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Hébergement' : 'Hosting',
      saas: language === 'fr' ? 'Géré par développeur' : 'Managed by developer',
      fullControl: language === 'fr' ? 'Client autonome' : 'Client autonomous',
      saasIcon: null,
      fullControlIcon: null,
    },
    {
      criterion: language === 'fr' ? 'Maintenance' : 'Maintenance',
      saas: language === 'fr' ? 'Incluse à vie' : 'Included for life',
      fullControl: language === 'fr' ? 'Limitée (1-6 mois)' : 'Limited (1-6 months)',
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Modifications' : 'Modifications',
      saas: language === 'fr' ? 'Interdites' : 'Not allowed',
      fullControl: language === 'fr' ? 'Autorisées' : 'Allowed',
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Revente' : 'Resale',
      saas: language === 'fr' ? 'Interdite' : 'Not allowed',
      fullControl: language === 'fr' ? 'Autorisée' : 'Allowed',
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Support' : 'Support',
      saas: language === 'fr' ? "Inclus dans l'abonnement" : 'Included in subscription',
      fullControl: language === 'fr' ? 'Période limitée (1-6 mois)' : 'Limited period (1-6 months)',
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Mises à jour' : 'Updates',
      saas: language === 'fr' ? "Incluses dans l'abonnement" : 'Included in subscription',
      fullControl: language === 'fr' ? 'Client gère' : 'Client manages',
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500 flex-shrink-0" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />,
    },
    {
      criterion: language === 'fr' ? 'Délai de livraison' : 'Delivery time',
      saas: language === 'fr' ? '15 jours maximum' : '15 days maximum',
      fullControl: language === 'fr' ? '65-180 jours selon forfait' : '65-180 days depending on plan',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50/80 to-brand-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-500/10 mb-6">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {language === 'fr' ? 'Processus' : 'Process'}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
            {language === 'fr'
              ? 'SaaS vs Full-Control : quelle solution choisir ?'
              : 'SaaS vs Full-Control: which solution to choose?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Comparez les deux modèles pour trouver celui qui correspond le mieux à vos besoins.'
              : 'Compare both models to find the one that best fits your needs.'}
          </p>
        </header>

        <div className="rounded-2xl border border-neutral-200 bg-white shadow-pricing overflow-hidden animate-fadeInUp">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/80">
                  <th className="text-left py-5 px-6 font-display font-semibold text-ink">
                    {language === 'fr' ? 'Critère' : 'Criterion'}
                  </th>
                  <th className="text-center py-5 px-6 font-display font-semibold text-brand-600">
                    SaaS
                  </th>
                  <th className="text-center py-5 px-6 font-display font-semibold text-ink">
                    Full-Control
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-neutral-100 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                    } hover:bg-brand-50/30`}
                  >
                    <td className="py-4 px-6 font-display font-semibold text-ink">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.saasIcon && <span>{row.saasIcon}</span>}
                        <span className="font-sans text-sm text-neutral-700">{row.saas}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.fullControlIcon && <span>{row.fullControlIcon}</span>}
                        <span className="font-sans text-sm text-neutral-700">{row.fullControl}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-pricing hover:shadow-pricing-hover hover:border-brand-200 transition-all duration-300 animate-fadeInUp">
            <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <CheckIcon className="h-5 w-5" />
              </span>
              {language === 'fr' ? 'Choisir SaaS si :' : 'Choose SaaS if:'}
            </h3>
            <ul className="space-y-3 font-sans text-sm text-neutral-600">
              {[
                language === 'fr' ? 'Budget mensuel limité' : 'Limited monthly budget',
                language === 'fr' ? "Pas d'équipe technique" : 'No technical team',
                language === 'fr' ? 'Besoin de support continu' : 'Need for continuous support',
                language === 'fr' ? 'Mise en production rapide (15 jours max)' : 'Quick production launch (15 days max)',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 font-bold">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-pricing hover:shadow-pricing-hover hover:border-brand-200 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '80ms' }}>
            <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <CheckIcon className="h-5 w-5" />
              </span>
              {language === 'fr' ? 'Choisir Full-Control si :' : 'Choose Full-Control if:'}
            </h3>
            <ul className="space-y-3 font-sans text-sm text-neutral-600">
              {[
                language === 'fr' ? 'Budget disponible pour investissement initial' : 'Budget available for initial investment',
                language === 'fr' ? 'Équipe technique disponible' : 'Technical team available',
                language === 'fr' ? "Besoin d'autonomie totale" : 'Need for total autonomy',
                language === 'fr' ? 'Propriété intellectuelle critique' : 'Critical intellectual property',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 font-bold">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
