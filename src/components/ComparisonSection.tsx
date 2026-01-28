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
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
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
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
    },
    {
      criterion: language === 'fr' ? 'Modifications' : 'Modifications',
      saas: language === 'fr' ? 'Interdites' : 'Not allowed',
      fullControl: language === 'fr' ? 'Autorisées' : 'Allowed',
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
    },
    {
      criterion: language === 'fr' ? 'Revente' : 'Resale',
      saas: language === 'fr' ? 'Interdite' : 'Not allowed',
      fullControl: language === 'fr' ? 'Autorisée' : 'Allowed',
      saasIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
      fullControlIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
    },
    {
      criterion: language === 'fr' ? 'Support' : 'Support',
      saas: language === 'fr' ? 'Inclus dans l\'abonnement' : 'Included in subscription',
      fullControl: language === 'fr' ? 'Période limitée (1-6 mois)' : 'Limited period (1-6 months)',
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
    },
    {
      criterion: language === 'fr' ? 'Mises à jour' : 'Updates',
      saas: language === 'fr' ? 'Incluses dans l\'abonnement' : 'Included in subscription',
      fullControl: language === 'fr' ? 'Client gère' : 'Client manages',
      saasIcon: <CheckIcon className="h-5 w-5 text-brand-500" />,
      fullControlIcon: <XMarkIcon className="h-5 w-5 text-neutral-400" />,
    },
    {
      criterion: language === 'fr' ? 'Délai de livraison' : 'Delivery time',
      saas: language === 'fr' ? '15 jours maximum' : '15 days maximum',
      fullControl: language === 'fr' ? '65-180 jours selon forfait' : '65-180 days depending on plan',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-brand-100 text-brand-600">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              {language === 'fr' ? 'Comparaison' : 'Comparison'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr'
              ? 'SaaS vs Full-Control : Quelle solution choisir ?'
              : 'SaaS vs Full-Control: Which solution to choose?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Comparez les deux modèles pour trouver celui qui correspond le mieux à vos besoins.'
              : 'Compare both models to find the one that best fits your needs.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-6 font-display font-semibold text-ink">
                    {language === 'fr' ? 'Critère' : 'Criterion'}
                  </th>
                  <th className="text-center py-4 px-6 font-display font-semibold text-ink">
                    SaaS
                  </th>
                  <th className="text-center py-4 px-6 font-display font-semibold text-ink">
                    Full-Control
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-neutral-100 ${
                      index % 2 === 0 ? 'bg-neutral-50/50' : 'bg-white'
                    }`}
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
                        <span className="font-sans text-sm text-neutral-700">
                          {row.fullControl}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle">
            <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
              <CheckIcon className="h-6 w-6 text-brand-500" />
              {language === 'fr' ? 'Choisir SaaS si :' : 'Choose SaaS if:'}
            </h3>
            <ul className="space-y-2 font-sans text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Budget mensuel limité'
                    : 'Limited monthly budget'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Pas d\'équipe technique'
                    : 'No technical team'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Besoin de support continu'
                    : 'Need for continuous support'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Mise en production rapide (15 jours max)'
                    : 'Quick production launch (15 days max)'}
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle">
            <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
              <CheckIcon className="h-6 w-6 text-brand-500" />
              {language === 'fr' ? 'Choisir Full-Control si :' : 'Choose Full-Control if:'}
            </h3>
            <ul className="space-y-2 font-sans text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Budget disponible pour investissement initial'
                    : 'Budget available for initial investment'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Équipe technique disponible'
                    : 'Technical team available'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Besoin d\'autonomie totale'
                    : 'Need for total autonomy'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>
                  {language === 'fr'
                    ? 'Propriété intellectuelle critique'
                    : 'Critical intellectual property'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
