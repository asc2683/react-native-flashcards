import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import colors from './../styles/colors'

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    backgroundColor: colors.green
  }
})

export default Button
