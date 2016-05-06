import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'
import { fetchNeeds } from '../utils/fetchComponentData'

class SprintList extends Component {
  static get needs() {
    return [actions.loadProject];
  }

  componentDidMount() {
    fetchNeeds(SprintList.needs, this.props);
  }

  render() {
    const { project } = this.props;
    const { projectId } = this.props.params;
    const getUrl = id => {
      return `/projects/${projectId}/sprints/${id}`
    };
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', getUrl },
      { caption: 'Название', field: 'title' },
      { caption: 'Создатель', field: 'user' }
    ]

    return (
      <div>
        <h3>Спринты</h3>
        <div>Спринты проекта {project.title}</div>
        <br/>
        {(Object.keys(project).length > 1) ? (
          <Grid columns={columns} rows={project.sprints}/>
          ) : <Spinner/>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const project = state.projects[ownProps.params.projectId] || {};
  return {
    project: {
      ...project,
      ...{
        sprints: project.sprints ? project.sprints.map(id => {
          return {
            ...{ id },
            ...state.sprints[id]
          }
        }) : []
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SprintList)
