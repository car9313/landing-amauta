import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/hero/hero-section";
import { ParallaxBanner } from "@/components/hero/parallax-banner";
import { AboutSection } from "@/components/cards/about-section";
import { FamiliesAndSchoolsSection } from "@/components/cards/families-and-schools-section";
import { CtaSection } from "@/components/cards/cta-section";
import { Footer } from "@/components/layout/footer";
import { StatsTestimonials } from "@/components/cards/stats-testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FamiliesAndSchoolsSection />
        <StatsTestimonials />
        <ParallaxBanner />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
