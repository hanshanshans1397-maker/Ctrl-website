import { usePageHeroEntrance } from '../hooks/usePageHeroEntrance';
import { usePageMeta } from '../hooks/usePageMeta';
import { EventsPageContent } from './generated/EventsContent';

export default function EventsPage() {
  usePageHeroEntrance();
  usePageMeta('events');

  return <EventsPageContent />;
}
