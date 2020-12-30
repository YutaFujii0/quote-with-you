import { NuxtConfig } from '@nuxt/types'
import i18n from './config/i18n'

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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  fontawesome: {
    // 全部のせは重いため、使用するフォントのみimportする
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faAngleUp',
          'faAngleRight',
          'faExternalLinkAlt',
          'faTimesCircle',
          'faExclamationTriangle',
          'faFilePdf',
          'faCloudUploadAlt',
          'faPlus',
          'faCheck',
          'faBan',
        ],
      },
    ],
  },

  styleResources: {
    scss: [
      '~assets/stylesheets/_palette.scss',
      '~assets/stylesheets/_colors.scss',
      '~assets/stylesheets/_fonts.scss'
    ],
  },
}

module.exports = nuxtConfig
