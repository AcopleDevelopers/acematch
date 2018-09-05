import React from 'react'
import PropTypes from 'prop-types'
import {TextInput} from 'react-native'

import styles from './styles'

export default class AMTextInput extends React.Component {
  static propTypes = {
    ...TextInput.propTypes,
    style: PropTypes.any,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    style: {}
  }

  render() {
    const {value, onChange, style, ...rest} = this.props
    return (
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChange}
        value={value}
        underlineColorAndroid="transparent"
        placeholderTextColor="white"
        {...rest}
      />
    )
  }
}
