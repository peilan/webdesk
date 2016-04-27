import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import sprint from './sprint'

export default combineReducers({
  sprint,
  routing
})
