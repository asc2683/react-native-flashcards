import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import FlipCard from 'react-native-flip-card'

import colors from '../styles/colors'

import CardFront from './CardFront'
import CardBack from './CardBack'
import Button from './Button'
import NormalText from './NormalText'

class CardView extends Component {
  static displayName = 'CardView'

  static navigationOptions = { title: 'Quiz' }

  render () {
    return (
      <View>
        <FlipCard>
          <View>
            <CardFront />
          </View>
          <View>
            <CardBack />
          </View>
        </FlipCard>
      </View>
    )
  }
}

export default CardView