import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import NormalText from './NormalText'
import Button from './Button'
import colors from '../styles/colors'

class Deck extends Component {
  static displayName = 'Deck'

  _addQuestions = () => {
    this.props.add()
  }

  _openDeck = () => {
    this.props.open()
  }

  render () {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton} onPress={this._openDeck}>
          <NormalText style={{ fontWeight: 'bold' }}>
            {this.props.deck.name}
          </NormalText>
          <Text style={{ color: colors.grey }}>
            {this.props.count}
            {this.props.count > 1
              ? `${' Cards '}`
              : `${' Card '}` }
          </Text>
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
    marginBottom: 10,
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  deckButton: {
    backgroundColor: 'transparent',
    padding: 5,
    margin: 0,
    flex: 1
  },
  editButton: {
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.blue,
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

export default Deck