import { useEffect } from 'react';
import { AboutPageContent } from './generated/AboutContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';

export default function AboutPage() {
  usePageHeroEntrance({ splitText: false });

  useEffect(() => {
    document.title = 'O nás | CTRL Europe';
  }, []);

  return <AboutPageContent />;
}
