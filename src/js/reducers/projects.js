import { LOAD_PROJECTS_SUCCESS } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return [
        { id: 1, name: 'first project' },
        { id: 2, name: 'project 42' },
        { id: 3, name: 'simple project' }
      ]
    default:
      return state;
  }
}
