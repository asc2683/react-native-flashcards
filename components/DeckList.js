import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
// import { addDeck } from '../actions'

import colors from '../styles/colors'
import Deck from './Deck'
import Button from './Button'
import DeckCreation from './DeckCreation'
import NormalText from './NormalText'

class DeckList extends Component {
  static displayName = 'DeckList'

  static navigationOptions = { title: 'Quiz Decks' }

  _createDeck = () => {
    this.props.navigation.navigate('DeckCreation')
  }

  _addQuestions = deckID => {
    this.props.navigation.navigate('CardCreation', { deckID: deckID })
  }

  _openDeck = (deckID, deckName) => {
    this.props.navigation.navigate('DeckView', { deckID: deckID, deckName: deckName })
  }

  _makeDeckViews () {
    if (!this.props.decks) {
      return null
    }

    return this.props.decks.map(deck => {
      return <Deck
               deck={deck}
               count={this.props.counts[deck.id]}
               key={deck.id}
               add={() => {
                 this._addQuestions(deck.id)
               }}
               open={() => {
                 this._openDeck(deck.id, deck.name)
               }}
               />
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        </View>
        <View style={styles.middle}>
          {this._makeDeckViews()}
        </View>
        <View Style={styles.bottom}>
          <Button style={styles.primary} onPress={this._createDeck}>
            <NormalText>Create Deck</NormalText>
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
    flex: .80,
    padding: 10
  },
  bottom: {
    flex: .10
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

export default connect(mapStateToProps)(DeckList)
