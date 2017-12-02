import React, { Component } from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'
import { addDeck } from '../actions'

import { EnterDeck } from './DeckCreationFields'

class DeckCreation extends Component {
   static displayName = 'DeckCreation'

   static navigationOptions = { title: 'Create Deck' }

  _newDeck = name => {
    let createDeckAction = addDeck(name)

    this.props.createDeck(createDeckAction)
    this.props.navigation.navigate('DeckView', {
      deckID: createDeckAction.data.id, deckName: createDeckAction.data.name
    })
  }

  render () {
    return (
    <View>
      <EnterDeck create={this._newDeck} />
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
    decks: state.decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCreation)