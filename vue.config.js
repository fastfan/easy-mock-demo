const path = require('path')
// const {applyMock} = require("./build/mock")
const pkg = require('./package.json')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false, // 关闭eslint
  publicPath: '/',
  // publicPath: '/amap',
  // outputDir: process.env.NODE_ENV === 'production' ? 'admin/' : 'dist/',
  chainWebpack: chain => {
    if (pkg && pkg.version) {
      chain.plugin('define').tap(([options]) => {
        options['process.env']['VUE_APP_NAME'] = `"${pkg.name}"`
        options['process.env']['VUE_APP_VERSION'] = `"${pkg.version}"`
        return [options]
      })
    }
    const svgRule = chain.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .oneOf('normal')
      .exclude.add(resolve('src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .end()
      .end()
      .oneOf('sprite')
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // chain
    //   .module
    //   .rule('svg')
    //   .include
    //   .add(path.resolve(__dirname, './src/icons'))
    // chain.module
    //   .rule('svg')
    //   .uses
    //   .delete('file-loader')
    // chain
    //   .module
    //   .rule('svg')
    //   .test(/\.(svg)(\?.*)?$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })

    chain.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 1
        return options
      })
    // .options({
    //   limit: inlineLimit,
    //   name: `img/[name].[hash:8].[ext]`
    // })
  },
  css: {
    loaderOptions: {
      sass: {
        // data: '@import "@/styles/theme-ant-design/src/common/var.scss";' // 全局引入
      }
    }
  },
  configureWebpack: function(config) {
    // console.log(config.module.rules[2])
    return {
      resolve: {
        // extensions: ['.js', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      },
      externals: {
        AMap: 'AMap' // 高德地图配置
      }
    }
  },
  // devServer 选项单独配置
  devServer: {
    https: false,
    proxy: {
      '/cityai': {
        // target: 'http://10.10.77.223:9083', // 域名
        target: 'http://10.10.77.223:9999', // 域名
        changOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // pathRequiresRewrite: {
        //   "^/api": "/"
        // }
      },
      // '/cityai': {
      //   // target: 'http://10.10.68.76:9083/',
      //   target: 'http://10.10.77.223:9083/'
      // },
      '/cityscapeAi': {
        target: 'http://10.10.77.223:8083/'
        // target: 'http://195.195.9.166:8083/',
        // target: 'http://10.12.107.48:8083/'//暂时别删
      },
      '/construction': {
        target: 'http://10.10.77.223:9089/'
      },
      '/system': {
        target: 'http://10.10.77.223:9001'
      },
      '/enforce': {
        target: 'http://10.10.68.72:8087'
      },
      '/algorithm': {
        target: 'http://172.16.2.26:8090'
      },
      '/road': {
        target: 'http://10.10.68.137:9083',
        pathRewrite:{
          '^/road':'/cityai/road'
        }
      }
    },
    before: app => {
      // applyMock(app)
    }
  }
  // configureWebpack: {
  //   externals: {
  //     AMap: 'AMap' // 高德地图配置
  //   }
  // }
}
