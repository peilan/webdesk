import React from 'react';
import NavLink from './navlink.jsx';

export default class Sprints extends React.Component {
  render() {
    let projectId = this.props.params.projectId;

    return (
      <div>
        <ul role="nav" className="horizontal-menu">
          <li>
            <NavLink to="/projects">Проекты</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}`}>Проект {" " + projectId}</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}/sprints`}>Спринты</NavLink>
          </li>
        </ul>
        <ul>
          <li><NavLink to={`/projects/${projectId}/sprints/1`}>Спринт 1</NavLink></li>
          <li><NavLink to={`/projects/${projectId}/sprints/2`}>Спринт 2</NavLink></li>
          <li><NavLink to={`/projects/${projectId}/sprints/3`}>Спринт 3</NavLink></li>
        </ul>
      </div>
    );
  }
}
