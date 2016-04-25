import React from 'react';
import { RelativeLink } from 'react-router-relative-links'

export default class NavLink extends React.Component {
  render() {
    return <RelativeLink {...this.props} activeClassName="link-active"/>;
  }
}
