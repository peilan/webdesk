import { LOAD_CONTRACTS_SUCCESS } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTRACTS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
