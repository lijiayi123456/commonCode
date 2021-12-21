var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  entry: {
    main: './main' // 配置的单入口
  },
  output: {
    path: path.join(__dirname,'./dist'),
    publicPath: '/dist/',
    filename: 'main.js' // 打包后的文件会存储为demo/dist/main.js文件，只要在html中引入它就可以了
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test : /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=4024'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}

module.exports = config;