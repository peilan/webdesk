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
            <NavLink to={`/projects/${projectId}/news`}>Новости</NavLink>
          </li>
        </ul>
        <div>
          Новостей нет (в процессе разработки)
        </div>
      </div>
    );
  }
}
