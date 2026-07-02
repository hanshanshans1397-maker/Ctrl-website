import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANG_KEY = 'ctrl_lang';
const LangContext = createContext(null);

function readStoredLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'en' || stored === 'cs') {
    return stored;
  }

  const sessionStored = sessionStorage.getItem(LANG_KEY);
  if (sessionStored === 'en' || sessionStored === 'cs') {
    localStorage.setItem(LANG_KEY, sessionStored);
    sessionStorage.removeItem(LANG_KEY);
    return sessionStored;
  }

  return null;
}

function detectLangFromNavigator() {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language].filter(Boolean);

  for (const lang of languages) {
    const code = lang.toLowerCase().split('-')[0];
    if (code === 'cs' || code === 'sk') return 'cs';
    if (code === 'en') return 'en';
  }

  return 'cs';
}

function getInitialLang() {
  if (typeof window === 'undefined') return 'cs';
  return readStoredLang() ?? detectLangFromNavigator();
}

export function LangProvider({ children }) {
  const [isEn, setIsEn] = useState(() => getInitialLang() === 'en');

  useEffect(() => {
    document.documentElement.lang = isEn ? 'en' : 'cs';
    document.body.classList.toggle('EN', isEn);
    localStorage.setItem(LANG_KEY, isEn ? 'en' : 'cs');
  }, [isEn]);

  const toggleLang = useCallback(() => setIsEn((v) => !v), []);

  const value = useMemo(
    () => ({
      isEn,
      toggleLang,
      langLabel: isEn ? 'CS' : 'EN',
    }),
    [isEn, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
