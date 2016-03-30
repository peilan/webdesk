import '../css/style.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Project from './components/project.jsx';
import Home from './components/home.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={Projects}>
        <Route path="/projects/:id" component={Project}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
