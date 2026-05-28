import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/useLanguage';
import { useSEO } from '../hooks/useSEO';
import { saasPlans } from '../data/saasPlans';
import { companyInfo } from '../data/companyInfo';
import type { SaaSPlanFormData } from '../types/saasForm';
import { PlanNotFound } from '../components/saas/PlanNotFound';
import { PlanSummaryAside } from '../components/saas/PlanSummaryAside';
import { ContactFormSection } from '../components/saas/ContactFormSection';
import { DomainSection } from '../components/saas/DomainSection';
import { PaymentMethodGrid } from '../components/saas/PaymentMethodGrid';

const SaaSPlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [formData, setFormData] = useState<SaaSPlanFormData>({
    lastName: '',
    firstName: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: '',
    domainName: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plan = planId ? (saasPlans.find((p) => p.id === planId) ?? null) : null;

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

  const updateField = (field: keyof SaaSPlanFormData, value: string) => {
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
    return <PlanNotFound t={t} />;
  }

  const annualPriceForPlan = plan.annualPrice;
  const savingsForPlan = plan.annualSavings;
  const isAnnual = billingPeriod === 'annual';
  const currentPrice =
    isAnnual && annualPriceForPlan !== undefined ? annualPriceForPlan : plan.price;
  const currentPeriodLabel =
    isAnnual && annualPriceForPlan !== undefined
      ? language === 'fr'
        ? 'an'
        : 'year'
      : language === 'fr'
        ? 'mois'
        : 'month';
  const effectiveMonthlyPrice =
    isAnnual && annualPriceForPlan !== undefined
      ? Math.round(annualPriceForPlan / 12)
      : plan.price;

  const domainSlug =
    formData.domainName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\.(com|net|org|kb-saas\.com)$/i, '')
      .replace(/[^a-z0-9-]/g, '') || 'votre-domaine';

  return (
    <div className="min-h-screen bg-black text-white antialiased flex flex-col lg:flex-row">
      <PlanSummaryAside
        plan={plan}
        setBillingPeriod={setBillingPeriod}
        language={language}
        domainSlug={domainSlug}
        isAnnual={isAnnual}
        currentPrice={currentPrice}
        currentPeriodLabel={currentPeriodLabel}
        effectiveMonthlyPrice={effectiveMonthlyPrice}
        savingsForPlan={savingsForPlan}
        t={t}
        formatAmount={formatAmount}
        onBack={() => navigate('/saas')}
        onToggleLanguage={toggleLanguage}
      />

      <section className="flex-1 min-h-0 flex flex-col bg-[#f5f5f7] text-neutral-900 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-14 flex-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitAttempted(true);
              if (!paymentMethod) return;
              if (formData.domainName.trim() !== '' && domainSlug === 'votre-domaine') return;
              setIsSubmitting(true);
              // Simule un envoi (à remplacer par l’appel API réel)
              setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
              }, 1200);
            }}
            className="space-y-8 sm:space-y-9"
          >
            <ContactFormSection
              formData={formData}
              updateField={updateField}
              t={t}
            />

            <DomainSection
              formData={formData}
              updateField={updateField}
              domainSlug={domainSlug}
              isAnnual={isAnnual}
              domainError={
                formData.domainName.trim() !== '' && domainSlug === 'votre-domaine'
              }
              t={t}
            />

            <PaymentMethodGrid
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              submitAttempted={submitAttempted}
              t={t}
            />

            {/* Validation + CTA */}
            <section className="space-y-4">
              {submitSuccess ? (
                <div
                  role="status"
                  className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-4 sm:py-5 text-center"
                >
                  <p className="text-sm font-semibold text-emerald-800">
                    {t('Demande enregistrée', 'Request received')}
                  </p>
                  <p className="mt-1 text-xs text-emerald-700">
                    {t(
                      'Nous vous contacterons très prochainement à l’adresse e-mail indiquée pour finaliser votre abonnement.',
                      'We will contact you shortly at the email address provided to complete your subscription.'
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <label className="flex items-start gap-3 text-xs text-neutral-600">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
                      required
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-14 rounded-full bg-black text-white text-[15px] font-semibold shadow-lg shadow-black/25 active:scale-[0.99] transition touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? t('Envoi en cours…', 'Submitting…')
                      : t("S'abonner", 'Subscribe')}
                  </button>
                </>
              )}

              {!submitSuccess && (
                <p className="text-[11px] leading-relaxed text-neutral-500">
                  {t(
                    "En vous abonnant, vous autorisez KOBE Corporation à vous débiter au montant indiqué ci-dessus, selon la fréquence choisie. Vous pouvez modifier ou annuler votre abonnement à tout moment en nous contactant.",
                    'By subscribing, you authorize KOBE Corporation to charge you the amount shown above at the selected frequency. You can change or cancel your subscription at any time by contacting us.'
                  )}
                </p>
              )}

              <p className="text-[11px] text-neutral-500">
                {t("Besoin d'aide ?", 'Need help?')}{' '}
                <a
                  href={mailtoLink}
                  aria-label={t('Nous contacter par email', 'Contact us by email')}
                  className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800"
                >
                  Email
                </a>{' '}
                ·{' '}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('Nous contacter via WhatsApp', 'Contact us via WhatsApp')}
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
