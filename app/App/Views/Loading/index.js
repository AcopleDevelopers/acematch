import React from 'react'
import {View} from 'react-native'
import {Circle} from 'react-native-progress'

import styles from './styles.js'

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Circle size={60} indeterminate color="#4CB9FF" />
      </View>
    )
  }
}
