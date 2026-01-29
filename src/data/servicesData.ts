/**
 * Chargement des services depuis SERVICES_DATA.json (src/data/).
 * Copier le fichier depuis la racine du projet si besoin : SERVICES_DATA.json → src/data/SERVICES_DATA.json
 */
import type { Service, ServicesDataRoot, ServiceCategory } from '../types/servicesData';
import rawData from './SERVICES_DATA.json';

const data = rawData as ServicesDataRoot;

export const servicesData: ServicesDataRoot = data;
export const allServices: Service[] = data.services;
export const categories = data.categories ?? {};
export const uiTexts = data.uiTexts;

export function getServicesByCategory(category: ServiceCategory | 'all'): Service[] {
  if (category === 'all') return allServices;
  return allServices.filter((s) => s.category === category);
}

export function getCategoryLabel(categoryKey: string, lang: 'fr' | 'en'): string {
  const c = categories[categoryKey as keyof typeof categories];
  return c ? c[lang] : categoryKey;
}
