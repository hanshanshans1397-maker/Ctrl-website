import { ArticlesPageContent } from './generated/ArticlesContent';
import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ArticlesPage() {
  usePageHeroEntrance({ splitText: false });
  usePageMeta('articles');

  return <ArticlesPageContent />;
}
