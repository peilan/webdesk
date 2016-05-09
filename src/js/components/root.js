import React, { Component } from 'react'
import Breadcrumbs from './breadcrumbs'

export default class Root extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs routes={this.props.routes} params={this.props.params}/>
        {this.props.children}
      </div>
    );
  }
}
