// src/pages/about/the-company/+config.js
export default {
  onBeforeRender: () => import("./+onBeforeRender.server.js"),
};
