import React, { Component } from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'

import DeckView from './DeckView'
// import DeckCreation from './DeckCreation'
// import Button from './Button'

class DeckList extends Component {
  static displayName = 'Deck List'

  static navigationOptions = { title: 'Quiz Decks' }

  _makeDeckViews () {
    if (!this.props.decks) {
      return null
    }

    return this.props.decks.map(deck => {
      return <DeckView
               deck={deck}
               count={this.props.counts[deck.id]}
               key={deck.id} />
    })
  }

  render () {
    return (
      <View>
        {this._makeDeckViews()}
      </View>
    )
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

export default connect(mapStateToProps)(DeckList)