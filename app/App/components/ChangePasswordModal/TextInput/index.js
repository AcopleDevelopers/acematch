import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class CustomTextInput extends React.Component {
  static propTypes = {
    ...TextInput.propTypes,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const {label, placeholder, onChange, ...rest} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChange}
            {...rest}
          />
        </View>
        <View style={styles.divider} />
      </View>
    )
  }
}
