// src/pages/index/+config.js
export default {
  onBeforeRender: () => import('./+onBeforeRender.js'), // ✅ must point to real file
}
