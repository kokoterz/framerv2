import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogosStrip } from "./components/LogosStrip";
import { CoreFeatures } from "./components/CoreFeatures";
import { WiredQuote } from "./components/WiredQuote";
import { CommunityGallery } from "./components/CommunityGallery";
import { UseCases } from "./components/UseCases";
import { Comparison } from "./components/Comparison";
import { Stats } from "./components/Stats";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Tutorials } from "./components/Tutorials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <CoreFeatures />
        <WiredQuote />
        <CommunityGallery />
        <UseCases />
        <Comparison />
        <Stats />
        <Pricing />
        <Testimonials />
        <Tutorials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
