import { useEffect } from 'react';
import { ArticlesPageContent } from './generated/ArticlesContent';

export default function ArticlesPage() {
  useEffect(() => {
    document.title = 'Články a reporty | CTRL Europe';
  }, []);

  return <ArticlesPageContent />;
}
