// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/parent': { redirect: '/parent/about/name' },
    '/parent/about': { redirect: '/parent/about/name' },
  },
  devtools: { enabled: true }
})
