const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/products/transformer-and-electrical-oils/`;

  const title = "Transformer & Electrical Oils | Hyrax® Insulating Oils";
  const description =
    "Keep your power systems running efficiently with Hyrax® Transformer & Electrical Oils. Trusted worldwide for their purity and performance, our oils provide excellent heat transfer and insulation properties for reliable, uninterrupted energy delivery.";
  const image = `${BASE_URL}/og-images/products.jpg`;

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
            "@type": "CollectionPage",
            name: "Transformer & Electrical Oils",
            url: fullUrl,
            description,
            image,
            isPartOf: {
              "@type": "WebSite",
              name: "Hyrax Oil",
              url: BASE_URL,
            },
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
                  name: "Products",
                  item: `${BASE_URL}/products/`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Transformer & Electrical Oils",
                  item: fullUrl,
                },
              ],
            },
          },
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
              "https://www.hyraxoil.com",
            ],
          },
        ],
      },
    },
  };
}
