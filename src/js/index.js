import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'
import configureStore from './store/configureStore'
import Root from './components/root'
import NotFound from './components/notFound'
import ProjectList from './components/projectList'
import ProjectForm from './components/projectForm'
import NewsList from './components/newsList'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <div>
      <Provider store={store}>
        <Router history={history} render={applyMiddleware(useRelativeLinks())}>
          <Route path="/" component={Root}>
            <Route path="projects" component={ProjectList}>
              <Route path=":projectId" component={ProjectForm}/>
            </Route>
            <Route path="news" component={NewsList}/>
            <Route path="*" component={NotFound}/>
          </Route>
        </Router>
      </Provider>
    </div>,
  document.getElementById('root')
)
