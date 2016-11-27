// 打包时的配置文件，就是webpack的配置
var path = require('path');
// var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "./build/"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.css/, loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  }
}
