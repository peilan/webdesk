import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'

export default class SprintList extends Component {
  render() {
    const { project } = this.props;
    const columns = [
      { caption: 'Id', field: 'id', type: 'link' },
      { caption: 'Название', field: 'name' },
      { caption: 'Создатель', field: 'user' }
    ]

    return (
      <div>
        <h3>Спринты</h3>
        <div>Спринты проекта {this.props.params.projectId}</div>
        <Grid rows={project.sprints} columns={columns}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const project = state.projects[ownProps.params.projectId];
  return {
    project: {
      ...project,
      ...{
        sprints: project.sprints.map(id => {
          return {
            ...{ id },
            ...state.sprints[id]
          }
        })
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintList)
