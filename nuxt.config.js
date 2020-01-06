module.exports = {
  mode: 'spa',
  srcDir: 'client',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#285e61' },
  css: ['~assets/css/tailwind.css', '~assets/scss/index.scss'],
  plugins: [
    { src: '~/plugins/vue-js-modal', ssr: false },
    // { src: '~/plugins/MGTool', ssr: false },
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: './assets/css/tailwind.css',
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  // webfontloader: {
  //   google: {
  //     gamilies: ['Lato:400, 700'],
  //   },
  // },
  axios: {
    baseURL: process.env.API_URL || 'http://210.223.45.233:8485',
    // baseURL: process.env.API_URL || 'http://sample.bmaster.kro.kr/',
  },
  router: {
    // middleware: ['auth', 'route-info', 'study-authenticate', 'browser'],
    middleware: ['auth', 'router-info'],
  },
  auth: {
    // See https://auth.nuxtjs.org/reference/schemes
    // scopeKey: "roles",
    redirect: {
      login: false,
      logout: false,
      home: false,
    },
    strategies: {
      local: {
        tokenType: 'Bearer',
        endpoints: {
          login: {
            url: '/user/login',
            method: 'post',
            propertyName: 'result',
          },
          logout: false,
          user: false,
          // user: {
          //   url: '/mypage1/profile1',
          //   method: 'get',
          //   propertyName: 'result',
          // },
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
