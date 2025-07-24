const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/certifications/`;

  const title = "Certifications & Compliance | Hyrax Oil";
  const description =
    "Discover Hyrax Oil’s prestigious certifications and accreditations—including ISO 9001:2015 quality management, API and OEM approvals (ACEA, MTU, Ford, Doble), and the National Mark of Malaysian Brand—demonstrating our global-standard excellence in lubricants and transformer oils.";
  const image = `${BASE_URL}/og-images/certifications.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "Certifications & Compliance",
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
                  name: "Certifications & Compliance",
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
