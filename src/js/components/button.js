import React, { PropTypes, Component } from 'react'

export default class Button extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <div>
        <input type="button" value={value} onClick={onClick}/>
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
