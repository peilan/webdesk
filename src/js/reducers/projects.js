import { LOAD_PROJECTS_START } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS_START:
      return {
        '1': { name: 'first project' },
        '2': { name: 'project 42' },
        '3': { name: 'simple project' }
      }
    default:
      return state;
  }
}
