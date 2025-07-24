const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/blending-plants/`;

  const title = "Blending Plants | Hyrax Oil";
  const description =
    "Explore Hyrax Oil’s advanced blending plants in Malaysia, Sri Lanka, and South Africa. Built for precision, quality, and sustainability, our facilities ensure consistent production of world-class lubricants and transformer oils for global markets.";
  const image = `${BASE_URL}/og-images/blending-plants.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "Hyrax Oil",
            url: BASE_URL,
            logo: `${BASE_URL}/logo.png`,
            description:
              "A global leader in high-quality lubricants and sustainable oil solutions.",
            sameAs: ["https://linkedin.com/company/hyrax-oil-sdn-bhd"],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Blending Plants",
            url: fullUrl,
            description: description,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${BASE_URL}/about/`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Blending Plants",
                  item: fullUrl,
                },
              ],
            },
          },
        ],
      },
    },
  };
}
