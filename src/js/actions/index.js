import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_SPRINTS_SUCCESS
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
      const data = {
        entities: {
          projects: {
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
        }
      };
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: data.entities.projects
      });
      dispatch({
        type: LOAD_SPRINTS_SUCCESS,
        payload: data.entities.sprints
      });
    }, 2000)
  }
}

export function loadProject(id) {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (projects[id] && projects[id].sprints) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    setTimeout(() => {
      const data = {
        entities: {
          projects: {
            [id]: {
              name: 'some project',
              sprints: [1, 2, 3]
            }
          },
          sprints: {
            1: {
              name: 'Спринт 1-1'
            },
            2: {
              name: 'Спринт 1-2'
            },
            3: {
              name: 'Спринт 1-3'
            }
          }
        }
      };
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: data.entities.projects
      });
      dispatch({
        type: LOAD_SPRINTS_SUCCESS,
        payload: data.entities.sprints
      });
    }, 2000)
  }
}
