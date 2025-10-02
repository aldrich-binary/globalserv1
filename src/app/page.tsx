import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { StatsSection } from "./components/StatsSection";
import { FooterSection } from "./components/FooterSection";
import { NumberSection } from "./components/NumberSection";
import { VideoSection } from "./components/VideoSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CallToAction } from "./components/CallToAction";

export default function VaultLandingPage() {
  return (
    <div className="antialiased bg-white text-gray-900">
      {/* Header */}
      <section className="relative">
        {/* NAVBAR */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />
      </section>
      {/* Numbers Section */}

      <NumberSection />
      {/* Video Section */}

      <VideoSection />
      {/* Features Section */}

      <FeatureSection />
      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CALL TO ACTION SECTION */}
      <div className="py-20">
        <CallToAction />
      </div>

      {/* FOOTER SECTION */}
      <FooterSection />
    </div>
  );
}
