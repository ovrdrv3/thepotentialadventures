export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'The Potential Adventures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Prismic + Nuxt Blog example',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/resetr.css',
    '@/assets/css/common.css',
    '@/assets/css/google-fonts.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/medium-zoom'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
    'bootstrap-vue/nuxt',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            // fas means import everything with fas prefix.
            icons: ['faEnvelope'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebook', 'faInstagram', 'faTwitter', 'faPinterest'],
          },
        ],
      },
    ],
  ],
  prismic: {
    endpoint: 'https://thepotentialadventures.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },

  buildModules: ['@nuxtjs/pwa'],

  generate: {
    fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
  },
}
