import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_SPRINTS_START,
  LOAD_SPRINTS_SUCCESS,
  LOAD_TICKETS_START,
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
              title: 'first ticket',
              raiting: 5,
              taken: true
            },
            2: {
              title: 'easy ticket',
              raiting: 1,
              taken: false
            },
            3: {
              title: 'tacket',
              raiting: 3,
              taken: true
            },
            4: {
              title: 'test ticket',
              raiting: 2,
              taken: false
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

export function loadTicket(id) {
  return (dispatch, getState) => {
    const { sprints } = getState()

    if (sprints[id] && sprints[id].tickets) {
      return
    }

    dispatch({
      type: LOAD_TICKETS_START
    })

    setTimeout(() => {
      const data = {
        entities: {
          tickets: {
            [id]: {
              title: 'some ticket',
              raiting: 5,
              taken: true,
              description: 'ticket description'
            }
          }
        }
      };
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
