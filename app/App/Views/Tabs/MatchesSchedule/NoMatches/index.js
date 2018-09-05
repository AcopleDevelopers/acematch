import React from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

export default class NoMatches extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No tienes matches agendados</Text>
      </View>
    )
  }
}
