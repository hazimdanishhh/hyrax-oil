const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/the-company/`;

  const title = "About - Hyrax Oil | Our Company, Mission & Global Vision";
  const description =
    "Discover the story behind Hyrax Oil — from our mission and core values to our global operations and commitment to producing world-class lubricants.";
  const image = `${BASE_URL}/og-images/the-company.jpg`; // Ensure this image exists; fallback to a shared about.jpg if needed

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
              "Hyrax Oil is a global manufacturer of premium-quality lubricants, driven by innovation and sustainability.",
            sameAs: [
              "https://linkedin.com/company/hyrax-oil-sdn-bhd",
              "https://www.hyraxoil.com", // Add more verified profiles if available
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About The Company",
            url: fullUrl,
            description: description,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "About",
                  item: `${BASE_URL}/about`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "The Company",
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
