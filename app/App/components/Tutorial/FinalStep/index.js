import React from 'react'
import {View, Image} from 'react-native'
import Title from 'App/components/texts/Title'
import BlueText from 'App/components/texts/BlueText'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Step extends React.Component {
  static propTypes = {
    close: PropTypes.array
  }

  render() {
    const {close} = this.props
    return (
      <View style={styles.container}>
        <Title style={styles.title}>A jugar!</Title>
        <Image source={require('./imgs/playing.png')} style={styles.image} />
        <BlueText style={styles.text} onPress={close}>
          Empezar
        </BlueText>
      </View>
    )
  }
}
