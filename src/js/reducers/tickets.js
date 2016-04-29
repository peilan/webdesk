import { LOAD_TICKETS_SUCCESS, TOGGLE_TICKET, CHANGE_TICKET } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS_SUCCESS:
      return { ...state, ...action.payload };
    case TOGGLE_TICKET:
      return {
        ...state,
        ...{
          [action.payload]: {
            ...state[action.payload],
            ...{
              taken: !state[action.payload].taken
            }
          }
        }
      };
    case CHANGE_TICKET:
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
