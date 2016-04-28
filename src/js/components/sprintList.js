import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class SprintList extends Component {
  render() {
    return (
      <div>
        <h3>Спринты</h3>
        <div>Спринты проекта {this.props.params.projectId}</div>
        <ul>
          <li>
            <NavLink to="./1">Спринт 1-1</NavLink>
          </li>
          <li>
            <NavLink to="./2">Спринт 1-2</NavLink>
          </li>
          <li>
            <NavLink to="./3">Спринт 1-3</NavLink>
          </li>
          <li>
            <NavLink to="./4">Спринт 1-4</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
