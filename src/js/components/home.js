import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="projects">Список проектов</NavLink>
      </div>
    );
  }
}
