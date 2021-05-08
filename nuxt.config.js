export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pingu Roar - Betti & Chrissi Lovestory :)',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Pingu-Roar eine Pinguin & Löwen Lovestory' },
      { property: 'og:title', content: 'Pingu Roar - Betti & Chrissi Lovestory :)' },
      { property: 'og:url', content: 'https://pingu-roar.com' },
      { property: 'og:description', content: 'Pingu Roar - Betti & Chrissi Lovestory :)' },
      { property: 'og:image', content: 'https://diltheymedia.com/pingu-roar/img/og-image.png' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://diltheymedia.com/pingu-roar/img/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
