import React, { Component } from 'react'
import NavLink from './navlink'

export default class Grid extends Component {
  render() {
    const { rows, columns, isActiveRow, showFooter } = this.props;
    const getClassName = row => isActiveRow ? isActiveRow(row) : '';

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
              <tr key={index} className={getClassName(row) ? 'active' : ''}>
                {columns.map((column, index) => {
                  const value = row[column.field];
                  let cell = <div>{value}</div>;
                  let content = cell;

                  if (column.type === 'link') {
                    const url = column.getUrl ? column.getUrl(value) : '';
                    content = <NavLink to={url}>{cell}</NavLink>;
                  }
                  else if (column.type === 'checkbox') {
                    content = (
                      <input type="checkbox"
                        onChange={(e) => {
                          const checked = e.target.checked;
                          column.onCheck(row.id, checked);
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
                    <b>{column.getFooterText ? column.getFooterText() : ''}</b>
                  </td>);
              })}
            </tr>
          ) : <tr></tr>}
        </tbody>
      </table>
    );
  }
}
