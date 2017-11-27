import React, { Component } from 'react'
import { View, Text } from 'react-native'

import DeckView from './DeckView'
import DeckCreation from './DeckCreation'
import Button from './Button'

class DeckList extends Component {
  static displayName = 'Deck List'

  render () {
    return (
      <View>
        <DeckView />
        <DeckCreation />
      </View>
    )
  }
}

export default DeckList