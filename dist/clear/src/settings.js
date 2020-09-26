export default {
  general: {
    appContainer: '#App'
  },

  jsFiles: [],

  cssFiles: [
    './assets/css/reset.css',
    './assets/css/style.css'
  ],

  router: {
    routes: {
      '/^index\/?$': {
        file: './pages/home.html'
      },

      '/^home\/?$': {
        file: './pages/home.html'
      },

      // other routes here

      '/^\/?$': { // this must always be the last one
        file: './pages/home.html'
      }
    },
    errorPages: {
      '404': './pages/404.html'
    }
  },

  components: {},

  module: {}
}
