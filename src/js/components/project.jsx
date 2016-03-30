import React from 'react';

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.id}</h2>
      </div>
    );
  }
}
