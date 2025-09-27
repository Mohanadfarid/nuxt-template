// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends:[
    './core',
    './auth',
    './localization',
    './rbac',
    './dashboard'
  ],
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image']
})