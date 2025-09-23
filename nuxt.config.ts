// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  runtimeConfig: {
    public: {
      APP_NAME: 'Lunaprise Metaverse',
      APP_TITLE: 'Lunaprise Metaverse',
      APP_DESCRIPTION: '',
      API_URL: 'https://multiversemalaw.com/',
      NUXT_SESSION_PASSWORD: process.env.NUXT_SESSION_PASSWORD || " ",
   },
    
  },
})