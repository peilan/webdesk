import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS
} from '../constants'

export function loadProjects() {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (Object.keys(projects).length) {
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

export function loadProject(id) {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (projects[id]) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    setTimeout(() => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: {
          [id]: {
            name: 'fisrt project abc'
          }
        }
      })
    }, 2000)
  }
}
