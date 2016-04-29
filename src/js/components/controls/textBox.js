import React, { PropTypes, Component } from 'react'

export default class TextBox extends Component {
  onChange(e) {
    const value = e.target.value;
    const { field } = this.props;
    this.props.onChange(field, value);
  }

  render() {
    const { source, field, readOnly } = this.props;

    return (
      <input
        type="text"
        value={source[field]}
        onChange={this.onChange.bind(this)}
        readOnly={readOnly}
      />
    );
  }
}

TextBox.propTypes = {
  source: PropTypes.object,
  field: PropTypes.string,
  onChange: PropTypes.func
}
