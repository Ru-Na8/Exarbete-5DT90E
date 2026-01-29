/**
 * Nuxt 3 Configuration
 * ====================
 * Iteration 1: Basic setup with Tailwind CSS and API configuration.
 */

export default defineNuxtConfig({
  // Enable devtools for development
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // Runtime configuration (accessible via useRuntimeConfig())
  runtimeConfig: {
    // Private keys (server-side only)
    // apiSecret: '',

    // Public keys (exposed to client)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000',
    },
  },

  // TypeScript configuration
  typescript: {
    strict: true,
  },

  // Future iterations (uncomment when needed):
  // ------------------------------------------
  // - Authentication module
  // - State management (Pinia)
  // - i18n for internationalization

  compatibilityDate: '2024-01-01',
})
