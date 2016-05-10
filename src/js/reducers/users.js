import { LOAD_USERS_SUCCESS, CHANGE_USER } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return { ...state, ...action.payload };
    case CHANGE_USER:
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
