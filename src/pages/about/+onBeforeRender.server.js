const BASE_URL = (
  process.env.VITE_SITE_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export function onBeforeRender() {
  const fullUrl = `${BASE_URL}/about/`;

  const title = "About Hyrax Oil | Company Overview & Global Impact";
  const description =
    "Explore Hyrax Oil’s story, our commitment to quality, sustainability, and global presence in the lubricants industry. Learn how we’re shaping the future of performance oils.";
  const image = `${BASE_URL}/og-images/about.jpg`; // Ensure this image exists or fallback to a general one

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
            name: "About Hyrax Oil",
            url: fullUrl,
            description: description,
          },
        ],
      },
    },
  };
}
