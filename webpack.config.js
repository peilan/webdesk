/*eslint-env node */
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      title: 'lexdesk web-client',
      filename: 'index.html',
      template: './src/index.html',
      favicon: './favicon.ico'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'react-hot',
          'babel'
        ]
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
