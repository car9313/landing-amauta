import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/hero/hero-section"
import { WhatIsSection } from "@/components/cards/what-is-section"
import { HowItWorksSection } from "@/components/cards/how-it-works-section"
import { UseCasesSection } from "@/components/cards/use-cases-section"
import { FeaturesSection } from "@/components/cards/features-section"
import { ParallaxBanner } from "@/components/hero/parallax-banner"
import { StressSection } from "@/components/cards/stress-section"
import { UniqueSection } from "@/components/cards/unique-section"
import { ParaPadresSection } from "@/components/cards/para-padres-section"
import { CtaSection } from "@/components/cards/cta-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <FeaturesSection />
        <ParallaxBanner />
        <StressSection />
        <UniqueSection />
        <ParaPadresSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
