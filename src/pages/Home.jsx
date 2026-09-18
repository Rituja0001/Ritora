import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Award,
  Globe2,
  KeyRound,
  ArrowRight,
  Star,
  Compass,
  Building2,
  CheckCircle,
} from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties, primeNeighborhoods } from "../data/properties";

/**
 * Home Page - Ritora Dubai Luxury Real Estate
 * Features immersive hero with search bar, featured listings, value pillars, neighborhoods, and reviews.
 */
export default function Home({ onOpenConsultation }) {
  const navigate = useNavigate();

  // Quick Hero Search State
  const [searchLocation, setSearchLocation] = useState("all");
  const [searchType, setSearchType] = useState("all");
  const [searchBudget, setSearchBudget] = useState("all");

  // Featured Properties Category Filter
  const [activeTab, setActiveTab] = useState("All");

  const handleHeroSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation !== "all") params.append("location", searchLocation);
    if (searchType !== "all") params.append("type", searchType);
    if (searchBudget !== "all") params.append("budget", searchBudget);
    navigate(`/properties?${params.toString()}`);
  };

  const filteredProperties = properties.filter((item) => {
    if (activeTab === "All") return item.featured;
    return item.type === activeTab;
  });

  return (
    <div className="bg-ritora-black text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Dubai Skyline Video/High-Res Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
            alt="Dubai Luxury Skyline"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
            style={{ animationDuration: "12s" }}
          />
          {/* Multi-layered dark & gold gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-ritora-black via-ritora-black/75 to-ritora-black/50" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-ritora-black/40 to-ritora-black" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ritora-gold/50 bg-ritora-black/70 backdrop-blur-md rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-ritora-gold animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-ritora-gold font-semibold">
              Dubai's Sovereign Real Estate Authority
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
            Exclusive Living in the <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-normal">
              Heart of Dubai
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10">
            Curating private waterfront sanctuaries, architectural marvels, and sky penthouses for discerning global investors and family offices.
          </p>

          {/* Quick Search Bar Component */}
          <div className="max-w-4xl mx-auto bg-ritora-dark/95 border border-ritora-charcoal backdrop-blur-xl p-4 sm:p-6 shadow-2xl rounded-sm">
            <form
              onSubmit={handleHeroSearch}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
            >
              {/* Location Select */}
              <div className="text-left">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Prime Location
                </label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                >
                  <option value="all">All Prime Locations</option>
                  <option value="Palm Jumeirah">Palm Jumeirah</option>
                  <option value="Downtown Dubai">Downtown Dubai</option>
                  <option value="Emirates Hills">Emirates Hills</option>
                  <option value="Dubai Marina">Dubai Marina</option>
                  <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                  <option value="DIFC">DIFC</option>
                </select>
              </div>

              {/* Property Type Select */}
              <div className="text-left">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Estate Type
                </label>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                >
                  <option value="all">All Property Types</option>
                  <option value="Villa">Signature Villas</option>
                  <option value="Penthouse">Sky Penthouses</option>
                  <option value="Apartment">Luxury Apartments</option>
                </select>
              </div>

              {/* Price Tier Select */}
              <div className="text-left">
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                  Investment Tier
                </label>
                <select
                  value={searchBudget}
                  onChange={(e) => setSearchBudget(e.target.value)}
                  className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-3 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                >
                  <option value="all">Any Price Range</option>
                  <option value="under30m">Under AED 30M</option>
                  <option value="30m-60m">AED 30M – AED 60M</option>
                  <option value="over60m">AED 60M+ (Ultra-Prime)</option>
                </select>
              </div>

              {/* Search CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-gold-glow rounded-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore Estates</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. STATS / CREDIBILITY STRIP */}
      <section className="border-y border-ritora-charcoal bg-ritora-dark/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-ritora-charcoal">
            <div className="pt-4 md:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-ritora-gold">
                AED 16.5B+
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-400 mt-1">
                Completed Transactions
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-ritora-gold">
                500+
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-400 mt-1">
                Private Off-Market Mansions
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-ritora-gold">
                98.4%
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-400 mt-1">
                HNW Client Retention
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-ritora-gold">
                15+ Years
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-400 mt-1">
                Prime Dubai Dominance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-ritora-gold text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Featured Dubai Estates
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-lg font-light">
              Hand-picked trophy assets representing Dubai's most architecturally significant and discreet addresses.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {["All", "Villa", "Penthouse", "Apartment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-sm border ${
                  activeTab === tab
                    ? "bg-ritora-gold text-ritora-black border-ritora-gold font-bold shadow-gold-glow"
                    : "bg-transparent text-neutral-300 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {tab === "All" ? "All Featured" : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Properties Link */}
        <div className="mt-14 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-3 px-8 py-4 border border-ritora-gold text-ritora-gold hover:bg-ritora-gold hover:text-ritora-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-sm hover:shadow-gold-glow"
          >
            <span>View Full Portfolio ({properties.length} Estates)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE RITORA */}
      <section className="bg-ritora-dark/60 border-y border-ritora-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-ritora-gold font-semibold block mb-2">
              The Ritora Benchmark
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Why Discerning Clients Choose Ritora
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light">
              We transcend traditional brokerage, operating as sovereign advisors for international wealth, royal families, and private collectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-ritora-black/80 border border-ritora-charcoal p-8 hover:border-ritora-gold/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6 group-hover:bg-ritora-gold group-hover:text-ritora-black transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Absolute Confidentiality
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Stringent NDAs, private viewing escorts, and complete discretion protect your identity and acquisitions at every stage.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-ritora-black/80 border border-ritora-charcoal p-8 hover:border-ritora-gold/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6 group-hover:bg-ritora-gold group-hover:text-ritora-black transition-colors">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Off-Market Access
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Over 40% of our ultra-luxury transactions occur completely off-market, granting you access to unlisted trophy assets.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-ritora-black/80 border border-ritora-charcoal p-8 hover:border-ritora-gold/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6 group-hover:bg-ritora-gold group-hover:text-ritora-black transition-colors">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Golden Visa & Legal Concierge
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                End-to-end facilitation for UAE 10-Year Golden Visas, offshore family office setup, and Dubai Land Department deeds.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-ritora-black/80 border border-ritora-charcoal p-8 hover:border-ritora-gold/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-sm border border-ritora-gold/40 flex items-center justify-center text-ritora-gold mb-6 group-hover:bg-ritora-gold group-hover:text-ritora-black transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Architectural Curation
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Every listed property undergoes rigorous technical due diligence, verifying plot boundaries, structural integrity, and pedigree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIME NEIGHBORHOODS SPOTLIGHT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-ritora-gold font-semibold block mb-2">
            Territorial Sovereignty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Dubai's Most Coveted Enclaves
          </h2>
          <p className="text-neutral-400 text-sm mt-3 font-light">
            Discover the world's most desirable prime postcodes, where architectural daring meets untamed luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primeNeighborhoods.map((area) => (
            <Link
              key={area.name}
              to={`/properties?location=${encodeURIComponent(area.name)}`}
              className="group relative h-96 overflow-hidden rounded-sm border border-ritora-charcoal flex flex-col justify-end p-6"
            >
              <img
                src={area.image}
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ritora-black via-ritora-black/50 to-transparent group-hover:via-ritora-black/30 transition-all duration-500" />

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ritora-gold font-bold">
                  {area.propertiesCount} Listed Estates
                </span>
                <h3 className="font-serif text-2xl text-white group-hover:text-ritora-gold transition-colors">
                  {area.name}
                </h3>
                <p className="text-neutral-300 text-xs line-clamp-2 font-light">
                  {area.description}
                </p>
                <div className="text-[11px] text-ritora-gold-light pt-2 flex items-center justify-between border-t border-white/10">
                  <span>From {area.startingPrice}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-ritora-dark/50 border-t border-ritora-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-ritora-gold font-semibold block mb-2">
              Patron Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Endorsed by Global Capital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-ritora-black border border-ritora-charcoal p-8 rounded-sm space-y-4">
              <div className="flex gap-1 text-ritora-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed italic font-light">
                "Ritora secured an off-market Palm Jumeirah beachfront estate for our family office within 14 days. Their discretion and access to sovereign sellers are unmatched in the UAE."
              </p>
              <div className="pt-2 border-t border-ritora-charcoal">
                <div className="font-serif text-white font-medium">Sir Henrik Wallenberg</div>
                <div className="text-xs text-neutral-500">European Private Equity Principal</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-ritora-black border border-ritora-charcoal p-8 rounded-sm space-y-4">
              <div className="flex gap-1 text-ritora-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed italic font-light">
                "Finding a penthouse with uncompromised Burj Khalifa vistas was critical. Camilla and the Ritora team curated three exceptional properties and handled our Golden Visa seamlessly."
              </p>
              <div className="pt-2 border-t border-ritora-charcoal">
                <div className="font-serif text-white font-medium">Elena Rostova</div>
                <div className="text-xs text-neutral-500">Fintech Founder & Investor</div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-ritora-black border border-ritora-charcoal p-8 rounded-sm space-y-4">
              <div className="flex gap-1 text-ritora-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed italic font-light">
                "In 25 years of global real estate transactions across London, Monaco, and New York, Ritora’s concierge and architectural vetting stand out as genuinely world-class."
              </p>
              <div className="pt-2 border-t border-ritora-charcoal">
                <div className="font-serif text-white font-medium">Dr. Khalid Al-Suwaidi</div>
                <div className="text-xs text-neutral-500">Managing Director, Gulf Capital Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-END CTA BANNER */}
      <section className="relative py-20 bg-gradient-to-r from-ritora-black via-ritora-dark to-ritora-black border-y border-ritora-gold/30 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-ritora-gold font-bold">
            Private Acquisitions & Sales
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Ready to Acquire Your Dubai Landmark?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a confidential advisory session with our managing partners to explore unlisted private estates and tax-efficient UAE investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold shadow-gold-glow transition-all duration-300"
            >
              Book Private Consultation
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-neutral-700 hover:border-ritora-gold text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Visit Our Dubai Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Sparkles(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

