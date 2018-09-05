import React from 'react'
import PropTypes from 'prop-types'
import {View, TouchableOpacity, Image, Text} from 'react-native'

import styles from './styles'

class Capsule extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    bottom: PropTypes.string,
    onPress: PropTypes.func
  }

  render() {
    const {title, body, bottom, onPress} = this.props
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.8}
        style={[styles.capsule]}
      >
        <Image
          style={styles.background}
          source={require('App/assets/btn_background.png')}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={[styles.body]}>{body}</Text>
          <Text style={[styles.bottom]}>{bottom}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Capsule
