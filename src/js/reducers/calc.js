import {
  SET_FIRST,
  SET_SECOND,
  SET_OPERATION,
  CALCULATE
} from '../constants/calc'
import platform from '../platform'

const initialState = {
  first: 0,
  second: 0,
  result: 0,
  operation: 'addition'
}

function calculate({ first, second, operation }) {
  switch (operation) {
    case 'alarm':
      if (platform().alarm) {
        platform().alarm(first + ', ' + second)
      }

      return 0;
    case 'substraction':
      return first - second;
    case 'multiplication':
      return first * second;
    case 'addition':
    default:
      return first + second;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return { ...state, first: action.payload };
    case SET_SECOND:
      return { ...state, second: action.payload };
    case SET_OPERATION:
      return { ...state, operation: action.payload };
    case CALCULATE:
      return { ...state, result: calculate(state) }
    default:
      return state;
  }
}
