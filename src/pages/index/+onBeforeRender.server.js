// src/pages/index/onBeforeRender.js

export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: {
        title: "Hyrax Oil | High-Performance Lubricants",
        description:
          "Hyrax Oil is a global lubricants manufacturer delivering high-performance engine oils, greases, and specialty fluids. Engineered for efficiency.",
      },
    },
  };
}
