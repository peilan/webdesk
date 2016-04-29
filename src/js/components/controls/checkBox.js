import React, { PropTypes, Component } from 'react'

export default class CheckBox extends Component {
  onChange(e) {
    const value = e.target.checked;
    const { field } = this.props;
    this.props.onChange(field, value);
  }

  render() {
    const { source, field } = this.props;

    return (
      <input
        type="checkbox"
        value={source[field]}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

CheckBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
}
