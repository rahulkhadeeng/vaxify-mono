import { HeroSectionComponent } from "@/components/blocks/hero-section-1";
import { Features } from '@/components/landing/features-section';
import { HowItWorks } from "@/components/landing/how-it-works";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <HowItWorks />
      <Features />
    </div>
  );
};

export default HomePage;
