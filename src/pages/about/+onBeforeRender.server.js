// src/pages/about/+onBeforeRender.server.js

const BASE_URL = process.env.VITE_SITE_BASE_URL || "http://localhost:3000";

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}about`; // About page path

  const title = "About Hyrax Oil | Our Mission, Vision & Global Reach";
  const description =
    "Learn more about Hyrax Oil – our journey, global presence, vision, and commitment to high-quality lubricants and sustainable innovation.";
  const image = `${BASE_URL}/og-images/about.jpg`; // You can update this if you have a specific OG image for the About page

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
            "@type": "WebPage",
            "name": "About Hyrax Oil",
            "url": fullUrl,
            "description": description
          }
        ]
      }
    }
  };
}
