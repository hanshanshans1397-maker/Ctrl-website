import { useEffect } from 'react';
import { AktualityPageContent } from './generated/AktualityContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';

export default function AktualityPage() {
  usePageHeroEntrance({ splitText: false });

  useEffect(() => {
    document.title = 'Aktuality | CTRL Europe';
  }, []);

  return <AktualityPageContent />;
}
