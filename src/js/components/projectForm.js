import React, { Component } from 'react'
import NavLink from './controls/navlink'

export default class ProjectForm extends Component {
  render() {
    return (
      <div>
        <h3>Форма проекта</h3>
        <div>Проект {this.props.params.projectId}</div>
        <ul>
          <li>
            <NavLink to="./news">Новости</NavLink>
          </li>
          <li>
            <NavLink to="./sprints">Спринты</NavLink>
          </li>
          <li>
            <NavLink to="./tickets">Заявки</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
