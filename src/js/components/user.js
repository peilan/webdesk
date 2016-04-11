import React, { PropTypes, Component} from 'react'

export default class User extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <span>Привет, { name }!</span>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}
