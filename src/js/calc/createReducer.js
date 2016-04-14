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
  const { first, second, operation } = state;

  switch (operation) {
    case 'alarm':
      if (alarm) {
        alarm(`${first}, ${second}`);
      }
      return state;
    case 'substraction':
      return { ...state, result: first - second };
    case 'multiplication':
      return { ...state, result: first * second };
    case 'addition':
    default:
      return { ...state, result: first + second };
  }
}

export default (alarm) => (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return { ...state, first: action.payload };
    case SET_SECOND:
      return { ...state, second: action.payload };
    case SET_OPERATION:
      return { ...state, operation: action.payload };
    case CALCULATE:
      return calculate(state, alarm)
    default:
      return state;
  }
}
