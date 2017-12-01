import React, { Component } from 'react'
import { View, Text } from 'react-native'

import NormalText from './NormalText'

class CardFront extends Component {

  render () {
    return (
      <View>
        <NormalText style={ { textAlign: 'center' } }>Front: Question</NormalText>
        <Text style={ { color: 'red', textAlign: 'center' } }>Show Answer</Text>
      </View>
    )
  }
}

export default CardFront
