// 开发时的配置文件,主要服务与webpack-dev-server
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/build/"
  },
  devServer: {
    port: 3000,
    inline: true,
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
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
