import { LOAD_SPRINTS_START } from '../constants'
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPRINTS_START:
      return {
        name: 'easy sprint',
        tickets: [
          { name: 'ehehe', mark: 2, active: true },
          { name: 'azaza', mark: 3, active: false }
        ]
      }
    default:
      return state;
  }
}
