import FeaturesSection from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing";
import StorySection from "@/components/story";
import CTASection from "@/components/cta";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <StorySection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
