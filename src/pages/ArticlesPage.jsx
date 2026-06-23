import { useEffect } from 'react';
import { ArticlesPageContent } from './generated/ArticlesContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';

export default function ArticlesPage() {
  usePageHeroEntrance({ splitText: false });

  useEffect(() => {
    document.title = 'Články a reporty | CTRL Europe';
  }, []);

  return <ArticlesPageContent />;
}
