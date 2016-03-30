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
        <ul>
          <li><NavLink to="/projects/1">Name1</NavLink></li>
          <li><NavLink to="/projects/2">Name2</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="id"/> / {' '}
              <button type="submit">Go</button>
            </form>
          </li>
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
