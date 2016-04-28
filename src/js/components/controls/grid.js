import React, { Component } from 'react'
import NavLink from './navlink'

export default class Grid extends Component {
  render() {
    const { rows, columns, isActiveRow, showFooter } = this.props;

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
              <tr key={index} className={isActiveRow(row) ? 'active' : ''}>
                {columns.map((column, index) => {
                  const value = row[column.field];
                  let cell = <div>{value}</div>;
                  let content = cell;

                  if (column.type === 'link') {
                    const base = column.base || './';
                    content = <NavLink to={`${base}${value}`}>{cell}</NavLink>;
                  }
                  else if (column.type === 'checkbox') {
                    content = (
                      <input type="checkbox"
                        onChange={() => {
                          column.onCheck(row.id);
                        }}
                        checked={value}
                      />
                    );
                  }

                  return <td key={index}>{content}</td>;
                })}
              </tr>
            );
          })}
          {showFooter ? (
            <tr>
              {columns.map((column, index) => {
                return (
                  <td key={index}>
                    {column.getFooterText ? column.getFooterText() : ''}
                  </td>);
              })}
            </tr>
          ) : ''}
        </tbody>
      </table>
    );
  }
}
