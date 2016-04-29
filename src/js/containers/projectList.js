import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'

class ProjectList extends Component {
  componentWillMount() {
    this.props.actions.loadProjects();
  }

  render() {
    const { projects } = this.props;
    const columns = [
      { caption: 'Id', field: 'id', type: 'link' },
      { caption: 'Название', field: 'title' },
      { caption: 'Создатель', field: 'user' }
    ]

    return (
      <div>
        <h3>Реестр проектов</h3>
        {projects.length ? (
          <Grid columns={columns} rows={projects}/>
        ) : <Spinner/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: Object.keys(state.projects).map((id) => {
      return { ...state.projects[id], ...{ id } };
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
