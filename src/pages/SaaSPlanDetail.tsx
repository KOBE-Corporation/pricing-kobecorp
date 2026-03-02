import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import {
  ArrowLeftIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  UserIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { saasPlans } from '../data/saasPlans';
import { companyInfo } from '../data/companyInfo';

const VALID_PLAN_IDS = ['good-deal', 'pro', 'ultra'] as const;

const annualPrices: Record<(typeof VALID_PLAN_IDS)[number], number> = {
  'good-deal': 156000,
  pro: 282400,
  ultra: 430800,
};

const annualSavingsByPlan: Record<(typeof VALID_PLAN_IDS)[number], number> = {
  'good-deal': 30000,
  pro: 50000,
  ultra: 60000,
};

interface FormData {
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
}

/* Logos des moyens de paiement (représentations officielles) */
const OrangeMoneyLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF6600" />
    <text x="20" y="26" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial,sans-serif">OM</text>
  </svg>
);

const MTNMobileMoneyLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FFCC00" />
    <text x="20" y="26" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Arial,sans-serif">MTN</text>
  </svg>
);

const VisaLogo = ({ className = 'w-12 h-8' }: { className?: string }) => (
  <svg viewBox="0 0 48 16" className={className} fill="#1A1F71" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="12" fontSize="14" fontWeight="700" fontFamily="Arial,sans-serif">VISA</text>
  </svg>
);

const MastercardLogo = ({ className = 'w-12 h-8' }: { className?: string }) => (
  <svg viewBox="0 0 48 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="16" r="12" fill="#EB001B" />
    <circle cx="30" cy="16" r="12" fill="#F79E1B" />
    <path d="M24 6.5a12 12 0 0 1 0 19 12 12 0 0 1 0-19z" fill="#FF5F00" opacity=".9" />
  </svg>
);

const inputBaseClass =
  'w-full h-12 pl-12 pr-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/25 focus:border-[#0a7aff] focus:bg-white transition-all duration-200';

const SaaSPlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plan =
    planId && VALID_PLAN_IDS.includes(planId as (typeof VALID_PLAN_IDS)[number])
      ? saasPlans.find((p) => p.id === planId)
      : null;

  useSEO({
    title: plan
      ? `${language === 'fr' ? 'Souscrire' : 'Subscribe'} – ${plan.name} | KOBE Corporation`
      : 'Forfait SaaS | KOBE Corporation',
    description:
      plan?.description ?? 'Souscrivez au forfait SaaS KOBE Corporation.',
    path: `/saas/${planId ?? ''}`,
  });

  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatAmount = (n: number) =>
    n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

  const whatsappMessage = plan
    ? encodeURIComponent(
        language === 'fr'
          ? `Bonjour, je souhaite en savoir plus sur le forfait SaaS "${plan.name}" (${formatAmount(plan.price)} ${plan.currency}/${plan.period}).`
          : `Hello, I would like to know more about the SaaS plan "${plan.name}" (${formatAmount(plan.price)} ${plan.currency}/${plan.period}).`
      )
    : '';
  const whatsappLink = `https://wa.me/237655938501?text=${whatsappMessage}`;
  const mailSubject = plan
    ? encodeURIComponent(
        language === 'fr'
          ? `En savoir plus – Forfait SaaS ${plan.name}`
          : `Learn more – SaaS Plan ${plan.name}`
      )
    : '';
  const mailtoLink = `mailto:${companyInfo.contact.email}?subject=${mailSubject}`;

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] antialiased flex flex-col items-center justify-center px-6 safe-area-padding">
        <p className="text-neutral-600 mb-6 text-center">
          {t('Forfait introuvable.', 'Plan not found.')}
        </p>
        <Link
          to="/saas"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a7aff] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 active:scale-[0.98] transition"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          {t('Retour aux forfaits', 'Back to plans')}
        </Link>
      </div>
    );
  }

  const annualPriceForPlan = annualPrices[plan.id as (typeof VALID_PLAN_IDS)[number]];
  const savingsForPlan = annualSavingsByPlan[plan.id as (typeof VALID_PLAN_IDS)[number]];
  const isAnnual = billingPeriod === 'annual';
  const currentPrice = isAnnual && annualPriceForPlan ? annualPriceForPlan : plan.price;
  const currentPeriodLabel =
    isAnnual && annualPriceForPlan
      ? language === 'fr'
        ? 'an'
        : 'year'
      : language === 'fr'
        ? 'mois'
        : 'month';
  const effectiveMonthlyPrice =
    isAnnual && annualPriceForPlan ? Math.round(annualPriceForPlan / 12) : plan.price;

  return (
    <div className="min-h-screen bg-black text-white antialiased flex flex-col lg:flex-row">
      {/* Colonne gauche : récap du forfait */}
      <aside className="w-full lg:max-w-md xl:max-w-lg bg-black px-5 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-10 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => navigate('/saas')}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 active:scale-95 transition touch-manipulation"
            aria-label={t('Retour', 'Back')}
          >
            <ArrowLeftIcon className="h-5 w-5 text-white" />
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
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
          <div className="mt-4 inline-flex p-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-[13px]">
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-1.5 rounded-full font-semibold transition ${
                !isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-300 hover:bg-white/5'
              }`}
            >
              {language === 'fr' ? 'Mensuel' : 'Monthly'}
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-1.5 rounded-full font-semibold transition ${
                isAnnual ? 'bg-white text-black shadow-sm' : 'text-neutral-300 hover:bg-white/5'
              }`}
            >
              {language === 'fr' ? 'Annuel' : 'Annual'}
            </button>
          </div>

          {isAnnual && savingsForPlan && (
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
          <div className="inline-flex items-center rounded-full bg-white/5 p-1 border border-white/10 text-xs sm:text-sm">
            <button
              type="button"
              className="px-4 py-1.5 rounded-full bg-white text-black font-semibold shadow-sm"
            >
              XAF
            </button>
            <button
              type="button"
              className="px-4 py-1.5 rounded-full text-neutral-300 hover:bg-white/5 transition"
            >
              USD
            </button>
          </div>

          <p className="mt-2 text-[11px] text-neutral-500 max-w-xs">
            {t(
              'Les frais peuvent varier en fonction du taux de change.',
              'Fees may vary depending on the exchange rate.'
            )}
          </p>

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
                {isAnnual && savingsForPlan
                  ? language === 'fr'
                    ? `Vous profitez déjà d'une remise d'environ ${formatAmount(
                        savingsForPlan,
                      )} ${plan.currency} par an.`
                    : `You are already saving about ${formatAmount(
                        savingsForPlan,
                      )} ${plan.currency} per year.`
                  : t(
                      'Passez en facturation annuelle pour bénéficier de réductions importantes.',
                      'Switch to annual billing to benefit from significant savings.',
                    )}
              </p>
            </div>

            <dl className="space-y-2 text-sm text-neutral-200">
              <div className="flex items-center justify-between">
                <dt className="text-neutral-400">{t('Sous-total', 'Subtotal')}</dt>
                <dd>
                  {formatAmount(currentPrice)} {plan.currency}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-400">{t('Taxes', 'Tax')}</dt>
                <dd>{t('0 FCFA', '0')}</dd>
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

      {/* Colonne droite : coordonnées + paiement */}
      <section className="flex-1 bg-[#f5f5f7] text-neutral-900 flex items-stretch">
        <div className="w-full max-w-xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-14">
          {/* Bouton de paiement rapide (visuel) */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              className="w-full h-12 sm:h-14 rounded-full bg-[#00B75A] text-white font-semibold text-[15px] flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30"
            >
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-black/20 text-[11px] uppercase tracking-wide font-semibold">
                <span>link</span>
                <span className="px-1.5 py-0.5 rounded bg-white text-[#00B75A] text-[10px] font-semibold">
                  VISA
                </span>
              </span>
              <span>
                {t(
                  'Paiement Link (bientôt disponible)',
                  'Link payment (coming soon)',
                )}
              </span>
            </button>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex-1 h-px bg-neutral-300" />
              <span className="text-[11px] font-medium text-neutral-500 tracking-[0.15em] uppercase">
                {t('ou', 'or')}
              </span>
              <div className="flex-1 h-px bg-neutral-300" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitAttempted(true);
              if (!paymentMethod) return;
              // Intégration paiement future : pour l'instant, simple no-op.
            }}
            className="space-y-8 sm:space-y-9"
          >
            {/* Coordonnées */}
            <section>
              <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
                {t('Coordonnées', 'Contact details')}
              </h2>
              <div className="mt-4 bg-white rounded-3xl border border-neutral-200/80 shadow-sm p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <label className="block relative">
                    <span className="sr-only">{t('Nom', 'Last name')}</span>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                      <UserIcon className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className={inputBaseClass}
                      placeholder={t('Nom', 'Last name')}
                      required
                    />
                  </label>
                  <label className="block relative">
                    <span className="sr-only">{t('Prénom', 'First name')}</span>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                      <UserIcon className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className={inputBaseClass}
                      placeholder={t('Prénom', 'First name')}
                      required
                    />
                  </label>
                </div>

                <label className="block relative">
                  <span className="sr-only">{t('Date de naissance', 'Date of birth')}</span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                    <CalendarDaysIcon className="w-5 h-5" />
                  </span>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => updateField('birthDate', e.target.value)}
                    className={inputBaseClass}
                    required
                  />
                </label>

                <label className="block">
                  <span className="sr-only">{t('Sexe', 'Gender')}</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10">
                      <UserIcon className="w-5 h-5" />
                    </span>
                    <select
                      value={formData.gender}
                      onChange={(e) => updateField('gender', e.target.value)}
                      className={`${inputBaseClass} appearance-none pr-12`}
                      required
                    >
                      <option value="">
                        {t('Sexe', 'Gender')} — {t('Sélectionner', 'Select')}
                      </option>
                      <option value="male">{t('Homme', 'Male')}</option>
                      <option value="female">{t('Femme', 'Female')}</option>
                      <option value="other">{t('Autre', 'Other')}</option>
                    </select>
                    <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                  </div>
                </label>

                <label className="block relative">
                  <span className="sr-only">{t('Téléphone', 'Phone')}</span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                    <PhoneIcon className="w-5 h-5" />
                  </span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputBaseClass}
                    placeholder="+237 6 00 00 00 00"
                    required
                  />
                </label>

                <label className="block relative">
                  <span className="sr-only">Email</span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                    <EnvelopeIcon className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={inputBaseClass}
                    placeholder="vous@exemple.com"
                    required
                  />
                </label>
              </div>
            </section>

            {/* Moyen de paiement */}
            <section>
              <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
                {t('Moyen de paiement', 'Payment method')}
              </h2>
              <div className="mt-4 space-y-3">
                {/* Orange Money */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('orange')}
                  className={`w-full flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 touch-manipulation ${
                    paymentMethod === 'orange'
                      ? 'border-[#0a7aff] bg-[#0a7aff]/5 shadow-sm'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 shadow-sm">
                    <OrangeMoneyLogo className="w-10 h-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-900">Orange Money</p>
                    <p className="text-sm text-neutral-500">
                      {t('Paiement mobile Orange', 'Orange mobile payment')}
                    </p>
                  </div>
                  {paymentMethod === 'orange' && (
                    <span className="w-7 h-7 rounded-full bg-[#0a7aff] flex items-center justify-center shrink-0">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </span>
                  )}
                </button>

                {/* MTN Mobile Money */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mtn')}
                  className={`w-full flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 touch-manipulation ${
                    paymentMethod === 'mtn'
                      ? 'border-[#0a7aff] bg-[#0a7aff]/5 shadow-sm'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 shadow-sm">
                    <MTNMobileMoneyLogo className="w-10 h-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-900">Mobile Money</p>
                    <p className="text-sm text-neutral-500">
                      {t('MTN Mobile Money', 'MTN Mobile Money')}
                    </p>
                  </div>
                  {paymentMethod === 'mtn' && (
                    <span className="w-7 h-7 rounded-full bg-[#0a7aff] flex items-center justify-center shrink-0">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </span>
                  )}
                </button>

                {/* Visa — Bientôt */}
                <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-70 cursor-not-allowed select-none">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 p-2">
                    <VisaLogo className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-600">Visa</p>
                    <p className="text-sm text-neutral-500">
                      {t('Carte bancaire Visa', 'Visa card')}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600 shrink-0">
                    {t('Bientôt disponible', 'Coming soon')}
                  </span>
                </div>

                {/* Mastercard — Bientôt */}
                <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-70 cursor-not-allowed select-none">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 p-1.5">
                    <MastercardLogo className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-600">Mastercard</p>
                    <p className="text-sm text-neutral-500">
                      {t('Carte bancaire Mastercard', 'Mastercard')}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600 shrink-0">
                    {t('Bientôt disponible', 'Coming soon')}
                  </span>
                </div>

                {submitAttempted && !paymentMethod && (
                  <p className="text-xs text-red-500">
                    {t('Veuillez choisir un moyen de paiement.', 'Please choose a payment method.')}
                  </p>
                )}
              </div>
            </section>

            {/* Validation + CTA */}
            <section className="space-y-4">
              <label className="flex items-start gap-3 text-xs text-neutral-600">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
                  required
                />
                <span>
                  {t(
                    "J'accepte les conditions d'utilisation et la politique de confidentialité de KOBE Corporation.",
                    "I agree to KOBE Corporation's terms of use and privacy policy."
                  )}
                </span>
              </label>

              <button
                type="submit"
                className="w-full h-12 sm:h-14 rounded-full bg-black text-white text-[15px] font-semibold shadow-lg shadow-black/25 active:scale-[0.99] transition touch-manipulation disabled:opacity-50"
              >
                {t("S'abonner", 'Subscribe')}
              </button>

              <p className="text-[11px] leading-relaxed text-neutral-500">
                {t(
                  "En vous abonnant, vous autorisez KOBE Corporation à vous débiter au montant indiqué ci-dessus, selon la fréquence choisie. Vous pouvez modifier ou annuler votre abonnement à tout moment en nous contactant.",
                  'By subscribing, you authorize KOBE Corporation to charge you the amount shown above at the selected frequency. You can change or cancel your subscription at any time by contacting us.'
                )}
              </p>

              <p className="text-[11px] text-neutral-500">
                {t('Besoin d’aide ?', 'Need help?')}{' '}
                <a
                  href={mailtoLink}
                  className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800"
                >
                  Email
                </a>{' '}
                ·{' '}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800"
                >
                  WhatsApp
                </a>
              </p>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SaaSPlanDetail;
