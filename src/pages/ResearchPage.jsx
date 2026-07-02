import { ResearchPageContent } from './generated/ResearchContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ResearchPage() {
  usePageHeroEntrance({ splitText: false });
  usePageMeta('research');

  return <ResearchPageContent />;
}
