// Global Config File
// ======================================
// Routing behavior (client or server)
// Pre-rendering (for SEO & speed)
// Default metadata fallbacks
// Which files act as wrappers (e.g. PageShell, app.jsx)

export default {
  clientRouting: true, // Enables SPA-like navigation on the client
  hydrationCanBeAborted: true, // Optional, improves performance for fast transitions

  // Enable pre-rendering for SEO and static hosting
  prerender: {
    partial: true,      // Allow fallback for some routes if not all are pre-rendered
    noExtraDir: true    // Keeps clean URLs like /about/index.html → /about/
  }
}
