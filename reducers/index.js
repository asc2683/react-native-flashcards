import { MockDecks, MockQuestions } from '../data/Mocks'

import DecksReducer from './decks'

const initialState = () => {
  return {
    decks: MockDecks
  }
}

export const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action)

  return {
    decks: decks
  }
}