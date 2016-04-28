import React, { Component } from 'react'
import NavLink from './navlink'

export default class Grid extends Component {
  render() {
    const { rows, columns } = this.props;

    return (
      <table className="grid">
        <tbody>
          <tr>
            {columns.map((column, index) => {
              return <th key={index}>{column.caption}</th>;
            })}
          </tr>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map((column, index) => {
                  const value = row[column.field];
                  let cell = <div>{value}</div>;
                  let content = cell;

                  if (column.type === 'link') {
                    content = <NavLink to={`./${value}`}>{cell}</NavLink>;
                  }

                  return <td key={index}>{content}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
