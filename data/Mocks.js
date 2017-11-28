import QuestionModel from './Question'
import DeckModel from './Deck'

let MockQuestions = [
  new QuestionModel("What is React?", "A library for managing user interfaces", "fakeDeckID"),
  new QuestionModel("Where do you make Ajax requests in React?", "The componentDidMount lifecycle event", "fakeDeckID"),
]

let MockQuestion = MockQuestions[0]
let MockDecks = [new DeckModel('React')]

MockDecks.map(deck => {
  deck.addQuestion(new QuestionModel("What is React?", "A library for managing user interfaces", deck.id));
  deck.addQuestion(new QuestionModel("Where do you make Ajax requests in React?", "The componentDidMount lifecycle event", deck.id));
  return deck;
})

let MockDeck = MockDecks[0]

export { MockDeck, MockQuestion, MockDecks, MockQuestions }