const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/products/tractor-fluids/`;

  const title = "Tractor Fluids | Hyrax®";
  const description =
    "Hyrax® Tractor Fluids deliver the ultimate protection and performance for your farming and construction equipment. Designed for heavy workloads and extreme conditions, they ensure reliable operation and extended service life for all your machinery.";
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
            name: "Tractor Fluids",
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
                  name: "Tractor Fluids",
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
