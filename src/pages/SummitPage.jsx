import { useEffect } from 'react';
import { SummitPageContent } from './generated/SummitContent';
import { useSummitEffects } from '../hooks/useSummitEffects';

export default function SummitPage() {
  useSummitEffects();

  useEffect(() => {
    document.title = 'CTRL Summit 2026 | CTRL Europe';
  }, []);

  return <SummitPageContent />;
}