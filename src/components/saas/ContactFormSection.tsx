import {
  UserIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import type { SaaSPlanFormData } from '../../types/saasForm';

type ContactFormSectionProps = {
  formData: SaaSPlanFormData;
  updateField: (field: keyof SaaSPlanFormData, value: string) => void;
  t: (fr: string, en: string) => string;
};

export function ContactFormSection({ formData, updateField, t }: ContactFormSectionProps) {
  return (
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
              className="input-base-form"
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
              className="input-base-form"
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
            className="input-base-form"
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
              className="input-base-form-select"
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
            className="input-base-form"
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
            className="input-base-form"
            placeholder="vous@exemple.com"
            required
          />
        </label>
      </div>
    </section>
  );
}
