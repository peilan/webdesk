import React, { PropTypes, Component } from 'react'

export default class Lookup extends Component {
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value, list } = this.props;

    return (
      <select defaultValue={value} onChange={this.onChange.bind(this)}>
        {list.map((item) => {
          return <option key={item.value} value={item.value}>{item.label}</option>
        })}
      </select>
    );
  }
}

Lookup.propTypes = {
  value: PropTypes.string,
  list: PropTypes.array,
  onChange: PropTypes.func
}
