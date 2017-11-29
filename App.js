import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducers/index'
import { readDecks } from './storage/decks'
import { loadData } from './actions'

import DeckList from './components/DeckList'
import QuestionCreation from './components/QuestionCreation'

let store = createStore(
  reducer,
  
  /* redux dev tool chrome */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

readDecks().then(decks => {
  store.dispatch(loadData(decks))
})

let headerOptions = {
  headerStyle: { backgroundColor: '#FFFFFF' },
}

const Navigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: headerOptions
  },
  QuestionCreation: {
    screen: QuestionCreation,
    path: 'createQuestion/:deckID',
    navigationOptions: headerOptions
  }
})

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App