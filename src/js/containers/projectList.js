import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NavLink from '../components/controls/navlink'

class ProjectList extends Component {
  render() {
    return this.props.children ? this.props.children : (
      <div>
        <h3>Реестр проектов</h3>
        <ul>
          <li>
            <NavLink to="./1">первый</NavLink>
          </li>
          <li>
            <NavLink to="./2">второй</NavLink>
          </li>
          <li>
            <NavLink to="./3">третий</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
