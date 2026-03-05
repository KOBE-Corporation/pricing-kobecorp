import { useId } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import {
  OrangeMoneyLogo,
  MTNMobileMoneyLogo,
  VisaLogo,
  MastercardLogo,
} from '../PaymentLogos';

type PaymentMethodGridProps = {
  paymentMethod: string;
  setPaymentMethod: (id: string) => void;
  submitAttempted: boolean;
  t: (fr: string, en: string) => string;
};

export function PaymentMethodGrid({
  paymentMethod,
  setPaymentMethod,
  submitAttempted,
  t,
}: PaymentMethodGridProps) {
  const errorId = useId();
  const hasError = submitAttempted && !paymentMethod;

  return (
    <section>
      <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
        {t('Moyen de paiement', 'Payment method')}
      </h2>
      <div
        role="radiogroup"
        aria-label={t('Choisir un moyen de paiement', 'Choose a payment method')}
        aria-describedby={hasError ? errorId : undefined}
        aria-invalid={hasError}
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {/* Orange Money */}
        <button
          type="button"
          role="radio"
          aria-checked={paymentMethod === 'orange'}
          onClick={() => setPaymentMethod('orange')}
          className={`w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 touch-manipulation ${
            paymentMethod === 'orange'
              ? 'border-[#0a7aff] bg-[#0a7aff]/5 shadow-sm'
              : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 shadow-sm">
              <OrangeMoneyLogo className="w-10 h-10" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-neutral-900">Orange Money</p>
              <p className="text-xs sm:text-sm text-neutral-500 truncate">
                {t('Paiement mobile Orange', 'Orange mobile payment')}
              </p>
            </div>
          </div>
          {paymentMethod === 'orange' && (
            <span className="self-start sm:self-center w-7 h-7 rounded-full bg-[#0a7aff] flex items-center justify-center shrink-0">
              <CheckIcon className="w-4 h-4 text-white" />
            </span>
          )}
        </button>

        {/* MTN Mobile Money */}
        <button
          type="button"
          role="radio"
          aria-checked={paymentMethod === 'mtn'}
          onClick={() => setPaymentMethod('mtn')}
          className={`w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 touch-manipulation ${
            paymentMethod === 'mtn'
              ? 'border-[#0a7aff] bg-[#0a7aff]/5 shadow-sm'
              : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 shadow-sm">
              <MTNMobileMoneyLogo className="w-10 h-10" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-neutral-900">Mobile Money</p>
              <p className="text-xs sm:text-sm text-neutral-500 truncate">
                {t('MTN Mobile Money', 'MTN Mobile Money')}
              </p>
            </div>
          </div>
          {paymentMethod === 'mtn' && (
            <span className="self-start sm:self-center w-7 h-7 rounded-full bg-[#0a7aff] flex items-center justify-center shrink-0">
              <CheckIcon className="w-4 h-4 text-white" />
            </span>
          )}
        </button>

        {/* Visa — Bientôt */}
        <div
          role="radio"
          aria-checked={false}
          aria-disabled="true"
          className="w-full flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-70 cursor-not-allowed select-none"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 p-1.5 sm:p-2">
              <VisaLogo className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-neutral-600 truncate">Visa</p>
              <p className="text-xs sm:text-sm text-neutral-500 truncate">
                {t('Carte bancaire Visa', 'Visa card')}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600 shrink-0">
            {t('Bientôt disponible', 'Coming soon')}
          </span>
        </div>

        {/* Mastercard — Bientôt */}
        <div
          role="radio"
          aria-checked={false}
          aria-disabled="true"
          className="w-full flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 rounded-2xl border-2 border-neutral-200 bg-neutral-50/80 opacity-70 cursor-not-allowed select-none"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-neutral-100 p-1.5">
              <MastercardLogo className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-neutral-600 truncate">Mastercard</p>
              <p className="text-xs sm:text-sm text-neutral-500 truncate">
                {t('Carte bancaire Mastercard', 'Mastercard')}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600 shrink-0">
            {t('Bientôt disponible', 'Coming soon')}
          </span>
        </div>

        {hasError && (
          <p id={errorId} className="col-span-full text-xs text-red-500" role="alert">
            {t('Veuillez choisir un moyen de paiement.', 'Please choose a payment method.')}
          </p>
        )}
      </div>
    </section>
  );
}
