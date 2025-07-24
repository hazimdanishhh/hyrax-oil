const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/awards/`;

  const title = "Awards & Accreditations | Hyrax Oil";
  const description =
    "Explore Hyrax Oil’s awards and accreditations, including ISO 9001:2015 quality certification, API engine oil licensing, OEM approvals (ACEA, Ford, MTU, Doble), and the prestigious Malaysian Brand National Mark. Discover the industry recognition behind our global excellence.";
  const image = `${BASE_URL}/og-images/awards.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "Awards & Accreditations",
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
                  name: "Awards & Accreditations",
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
