import { useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { applyPageMeta } from '../utils/pageMeta';

export function usePageMeta(pageKey) {
  const { isEn } = useLang();

  useEffect(() => {
    applyPageMeta(pageKey, isEn);
  }, [pageKey, isEn]);
}
