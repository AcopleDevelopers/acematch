import React from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'

import styles from './styles'

class OptionItem extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    color: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const {label, action, color, style} = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, {color}]} onPress={action}>
          {label}
        </Text>
      </View>
    )
  }
}

export default OptionItem
