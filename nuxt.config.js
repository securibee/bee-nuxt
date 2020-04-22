require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/prism.css', '@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-placeholders',
    '~/plugins/vue-observe-visibility.client'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
    '~/modules/static',
    '~/modules/crawler'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        'postcss-nested': {}
      }
    }
  },

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      'markdown-it-prism',
      'markdown-it-highlight-lines',
      'markdown-it-link-attributes',
      'markdown-it-anchor',
      'markdown-it-toc-done-right'
    ]
  },

  hooks: {
    build: {
      async before(builder) {
        const axios = require('axios')
        const fs = require('fs')
        const targetDir = './data'
        let allPosts = []
        let page = 0
        const perPage = 30 // can go up to 1000
        let latestResult = []
        do {
          page += 1 // bump page up by 1 every loop
          latestResult = await axios(
            `https://dev.to/api/articles/me/published?page=${page}&perPage=${perPage}`,
            {
              headers: {
                'api-key': process.env.DEVTO_API_KEY
              }
            }
          )
          const { data } = latestResult
          allPosts = allPosts.concat(data)
        } while (latestResult.length === perPage)
        console.log(`Fetched: ${allPosts.length} posts`)
        fs.mkdirSync(targetDir, { recursive: true })
        fs.writeFile(
          `${targetDir}/devto.json`,
          JSON.stringify(allPosts, null, 2),
          (err) => {
            if (err) throw err
          }
        )
      }
    }
  }
}
