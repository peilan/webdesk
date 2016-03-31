import React from 'react';
import NavLink from './navlink.jsx';

export default class Project extends React.Component {
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
        </ul>
        <ul role="nav">
          <li>
            <NavLink to={`/projects/${projectId}/sprints`}>Спринты</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}/tickets`}>Заявки</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${projectId}/news`}>Новости</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
