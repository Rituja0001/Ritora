import { useEffect } from "react";

/**
 * Lightweight SEO manager for client-side routing.
 * Dynamically updates document.title, meta[name="description"], and canonical link.
 */
export default function SEO({ title, description, canonicalPath = "" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Ritora Luxe Real Estate L.L.C`
      : "Ritora Luxe Real Estate L.L.C | Boutique Dubai Property Advisory";
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    const canonicalUrl = `https://ritoraluxerealestate.ae${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonicalUrl;
  }, [title, description, canonicalPath]);

  return null;
}

