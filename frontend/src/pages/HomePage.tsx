import { HeroSectionComponent } from "@/components/landing/HeroSection";
import { Features } from "@/components/landing/FeaturesSection";
import { Features1 } from "@/components/landing/FeaturesSectionGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/FooterSection";
import { CTASection } from "@/components/landing/CtaSection";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />

      <HowItWorks />

      <Features1 />

      <Features />

      <FAQSection />
      
      <CTASection />

      <Footer />

    </div>
  );
};

export default HomePage;
