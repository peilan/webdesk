import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './components/root'
import ProjectList from './components/projectList'
import ProjectForm from './components/projectForm'
import NewsList from './components/newsList'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root}>
            <Route path="projects" component={ProjectList}>
              <Route path=":projectId" component={ProjectForm}/>
            </Route>
            <Route path="news" component={NewsList}/>
          </Route>
        </Router>
      </Provider>
    </div>,
  document.getElementById('root')
)
