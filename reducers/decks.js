import {
  LOAD_DATA,
  ADD_DECK
} from '../actionTypes'

import { writeDecks } from './../storage/decks'

function saveDecks (state) {
  writeDecks(state)
  return state
}

const decksReducer = ( state=[], action ) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data

    case ADD_DECK:
      let newState = state.concat(action.data)
      saveDecks(newState)
      return newState
  }

  return state
}

export default decksReducer