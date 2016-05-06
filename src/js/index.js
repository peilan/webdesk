import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { match, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

match({ routes, location }, () => {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
  )
})
