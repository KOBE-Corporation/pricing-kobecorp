import { useState } from 'react';
import { ArrowLeftIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import type { PricingPlan } from '../../types/pricing';

type CurrencyCode = 'XAF' | 'USD' | 'EUR';

export type PlanSummaryAsideProps = {
  plan: PricingPlan;
  setBillingPeriod: (period: 'monthly' | 'annual') => void;
  language: string;
  domainSlug: string;
  isAnnual: boolean;
  currentPrice: number;
  currentPeriodLabel: string;
  effectiveMonthlyPrice: number;
  savingsForPlan: number | undefined;
  t: (fr: string, en: string) => string;
  formatAmount: (n: number) => string;
  onBack: () => void;
  onToggleLanguage: () => void;
};

export function PlanSummaryAside({
  plan,
  setBillingPeriod,
  language,
  domainSlug,
  isAnnual,
  currentPrice,
  currentPeriodLabel,
  effectiveMonthlyPrice,
  savingsForPlan,
  t,
  formatAmount,
  onBack,
  onToggleLanguage,
}: PlanSummaryAsideProps) {
  const [currency, setCurrency] = useState<CurrencyCode>('XAF');

  return (
    <aside className="w-full lg:max-w-md xl:max-w-lg bg-black px-5 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-10 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 active:scale-95 transition touch-manipulation"
          aria-label={t('Retour', 'Back')}
        >
          <ArrowLeftIcon className="h-5 w-5 text-white" />
        </button>
        <button
          type="button"
          onClick={onToggleLanguage}
          className="flex items-center justify-center gap-1 h-9 px-3 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-neutral-200 transition touch-manipulation"
          aria-label={t('Changer la langue', 'Change language')}
        >
          <GlobeAltIcon className="h-4 w-4" />
          <span>{language.toUpperCase()}</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-xs sm:text-sm text-neutral-400 mb-1">
          {t("S'abonner à", 'Subscribe to')}
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight">
          {plan.name}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-md">
          {plan.description}
        </p>

        {/* Toggle mensuel / annuel */}
        <div
          role="group"
          aria-label={t('Fréquence de facturation', 'Billing frequency')}
          className="mt-4 inline-flex p-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-[13px]"
        >
          <button
            type="button"
            onClick={() => setBillingPeriod('monthly')}
            aria-pressed={!isAnnual}
            className={`px-4 py-1.5 rounded-full font-semibold transition ${
              !isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-300 hover:bg-white/5'
            }`}
          >
            {language === 'fr' ? 'Mensuel' : 'Monthly'}
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod('annual')}
            aria-pressed={isAnnual}
            className={`px-4 py-1.5 rounded-full font-semibold transition ${
              isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-300 hover:bg-white/5'
            }`}
          >
            {language === 'fr' ? 'Annuel' : 'Annual'}
          </button>
        </div>

        {isAnnual && savingsForPlan !== undefined && savingsForPlan > 0 && (
          <p className="mt-2 text-xs text-emerald-400">
            {language === 'fr'
              ? `Vous économisez environ ${formatAmount(savingsForPlan)} ${plan.currency} par an.`
              : `You save about ${formatAmount(savingsForPlan)} ${plan.currency} per year.`}
          </p>
        )}

        <div className="mt-7 mb-6">
          <div className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {formatAmount(currentPrice)} {plan.currency}
          </div>
          <p className="mt-2 text-sm text-neutral-400">
            {t('par', 'per')} {currentPeriodLabel}
          </p>
          {isAnnual && (
            <p className="mt-1 text-[11px] text-neutral-400">
              {language === 'fr'
                ? `Soit environ ${formatAmount(effectiveMonthlyPrice)} ${plan.currency} / mois.`
                : `Around ${formatAmount(effectiveMonthlyPrice)} ${plan.currency} / month.`}
            </p>
          )}
        </div>

        {/* Sélecteur de devise (visuel uniquement) */}
        <div
          role="group"
          aria-label={t("Devise d'affichage des prix", 'Currency for price display')}
          className="inline-flex items-center rounded-full bg-white/5 p-1 border border-white/10 text-xs sm:text-sm"
        >
          <button
            type="button"
            onClick={() => setCurrency('XAF')}
            aria-pressed={currency === 'XAF'}
            className={`px-4 py-1.5 rounded-full font-semibold shadow-sm transition ${
              currency === 'XAF' ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/5'
            }`}
          >
            XAF
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            aria-pressed={currency === 'USD'}
            className={`px-4 py-1.5 rounded-full font-semibold transition ${
              currency === 'USD' ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/5'
            }`}
          >
            USD
          </button>
          <button
            type="button"
            disabled
            aria-pressed={false}
            aria-disabled="true"
            className="px-4 py-1.5 rounded-full text-neutral-500 opacity-60 cursor-not-allowed"
            title={t('Bientôt disponible', 'Coming soon')}
          >
            EUR
          </button>
        </div>

        <p className="mt-2 text-[11px] text-neutral-500 max-w-xs">
          {t(
            'Les frais peuvent varier en fonction du taux de change.',
            'Fees may vary depending on the exchange rate.'
          )}
        </p>

        {/* Info nom de domaine selon mensuel / annuel */}
        <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5 text-[11px] sm:text-xs text-neutral-300 space-y-1">
          {isAnnual ? (
            <>
              <p className="font-medium text-neutral-200">
                {t('Facturation annuelle', 'Annual billing')}
              </p>
              <p>
                {t(
                  'Votre nom de domaine sera au format :',
                  'Your domain name will be in the form:'
                )}{' '}
                <span className="font-mono text-white/90">{domainSlug}.com</span>
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-neutral-200">
                {t('Facturation mensuelle', 'Monthly billing')}
              </p>
              <p>
                {t(
                  'Sous-domaine kb-saas.com — format : nom_entreprise.kb-saas.com. Votre URL :',
                  'Subdomain kb-saas.com — format: business_name.kb-saas.com. Your URL:'
                )}{' '}
                <span className="font-mono text-white/90">{domainSlug}.kb-saas.com</span>
              </p>
            </>
          )}
        </div>

        {/* Carte récap forfait */}
        <div className="mt-8 bg-[#0a0a0a] rounded-3xl border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <div className="w-5 h-5 rounded-xl bg-gradient-to-br from-white to-white/40" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{plan.name}</p>
                <p className="mt-0.5 text-[11px] text-neutral-400 line-clamp-2">
                  {plan.description}
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold">
                {formatAmount(currentPrice)} {plan.currency}
              </p>
              <p className="mt-0.5 text-[11px] text-neutral-500">
                {t('Facturé', 'Billed')} {currentPeriodLabel}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/50 px-3 py-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-[11px] font-semibold">
              %
            </span>
            <p className="text-xs text-emerald-100">
              {isAnnual && savingsForPlan !== undefined && savingsForPlan > 0
                ? language === 'fr'
                  ? `Vous profitez déjà d'une remise de ${formatAmount(savingsForPlan)} ${plan.currency} par an.`
                  : `You are already saving ${formatAmount(savingsForPlan)} ${plan.currency} per year.`
                : t(
                    'Passez en facturation annuelle pour bénéficier de réductions importantes.',
                    'Switch to annual billing to benefit from significant savings.'
                  )}
            </p>
          </div>

          {isAnnual && (
            <div className="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5 text-[11px] sm:text-xs text-neutral-300">
              <p>
                {t(
                  "Pendant 12 mois, il n'y a pas de prélèvement de taxes sur les forfaits.",
                  'For 12 months, there is no tax deduction on the plans.'
                )}
              </p>
            </div>
          )}

          <dl className="space-y-2 text-sm text-neutral-200">
            <div className="flex items-center justify-between">
              <dt className="text-neutral-400">{t('Sous-total', 'Subtotal')}</dt>
              <dd>
                {formatAmount(currentPrice)} {plan.currency}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-neutral-400">{t('TVA', 'VAT')}</dt>
              <dd>0 %</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-neutral-400">{t('Autres taxes', 'Other taxes')}</dt>
              <dd>0 %</dd>
            </div>
            <div className="pt-1 mt-1 border-t border-white/5 flex items-center justify-between">
              <dt className="font-semibold">{t("Total dû aujourd'hui", 'Total due today')}</dt>
              <dd className="font-semibold">
                {formatAmount(currentPrice)} {plan.currency}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500 space-y-1">
        <p>
          {t(
            'KOBE Corporation sécurise vos paiements et protège vos données personnelles.',
            'KOBE Corporation secures your payments and protects your personal data.'
          )}
        </p>
      </div>
    </aside>
  );
}
