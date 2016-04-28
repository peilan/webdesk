import { LOAD_SPRINT_SUCCESS } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPRINT_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
