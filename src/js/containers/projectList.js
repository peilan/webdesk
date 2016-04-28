import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NavLink from '../components/controls/navlink'

class ProjectList extends Component {
  componentWillMount() {
    if (this.props.children) {
      return;
    }

    this.props.actions.loadProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <h3>Реестр проектов</h3>
          <table className="grid">
            <tbody>
              <tr>
                <th>Id</th><th>Название</th><th>Создатель</th>
              </tr>
              {projects.length && projects.map((project, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <NavLink to={`${project.id}`}>{project.id}</NavLink>
                    </td>
                    <td>
                      {project.name}
                    </td>
                    <td>
                      {project.creator}
                    </td>
                  </tr>
                  );
                })}
            </tbody>
          </table>
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
