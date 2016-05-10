import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class Home extends Component {
  render() {
    return (
      <ul>
        <li><NavLink to="projects">Список проектов</NavLink></li>
        <li><NavLink to="users">Список пользователей</NavLink></li>
      </ul>
    );
  }
}
