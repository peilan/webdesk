import {
  SET_FIRST,
  SET_SECOND,
  SET_OPERATION,
  ALARM
} from './constants'

export function setFirst(value) {
  return {
    type: SET_FIRST,
    payload: value
  }
}

export function setSecond(value) {
  return {
    type: SET_SECOND,
    payload: value
  }
}

export function setOperation(value) {
  return {
    type: SET_OPERATION,
    payload: value
  }
}

export function alarm() {
  return {
    type: ALARM
  }
}
