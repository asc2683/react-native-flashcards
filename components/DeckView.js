import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import DeckModel from '../data/Deck'
import NormalText from './NormalText'
import Button from './Button'
import colors from '../styles/colors'

class DeckView extends Component {
  static displayName = 'Deck'

  _addQuestions = () => {
    this.props.add()
  }

  render () {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton}>
          <NormalText>
            {this.props.deck.name}: {this.props.count} Questions
          </NormalText>
        </Button>

        <Button style={styles.editButton} onPress={this._addQuestions}>
          <NormalText>+</NormalText>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
    marginBottom: 10
  },
  deckButton: {
    backgroundColor: colors.lightGreen,
    padding: 10,
    margin: 0,
    flex: 1
  },
  editButton: {
    width: 50,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  }
});

export default DeckView