const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/sustainability/`;

  const title = "Sustainability & ESG | Hyrax Oil";
  const description =
    "Explore Hyrax Oil’s Sustainability & ESG achievements, featuring our eco‑lubricant innovations with Sarawak Lubricants, community flood-relief efforts, ethical governance policies, and our recent appointment as the sole distributor of Ergon’s ester-based transformer oils—bringing fire-safe, biodegradable dielectric fluids to Malaysia and ASEAN markets.";
  const image = `${BASE_URL}/og-images/sustainability.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "Sustainability & ESG",
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
                  name: "Sustainability & ESG",
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
