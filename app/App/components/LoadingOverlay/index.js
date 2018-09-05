import React from 'react'
import {View} from 'react-native'
import {Circle} from 'react-native-progress'

import styles from './styles'

export default class LoadingOverlay extends React.Component {
  render() {
    return (
      <View style={styles.overlay}>
        <Circle size={60} indeterminate color="#0098FF" />
      </View>
    )
  }
}
