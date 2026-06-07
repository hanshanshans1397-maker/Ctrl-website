import { useEffect } from 'react';
import { ArticleTemplatePageContent } from './generated/ArticleTemplateContent';

export default function ArticleTemplatePage() {
  useEffect(() => {
    document.title = 'Článek | CTRL Europe';
  }, []);

  return <ArticleTemplatePageContent />;
}
