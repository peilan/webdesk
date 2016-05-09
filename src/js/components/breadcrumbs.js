import React, { Component } from 'react'

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <ul className="horizontal-menu">
          {this.props.routes.map((route, index) => {
            let name = route.name;

            if (!name) {
              return;
            }

            let firstChar = route.path.substring(0, 1);

            if (firstChar === ':') {
              let routePath = route.path.substring(1, route.path.length);
              name = this.props.params[routePath];
            }

            return <li key={index}>{name}</li>
          })}
        </ul>
      </div>
    );
  }
}
