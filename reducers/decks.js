import {
  LOAD_DATA,
  ADD_DECK
} from '../actionTypes'

const decksReducer = ( state=[], action ) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data
  } // end switch

  return state
} // end fn

export default decksReducer