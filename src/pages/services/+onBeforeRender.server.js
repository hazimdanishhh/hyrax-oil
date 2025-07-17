const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/services/`;

  const title = "Our Services | Lubricants, Greases & Custom Solutions";
  const description =
    "Explore Hyrax Oil’s full range of services including premium lubricants, greases, specialty fluids, and custom formulation solutions tailored to global industries.";
  const image = `${BASE_URL}/og-images/services.jpg`; // Ensure this image exists or fallback to a general one

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
              "Hyrax Oil is a global manufacturer of premium-quality lubricants, greases, and specialty fluids, driven by innovation and sustainability.",
            sameAs: [
              "https://linkedin.com/company/hyrax-oil-sdn-bhd",
              "https://www.hyraxoil.com",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Services",
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
                  name: "Services",
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
