import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import DeckModel from '../data/Deck'
import { addQuestion } from '../actions'
import { connect } from 'react-redux'

import Button from './Button'
import NormalText from './NormalText'
import colors from '../styles/colors'
import LabeledInput from './LabeledInput'

class NewQuestion extends Component {
  static navigationOpions = { title: 'Create Question' }

  static initialState = { question: '', answer: '' }

  constructor (props) {
    super (props)

    this.state = this.initialState
  }

  _deckID = () => {
    return this.props.navigation.state.params.deckID
  }

  _handleQuestion = text => {
    this.setState({ question: text })
  }

  _handleAnswer = text => {
    this.setState({ answer: text })
  }

  _createQuestion = () => {
    this.props.createQuestion(
      this.state.question,
      this.state.answer,
      this._deckID()
    )

    this.props.navigation.navigate('QuestionCreation', { deckID: this._deckID() })
  }

  _doneCreating = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View>
        <LabeledInput
          label='Question'
          clearOnSubmit={false}
          onEntry={this._handleQuestion}
          onChange={this._handleQuestion}
        />
        <LabeledInput
          label='Answer'
          clearOnSubmit={false}
          onEntry={this._handleAnswer}
          onChange={this._handleAnswer}
        />

        <Button style={styles.createButton} onPress={this._createQuestion}>
          <NormalText>Create Question</NormalText>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.secondaryButton} onPress={this._doneCreating}>
            <NormalText>Done</NormalText>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  createButton: { backgroundColor: colors.green },
  secondaryButton: { backgroundColor: colors.grey },
  buttonRow: { flexDirection: 'row' }
})

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question, answer, deckID) => {
      dispatch(addQuestion(question, answer, deckID))
    }
  }

}

const mapStateToProps = state => {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)