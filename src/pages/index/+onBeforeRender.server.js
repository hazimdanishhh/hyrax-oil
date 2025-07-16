// src/pages/index/+onBeforeRender.server.js

const BASE_URL = process.env.VITE_SITE_BASE_URL || "http://localhost:3000";

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}`; // Home page is always this
  const title = "Hyrax Oil | High-Performance Lubricants";
  const description =
    "Hyrax Oil is a global lubricants manufacturer delivering high-performance engine oils, greases, and specialty fluids. Engineered for efficiency.";
  const image = `${BASE_URL}/og-images/home.jpg`;

  return {
    pageContext: {
      documentProps: {
        title,
        description,
        url: fullUrl,
        image,
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hyrax Oil",
            "url": fullUrl,
            "logo": `${BASE_URL}/logo.png`,
            "description": description,
            "sameAs": [
              "https://linkedin.com/company/hyrax-oil"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": fullUrl,
            "name": "Hyrax Oil",
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${BASE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }
    }
  };
}
