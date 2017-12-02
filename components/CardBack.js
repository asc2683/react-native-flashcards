import React, { Component } from 'react'
import { View, Text } from 'react-native'

import NormalText from './NormalText'

class CardBack extends Component {

  render () {
    const { answer } = this.props

    return (
      <View>
        <NormalText style={ { textAlign: 'center' } }>{answer}</NormalText>
        <Text style={ { color: 'green', textAlign: 'center' } }>Show Question</Text>
      </View>
    )
  }
}

export default CardBack
