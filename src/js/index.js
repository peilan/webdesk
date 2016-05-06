import '../css/style.css'
import '../css/spinner.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'
import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        render={applyMiddleware(useRelativeLinks())}
      />
    </Provider>,
  document.getElementById('root')
)
