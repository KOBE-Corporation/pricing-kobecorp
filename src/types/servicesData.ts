/** Types alignés sur SERVICES_DATA.json */

export type ServiceCategory = 'web' | 'ecommerce' | 'apps' | 'business' | 'vertical';

export interface ServiceTranslation {
  title: string;
  description: string;
  detailedDescription?: string;
  valueProposition?: string;
  features: string[];
  possibleFeatures?: string[];
}

export interface ServiceColors {
  gradient: string;
  background: string;
  text: string;
}

export interface Service {
  id: string;
  icon: string;
  category: ServiceCategory;
  sector: { fr: string; en: string };
  colors: ServiceColors;
  translations: {
    fr: ServiceTranslation;
    en: ServiceTranslation;
  };
  eligiblePlans?: {
    saas: string[];
    fullControl: string[];
  };
}

export interface ServicesDataRoot {
  metadata: { version: string; date: string; author: string; contact: string; description: string };
  services: Service[];
  categories: Record<string, { fr: string; en: string }>;
  sectors?: Record<string, { fr: string; en: string }>;
  uiTexts?: {
    fr: { allServicesTitle: string; allServicesSubtitle: string; searchPlaceholder: string; searchResults: { found: string; foundPlural: string }; actions: { more: string; contact: string } };
    en: { allServicesTitle: string; allServicesSubtitle: string; searchPlaceholder: string; searchResults: { found: string; foundPlural: string }; actions: { more: string; contact: string } };
  };
}

export function hasDetailedContent(service: Service): boolean {
  const fr = service.translations.fr;
  return !!(fr.detailedDescription ?? fr.valueProposition ?? (fr.possibleFeatures && fr.possibleFeatures.length > 0));
}
