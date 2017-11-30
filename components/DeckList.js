import React, { Component } from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'
import { addDeck } from '../actions'

import Deck from './Deck'
import DeckCreation from './DeckCreation'

class DeckList extends Component {
  static displayName = 'DeckList'

  static navigationOptions = { title: 'Quiz Decks' }

  _createDeck = name => {
    let createDeckAction = addDeck(name)

    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate('QuestionCreation', {
      deckID: createDeckAction.data.id
    })
  }

  _addQuestions = deckID => {
    this.props.navigation.navigate('QuestionCreation', { deckID: deckID })
  }

  _openDeck = (deckID, deckName, questionCount) => {
    this.props.navigation.navigate('DeckView', { deckID: deckID, deckName: deckName, questionCount: questionCount })
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
                 this._openDeck(deck.id, deck.name, this.props.counts[deck.id])
               }}
               />
    })
  }

  render () {
    return (
      <View>
        {this._makeDeckViews()}
        <DeckCreation create={this._createDeck} />
      </View>
    )
  }
}

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
