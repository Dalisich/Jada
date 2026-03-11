import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import WhyJadaSection from "@/components/sections/WhyJadaSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <StatsSection />
      <ReferencesSection />
      <WhyJadaSection />
      <CTASection />
    </>
  );
}
