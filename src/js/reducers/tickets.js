import { LOAD_TICKETS_SUCCESS, TOGGLE_TICKET } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS_SUCCESS:
      return { ...state, ...action.payload };
    case TOGGLE_TICKET:
      return { ...state, ...{
        [action.payload]: {
          ...state[action.payload],
          ...{
            active: !state[action.payload].active
          }
        }
      }};
    default:
      return state;
  }
}
