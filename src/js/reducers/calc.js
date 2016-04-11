import {
  SET_FIRST,
  SET_SECOND,
  SET_OPERATION,
  CALCULATE
} from '../constants/calc'

const initialState = {
  first: 0,
  second: 0,
  result: 0,
  operation: 'addition'
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
      return { ...state, result: state.first + state.second }
    default:
      return state;
  }
}
