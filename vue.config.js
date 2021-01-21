const webpack = require('webpack')
const Host = 'http://localhost:3000';

const cdn = {
  css: [

  ]
}

module.exports = {
  chainWebpack: (config) => {
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

    // 配置cdn引入
    if (process.env.NODE_ENV === 'production') {
      let externals = {
        vue: 'Vue',
        axios: 'axios',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        moment: 'moment'
      }
      config.externals(externals)

      config.plugin('html').tap((args) => {
        args[0].cdn = cdn
        return args
      })
    }
  },
  configureWebpack: (config) => {
    // const productionGzipExtentions = ['html', 'js', 'css']
    // config.plugins.push(
    //   new CompressionWebpackPlugin({
    //     filename: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //     threshold: 10240,
    //     minRatio: 0.8,
    //     deleteOriginalAssers: false
    //   })
    // )

    if (process.env.NODE_ENV === 'productin') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1890ff',
          },
          javascriptEnabled: true,
        }
      },
      sass: {
        prependData: "@import '@/theme/index.scss';",
      },
    }
  },
  // webSocket本身不存在跨域问题，所以我们可以利用webSocket\进行非同源之间的通信。
  publicPath: '/',
  devServer: {
    port: 1997,
    proxy: {
      '/api': {
        target: Host,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      },
      'socket.io': {
        target: Host,
        ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
}