import { ArticleTemplatePageContent } from './generated/ArticleTemplateContent';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ArticleTemplatePage() {
  usePageMeta('article-template');

  return <ArticleTemplatePageContent />;
}
