import React from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from "lucide-react";

/**
 * Reusable Luxury Property Card Component
 * Optimized for grid presentation with smooth hover states and high-end aesthetics.
 */
export default function PropertyCard({ property }) {
  const {
    id,
    title,
    location,
    price,
    priceUSD,
    beds,
    baths,
    area,
    image,
    type,
    status,
    featured,
  } = property;

  return (
    <div className="group bg-ritora-dark border border-ritora-charcoal hover:border-ritora-gold/50 transition-all duration-500 flex flex-col overflow-hidden shadow-lg hover:shadow-gold-glow">
      {/* Property Image Container with Luxury Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ritora-black">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ritora-black/90 via-ritora-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 bg-ritora-black/80 backdrop-blur-md border border-ritora-gold/40 text-ritora-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
            {type}
          </span>
          {featured && (
            <span className="px-3 py-1 bg-ritora-gold text-ritora-black text-[10px] uppercase tracking-[0.2em] font-bold shadow-md">
              Featured
            </span>
          )}
        </div>

        {/* Bottom Tagline / Status */}
        {status && (
          <div className="absolute bottom-3 left-4">
            <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-sm">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-2">
            <MapPin className="w-3.5 h-3.5 text-ritora-gold flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg text-white group-hover:text-ritora-gold transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-ritora-charcoal/80 text-neutral-300 text-xs">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-ritora-gold/80" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-ritora-gold/80" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="w-3.5 h-3.5 text-ritora-gold/80" />
            <span>{area}</span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-neutral-400">
              Offered At
            </span>
            <div className="font-serif text-base font-bold text-ritora-gold tracking-tight">
              {price}
            </div>
            {priceUSD && (
              <span className="text-[11px] text-neutral-500">
                approx. {priceUSD}
              </span>
            )}
          </div>

          <Link
            to={`/properties/${id}`}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-neutral-700 hover:border-ritora-gold text-neutral-200 hover:text-ritora-black hover:bg-ritora-gold text-xs uppercase tracking-wider font-medium transition-all duration-300 rounded-sm"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

