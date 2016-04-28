import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS
} from '../constants'

export function loadProjects() {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (projects.length) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    setTimeout(() => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: {
          1: {
            name: 'fisrt project'
          },
          2: {
            name: 'project 42'
          },
          3: {
            name: 'simple project'
          }
        }
      })
    }, 2000)
  }
}
