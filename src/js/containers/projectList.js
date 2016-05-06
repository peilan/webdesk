import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Grid from '../components/controls/grid'
import Spinner from '../components/controls/spinner'
import Button from '../components/controls/button'
import { fetchNeeds } from '../utils/fetchComponentData'

class ProjectList extends Component {
  static get needs() {
    return [actions.loadProjects];
  }

  componentDidMount() {
    fetchNeeds(ProjectList.needs, this.props);
  }

  render() {
    const { projects } = this.props;
    const getUrl = id => {
      return `/projects/${id}`
    };
    const columns = [
      { caption: 'Id', field: 'id', type: 'link', getUrl },
      { caption: 'Название', field: 'title' },
      { caption: 'Создатель', field: 'user' }
    ]

    return (
      <div>
        <h3>Реестр проектов</h3>
        <Button
          value="Обновить"
          onClick={() => this.props.actions.loadProjects({}, true)}
        />
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
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
