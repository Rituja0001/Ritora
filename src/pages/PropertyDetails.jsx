import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Bed,
  Bath,
  Maximize2,
  Calendar,
  MapPin,
  Check,
  Phone,
  Mail,
  MessageSquare,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Building,
} from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

/**
 * Property Details Page - Ritora Dubai
 * Features full interactive image gallery switcher, architectural specifications,
 * curated amenities grid, dedicated broker contact card, and inline inquiry form.
 */
export default function PropertyDetails() {
  const { id } = useParams();

  // Find target property
  const property = properties.find((p) => p.id === id);

  // Fallback for non-existent IDs
  if (!property) {
    return (
      <div className="bg-ritora-black text-white min-h-screen pt-36 pb-20 text-center px-4">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="font-serif text-3xl text-ritora-gold">Property Not Found</h2>
          <p className="text-neutral-400 text-sm">
            The requested estate may have been privately transferred or is currently off-market.
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ritora-gold text-ritora-black text-xs uppercase tracking-wider font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Active gallery image state
  const [selectedImage, setSelectedImage] = useState(property.images[0] || property.image);

  // Inquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    viewingDate: "",
    message: `I am interested in scheduling a private viewing for ${property.title}. Please contact me confidentially.`,
  });
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => setEnquirySuccess(false), 6000);
  };

  // Find 2-3 similar properties (excluding current)
  const similarProperties = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.neighborhood === property.neighborhood))
    .slice(0, 3);

  return (
    <div className="bg-ritora-black text-white min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-light">
          <Link to="/" className="hover:text-ritora-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-ritora-gold transition-colors">
            Portfolio
          </Link>
          <span>/</span>
          <span className="text-ritora-gold truncate max-w-xs sm:max-w-md">
            {property.title}
          </span>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-ritora-charcoal">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-ritora-gold/10 border border-ritora-gold/40 text-ritora-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
                {property.type}
              </span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-[10px] uppercase tracking-wider">
                {property.status}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-ritora-gold" />
                <span>{property.location}</span>
              </div>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white">
              {property.title}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-1">
              {property.tagline}
            </p>
          </div>

          <div className="lg:text-right flex-shrink-0">
            <span className="block text-[10px] uppercase tracking-widest text-neutral-400">
              Guide Price
            </span>
            <div className="font-serif text-2xl sm:text-4xl font-bold text-ritora-gold">
              {property.price}
            </div>
            <div className="text-xs text-neutral-400">
              approx. {property.priceUSD} USD
            </div>

            {/* Quick Share / Save actions */}
            <div className="flex items-center gap-3 mt-3 lg:justify-end">
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-sm border transition-colors ${
                  saved
                    ? "bg-ritora-gold/20 border-ritora-gold text-ritora-gold"
                    : "border-neutral-800 hover:border-ritora-gold text-neutral-400"
                }`}
                title="Save Property"
              >
                <Heart className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Property link copied to clipboard.");
                }}
                className="p-2 rounded-sm border border-neutral-800 hover:border-ritora-gold text-neutral-400 transition-colors"
                title="Share Property"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. INTERACTIVE IMAGE GALLERY */}
        <div className="py-8 space-y-4">
          {/* Main Large Hero Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-ritora-charcoal bg-ritora-dark">
            <img
              src={selectedImage}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {property.images.map((imgUrl, index) => {
              const isSelected = selectedImage === imgUrl;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative aspect-[16/10] overflow-hidden rounded-sm border transition-all duration-300 ${
                    isSelected
                      ? "border-ritora-gold ring-2 ring-ritora-gold/50 scale-[1.02]"
                      : "border-neutral-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${property.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. KEY SPECIFICATIONS STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-ritora-dark border border-ritora-charcoal rounded-sm my-6 text-center">
          <div className="p-2">
            <Bed className="w-5 h-5 text-ritora-gold mx-auto mb-1.5" />
            <div className="font-serif text-xl font-bold text-white">{property.beds}</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">Bedrooms</div>
          </div>
          <div className="p-2">
            <Bath className="w-5 h-5 text-ritora-gold mx-auto mb-1.5" />
            <div className="font-serif text-xl font-bold text-white">{property.baths}</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">Bathrooms</div>
          </div>
          <div className="p-2">
            <Maximize2 className="w-5 h-5 text-ritora-gold mx-auto mb-1.5" />
            <div className="font-serif text-xl font-bold text-white">{property.area}</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">Built-Up Area</div>
          </div>
          <div className="p-2">
            <Calendar className="w-5 h-5 text-ritora-gold mx-auto mb-1.5" />
            <div className="font-serif text-xl font-bold text-white">{property.yearBuilt}</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">Completion Year</div>
          </div>
        </div>

        {/* 3. MAIN CONTENT: 2-COLUMN LAYOUT (Description + Sidebar Agent/Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          {/* Left Column (8 cols): Description & Amenities */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                Architectural Overview
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Bespoke Amenities Grid */}
            <div className="space-y-6 pt-6 border-t border-ritora-charcoal">
              <h3 className="font-serif text-2xl text-white">
                Bespoke Estate Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 bg-ritora-dark/80 border border-ritora-charcoal rounded-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-ritora-gold/10 flex items-center justify-center text-ritora-gold flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-200">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Neighborhood Highlights */}
            <div className="space-y-4 pt-6 border-t border-ritora-charcoal">
              <h3 className="font-serif text-2xl text-white">
                The Neighborhood: {property.neighborhood}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                Positioned in {property.neighborhood}, one of the world's most sought-after prime districts. Residents enjoy close proximity to award-winning Michelin dining, international private academies, private aviation terminals, and premier leisure clubs.
              </p>
            </div>
          </div>

          {/* Right Column (4 cols): Dedicated Broker Card & Enquiry Form */}
          <div className="lg:col-span-4 space-y-8">
            {/* Dedicated Agent Card */}
            <div className="bg-ritora-dark border border-ritora-charcoal p-6 rounded-sm space-y-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ritora-gold font-semibold block">
                Dedicated Estate Broker
              </span>

              <div className="flex items-center gap-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border border-ritora-gold/50 flex-shrink-0"
                />
                <div>
                  <h4 className="font-serif text-lg text-white font-medium">
                    {property.agent.name}
                  </h4>
                  <p className="text-xs text-neutral-400">{property.agent.role}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-ritora-charcoal/80">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-ritora-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-ritora-gold" />
                  <span>{property.agent.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-ritora-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-ritora-gold" />
                  <span>{property.agent.email}</span>
                </a>
              </div>

              <a
                href={`https://wa.me/971508924110?text=Hello%20Ritora,%20I%20am%20interested%20in%20${encodeURIComponent(
                  property.title
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 border border-ritora-gold/60 text-ritora-gold hover:bg-ritora-gold hover:text-ritora-black text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors rounded-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Private Broker</span>
              </a>
            </div>

            {/* Enquire Now Form */}
            <div className="bg-ritora-dark border border-ritora-charcoal p-6 rounded-sm">
              <h4 className="font-serif text-xl text-white mb-2">
                Enquire on this Estate
              </h4>
              <p className="text-neutral-400 text-xs mb-6 font-light">
                Request private floorplans, verified title deeds, or coordinate an in-person or virtual walkthrough.
              </p>

              {enquirySuccess ? (
                <div className="p-4 bg-ritora-gold/10 border border-ritora-gold/40 text-ritora-gold space-y-2 text-center rounded-sm">
                  <CheckCircle2 className="w-6 h-6 mx-auto" />
                  <div className="text-xs font-semibold uppercase tracking-wider">
                    Inquiry Received
                  </div>
                  <p className="text-xs text-neutral-300 font-light">
                    {property.agent.name} will reach out via your preferred contact channel shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={enquiryData.name}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={enquiryData.email}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={enquiryData.phone}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, phone: e.target.value })
                      }
                      placeholder="+971 50 000 0000"
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                      Target Viewing Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={enquiryData.viewingDate}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, viewingDate: e.target.value })
                      }
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-2 text-xs text-neutral-300 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                      Confidential Message
                    </label>
                    <textarea
                      rows={3}
                      value={enquiryData.message}
                      onChange={(e) =>
                        setEnquiryData({ ...enquiryData, message: e.target.value })
                      }
                      className="w-full bg-ritora-black/80 border border-neutral-700 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-ritora-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-ritora-gold" />
                    <span>Information kept strictly confidential under NDA.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-ritora-gold hover:bg-ritora-gold-light text-ritora-black text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:shadow-gold-glow transition-all rounded-sm"
                  >
                    Submit Private Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4. SIMILAR PROPERTIES SECTION */}
        {similarProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-ritora-charcoal">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-ritora-gold font-semibold block mb-1">
                  Complementary Assets
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Similar Prime Estates
                </h3>
              </div>
              <Link
                to="/properties"
                className="text-xs uppercase tracking-wider text-ritora-gold hover:text-white transition-colors"
              >
                View Full Collection &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

