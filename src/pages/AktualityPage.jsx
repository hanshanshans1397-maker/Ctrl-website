import { AktualityPageContent } from './generated/AktualityContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AktualityPage() {
  usePageHeroEntrance({ splitText: false });
  usePageMeta('aktuality');

  return <AktualityPageContent />;
}
