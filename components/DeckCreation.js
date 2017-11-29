import React, { Component } from 'react'
import { View } from 'react-native'

import { CreateDeckButton, EnterDeck } from './DeckCreationFields'

class DeckCreation extends Component {
  constructor (props) {
    super (props)

    this.state = { showingNameFields: false }
  }

  _newDeck = name => {
    this.setState({ showingNameFields: false })
    this.props.create(name)
  }

  _showField = () => {
    this.setState({ showingNameFields: true })
  }

  render () {
    let contents = this.state.showingNameFields
      ? <EnterDeck create={this._newDeck} />
      : <CreateDeckButton onPress={this._showField} />
    return contents
  }
}

export default DeckCreation