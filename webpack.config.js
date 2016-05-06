/*eslint-env node*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: [ 'react-hmre', 'es2015', 'stage-2', 'react' ]
        }
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
