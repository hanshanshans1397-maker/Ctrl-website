import { HomePageContent } from './generated/HomeContent';
import { useHomeEffects } from '../hooks/useHomeEffects';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  useHomeEffects();
  usePageMeta('home');

  return <HomePageContent />;
}
