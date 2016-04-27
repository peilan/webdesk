import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS
} from '../constants'

export function loadProjects() {
  return (dispatch) => {
    dispatch({
      type: LOAD_PROJECTS_START
    })

    setTimeout(() => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS
      })
    }, 2000)
  }
}
