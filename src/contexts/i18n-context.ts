import { createContext } from 'react';

export type Language = 'fr' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  tLang: (path: string, lang: Language) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
