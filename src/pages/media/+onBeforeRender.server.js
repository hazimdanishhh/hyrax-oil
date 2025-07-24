const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/media/`;

  const title = "Media | Hyrax Oil";
  const description =
    "Discover the latest Hyrax Oil media coverage, brand videos, press releases, and news features. Stay updated with our journey, innovations, and milestones in the lubricants and transformer oil industry.";
  const image = `${BASE_URL}/og-images/media.jpg`; // Ensure this image exists or fallback to a general one

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
            name: "Hyrax Oil Media",
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
                  name: "Hyrax Oil Media",
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
