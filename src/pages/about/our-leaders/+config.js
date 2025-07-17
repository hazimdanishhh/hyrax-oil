// src/pages/about/our-leaders/+config.js
export default {
  onBeforeRender: () => import("./+onBeforeRender.server.js"),
};
