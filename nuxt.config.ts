// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@vueuse/nuxt'],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  routeRules: {
    '/documentation': { redirect: '/documentation/get_started/about' },
  }
})