import { NuxtConfig } from '@nuxt/types'
import i18n from './config/i18n'

const development = process.env.NODE_ENV !== 'production'

const nuxtConfig: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Your 2021 Quote',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Randomly pick a quote for you that might encourage you in 2021.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@__yutafujii__' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: `"Your 2021's Quote"`,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Randomly pick a quote for you that might encourage you in 2021.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://20201219-cloudfront-demo.yutafujii.net/ogp.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://20201219-cloudfront-demo.yutafujii.net',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: `"Your 2021's Quote"` },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Randomly pick a quote for you that might encourage you in 2021.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://20201219-cloudfront-demo.yutafujii.net/ogp.png',
      },
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
    serviceLink: 'https://20201219-cloudfront-demo.yutafujii.net/',
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
        icons: ['faGithubSquare', 'faTwitter', 'faFacebook'],
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
