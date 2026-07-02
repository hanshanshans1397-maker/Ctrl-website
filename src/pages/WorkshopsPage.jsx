import { WorkshopsPageContent } from './generated/WorkshopsContent';
import { useWorkshopsEffects } from '../hooks/useWorkshopsEffects';
import { usePageMeta } from '../hooks/usePageMeta';

export default function WorkshopsPage() {
  useWorkshopsEffects();
  usePageMeta('workshops');

  return <WorkshopsPageContent />;
}
