import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/hero/hero-section";
import { WhatIsSection } from "@/components/cards/what-is-section";
import { HowItWorksSection } from "@/components/cards/how-it-works-section";
import { UseCasesSection } from "@/components/cards/use-cases-section";
import { FeaturesSection } from "@/components/cards/features-section";
import { ParallaxBanner } from "@/components/hero/parallax-banner";
import { StressSection } from "@/components/cards/stress-section";
import { UniqueSection } from "@/components/cards/unique-section";
import { ParaPadresSection } from "@/components/cards/para-padres-section";
import { CtaSection } from "@/components/cards/cta-section";
import { Footer } from "@/components/layout/footer";
import { FeaturesGrid } from "@/components/cards/features-grid";
import { HowItWorks } from "@/components/cards/how-it-works";
import { WaveDivider } from "@/components/shared/wave-divider";
import { StatsTestimonials } from "@/components/cards/stats-testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />

        {/*  <WhatIsSection /> */}
        {/*  <HowItWorksSection /> */}
        <UniqueSection />
        <UseCasesSection />
        <WaveDivider
          fill="var(--amauta-blue-light)"
          className="-mb-px bg-background"
        />
        <HowItWorks />
        <WaveDivider
          fill="var(--background)"
          className="-mb-px bg-amauta-blue-light"
        />
        <StressSection />
        <ParallaxBanner />
        <FeaturesSection />

        <StatsTestimonials />
        <ParaPadresSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
