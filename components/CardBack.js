import React, { Component } from 'react'
import { View, Text } from 'react-native'

import NormalText from './NormalText'

class CardBack extends Component {

  render () {
    return (
      <View>
        <NormalText style={ { textAlign: 'center' } }>BACK: Answer</NormalText>
        <Text style={ { color: 'red', textAlign: 'center' } }>Show Question</Text>
      </View>
    )
  }
}

export default CardBack
