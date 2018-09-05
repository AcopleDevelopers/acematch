import React from 'react'
import PropTypes from 'prop-types'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

export default class ClubItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: Image.propTypes.source,
    onPress: PropTypes.func.isRequired
  }
  render() {
    const {name, image, onPress} = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
