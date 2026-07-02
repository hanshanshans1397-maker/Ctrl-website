import { AboutPageContent } from './generated/AboutContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageHeroEntrance({ splitText: false });
  usePageMeta('about');

  return <AboutPageContent />;
}
