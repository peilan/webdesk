import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import configureStore from './store/configureStore'
import DevTools from './containers/devtools'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <App/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
)
