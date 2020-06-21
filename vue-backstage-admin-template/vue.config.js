const webpack = require('webpack')
const path=require('path');

function resolve(dir){
  return path.resolve(__dirname,dir);
}
module.exports = {
    outputDir: process.env.outputDir,  //build输出目录
    assetsDir: 'static', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    productionSourceMap: false,//关闭线上源码
    publicPath:'',//打包之后index.html引用的问题
    filenameHashing:false,//文件hash值
    devServer: {
      open: false, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '81', 
      https: false,  //是否使用https协议
      hotOnly: false, //是否开启热更新
    },
    configureWebpack(config){
      return{
        resolve: {
          alias: {
            "@": resolve("src"),
            "~": resolve("src/components"),
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
          })
        ]
      }
    }
  }