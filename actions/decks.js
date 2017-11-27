import {
  LOAD_DATA
} from '../actionTypes'

export const loadData = data => {
  return {
    type: LOAD_DATA,
    data: data
  }
}

