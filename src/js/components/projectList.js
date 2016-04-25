import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class ProjectList extends Component {
  render() {
    return this.props.children ? this.props.children : (
      <div>
        <h3>Реестр проектов</h3>
        <ul>
          <li>
            <NavLink to="./1">первый</NavLink>
          </li>
          <li>
            <NavLink to="./2">второй</NavLink>
          </li>
          <li>
            <NavLink to="./3">третий</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
