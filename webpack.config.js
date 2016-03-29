/*eslint-env node */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lexdesk web-client',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
