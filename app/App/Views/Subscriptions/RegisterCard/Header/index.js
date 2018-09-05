import React from 'react'
import {View} from 'react-native'
import BlueText from 'App/components/texts/BlueText'
import PropTypes from 'prop-types'

import styles from './styles'

export default class Header extends React.Component {
  static propTypes = {
    cancel: PropTypes.func.isRequired
  }
  render() {
    const {cancel} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.header}>
          <BlueText onPress={cancel}>Atrás</BlueText>
        </View>
      </View>
    )
  }
}
