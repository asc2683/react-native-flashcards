import {
  LOAD_DATA,
  ADD_DECK
} from '../actionTypes'

const decksReducer = ( state=[], action ) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data
  }

  return state
}

export default decksReducer