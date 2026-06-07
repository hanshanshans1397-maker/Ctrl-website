import { useEffect } from 'react';
import { ResearchPageContent } from './generated/ResearchContent';

export default function ResearchPage() {
  useEffect(() => {
    document.title = 'Výzkum | CTRL Europe';
  }, []);

  return <ResearchPageContent />;
}
