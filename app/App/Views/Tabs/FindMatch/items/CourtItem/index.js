import React from 'react'
import PropTypes from 'prop-types'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

export default class CourtItem extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
  render() {
    const {onPress, title, subtitle, description} = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <View style={styles.container}>
          <Image
            source={require('./imgs/background.png')}
            style={styles.image}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
