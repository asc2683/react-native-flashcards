import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import NormalText from './NormalText'
import Button from './Button'
import colors from '../styles/colors'

class DeckView extends Component {
  static displayName = 'DeckView'

  render () {
    const { deckName, questionCount } = this.props.navigation.state.params

    return (
      <View>
        <View style={styles.container}>
          <NormalText>{deckName}</NormalText>
          <Text>{questionCount} Questions</Text>
        </View>

        <View>
          <Button style={styles.addQuestion} onPress={this.props.onPress}>
            <NormalText>Add Question</NormalText>
          </Button>

          <Button style={styles.startQuiz} onPress={this.props.onPress}>
            <NormalText>Start Quiz</NormalText>
          </Button>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    margin: 15
  },
  startQuiz: {
    backgroundColor: colors.blue
  },
  addQuestion: {
    backgroundColor: colors.grey
  }
})

export default DeckView
