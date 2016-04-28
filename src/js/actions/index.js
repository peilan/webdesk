import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_SPRINTS_START,
  LOAD_SPRINTS_SUCCESS,
  LOAD_TICKETS_SUCCESS,
  TOGGLE_TICKET
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

export function loadSprint(id) {
  return (dispatch, getState) => {
    const { sprints } = getState()

    if (sprints[id] && sprints[id].tickets) {
      return
    }

    dispatch({
      type: LOAD_SPRINTS_START
    })

    setTimeout(() => {
      const data = {
        entities: {
          sprints: {
            [id]: {
              name: 'some sprint',
              tickets: [1, 2, 3, 4]
            }
          },
          tickets: {
            1: {
              name: 'first ticket',
              mark: 5,
              active: true
            },
            2: {
              name: 'easy ticket',
              mark: 1,
              active: false
            },
            3: {
              name: 'tacket',
              mark: 3,
              active: true
            },
            4: {
              name: 'test ticket',
              mark: 2,
              active: false
            }
          }
        }
      };
      dispatch({
        type: LOAD_SPRINTS_SUCCESS,
        payload: data.entities.sprints
      });
      dispatch({
        type: LOAD_TICKETS_SUCCESS,
        payload: data.entities.tickets
      });
    }, 2000)
  }
}

export function toggleTicket(id) {
  return {
    type: TOGGLE_TICKET,
    payload: id
  }
}
