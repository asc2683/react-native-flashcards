import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckView extends Component {
  static displayName = 'Deck'

  render () {
    return (
      <View>
        <Text>
          {this.props.deck.name}: {this.props.count} Questions
        </Text>
      </View>
    )
  }
}

export default DeckView