import { LOAD_CONTRACTS_SUCCESS, CHANGE_CONTRACT } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTRACTS_SUCCESS:
      return { ...state, ...action.payload };
    case CHANGE_CONTRACT:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload.data
        }
      };
    default:
      return state;
  }
}
