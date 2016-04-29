import React, { PropTypes, Component } from 'react'

export default class Memo extends Component {
  onChange(e) {
    const value = e.target.value;
    const { field } = this.props;
    this.props.onChange(field, value);
  }

  render() {
    const { source, field, readOnly } = this.props;

    return (
      <textarea
        value={source[field]}
        onChange={this.onChange.bind(this)}
        readOnly={readOnly}
        rows="10"
        cols="45"
      />
    );
  }
}

Memo.propTypes = {
  source: PropTypes.object,
  field: PropTypes.string,
  onChange: PropTypes.func
}
