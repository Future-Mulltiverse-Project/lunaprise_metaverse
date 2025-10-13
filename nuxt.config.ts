// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.min.css'],
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
    apiToken: process.env.apiToken,
    baseURL: process.env.NUXT_BASE_URL,
    public: {
      APP_NAME: 'Lunaprise Metaverse',
      APP_TITLE: 'Lunaprise Metaverse',
      APP_DESCRIPTION: '',
      API_URL: 'https://multiversemalaw.com/',
   },
    
  },
  app: {
      head: {
        title: "Lunaprise Metaverse",
              meta: [
                {
                  name: "description",
                  content:
                    "Buy, sell, and explore exclusive NFTs and digital assets in the Lunaprise Metaverse. Curated assets, verified creators, and secure Web3 transactions.",
                },
                { name: "robots", content: "index, follow" },
                {
                  name: "keywords",
                  content:
                    "Lunaprise Metaverse, Marketplace, NFTs, Digital Art, Web3 Marketplace, NFT Collections, Buy NFTs, Sell NFTs, Crypto Art, Verified Creators, GraceAI, Launchpad, Guidebook",
                },
        
                // OpenGraph
                { property: "og:title", content: "Lunaprise Metaverse" },
                {
                  property: "og:description",
                  content:
                    "Explore rare NFT collections, discover new artists, and securely trade digital assets in the Lunaprise Metaverse.",
                },
                { property: "og:url", content: "https://marketplace.futuremultiverse.dev" },
                { property: "og:type", content: "website" },
                {
                  property: "og:image",
                  content: "https://marketplace.futuremultiverse.dev/icon_image.png",
                },
        
                // Twitter Cards
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Lunaprise Metaverse" },
                {
                  name: "twitter:description",
                  content:
                    "Trade verified NFTs and explore premium collections by creators across the multiverse.",
                },
                {
                  name: "twitter:image",
                  content: "https://marketplace.futuremultiverse.dev/icon_image.png",
                },
              ],
        link: [
          { rel: 'canonical', href: 'https://multiversemalaw.com/' },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icon_image.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icon_image.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/icon_image.png',
          },
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg?v=1',
            color: '#F5FF80',
          },
          {
            rel: 'shortcut icon',
            href: '/icon_image.png',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
        ],
        script: [
          { src: "https://unpkg.com/feather-icons", defer: true }
        ]
      },
    },
})