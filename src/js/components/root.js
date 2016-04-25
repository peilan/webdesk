import React, { Component } from 'react'
import Breadcrumbs from 'react-breadcrumbs'
import NavLink from './controls/navlink'

export default class Root extends Component {
  render() {
    return (
      <div>
        <h3><NavLink to="/" onlyActiveOnIndex={true}>Root</NavLink></h3>
        <NavLink to="/projects">Проекты{" "}</NavLink>
        <Breadcrumbs routes={this.props.routes} params={this.props.params}/>
        {this.props.children}
      </div>
    );
  }
}
