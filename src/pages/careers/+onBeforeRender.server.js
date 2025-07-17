const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/careers/`;

  const title = "Careers at Hyrax Oil | Join Our Growing Global Team";
  const description =
    "Discover exciting career opportunities at Hyrax Oil. Be part of a global company driven by innovation, quality, and sustainability in the lubricants industry.";
  const image = `${BASE_URL}/og-images/careers.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "Careers at Hyrax Oil",
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
                  name: "Careers",
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
