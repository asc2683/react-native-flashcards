import {
  LOAD_DATA,
  ADD_DECK,
  ADD_QUESTION
} from '../actionTypes'
import { writeDecks } from './../storage/decks'

function decksWithNewQuestion (oldDecks, question) {
  let newState = oldDecks.map(deck =>  {
    if (deck.id === question.deckID) {
      deck.addQuestion(question)
      return deck
    } else {
      return deck
    }
  })
  saveDecks(newState)

  return newState
}

function saveDecks (state) {
  writeDecks(state)
  return state
}

const decksReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data

    case ADD_DECK:
      let newState = state.concat(action.data)
      saveDecks(newState)
      return newState

    case ADD_QUESTION:
      return decksWithNewQuestion(state, action.data)
  }

  return state
}

export default decksReducer