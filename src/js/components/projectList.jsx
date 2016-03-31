import React from 'react';
import NavLink from './navlink.jsx';

class Projects extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const id = event.target.elements[0].value;
    const path = `/projects/${id}`;
    this.context.router.push(path);
  }

  render() {
    return (
      <div>
        <ul role="nav" className="horizontal-menu">
          <li>
            <NavLink to="/projects">Проекты</NavLink>
          </li>
        </ul>
        <ul>
          <li><NavLink to="/projects/1">Проект 1</NavLink></li>
          <li><NavLink to="/projects/2">Проект 2</NavLink></li>
          <li><NavLink to="/projects/3">Проект 3</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Projects.contextTypes = {
  router: React.PropTypes.object
};

export default Projects;
