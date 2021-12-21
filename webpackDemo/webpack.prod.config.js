var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

// webpack-merge模块就是用于合并两个webpack的配置文件，
module.exports = merge(webpackBaseConfig,{
  output: {
    publicPath: './dist/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    // 定义当前node环境为生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 提取模板，并保存入口html文件
    new HtmlwebpackPlugin({
      filename: '../index_prod.html',
      template: './index.ejs',
      inject: false
    })
  ]
})
