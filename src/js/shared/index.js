import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcActions from './actions'

class Calc extends Component {
  render() {
    const { Group, TextBox, Lookup, Button, Label } = this.props.controls;
    const { first, second, operation, result } = this.props.calc;
    const {
      setFirst,
      setSecond,
      setOperation,
      alarm
    } = this.props.calcActions;
    const list = [
      { value: 'addition', label: 'сложение' },
      { value: 'substraction', label: 'вычитание' },
      { value: 'multiplication', label: 'умножение' }
    ];

    return (
      <Group>
        <TextBox value={first || ''} onChange={setFirst}/>
        <Lookup value={operation} list={list} onChange={setOperation}/>
        <TextBox value={second || ''} onChange={setSecond}/>
        <Button value="alarm" onClick={alarm}/>
        <Label value={result || ''}/>
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
