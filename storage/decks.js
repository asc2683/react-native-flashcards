import { AsyncStorage } from 'react-native'
import Deck from './../data/Deck'
export const DECK_KEY = 'flashcards:decks'
import { MockDecks } from '../data/Mocks'

/*
https://facebook.github.io/react-native/docs/asyncstorage.html
*/

async function read (key, deserializer) {
  try {
    let value = await AsyncStorage.getItem(key)
    if (value !== null ) {
      let readValue = JSON.parse(value).map(serialized => {
        return deserializer(serialized)
      })
      return readValue
    } else {
      console.info(`${key} unavailable`)
      return []
    }
  } catch (err) {
    console.warn('AsyncStorage error: ', error.message)
  }
}

async function write (key, item) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item))
  } catch (error) {
    console.error('AsyncStorage error: ', error.message)
  }
}

export const readDecks = () => {
  return read(DECK_KEY, Deck.fromObject)
}

export const writeDecks = decks => {
  return write(DECK_KEY, decks)
}

/*
for development mock data
*/

// const replaceDate = writeDecks(MockDecks)