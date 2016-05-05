import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NavLink from '../components/controls/navlink'
import Spinner from '../components/controls/spinner'
import { fetchNeeds } from '../utils/fetchComponentData'

class ProjectForm extends Component {
  static get needs() {
    return [actions.loadProject];
  }

  componentDidMount() {
    fetchNeeds(ProjectForm.needs, this.props);
  }

  render() {
    const { project } = this.props;

    return (
      <div>
        <h3>Форма проекта</h3>
        {project.sprints ? (
          <div>
            <div>Проект {project.title}</div>
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
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects[ownProps.params.projectId] || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
