import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from '../components/root'
import Home from '../components/home'
import NotFound from '../components/notFound'
import Vertex from '../components/vertex'
import ProjectList from '../containers/projectList'
import ProjectForm from '../containers/projectForm'
import NewsList from '../components/newsList'
import SprintList from '../containers/sprintList'
import TicketList from '../components/ticketList'
import SprintForm from '../containers/sprintForm'
import TicketForm from '../containers/ticketForm'
import UserList from '../containers/userList'
import UserForm from '../containers/userForm'
import ContractList from '../containers/contractList'

export default (
  <Route name="Начало" path="/" component={Root}>
    <IndexRoute component={Home}/>
    <Route name="Проекты" path="projects" component={Vertex}>
      <IndexRoute component={ProjectList}/>
      <Route name="Проект" path=":projectId" component={Vertex}>
        <IndexRoute component={ProjectForm}/>
        <Route name="Новости" path="news" component={NewsList}/>
        <Route name="Спринты" path="sprints" component={Vertex}>
          <IndexRoute component={SprintList}/>
          <Route name="Спринт" path=":sprintId" component={Vertex}>
            <IndexRoute component={SprintForm}/>
            <Route name="Заявка" path="tickets/:ticketId" component={TicketForm}/>
            <Route name="Контракты" path="contracts" component={ContractList}/>
          </Route>
        </Route>
        <Route name="Заявки" path="tickets" component={TicketList}/>
      </Route>
    </Route>
    <Route name="Сотрудники" path="users" component={Vertex}>
      <IndexRoute component={UserList}/>
      <Route name="Сотрудник" path=":userId" component={UserForm}/>
    </Route>
    <Route name="Путь не найден" path="*" component={NotFound}/>
  </Route>
)
