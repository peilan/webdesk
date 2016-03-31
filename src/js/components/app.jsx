import React from 'react';
import NavLink from './navlink.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/" onlyActiveOnIndex={true}>Lexema helpdesk</NavLink>{" "}
          <NavLink to="/projects">Проекты</NavLink>{" "}
          <NavLink to="/about">(?)</NavLink>
        </h1>
        {this.props.children}
      </div>
    );
  }
});
