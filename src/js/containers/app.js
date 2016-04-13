import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcActions from '../actions/calcActions'
import platform from '../platform'

class App extends Component {
  render() {
    const { Group, TextBox, Lookup, Button, Label } = platform().controls;
    const { first, second, operation, result } = this.props.calc;
    const {
      setFirst,
      setSecond,
      setOperation,
      calculate
    } = this.props.calcActions;
    const list = [
      { value: 'addition', label: 'сложение' },
      { value: 'substraction', label: 'вычитание' },
      { value: 'multiplication', label: 'умножение' },
      { value: 'alarm', label: 'алярм' }
    ];

    return (
      <Group>
        <TextBox value={first} onChange={setFirst}/>
        <Lookup value={operation} list={list} onChange={setOperation}/>
        <TextBox value={second} onChange={setSecond}/>
        <Button value="calculate" onClick={calculate}/>
        <Label value={result}/>
      </Group>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
