import {
  LOAD_DATA, ADD_DECK
} from '../actionTypes'

import Deck from '../data/Deck'

export const loadData = data => {
  return {
    type: LOAD_DATA,
    data: data
  }
}

export const addDeck = name => {
  return {
    type: ADD_DECK,
    data: new Deck(name)
  }
}