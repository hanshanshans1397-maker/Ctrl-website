import { SummitPageContent } from './generated/SummitContent';
import { useSummitEffects } from '../hooks/useSummitEffects';
import { usePageMeta } from '../hooks/usePageMeta';

export default function SummitPage() {
  useSummitEffects();
  usePageMeta('summit');

  return <SummitPageContent />;
}
