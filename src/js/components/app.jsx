import React from 'react';
import NavLink from './navlink.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <h1><NavLink to="/" onlyActiveOnIndex={true}>Lexema helpdesk</NavLink></h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
