import md5 from 'md5'

class Deck {
  constructor (name) {
    this.name = name
    this.id = md5('deck:' + name)
    this.questions = []
  }

  setFromObject (obj) {
    this.name = obj.name
    this.questions = obj.questions
    this.id = obj.id
  }

  static fromObject (obj) {
    let d = new Deck(obj.name)
    d.setFromObject(obj)
    return d
  }

  addQuestion(question) {
    this.questions = this.questions.concat(question)
  }
}

export default Deck