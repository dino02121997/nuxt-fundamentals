// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
  // experimental : {},
  // ssr:true,
  ,
  routeRules: {
    "/hybrid/spa": { ssr: false },
    "/hybrid/static": { static: true },
    "/hybrid/swr": { swr: true },
  },

})
