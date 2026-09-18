import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import WhoWeAre from "./components/WhoWeAre";
import FeaturedProjects from "./components/FeaturedProjects";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import TrustBlock from "./components/TrustBlock";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

/**
 * Main Application Shell - Ritora Dubai Luxury Real Estate
 * Displays exclusively the approved HOME PAGE layout with all required sections:
 * 1. Navbar (Logo, links, phone, consultation button)
 * 2. Hero (Full-width looping video background, badge, Playfair heading, search card)
 * 3. Featured Properties (6 curated luxury listings with filters and specs)
 * 4. Why Choose Ritora (4 sovereign advisory pillars)
 * 5. Testimonials (HNW investor endorsements and reviews)
 * 5.5. Trust Block (Selected relationships / verified partner placeholders)
 * 6. Call-to-Action (VIP inquiry and advisory triggers)
 * 7. Footer (Brand info, quick links, office address, newsletter briefing)
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0C3332] text-white font-sans selection:bg-[#D9BA6A] selection:text-[#0C3332]">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Home Page Content */}
      <main>
        {/* 2. Hero with Background Video */}
        <Hero />

        {/* 2.5. Stats/Highlights Bar */}
        <StatsBar />

        {/* 2.6. Who We Are */}
        <WhoWeAre />

        {/* 3. Why Choose Ritora (Advisory Benchmark & Differentiators) */}
        <WhyChooseUs />

        {/* 4. Featured Projects (Curated Developer Portfolio Showcase) */}
        <FeaturedProjects />

        {/* 5. Testimonials (Client Testimonials - Pending Approval) */}
        <Testimonials />

        {/* 5.5. Selected Relationships / Trust Block */}
        <TrustBlock />

        {/* 6. Call to Action */}
        <CTASection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
