/*eslint-env node */
module.exports = {
  entry: './src/js/entry.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devtool: '#cheap-source-map',
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
  }
};
