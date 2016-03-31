import React from 'react';
import NavLink from './navlink.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/" onlyActiveOnIndex={true}>Lexema helpdesk</NavLink>{" "}
          <NavLink to="/about">(about)</NavLink>{" "}
          <NavLink to="/projects">Проекты</NavLink>
        </h1>
        {this.props.children}
      </div>
    );
  }
});
