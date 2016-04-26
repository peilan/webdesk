import React from 'react';
import { Router as ReactRouter, Route, IndexRoute } from 'react-router'
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'
import Root from './root'
import Home from './home'
import NotFound from './notFound'
import ProjectList from './projectList'
import ProjectForm from './projectForm'
import NewsList from './newsList'
import SprintList from './sprintList'
import TicketList from './ticketList'
import SprintForm from './sprintForm.js'

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter {...this.props} render={applyMiddleware(useRelativeLinks())}>
        <Route name="Начало" path="/" component={Root}>
          <IndexRoute component={Home}/>
          <Route name="Проекты" path="projects" component={ProjectList}>
            <Route name="Проект" path=":projectId" component={ProjectForm}>
              <Route name="Новости" path="news" component={NewsList}/>
              <Route name="Спринты" path="sprints" component={SprintList}>
                <Route name="Спринт" path=":sprintId" component={SprintForm}/>
              </Route>
              <Route name="Заявки" path="tickets" component={TicketList}/>
            </Route>
          </Route>
          <Route name="Путь не найден" path="*" component={NotFound}/>
        </Route>
      </ReactRouter>
    );
  }
}
