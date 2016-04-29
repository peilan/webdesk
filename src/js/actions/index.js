import 'isomorphic-fetch'
import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_SPRINTS_START,
  LOAD_SPRINTS_SUCCESS,
  LOAD_TICKETS_START,
  LOAD_TICKETS_SUCCESS,
  CHANGE_TICKET
} from '../constants'

const API_ROOT = 'http://localhost:3500/data'

export function loadProjects(force) {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (Object.keys(projects).length && !force) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    fetch(`${API_ROOT}/load/projects`).then(response => {
      response.json().then(data => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: data.entities.projects
        });
      })
    });
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

    fetch(`${API_ROOT}/load/project/${id}`).then(response => {
      response.json().then(data => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: data.entities.projects
        });
        dispatch({
          type: LOAD_SPRINTS_SUCCESS,
          payload: data.entities.sprints
        });
      });
    });
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

    fetch(`${API_ROOT}/load/sprint/${id}`).then(response => {
      response.json().then(data => {
        dispatch({
          type: LOAD_SPRINTS_SUCCESS,
          payload: data.entities.sprints
        });
        dispatch({
          type: LOAD_TICKETS_SUCCESS,
          payload: data.entities.tickets
        });
      })
    });
  }
}

export function loadTicket(id) {
  return (dispatch, getState) => {
    const { tickets } = getState()

    if (tickets[id]) {
      return
    }

    dispatch({
      type: LOAD_TICKETS_START
    })

    fetch(`${API_ROOT}/load/ticket/${id}`).then(response => {
      response.json().then(data => {
        dispatch({
          type: LOAD_TICKETS_SUCCESS,
          payload: data.entities.tickets
        });
      })
    });
  }
}

export function changeTicket(id, data) {
  return {
    type: CHANGE_TICKET,
    payload: {
      id,
      data
    }
  }
}
