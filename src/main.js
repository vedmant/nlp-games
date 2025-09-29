// This file is not used in Nuxt 3 - i18n is handled by @nuxtjs/i18n module
// Commented out to prevent conflicts with Nuxt i18n configuration

/*
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap'
import './scss/index.scss'
import VueI18n from 'vue-i18n'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

Vue.use(VueI18n)

const lang = navigator.language.split('-')[0]

const i18n = new VueI18n({
  locale: lang === 'ru' ? 'ru' : lang,
  messages: {
    ru,
    en,
  },
})

// eslint-disable no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  i18n,
})
*/
