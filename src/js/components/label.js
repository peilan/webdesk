import React, { PropTypes, Component } from 'react'

export default class Label extends Component {
  render() {
    const { value } = this.props;

    return (
      <div>{value}</div>
    );
  }
}

Label.propTypes = {
  value: PropTypes.number
}
