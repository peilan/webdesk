/*eslint-env node*/
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import routes from '../routes'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import fetchComponentData from '../utils/fetchComponentData'

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../../webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
      return res.status(500).send( error.message );
    }
		if (redirectLocation) {
			return res.redirect(
        302,
        redirectLocation.pathname + redirectLocation.search
      );
    }

		if (renderProps == null) {
			return res.status(404).send('Not found');
		}

		fetchComponentData(
      store.dispatch,
      renderProps.components,
      renderProps.params
    )
    .then(() => {
			const initView = renderToString((
				<Provider store={store}>
          <RouterContext
            { ...renderProps }
          />
				</Provider>
			))

			let state = JSON.stringify( store.getState() );
			let page = renderFullPage( initView, state )

			return page;
		})
    .then(page => res.status(200).send(page))
    .catch(err => res.end(err.message));
	});
});

function renderFullPage(html, initialState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
      <title>lexema helpdesk</title>
    </head>
    <body>
      <div id="root">${html}</div>
		    <script>
          window.$REDUX_STATE = ${initialState};
        </script>
        <script src="/build/bundle.js"></script>
    </body>
  </html>`
}

app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
})

app.use((err, req, res) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log( 'uncaughtException: ', evt );
})

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
