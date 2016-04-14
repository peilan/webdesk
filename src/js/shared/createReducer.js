import {
  SET_FIRST,
  SET_SECOND,
  SET_OPERATION,
  CALCULATE
} from './constants'

const initialState = {
  first: 0,
  second: 0,
  result: 0,
  operation: 'addition'
}

function calculate(state, alarm) {
  let { first, second, operation } = state;

  first = parseInt(first, 10)
  second = parseInt(second, 10)

  switch (operation) {
    case 'alarm':
      if (alarm) {
        alarm(`first: ${first}, second: ${second}`);
      }
      return state;
    case 'substraction':
      return {...state, result: first - second}
    case 'multiplication':
      return {...state, result: first * second}
    case 'addition':
      return {...state, result: first + second}
    default:
      return state
  }
}

export default (alarm) => (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return {...state, first: action.payload }
    case SET_SECOND:
      return {...state, second: action.payload }
    case SET_OPERATION:
      return {...state, operation: action.payload }
    case CALCULATE:
      return calculate(state, alarm)
    default:
      return state;
  }
}
