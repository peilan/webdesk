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
import SprintList from './components/sprintList'
import TicketList from './components/ticketList'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
      <Router history={history} render={applyMiddleware(useRelativeLinks())}>
        <Route name="Root" path="/" component={Root}>
          <Route name="Проекты" path="projects" component={ProjectList}>
            <Route name="Проект" path=":projectId" component={ProjectForm}>
              <Route name="Новости" path="news" component={NewsList}/>
              <Route name="Спринты" path="sprints" component={SprintList}/>
              <Route name="Заявки" path="tickets" component={TicketList}/>
            </Route>
          </Route>
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>,
  document.getElementById('root')
)
