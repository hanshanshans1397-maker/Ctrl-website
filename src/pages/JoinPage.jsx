import { useEffect } from 'react';
import { JoinPageContent } from './generated/JoinContent';
import { useJoinForm } from '../hooks/useJoinForm';

export default function JoinPage() {
  useJoinForm('contactForm');

  useEffect(() => {
    document.title = 'Zapojit se | CTRL Europe';
  }, []);

  return <JoinPageContent />;
}
