import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcActions from './actions'

class Calc extends Component {
  handleAlarm() {
    if (this.props.alarm) {
      alert('alarm');
    }
  }
  render() {
    const { Group, TextBox, Lookup, Button, Label } = this.props.controls;
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
        {() => this.handleAlarm()}
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

Calc.propTypes = {
  controls: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)
