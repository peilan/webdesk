import {
  SET_FIRST,
  SET_SECOND,
  SET_OPERATION,
  ALARM
} from '../constants'

const initialState = {
  first: 0,
  second: 0,
  result: 0,
  operation: 'addition'
}

function calculate(first, second, operation) {
  first = parseInt(first, 10)
  second = parseInt(second, 10)

  switch (operation) {
    case 'substraction':
      return first - second;
    case 'multiplication':
      return first * second;
    case 'addition':
      return first + second;
    default:
      return 0;
  }
}

export default (alarm) => (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return {...state, first: action.payload,
        result: calculate(action.payload, state.second, state.operation) }
    case SET_SECOND:
      return {...state, second: action.payload,
        result: calculate(state.first, action.payload, state.operation) }
    case SET_OPERATION:
      return {...state, operation: action.payload,
        result: calculate(state.first, state.second, action.payload) }
    case ALARM:
      alarm(`first: ${state.first}, second: ${state.second}`);
      return state;
    default:
      return state;
  }
}
