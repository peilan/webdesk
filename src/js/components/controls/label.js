import React, { PropTypes, Component } from 'react'

export default class Label extends Component {
  render() {
    const { value } = this.props;

    return (
      <span>{value}</span>
    );
  }
}

Label.propTypes = {
  value: PropTypes.any
}
