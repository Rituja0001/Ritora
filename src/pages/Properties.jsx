import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  Building,
} from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

/**
 * Properties Page - Ritora Dubai
 * Features live multi-factor filtering: keyword search, property type, location, price range, and sorting.
 */
export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial filter values from URL query parameters if present
  const initialType = searchParams.get("type") || "all";
  const initialLocation = searchParams.get("location") || "all";
  const initialBudget = searchParams.get("budget") || "all";

  const [keyword, setKeyword] = useState("");
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedPriceRange, setSelectedPriceRange] = useState(initialBudget);
  const [sortBy, setSortBy] = useState("featured");

  // Distinct locations available
  const availableLocations = [
    "all",
    "Palm Jumeirah",
    "Downtown Dubai",
    "Emirates Hills",
    "Dubai Marina",
    "Dubai Hills Estate",
    "DIFC",
  ];

  // Distinct property types
  const availableTypes = ["all", "Villa", "Penthouse", "Apartment"];

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return properties
      .filter((item) => {
        // Keyword match
        if (keyword.trim()) {
          const q = keyword.toLowerCase();
          const matchesTitle = item.title.toLowerCase().includes(q);
          const matchesLocation = item.location.toLowerCase().includes(q);
          const matchesTagline = item.tagline.toLowerCase().includes(q);
          if (!matchesTitle && !matchesLocation && !matchesTagline) {
            return false;
          }
        }

        // Type filter
        if (selectedType !== "all" && item.type.toLowerCase() !== selectedType.toLowerCase()) {
          return false;
        }

        // Location filter
        if (
          selectedLocation !== "all" &&
          item.neighborhood.toLowerCase() !== selectedLocation.toLowerCase()
        ) {
          return false;
        }

        // Price filter
        if (selectedPriceRange === "under30m" && item.priceRaw >= 30000000) {
          return false;
        }
        if (
          selectedPriceRange === "30m-60m" &&
          (item.priceRaw < 30000000 || item.priceRaw > 60000000)
        ) {
          return false;
        }
        if (selectedPriceRange === "over60m" && item.priceRaw < 60000000) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.priceRaw - b.priceRaw;
        if (sortBy === "price-desc") return b.priceRaw - a.priceRaw;
        if (sortBy === "beds-desc") return b.beds - a.beds;
        // Default: featured first
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
      });
  }, [keyword, selectedType, selectedLocation, selectedPriceRange, sortBy]);

  const handleResetFilters = () => {
    setKeyword("");
    setSelectedType("all");
    setSelectedLocation("all");
    setSelectedPriceRange("all");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters =
    keyword !== "" ||
    selectedType !== "all" ||
    selectedLocation !== "all" ||
    selectedPriceRange !== "all" ||
    sortBy !== "featured";

  return (
    <div className="bg-ritora-black text-white min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-ritora-gold text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dubai Prime Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Exclusive Luxury Residences
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
            Explore verified listings of Dubai’s most magnificent beachfront villas, sky penthouses, and private golf estates.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-ritora-dark border border-ritora-charcoal p-6 rounded-sm mb-10 shadow-xl space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* 1. Keyword Search */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Keyword Search
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g. Palm, Villa, Duplex..."
                  className="w-full bg-ritora-black/80 border border-neutral-700 pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                />
              </div>
            </div>

            {/* 2. Property Type */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-ritora-black/80 border border-neutral-700 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
              >
                <option value="all">All Types</option>
                <option value="Villa">Villas & Mansions</option>
                <option value="Penthouse">Sky Penthouses</option>
                <option value="Apartment">Luxury Apartments</option>
              </select>
            </div>

            {/* 3. Location */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-ritora-black/80 border border-neutral-700 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
              >
                <option value="all">All Locations</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Downtown Dubai">Downtown Dubai</option>
                <option value="Emirates Hills">Emirates Hills</option>
                <option value="Dubai Marina">Dubai Marina</option>
                <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                <option value="DIFC">DIFC</option>
              </select>
            </div>

            {/* 4. Price Bracket */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Price Tier (AED)
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-ritora-black/80 border border-neutral-700 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
              >
                <option value="all">Any Price</option>
                <option value="under30m">Under AED 30 Million</option>
                <option value="30m-60m">AED 30M – AED 60M</option>
                <option value="over60m">AED 60M+ (Ultra-Prime)</option>
              </select>
            </div>

            {/* 5. Sort By */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Sort Order
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-ritora-black/80 border border-neutral-700 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
              >
                <option value="featured">Featured First</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="beds-desc">Bedrooms: Most to Least</option>
              </select>
            </div>
          </div>

          {/* Secondary Filter Bar: Results count & Reset button */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-ritora-charcoal/80 text-xs text-neutral-400 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">
                Showing {filteredProperties.length} of {properties.length} Estates
              </span>
              {selectedLocation !== "all" && (
                <span className="px-2 py-0.5 bg-ritora-charcoal text-ritora-gold rounded-sm text-[11px]">
                  {selectedLocation}
                </span>
              )}
              {selectedType !== "all" && (
                <span className="px-2 py-0.5 bg-ritora-charcoal text-ritora-gold rounded-sm text-[11px]">
                  {selectedType}
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-ritora-gold hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-ritora-dark border border-ritora-charcoal rounded-sm p-8 space-y-4 max-w-lg mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-ritora-charcoal flex items-center justify-center text-ritora-gold">
              <Building className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-white">No Estates Found</h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              We could not find any properties matching your exact criteria. Try broadening your price range, clearing filters, or contacting our private office for unlisted off-market opportunities.
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-ritora-gold text-ritora-black text-xs uppercase tracking-wider font-bold hover:bg-ritora-gold-light transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

