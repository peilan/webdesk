import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class ProjectList extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ul>
          <li>
            <NavLink to="./1">1</NavLink>
          </li>
          <li>
            <NavLink to="./2">2</NavLink>
          </li>
          <li>
            <NavLink to="./3">3</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
