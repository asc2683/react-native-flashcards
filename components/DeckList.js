import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'
import { addDeck } from '../actions'

import colors from '../styles/colors'
import Deck from './Deck'
import DeckCreation from './DeckCreation'

class DeckList extends Component {
  static displayName = 'DeckList'

  static navigationOptions = { title: 'Quiz Decks' }

  _createDeck = name => {
    let createDeckAction = addDeck(name)

    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate('CardCreation', {
      deckID: createDeckAction.data.id
    })
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
        <ScrollView>
          {this._makeDeckViews()}
        </ScrollView>
        <DeckCreation create={this._createDeck} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 40
  },
  primary: {
    backgroundColor: colors.green
  },
  secondary: {
    backgroundColor: colors.blue
  }
})

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction)
    }
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
