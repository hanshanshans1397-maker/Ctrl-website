import { useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { applyMetaRecord, applyPageMeta } from '../utils/pageMeta';

export function usePageMeta(pageKey) {
  const { isEn } = useLang();

  useEffect(() => {
    applyPageMeta(pageKey, isEn);
  }, [pageKey, isEn]);
}

export function useCustomPageMeta(meta) {
  const { isEn } = useLang();

  useEffect(() => {
    const record = meta?.[isEn ? 'en' : 'cs'];
    if (!record) return;
    applyMetaRecord(record, isEn, 'article');
  }, [meta, isEn]);
}
