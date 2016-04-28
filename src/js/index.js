import '../css/style.css'
import '../css/spinner.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'
import configureStore from './store/configureStore'
import Root from './components/root'
import Home from './components/home'
import NotFound from './components/notFound'
import Vertex from './components/vertex'
import ProjectList from './containers/projectList'
import ProjectForm from './containers/projectForm'
import NewsList from './components/newsList'
import SprintList from './components/sprintList'
import TicketList from './components/ticketList'
import SprintForm from './containers/sprintForm.js'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
      <Router history={history} render={applyMiddleware(useRelativeLinks())}>
        <Route name="Начало" path="/" component={Root}>
          <IndexRoute component={Home}/>
          <Route name="Проекты" path="projects" component={Vertex}>
            <IndexRoute component={ProjectList}/>
            <Route name="Проект" path=":projectId" component={Vertex}>
              <IndexRoute component={ProjectForm}/>
              <Route name="Новости" path="news" component={NewsList}/>
              <Route name="Спринты" path="sprints" component={Vertex}>
                <IndexRoute component={SprintList}/>
                <Route name="Спринт" path=":sprintId" component={SprintForm}/>
              </Route>
              <Route name="Заявки" path="tickets" component={TicketList}/>
            </Route>
          </Route>
          <Route name="Путь не найден" path="*" component={NotFound}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root')
)
