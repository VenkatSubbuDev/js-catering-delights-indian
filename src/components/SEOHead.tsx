import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  structuredData?: object;
}

export function SEOHead({
  title = "JS Catering Delights - Best Indian Food Catering Services | Wedding & Event Catering",
  description = "Professional Indian food catering services for weddings, corporate events, private parties & festivals. Authentic cuisine, traditional setup, expert service. Book now for unforgettable dining experiences.",
  keywords = "indian food catering, wedding catering, corporate catering, event catering, private party catering, authentic indian cuisine, traditional food service, catering services near me, indian wedding catering, festival catering",
  canonical,
  structuredData
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };
    
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:type', 'website');
    updateOGTag('og:image', 'https://js-catering-delights-indian.lovable.app/favicon.png');
    
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', 'https://js-catering-delights-indian.lovable.app/favicon.png');
    
    // Add structured data
    if (structuredData) {
      let existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
  }, [title, description, keywords, canonical, structuredData]);

  return null;
}

// Default structured data for the business
export const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JS Catering Delights",
  "description": "Professional Indian food catering services specializing in weddings, corporate events, private parties, and cultural festivals.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nandyal",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "IN"
  },
  "telephone": "+91-93476-70599",
  "email": "jscatering.in@gmail.com",
  "url": "https://js-catering-delights-indian.lovable.app",
  "priceRange": "₹200-1500 per person",
  "servesCuisine": ["Indian", "Traditional", "Regional"],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "15.4889",
      "longitude": "78.4867"
    },
    "geoRadius": "100000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Catering",
          "description": "Comprehensive wedding catering with traditional Indian cuisine"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Catering",
          "description": "Professional catering for business meetings and corporate events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Party Catering",
          "description": "Intimate dining experiences for personal celebrations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Catering",
          "description": "Large-scale catering for festivals and community events"
        }
      }
    ]
  }
};