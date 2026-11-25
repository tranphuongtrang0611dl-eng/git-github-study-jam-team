import { HeroSection } from '../components/home/HeroSection';
import { TeamIntro } from '../components/home/TeamIntro';
import { TeamMarquee } from '../components/home/TeamMarquee';
import { TeamSection } from '../components/home/TeamSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TeamIntro />
      <TeamMarquee />
      <TeamSection />
    </>
  );
}
