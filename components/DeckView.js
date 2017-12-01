import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import NormalText from './NormalText'
import Button from './Button'
import colors from '../styles/colors'

class DeckView extends Component {
  static displayName = 'DeckView'

  _addQuestions = deckID => {
    deckID = this.props.navigation.state.params.deckID
    this.props.navigation.navigate('CardCreation', { deckID: deckID })
  }

  _openQuestion = deckID => {
    deckID = this.props.navigation.state.params.deckID
    this.props.navigation.navigate('CardView', { deckID: deckID })
  }

  render () {
    const { deckName, deckID } = this.props.navigation.state.params

    return (
      <View>
        <View style={styles.container}>
          <NormalText>{deckName}</NormalText>
          <Text>{this.props.counts[deckID]} Questions</Text>
        </View>

        <View>
          <Button style={styles.addQuestion} onPress={this._addQuestions}>
            <NormalText>Add Question</NormalText>
          </Button>

          <Button style={styles.startQuiz} onPress={this._openQuestion}>
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
    margin: 10
  },
  startQuiz: {
    backgroundColor: colors.blue
  },
  addQuestion: {
    backgroundColor: colors.grey
  }
})

const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.questions.length
        return sum
      },
      {}
    )
  }
}

export default connect(mapStateToProps)(DeckView)
// export default DeckView
