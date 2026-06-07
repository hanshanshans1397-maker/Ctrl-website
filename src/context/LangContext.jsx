import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANG_KEY = 'ctrl_lang';
const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [isEn, setIsEn] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(LANG_KEY) === 'en';
  });

  useEffect(() => {
    document.body.classList.toggle('EN', isEn);
    sessionStorage.setItem(LANG_KEY, isEn ? 'en' : 'cs');
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
