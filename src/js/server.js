const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './build',
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only'
}).listen(3333, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3333/');
});
