import { combineReducers } from 'redux'
import createReducer from '../shared/createReducer'
import alarm from '../utils/alarm'

const calc = createReducer(alarm)

export default combineReducers({
  calc
})
