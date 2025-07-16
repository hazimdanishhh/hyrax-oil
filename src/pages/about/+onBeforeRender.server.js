// src/pages/about/+onBeforeRender.server.js
export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: "About Us | Hyrax Oil",
        description:
          "Learn more about Hyrax Oil, our mission, and how we deliver cutting-edge lubricants for engines and industries worldwide.",
      },
    },
  };
}
