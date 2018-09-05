import React from 'react'
import PropTypes from 'prop-types'
import {Image, View, Text} from 'react-native'
import styles from './styles'

export default class Component extends React.Component {
  static propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string
  }

  render() {
    const {icon, text} = this.props
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}
