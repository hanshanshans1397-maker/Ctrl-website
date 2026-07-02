import { JoinPageContent } from './generated/JoinContent';
import { usePageMeta } from '../hooks/usePageMeta';

export default function JoinPage() {
  usePageMeta('join');

  return <JoinPageContent />;
}
