import { GlobeAltIcon } from '@heroicons/react/24/outline';
import type { SaaSPlanFormData } from '../../types/saasForm';

type DomainSectionProps = {
  formData: SaaSPlanFormData;
  updateField: (field: keyof SaaSPlanFormData, value: string) => void;
  domainSlug: string;
  isAnnual: boolean;
  t: (fr: string, en: string) => string;
};

export function DomainSection({ formData, updateField, domainSlug, isAnnual, t }: DomainSectionProps) {
  return (
    <section>
      <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
        {t('Informations du compte', 'Account information')}
      </h2>
      <div className="mt-4 bg-white rounded-3xl border border-neutral-200/80 shadow-sm p-4 sm:p-5 space-y-3 sm:space-y-4">
        <label className="block relative">
          <span className="sr-only">{t('Nom de domaine souhaité', 'Desired domain name')}</span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            <GlobeAltIcon className="w-5 h-5" />
          </span>
          <input
            type="text"
            value={formData.domainName}
            onChange={(e) => updateField('domainName', e.target.value)}
            className="input-base-form"
            placeholder={t('ex: mon-entreprise', 'e.g. my-company')}
            required
          />
        </label>
        {isAnnual ? (
          <>
            <p className="text-sm text-neutral-600">
              {t(
                'Votre nom de domaine sera au format : nom_domaine.com',
                'Your domain name will be in the form: domain_name.com'
              )}
            </p>
            <p className="text-base font-medium text-neutral-900 font-mono bg-neutral-50 rounded-xl px-4 py-2 border border-neutral-200">
              https://{domainSlug}.com
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-neutral-600">
              {t(
                'Sous-domaine kb-saas.com — format : nom_entreprise.kb-saas.com',
                'Subdomain kb-saas.com — format: business_name.kb-saas.com'
              )}
            </p>
            <p className="text-base font-medium text-neutral-900 font-mono bg-neutral-50 rounded-xl px-4 py-2 border border-neutral-200">
              https://{domainSlug}.kb-saas.com
            </p>
          </>
        )}
        <p className="text-xs text-neutral-500 leading-relaxed">
          {t(
            "Les services de vérification s'assureront de la disponibilité de ce nom de domaine. En cas d'indisponibilité, nous vous contacterons à l'adresse e-mail renseignée.",
            "Verification services will check the availability of this domain name. If unavailable, we will contact you at the email address provided."
          )}
        </p>
      </div>
    </section>
  );
}
