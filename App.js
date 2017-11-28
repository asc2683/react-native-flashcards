import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducers/index'
import DeckList from './components/DeckList'

import { readDecks } from './storage/decks'
import { loadData } from './actions'

let store = createStore(
  reducer,
  /* 
  redux dev tool chrome 
  */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

readDecks().then(decks => {
  store.dispatch(loadData(decks))
})

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('state changed:', store.getState())
})

let headerOptions = {
  headerStyle: { backgroundColor: '#111111' }
}

const Navigator = StackNavigator({
  Home: {
    screen: DeckList,
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