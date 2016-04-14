import { combineReducers } from 'redux'
import createReducer from '../calc/createReducer'
import alarm from '../utils/alarm'

const calc = createReducer(alarm)

export default combineReducers({
  calc
})
