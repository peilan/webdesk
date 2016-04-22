import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3><NavLink to="/" onlyActiveOnIndex={true}>Root</NavLink></h3>
        <NavLink to="/projects">Проекты{" "}</NavLink>
        <NavLink to="/news">Новости</NavLink>
        {this.props.children}
      </div>
    );
  }
}
