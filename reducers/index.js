import mockDecks from '../data/mockDecks'

import DecksReducer from './decks'

const initialState = () => {
  return {
    decks: mockDecks
  }
}

export const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action)

  return {
    decks: decks
  }
}