import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Compass,
  Building,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/**
 * About Page - Ritora Dubai
 * Highlights company story, leadership partners, mission/vision, and institutional values.
 */
export default function About({ onOpenConsultation }) {
  const leadershipTeam = [
    {
      name: "Tariq Al-Mansoor",
      role: "Senior Partner & Co-Founder",
      specialty: "Palm Jumeirah & Waterfront Estates",
      bio: "Former head of private investments with 18 years navigating Dubai's elite property landscape. Trusted advisor to sovereign entities and regional royal offices.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Camilla von Berg",
      role: "Managing Director — Ultra-Prime Penthouses",
      specialty: "Downtown & Marina Sky Mansions",
      bio: "Trained in Geneva and London with a background in architectural history. Camilla has brokered over AED 4B in prime skyscraper penthouses and trophy duplexes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Farhan Hashmi",
      role: "Head of Private Acquisitions",
      specialty: "Emirates Hills & Golf Estates",
      bio: "Over 15 years representing family offices in confidential off-market land acquisitions and mega-mansion development across Emirates Hills and Dubai Hills.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Zayn Al-Rashid",
      role: "Director — International Client Relations",
      specialty: "Golden Visa & Family Wealth Structuring",
      bio: "Specializing in cross-border capital deployment and legal onboarding for European and Asian high-net-worth investors relocating wealth to the UAE.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-ritora-black text-white min-h-screen pt-24">
      {/* 1. HERO BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-ritora-charcoal">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Ritora Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ritora-black via-ritora-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-ritora-gold font-bold block mb-3">
            About Ritora Dubai
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            Architects of Private Wealth & <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-normal">
              Prime Dubai Living
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Founded on the principles of Swiss private banking discretion and architectural connoisseurship, Ritora is Dubai's distinguished boutique real estate agency.
          </p>
        </div>
      </section>

      {/* 2. THE STORY / GENESIS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-ritora-gold font-semibold">
              Our Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              Bridging International Capital with Dubai's Golden Age
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Ritora was established to solve a singular problem: high-net-worth buyers from London, Monaco, Singapore, and New York were seeking Dubai real estate, but encountered transactional brokerages focused on volume rather than discretion, architectural authenticity, and long-term capital preservation.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              We eliminated the noise. Today, Ritora operates with a closed portfolio of prime properties. Each estate we represent is chosen for its unrepeatable position, architectural integrity, and enduring value.
            </p>

            {/* Quick bullets */}
            <div className="pt-2 space-y-2 text-sm text-neutral-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-ritora-gold flex-shrink-0" />
                <span>Over AED 16.5 Billion in confidential volume closed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-ritora-gold flex-shrink-0" />
                <span>Exclusively representing off-market sovereign estates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-ritora-gold flex-shrink-0" />
                <span>Licensed and regulated under Dubai Land Department (RERA)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-ritora-charcoal">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Dubai Luxury Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ritora-dark border border-ritora-gold p-6 max-w-xs shadow-2xl hidden sm:block">
              <div className="text-ritora-gold font-serif text-3xl font-bold">15+ Years</div>
              <div className="text-xs uppercase tracking-wider text-neutral-300 mt-1">
                Setting the Gold Standard for Luxury Dubai Brokerage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-ritora-dark/60 border-y border-ritora-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-ritora-black border border-ritora-charcoal p-8 sm:p-10 rounded-sm relative overflow-hidden group hover:border-ritora-gold/60 transition-colors">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                To serve as the most trusted private real estate advisory in the Middle East by curating irreplaceable architectural assets, safeguarding our patrons' privacy, and executing transactions with meticulous precision and unmatched market intelligence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-ritora-black border border-ritora-charcoal p-8 sm:p-10 rounded-sm relative overflow-hidden group hover:border-ritora-gold/60 transition-colors">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                To define the standard of ultra-luxury living in Dubai, establishing a global benchmark where bespoke concierge care, architectural heritage, and tax-efficient wealth preservation converge seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & SENIOR ADVISORY TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-ritora-gold font-semibold block mb-2">
            The Advisory Council
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Senior Leadership & Partners
          </h2>
          <p className="text-neutral-400 text-sm mt-3 font-light">
            Decades of collective tenure advising family offices, private equity principals, and global tastemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member) => (
            <div
              key={member.name}
              className="bg-ritora-dark border border-ritora-charcoal group hover:border-ritora-gold/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-ritora-black relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ritora-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-wider text-ritora-gold font-semibold bg-black/70 px-2 py-0.5 rounded-sm">
                    {member.specialty}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg text-white group-hover:text-ritora-gold transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs text-neutral-400 font-medium">
                    {member.role}
                  </div>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed font-light pt-2 border-t border-ritora-charcoal/80">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="border-t border-ritora-charcoal bg-ritora-dark/40 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Partner with Dubai's Premier Advisory
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Whether seeking off-market acquisitions, sovereign portfolio divestment, or private family office onboarding in the UAE.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold shadow-gold-glow transition-all"
            >
              Initiate Private Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

