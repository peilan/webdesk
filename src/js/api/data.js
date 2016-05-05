import fetchJSON from '../utils/fetchJSON'

const API_ROOT = 'http://localhost:3500/data'

export default {
  fetchProjects() {
    return fetchJSON(`${API_ROOT}/load/projects`);
  },
  fetchProject(id) {
    return fetchJSON(`${API_ROOT}/load/project/${id}`);
  },
  fetchSprint(id) {
    return fetchJSON(`${API_ROOT}/load/sprint/${id}`);
  },
  fetchTicket(id) {
    return fetchJSON(`${API_ROOT}/load/ticket/${id}`);
  }
}
