import { useEffect } from 'react';
import { HomePageContent } from './generated/HomeContent';
import { useHomeEffects } from '../hooks/useHomeEffects';

export default function HomePage() {
  useHomeEffects();

  useEffect(() => {
    document.title = 'CTRL Europe | Digitální odolnost pro novou evropskou generaci';
  }, []);

  return <HomePageContent />;
}
