const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/csr/`;

  const title = "CSR & Community Outreach | Hyrax Oil";
  const description =
    "Discover Hyrax Oil’s CSR and community outreach efforts, from empowering rural and underprivileged communities and supporting orphan care and disaster relief, to health and environmental awareness campaigns in collaboration with NGOs. Learn about our ongoing commitment to uplifting lives across Malaysia.";
  const image = `${BASE_URL}/og-images/csr.jpg`; // Make sure this image exists or fallback to a generic one

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
            name: "CSR & Community Outreach",
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
                  name: "CSR & Community Outreach",
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
