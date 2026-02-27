import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeftIcon, GlobeAltIcon, CreditCardIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { saasPlans } from '../data/saasPlans';
import { companyInfo } from '../data/companyInfo';

const VALID_PLAN_IDS = ['good-deal', 'pro', 'ultra'] as const;

type FormStep = 1 | 2;

interface FormData {
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
}

const SaaSPlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<string>('');

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

  const handleNext = () => {
    setStep(2);
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
      <div className="min-h-screen bg-[#f5f5f7] antialiased flex flex-col items-center justify-center px-4">
        <p className="text-neutral-600 mb-6">
          {t('Forfait introuvable.', 'Plan not found.')}
        </p>
        <Link
          to="/saas"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a7aff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 active:scale-[0.98] transition"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          {t('Retour aux forfaits', 'Back to plans')}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] antialiased">
      {/* Header spécial page */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-200/80 safe-area-inset-top">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/saas')}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 active:scale-95 transition"
            aria-label={t('Retour', 'Back')}
          >
            <ArrowLeftIcon className="h-5 w-5 text-neutral-700" />
          </button>
          <h1 className="text-[17px] font-semibold text-neutral-900 truncate max-w-[50%]">
            {t('Souscrire au forfait', 'Subscribe to plan')}
          </h1>
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 active:scale-95 transition"
            aria-label={t('Changer la langue', 'Change language')}
          >
            <GlobeAltIcon className="h-5 w-5 text-neutral-600" />
            <span className="sr-only">{language.toUpperCase()}</span>
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-12">
        {/* Indicateur d’étape */}
        <div className="flex gap-2 mb-8">
          <div
            className={`h-1 flex-1 rounded-full transition-colors ${
              step >= 1 ? 'bg-[#0a7aff]' : 'bg-neutral-200'
            }`}
          />
          <div
            className={`h-1 flex-1 rounded-full transition-colors ${
              step >= 2 ? 'bg-[#0a7aff]' : 'bg-neutral-200'
            }`}
          />
        </div>

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">
              {t('Vos informations', 'Your information')}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className="space-y-4"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                        {t('Nom', 'Last name')}
                      </span>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition"
                        placeholder={t('Dupont', 'Doe')}
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                        {t('Prénom', 'First name')}
                      </span>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition"
                        placeholder={t('Jean', 'John')}
                        required
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                      {t('Date de naissance', 'Date of birth')}
                    </span>
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => updateField('birthDate', e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                      {t('Sexe', 'Gender')}
                    </span>
                    <div className="relative">
                      <select
                        value={formData.gender}
                        onChange={(e) => updateField('gender', e.target.value)}
                        className="w-full h-12 pl-4 pr-12 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition appearance-none"
                        required
                      >
                        <option value="">
                          {t('Sélectionner', 'Select')}
                        </option>
                        <option value="male">{t('Homme', 'Male')}</option>
                        <option value="female">{t('Femme', 'Female')}</option>
                        <option value="other">{t('Autre', 'Other')}</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                    </div>
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                      {t('Téléphone', 'Phone')}
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition"
                      placeholder="+237 6 00 00 00 00"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-neutral-500 mb-1.5">
                      Email
                    </span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a7aff]/30 focus:border-[#0a7aff] transition"
                      placeholder="vous@exemple.com"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Forfait choisi (lecture seule) */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-4">
                <p className="text-sm font-medium text-neutral-500 mb-2">
                  {t('Forfait sélectionné', 'Selected plan')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[17px] font-semibold text-neutral-900">
                    {plan.name}
                  </span>
                  <span className="text-[15px] font-medium text-[#0a7aff]">
                    {formatAmount(plan.price)} {plan.currency} / {plan.period}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-[#0a7aff] text-white text-[17px] font-semibold shadow-lg shadow-blue-500/25 active:scale-[0.99] transition"
              >
                {t('Suivant', 'Next')}
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                {t('Mode de paiement', 'Payment method')}
              </h2>
              <p className="text-[15px] text-neutral-500">
                {t(
                  'Choisissez comment régler votre abonnement.',
                  'Choose how to pay for your subscription.'
                )}
              </p>
            </div>

            <div className="space-y-3">
              {/* Orange Money */}
              <button
                type="button"
                onClick={() => setPaymentMethod('orange')}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition ${
                  paymentMethod === 'orange'
                    ? 'border-[#0a7aff] bg-[#0a7aff]/5'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff6600] flex items-center justify-center text-white font-bold text-lg">
                  OM
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Orange Money</p>
                  <p className="text-sm text-neutral-500">
                    {t('Paiement mobile Orange', 'Orange mobile payment')}
                  </p>
                </div>
                {paymentMethod === 'orange' && (
                  <span className="w-6 h-6 rounded-full bg-[#0a7aff] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Mobile Money (MTN) */}
              <button
                type="button"
                onClick={() => setPaymentMethod('mtn')}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition ${
                  paymentMethod === 'mtn'
                    ? 'border-[#0a7aff] bg-[#0a7aff]/5'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffcc00] flex items-center justify-center text-[#000] font-bold text-sm">
                  M
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Mobile Money</p>
                  <p className="text-sm text-neutral-500">
                    {t('MTN Mobile Money', 'MTN Mobile Money')}
                  </p>
                </div>
                {paymentMethod === 'mtn' && (
                  <span className="w-6 h-6 rounded-full bg-[#0a7aff] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Visa - bientôt */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-75 cursor-not-allowed">
                <div className="w-12 h-12 rounded-xl bg-[#1a1f71] flex items-center justify-center">
                  <CreditCardIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-700">Visa</p>
                  <p className="text-sm text-neutral-500">
                    {t('Carte bancaire Visa', 'Visa card')}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600">
                  {t('Bientôt disponible', 'Coming soon')}
                </span>
              </div>

              {/* Mastercard - bientôt */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-75 cursor-not-allowed">
                <div className="w-12 h-12 rounded-xl bg-[#eb001b] flex items-center justify-center">
                  <CreditCardIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-700">Mastercard</p>
                  <p className="text-sm text-neutral-500">
                    {t('Carte bancaire Mastercard', 'Mastercard')}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600">
                  {t('Bientôt disponible', 'Coming soon')}
                </span>
              </div>
            </div>

            {/* En savoir plus sur ce forfait */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
              <div className="p-4 border-b border-neutral-100">
                <h3 className="text-[17px] font-semibold text-neutral-900">
                  {t('En savoir plus sur ce forfait', 'Learn more about this plan')}
                </h3>
                <p className="text-sm text-neutral-500 mt-0.5">
                  {t(
                    'Discutez avec nous par email ou WhatsApp.',
                    'Contact us by email or WhatsApp.'
                  )}
                </p>
              </div>
              <div className="flex">
                <a
                  href={mailtoLink}
                  className="flex-1 flex items-center justify-center gap-2 py-4 text-[#0a7aff] font-medium text-[15px] hover:bg-neutral-50 transition border-r border-neutral-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('Discuter par mail', 'Discuss by email')}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 text-[#25D366] font-medium text-[15px] hover:bg-neutral-50 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t('Discuter sur WhatsApp', 'Discuss on WhatsApp')}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 h-14 rounded-2xl border-2 border-neutral-200 text-neutral-700 font-semibold text-[17px] hover:bg-neutral-50 active:scale-[0.99] transition"
              >
                {t('Retour', 'Back')}
              </button>
              <button
                type="button"
                disabled={!paymentMethod}
                className="flex-1 h-14 rounded-2xl bg-[#0a7aff] text-white text-[17px] font-semibold shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] transition"
              >
                {t('Confirmer', 'Confirm')}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SaaSPlanDetail;
