import React, { Component } from 'react'

export default class SprintList extends Component {
  render() {
    return (
      <div>
        <h3>Спринты</h3>
        <div>Спринты проекта {this.props.params.projectId}</div>
      </div>
    );
  }
}
