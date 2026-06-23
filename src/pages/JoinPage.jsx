import { useEffect } from 'react';
import { JoinPageContent } from './generated/JoinContent';

export default function JoinPage() {
  useEffect(() => {
    document.title = 'Zapojit se | CTRL Europe';
  }, []);

  return <JoinPageContent />;
}
