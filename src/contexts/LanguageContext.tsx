import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, TranslationBundle } from '../locales/translations';

export type Language = 'IN' | 'EN';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof TranslationBundle, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('pernikah_lang');
    if (stored === 'IN' || stored === 'EN') {
      return stored;
    }
    return 'IN'; // default to Indonesian as standard for pernikahapp
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pernikah_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'IN' ? 'EN' : 'IN';
    setLanguage(nextLang);
  };

  const t = (key: keyof TranslationBundle, variables?: Record<string, string | number>): string => {
    const activeBundle = translations[language];
    if (!activeBundle) return String(key);
    
    let text = activeBundle[key] || translations['IN'][key] || String(key);
    
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
