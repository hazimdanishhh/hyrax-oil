// Global Config File
// ======================================
// Routing behavior (client or server)
// Pre-rendering (for SEO & speed)
// Default metadata fallbacks
// Which files act as wrappers (e.g. PageShell, app.jsx)

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,

  prerender: {
    partial: true, // allow pre-rendering without full static site
    keepDistServer: true, // IMPORTANT: prevents removal of dist/server/
    noExtraDir: true,
  },

  // ✅ Correct format for meta.env
  meta: {
    // This tells Vike to run the 'Page' export on both client & server
    Page: {
      env: {
        server: true,
        client: true,
      },
    },
  },
};
