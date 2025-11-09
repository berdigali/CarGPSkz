import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';

type Language = 'ru' | 'kk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ru: string, kk: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  // Check if language is set in HTML via window.__LANG__
  if (typeof window !== 'undefined' && (window as any).__LANG__) {
    return (window as any).__LANG__ as Language;
  }
  
  // Fallback to URL detection
  const path = window.location.pathname;
  if (path.startsWith('/kk')) return 'kk';
  if (path.startsWith('/ru')) return 'ru';
  
  // Default to Russian
  return 'ru';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [location, setLocation] = useLocation();

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Update language when URL changes
  useEffect(() => {
    const path = location;
    if (path.startsWith('/kk') && language !== 'kk') {
      setLanguage('kk');
    } else if (path.startsWith('/ru') && language !== 'ru') {
      setLanguage('ru');
    }
  }, [location, language]);

  // Override setLanguage to also change URL
  const setLanguageWithNav = (lang: Language) => {
    setLanguage(lang);
    const hash = window.location.hash;
    setLocation(`/${lang}${hash}`);
  };

  const t = (ru: string, kk: string) => (language === 'ru' ? ru : kk);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithNav, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
