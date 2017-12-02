import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../styles/colors'

class Button extends Component {
  static displayName = 'Button'

  render () {
    let opacity = this.props.disabled ? 1: 0.8

    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={this.props.onPress}
        style={[styles.wideButton, this.props.style]}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = { disabled: false }

const styles = StyleSheet.create({
  wideButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: colors.grey
  }
})

export default Button
