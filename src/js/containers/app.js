import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcActions from '../actions'
import controls from './components/controls'
import Header from '../components/header'

class App extends Component {
  render() {
    const { Group, Label } = controls;

    return (
      <div>
        <Header/>
        <Group className="app-navigation"><Label value="navigation"/></Group>
        <div>test</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    calc: state.calc
  }
}

function mapDispatchToProps(dispatch) {
  return {
    calcActions: bindActionCreators(calcActions, dispatch)
  }
}

App.propTypes = {
  controls: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
