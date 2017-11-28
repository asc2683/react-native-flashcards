import md5 from 'md5'

class Question {
  constructor (question, answer, deckID) {
    this.question = question
    this.answer = answer
    this.deckID = deckID
    this.id = md5(question + answer + deckID)
  }

  setFromObject (obj) {
    this.question = obj.question
    this.answer = obj.answer
    this.deckID = obj.deckID
    this.id = obj.id
  }

  static fromObject (obj) {
    let c = new Deck(obj.question, obj.answer, obj.deckID)
    c.setFromObject(obj)
    return c
  }
}

export default Question