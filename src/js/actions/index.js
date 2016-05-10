import dataAPI from '../api/data'
import {
  LOAD_PROJECTS_START,
  LOAD_PROJECTS_SUCCESS,
  LOAD_SPRINTS_START,
  LOAD_SPRINTS_SUCCESS,
  LOAD_TICKETS_START,
  LOAD_TICKETS_SUCCESS,
  CHANGE_TICKET,
  CHANGE_USER,
  LOAD_CONTRACTS_START,
  LOAD_CONTRACTS_SUCCESS,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  CHANGE_CONTRACT
} from '../constants'

export function loadProjects(params, force) {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (Object.keys(projects).length && !force) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    return dataAPI.fetchProjects().then(data => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: data.entities.projects
      });
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
    });
  }
}

export function loadProject({ projectId }) {
  return (dispatch, getState) => {
    const { projects } = getState()

    if (projects[projectId] && projects[projectId].sprints) {
      return
    }

    dispatch({
      type: LOAD_PROJECTS_START
    })

    return dataAPI.fetchProject(projectId).then(data => {
      dispatch({
        type: LOAD_PROJECTS_SUCCESS,
        payload: data.entities.projects
      });
      dispatch({
        type: LOAD_SPRINTS_SUCCESS,
        payload: data.entities.sprints
      });
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
    });
  }
}

export function loadSprint({ sprintId }) {
  return (dispatch, getState) => {
    const { sprints } = getState()

    if (sprints[sprintId] && sprints[sprintId].tickets) {
      return
    }

    dispatch({
      type: LOAD_SPRINTS_START
    })

    return dataAPI.fetchSprint(sprintId).then(data => {
      dispatch({
        type: LOAD_SPRINTS_SUCCESS,
        payload: data.entities.sprints
      });
      dispatch({
        type: LOAD_TICKETS_SUCCESS,
        payload: data.entities.tickets
      });
      dispatch({
        type: LOAD_CONTRACTS_SUCCESS,
        payload: data.entities.contracts
      });
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
    });
  }
}

export function loadTicket({ ticketId }) {
  return (dispatch, getState) => {
    const { tickets } = getState()

    if (tickets[ticketId]) {
      return
    }

    dispatch({
      type: LOAD_TICKETS_START
    })

    return dataAPI.fetchTicket(ticketId).then(data => {
      dispatch({
        type: LOAD_TICKETS_SUCCESS,
        payload: data.entities.tickets
      });
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
    });
  }
}

export function loadContract({ contractId }) {
  return (dispatch, getState) => {
    const { contracts } = getState()

    if (contracts[contractId]) {
      return
    }

    dispatch({
      type: LOAD_CONTRACTS_START
    })

    return dataAPI.fetchContract(contractId).then(data => {
      dispatch({
        type: LOAD_CONTRACTS_SUCCESS,
        payload: data.entities.contracts
      });
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
    });
  }
}

export function loadUsers(params, force) {
  return (dispatch, getState) => {
    const { users } = getState()

    if (Object.keys(users).length && !force) {
      return
    }

    dispatch({
      type: LOAD_USERS_START
    })

    return dataAPI.fetchProjects().then(data => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      })
    });
  }
}

export function loadUser({ userId }) {
  return (dispatch, getState) => {
    const { users } = getState()

    if (users[userId]) {
      return
    }

    dispatch({
      type: LOAD_USERS_START
    })

    return dataAPI.fetchUser(userId).then(data => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: data.entities.users
      });
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

export function changeUser(id, data) {
  return {
    type: CHANGE_USER,
    payload: {
      id,
      data
    }
  }
}

export function changeContract(id, data) {
  return {
    type: CHANGE_CONTRACT,
    payload: {
      id,
      data
    }
  }
}
