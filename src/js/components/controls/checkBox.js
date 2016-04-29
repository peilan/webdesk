import React, { PropTypes, Component } from 'react'

export default class CheckBox extends Component {
  onClick() {
    this.props.onClick();
  }

  render() {
    const { value } = this.props;

    return (
      <input type="checkbox" value={value} onChange={this.onClick.bind(this)}/>
    );
  }
}

CheckBox.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func
}
