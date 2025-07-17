// src/pages/about/+config.js
export default {
  onBeforeRender: () => import("./+onBeforeRender.server.js"),
};
