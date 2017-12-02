import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import NormalText from './NormalText'
import Button from './Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

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
      <View style={styles.container}>
        <View style={styles.top}>
        </View>

        <View style={styles.middle}>
          <NormalText style={{ textAlign: 'center', fontWeight: 'bold' }}>{deckName}</NormalText>
          <Text style={{ textAlign: 'center', color: colors.grey }}>{this.props.counts[deckID]} Questions</Text>
        </View>

        <View style={styles.bottom}>
          <Button style={styles.secondary} onPress={this._addQuestions}>
            <NormalText>Add Card</NormalText>
          </Button>

          <Button style={styles.primary} onPress={this._openQuestion}>
            <NormalText>Start</NormalText>
          </Button>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  top: {
    flex: .10
  },
  middle: {
    flex: .60,
    padding: 10
  },
  bottom: {
    flex: .30
  },
  primary: {
    backgroundColor: colors.green
  },
  secondary: {
    backgroundColor: colors.blue
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
