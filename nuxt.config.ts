import { NuxtConfig } from '@nuxt/types'
import i18n from './config/i18n'

const development = process.env.NODE_ENV !== 'production'

const nuxtConfig: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'quotes-picker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English',
          },
          {
            code: 'ja',
            name: 'Japanese',
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', 'nuxt-fontawesome'],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  publicRuntimeConfig: {
    quoteServiceBaseURL: development
      ? 'https://cors-anywhere.herokuapp.com/https://quote-service.yutafujii.net/quotes/pick'
      : 'https://quote-service.yutafujii.net/quotes/pick',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithubSquare', 'faTwitter'],
      },
    ],
  },

  styleResources: {
    scss: [
      '~assets/stylesheets/_palette.scss',
      '~assets/stylesheets/_colors.scss',
      '~assets/stylesheets/_fonts.scss',
      '~assets/stylesheets/_grid.scss',
      '~assets/stylesheets/_animation.scss',
    ],
  },
}

module.exports = nuxtConfig
