import { useEffect } from 'react';
import { ResearchPageContent } from './generated/ResearchContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';

export default function ResearchPage() {
  usePageHeroEntrance({ splitText: false });

  useEffect(() => {
    document.title = 'Výzkum | CTRL Europe';
  }, []);

  return <ResearchPageContent />;
}
