import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NavLink from '../components/controls/navlink'

export default class ProjectForm extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <h3>Форма проекта</h3>
        <div>Проект {project.name}</div>
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
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects[ownProps.params.projectId]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
