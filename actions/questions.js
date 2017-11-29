import {
  ADD_QUESTION
} from '../actionTypes'

import Question from '../data/Question'

export const addQuestion = (question, answer, deckID) => {
  return {
    type: ADD_QUESTION,
    data: new Question(question, answer, deckID)
  }
}