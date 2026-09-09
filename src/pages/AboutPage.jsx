import { AboutPageContent } from './generated/AboutContent';
import { useAboutEffects } from '../hooks/useAboutEffects';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageHeroEntrance({ splitText: false });
  useAboutEffects();
  usePageMeta('about');

  return <AboutPageContent />;
}
