import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, Image, Text} from 'react-native'

import styles from './styles'

class AMButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: PropTypes.any,
    titleStyle: PropTypes.any
  }

  render() {
    const {title, onPress, style, titleStyle} = this.props
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.8}
        style={[styles.button, style]}
      >
        <Image
          style={styles.background}
          source={require('App/assets/btn_background.png')}
          resizeMode="cover"
        />
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default AMButton
