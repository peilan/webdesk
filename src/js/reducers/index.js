import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sprint from './sprint'

export default combineReducers({
  sprint,
  routing: routerReducer
})
