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
    score: 0,
    isComplete: false
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
        key: currentState.key +=1
      }
    })
  }

  _isComplete = () => {
    this.state.isComplete = true
  }

  _navToQuiz = () => {
    this.props.navigation.navigate('CardView', { deckID: this.props.deck.id })
  }

  _navToDeck = () => {
    this.props.navigation.navigate('DeckView', { deckID: this.props.deck.id, deckName: this.props.deck.name })
  }

  render () {
    const { questions = [] } = this.props.deck
    let card = {}

    this.state.key >= questions.length
      ? this._isComplete()
      : card = questions[this.state.key]

    return (
      <View style={styles.container}>

        <View style={styles.top}>
          {!this.state.isComplete &&
            <Text style={{ textAlign: 'center' }}>
            {`${this.state.key + 1} out of ${questions.length}`}
            </Text>
          }
        </View>

        <View style={styles.middle}>
          {!this.state.isComplete &&
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
          }

          {this.state.isComplete &&
            <View>
              <NormalText style={{ textAlign: 'center', fontWeight: 'bold' }}>Score</NormalText>
              <NormalText style={{ textAlign: 'center' }}>{(this.state.score / questions.length) * 100} %</NormalText>
              <Text style={{ textAlign: 'center' }}>{this.state.score} out of {questions.length}</Text>
            </View>
          }
        </View>

        {!this.state.isComplete &&
          <View style={styles.bottom}>
            <Button style={styles.primary} onPress={this._correct }>
              <NormalText>Correct</NormalText>
            </Button>
            <Button style={styles.incorrect} onPress={this._incorrect }>
              <NormalText>Incorrect</NormalText>
            </Button>
          </View>
        }

        {this.state.isComplete &&
          <View style={styles.bottom}>
            <Button style={styles.retest} onPress={this._navToQuiz}>
              <NormalText>Restart Quiz</NormalText>
            </Button>
            <Button style={styles.primary} onPress={this._navToDeck}>
              <NormalText>Back to Deck</NormalText>
            </Button>
          </View>
        }
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
  },
  primary: {
    backgroundColor: colors.green
  },
  secondary: {
    backgroundColor: colors.blue
  },
  incorrect: {
    backgroundColor: colors.red
  },
  retest: {
    backgroundColor: colors.yellow
  }
})

export default connect(mapStateToProps)(CardView)