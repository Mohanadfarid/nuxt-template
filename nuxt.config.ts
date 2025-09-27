// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'


export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  extends: ["./core", "./auth", "./localization", "./rbac", "./dashboard"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@primevue/nuxt-module",
  ],
 primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
});
