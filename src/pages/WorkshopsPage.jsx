import { useEffect } from 'react';
import { WorkshopsPageContent } from './generated/WorkshopsContent';
import { useWorkshopsEffects } from '../hooks/useWorkshopsEffects';

export default function WorkshopsPage() {
  useWorkshopsEffects();

  useEffect(() => {
    document.title = 'Workshopy | CTRL Europe';
  }, []);

  return <WorkshopsPageContent />;
}