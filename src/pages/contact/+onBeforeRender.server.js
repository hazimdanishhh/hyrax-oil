const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/contact/`;

  const title = "Contact Us | Hyrax Oil - Better Oil, Better Care.";
  const description =
    "Get in touch with Hyrax Oil for business inquiries, partnerships, product information, or support. We're here to assist you with your needs across the globe.";
  const image = `${BASE_URL}/og-images/contact.jpg`; // Ensure this exists, fallback if not

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
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+60-3-2163-5893",
              contactType: "Customer Service",
              areaServed: "Worldwide",
              availableLanguage: ["English", "Malay"],
            },
            sameAs: [
              "https://linkedin.com/company/hyrax-oil-sdn-bhd",
              "https://www.hyraxoil.com",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us | Hyrax Oil",
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
                  name: "Contact Us",
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
