import { useLanguage } from '../contexts/useLanguage';
import type { Service } from '../types/servicesData';
import { hasDetailedContent } from '../types/servicesData';
import {
  GlobeAltIcon,
  DocumentTextIcon,
  StarIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  UserGroupIcon,
  TruckIcon,
  CalendarIcon,
  BeakerIcon,
  HeartIcon,
  ScissorsIcon,
  HomeIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  WalletIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GlobeAltIcon,
  DocumentTextIcon,
  StarIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  UserGroupIcon,
  TruckIcon,
  CalendarIcon,
  BeakerIcon,
  HeartIcon,
  ScissorsIcon,
  HomeIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  WalletIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
};

/** Couleurs Tailwind pour le check (éviter couleurs inline). */
const checkColorByBg: Record<string, string> = {
  'bg-green-100': 'text-green-600',
  'bg-teal-100': 'text-teal-600',
  'bg-red-100': 'text-red-600',
  'bg-emerald-100': 'text-emerald-600',
  'bg-pink-100': 'text-pink-600',
  'bg-blue-100': 'text-blue-600',
  'bg-purple-100': 'text-purple-600',
  'bg-violet-100': 'text-violet-600',
  'bg-indigo-100': 'text-indigo-600',
  'bg-gray-100': 'text-gray-600',
  'bg-orange-100': 'text-orange-600',
};

function getCheckClass(background: string): string {
  for (const [bg, text] of Object.entries(checkColorByBg)) {
    if (background.includes(bg) || background.includes(bg.replace('100', '50'))) return text;
  }
  return 'text-brand-500';
}

/** Libellés d’affichage pour les ids de forfaits (SaaS / Full-Control). */
const planIdToLabel: Record<string, string> = {
  goodDeal: 'Good Deal',
  pro: 'Pro',
  ultra: 'Ultra',
  normal: 'Normal',
  speed: 'Speed',
  ultraSpeed: 'Ultra Speed',
};

export interface ApplicationServiceCardProps {
  service: Service;
  /** Afficher la version détaillée (detailedDescription, valueProposition, possibleFeatures) si dispo */
  variant?: 'auto' | 'compact' | 'detailed';
  /** Classe(s) CSS optionnelles (ex. animation). */
  className?: string;
}

/**
 * Carte d'affichage d'un service/application depuis SERVICES_DATA.json.
 * Affiche secteur, titre, description (ou detailedDescription), valueProposition, features/possibleFeatures.
 */
const ApplicationServiceCard = ({ service, variant = 'auto', className = '' }: ApplicationServiceCardProps) => {
  const { language, t } = useLanguage();
  const lang = language as 'fr' | 'en';
  const tr = service.translations[lang];
  const isDetailed = variant === 'detailed' || (variant === 'auto' && hasDetailedContent(service));

  const IconComponent = iconMap[service.icon] ?? CodeBracketIcon;
  const bgClass = service.colors.background.split(' ')[0] ?? 'bg-brand-100';
  const textClass = service.colors.text.split(' ')[0] ?? 'text-brand-600';
  const checkClass = getCheckClass(service.colors.background);

  const description = isDetailed && tr.detailedDescription ? tr.detailedDescription : tr.description;
  const features = (isDetailed && tr.possibleFeatures && tr.possibleFeatures.length > 0
    ? tr.possibleFeatures
    : tr.features) ?? [];

  const plans = service.eligiblePlans;
  const saasLabels = plans?.saas?.map((id) => planIdToLabel[id] ?? id) ?? [];
  const fullControlLabels = plans?.fullControl?.map((id) => planIdToLabel[id] ?? id) ?? [];

  return (
    <article
      className={`rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-subtle hover:border-neutral-300 hover:shadow-card-hover transition-all animate-fadeInUp ${className}`.trim()}
      data-service-id={service.id}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className={`rounded-xl p-4 flex-shrink-0 ${bgClass}`}>
          <IconComponent className={`h-10 w-10 ${textClass}`} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${bgClass} ${textClass} mb-3`}
          >
            {service.sector[lang]}
          </span>
          <h3 className="font-display text-2xl font-semibold text-ink mb-3">{tr.title}</h3>
          <p className="font-sans text-neutral-600 mb-4 leading-relaxed">{description}</p>

          {isDetailed && tr.valueProposition && (
            <div className="rounded-xl bg-neutral-100 px-4 py-3 mb-6">
              <p className="font-sans text-sm font-medium text-ink">{tr.valueProposition}</p>
            </div>
          )}

          {features.length > 0 && (
            <div>
              <h4 className="font-display text-sm font-semibold text-ink uppercase tracking-wide mb-3">
                {t('applications.featuresLabel')}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckIcon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${checkClass}`} aria-hidden />
                    <span className="font-sans text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {plans && (saasLabels.length > 0 || fullControlLabels.length > 0) && (
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <p className="font-display text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                {t('applications.eligiblePlansLabel')}
              </p>
              <div className="flex flex-wrap gap-2">
                {saasLabels.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-medium border border-brand-200">
                    <span className="font-semibold">SaaS:</span>
                    <span>{saasLabels.join(', ')}</span>
                  </span>
                )}
                {fullControlLabels.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200">
                    <span className="font-semibold">{t('applications.fullControlPlanLabel')}</span>
                    <span>{fullControlLabels.join(', ')}</span>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ApplicationServiceCard;
