// https://nuxt.com/docs/api/configuration/nuxt-config
const GOOGLE_ANALYTICS_ID = 'G-K58TV2208T'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // css: ['~/assets/main.scss'],
  ssr: false, // Temporarily disable SSR to fix translations
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    langDir: 'locales/',
    lazy: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || GOOGLE_ANALYTICS_ID
    }
  },
  // SEO Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: process.env.NODE_ENV === 'production' ? [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `,
          type: 'text/javascript'
        }
      ] : []
    }
  }
})
