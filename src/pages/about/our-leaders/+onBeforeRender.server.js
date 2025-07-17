const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/our-leaders/`;

  const title = "About - Our Leadership | Hyrax Oil";
  const description =
    "Meet the leadership behind Hyrax Oil. Learn about our directors, executives, and their vision in driving innovation, quality, and global growth.";
  const image = `${BASE_URL}/og-images/our-leaders.jpg`; // Make sure this image exists or fallback to a generic one

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
            sameAs: ["https://linkedin.com/company/hyrax-oil"],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Leadership Team",
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
                  name: "Our Leaders",
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
