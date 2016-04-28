import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'

class ProjectList extends Component {
  componentWillMount() {
    this.props.actions.loadProjects();
  }

  render() {
    const { projects } = this.props;
    const columns = [
      { caption: 'Id', field: 'id', type: 'link' },
      { caption: 'Название', field: 'name' },
      { caption: 'Создатель', field: 'user' }
    ]

    return (
      <div>
        <h3>Реестр проектов</h3>
        <Grid columns={columns} rows={projects}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
