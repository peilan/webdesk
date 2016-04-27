import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import projects from './projects'
import sprints from './sprints'

export default combineReducers({
  projects,
  sprints,
  routing
})
