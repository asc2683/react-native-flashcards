import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FlipCard from 'react-native-flip-card'

class QuestionView extends Component {
  static displayName = 'QuestionView'

  static navigationOptions = { title: 'Quiz' }

  render () {
    return (
      <View>
        <FlipCard>
        {/* Face Side */}
        <View>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View>
          <Text>The Back</Text>
        </View>
      </FlipCard>
    </View>
    )
  }
}

export default QuestionView