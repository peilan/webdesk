import { LOAD_SPRINTS_SUCCESS } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPRINTS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
