import React from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Option extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    info: PropTypes.string,
    onPress: PropTypes.func,
    active: PropTypes.bool
  }

  render() {
    const {label, info, onPress, active} = this.props

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <View style={styles.content}>
              <Text style={[styles.label, active && styles.active]}>{label}</Text>
              <Text style={[styles.input, active && styles.active]}>{info}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
