import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt',
  ],
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/mock.ts'
  ]
})
