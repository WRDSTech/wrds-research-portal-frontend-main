
// const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const isProd = ['production', 'prod'].includes(process.env.NODE_ENV)
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  productionSourceMap: false,
  pluginOptions: {
    compression: {
      brotli: {
        filename: '[file].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11
          }
        },
        minRatio: 0.8
      },
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://tenk-backend.ddns.net:8665/',
        changeOrigin: true
      },
      '^/graph': {
        target: 'http://tenk-backend.ddns.net:8866/',
        pathRewrite: {
          '^/graph': '/'
        },
        changeOrigin: true
      },
      '^https://tenk-filing.s3.amazonaws.com/': {
        target: 'https://tenk-filing.s3.amazonaws.com/',
        changeOrigin: true
      },
      '^/tenk-filing/files': {
        target: 'http://tenk-filing.s3.amazonaws.com/',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('CompressionPlugin').use('compression-webpack-plugin', [{
    //     filename: '[path][base].gz',
    //     algorithm: 'gzip',
    //     // 要压缩的文件（正则）
    //     test: productionGzipExtensions,
    //     // 最小文件开启压缩
    //     threshold: 10240,
    //     minRatio: 0.8
    //   }])
    // }
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  },
  configureWebpack: {
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ]
  }

  // configureWebpack: config => {
  //   const plugins = [];
  // 	config.plugin.push(
  //   	// 为模块提供中间缓存，缓存路径是：node_modules/.cache/hard-source
  //     // solve Configuration changes are not being detected
  //     new HardSourceWebpackPlugin({
  //       root: process.cwd(),
  //       directories: [],
  //       environmentHash: {
  //         root: process.cwd(),
  //         directories: [],
  //         files: ['package.json', 'yarn.lock']
  //       }
  //     })
  //     // 配置了files的主要原因是解决配置更新，cache不生效了的问题，配置后有包的变化，plugin会重新构建一部分cache
  //   )
  // }
}
