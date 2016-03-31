import '../css/style.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import ProjectList from './components/projectList.jsx';
import Project from './components/project.jsx';
import SprintList from './components/sprintList.jsx';
import Sprint from './components/sprint.jsx';
import TicketList from './components/ticketList.jsx';
import NewsList from './components/newsList.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={ProjectList}/>
      <Route path="/projects/:projectId" component={Project}/>
      <Route path="/projects/:projectId/sprints" component={SprintList}/>
      <Route path="/projects/:projectId/sprints/:sprintId" component={Sprint}/>
      <Route path="/projects/:projectId/tickets" component={TicketList}/>
      <Route path="/projects/:projectId/news" component={NewsList}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
