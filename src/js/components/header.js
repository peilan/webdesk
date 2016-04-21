import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="app-header"><h2>Header</h2> {this.props.children}</div>
    );
  }
}
