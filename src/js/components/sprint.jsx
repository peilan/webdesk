import React from 'react';
import NavLink from './navlink.jsx';

export default class Sprint extends React.Component {
  render() {
    let { projectId, sprintId } = this.props.params;

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
          <li>
            <NavLink to={`/projects/${projectId}/sprints/${sprintId}`}>Спринт {" " + sprintId}</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
