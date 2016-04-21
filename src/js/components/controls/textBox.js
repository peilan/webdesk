import React, { PropTypes, Component } from 'react'

export default class TextBox extends Component {
  onChange(e) {
    const text = e.target.value;
    this.props.onChange(+text);
  }

  render() {
    const { value } = this.props;

    return (
      <input type="text" value={value} onChange={this.onChange.bind(this)}/>
    );
  }
}

TextBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
}
