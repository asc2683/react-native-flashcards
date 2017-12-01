import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'

import colors from '../styles/colors'

import CardFront from './CardFront'
import CardBack from './CardBack'
import Button from './Button'
import NormalText from './NormalText'

class CardView extends Component {
  static displayName = 'CardView'

  static navigationOptions = { title: 'Quiz' }

  state = {
    key: 0,
    score: 0
  }

  _correct = () => {
    this.setState(currentState => {
      return {
        score: currentState.score += 1,
        key: currentState.key +=1
      }
    })
  }

  _incorrect = () => {
    this.setState(currentState => {
      return {
        score: currentState.score -= 1,
        key: currentState.key -=1
      }
    })
  }

  render () {

    const { questions = [] } = this.props.deck
    const card = questions[this.state.key]

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>
          {`${this.state.key + 1} out of ${questions.length}`}
          </Text>
        </View>

        <View style={styles.middle}>
          <FlipCard style={styles.card}>
            <View>
              <CardFront
                question={card.question}
              />
            </View>
            <View>
              <CardBack
                answer={card.answer}
              />
            </View>
          </FlipCard>
        </View>

        <View style={styles.bottom}>
          <Button onPress={this._correct}>
            <NormalText>Correct</NormalText>
          </Button>

          <Button onPress={this._incorrect}>
            <NormalText>Incorrect</NormalText>
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { deckID } = navigation.state.params
  const decks = state.decks

  const deck = decks.find((deck) => {
    return deck.id === deckID
  })

  return {
    deck
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
  card: {
    borderWidth: 0
  }
})

export default connect(mapStateToProps)(CardView)