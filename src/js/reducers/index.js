import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import projects from './projects'
import sprints from './sprints'
import tickets from './tickets'
import contracts from './contracts'
import users from './users'

export default combineReducers({
  routing,
  projects,
  sprints,
  tickets,
  contracts,
  users
})
