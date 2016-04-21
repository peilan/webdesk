import { combineReducers } from 'redux'
import createReducer from './createReducer'

const calc = createReducer(() => {})

export default combineReducers({
  calc
})
