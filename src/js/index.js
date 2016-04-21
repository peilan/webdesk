import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/app'
import configureStore from './store/configureStore'
import DevTools from './containers/devtools'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="projects" component={ProjectList}>
              <Route path=":projectId" component={ProjectForm}/>
            </Route>
          </Route>
        </Router>
      </Provider>
      <DevTools/>
    </div>,
  document.getElementById('root')
)

/*
<div>
  <App controls={controls}/>
  <DevTools/>
</div>
*/
