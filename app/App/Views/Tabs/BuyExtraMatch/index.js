import React from 'react'
import PropTypes from 'prop-types'
import {View, WebView, Text} from 'react-native'
import autobind from 'autobind-decorator'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import ImageTitle from 'App/components/ImageTitle'
import Button from 'App/components/Button'

import styles from './styles'

@withMutation(gql`
  mutation buyExtraMatch {
    buyExtraMatch
  }
`)
export default class BuyExtraMatch extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    redirectUrl: '',
    message: ''
  }

  @autobind
  async buyExtraMatch() {
    try {
      const response = await this.props.buyExtraMatch()
      this.setState({redirectUrl: response.buyExtraMatch})
    } catch (error) {
      console.log('No se pudo cargar el match extra:', error.message)
    }
  }

  renderMatchesToPlay() {
    if (this.state.matchesToPlay) {
      return (
        <Text style={styles.details}>{`Tienes ${this.state.matchesToPlay} partidos disponibles`}</Text>
      )
    }
  }

  @autobind
  onNavigationStateChange(event) {
    if (event.url.indexOf('/voucher') > -1) {
      this.setState({redirectUrl: '', message: 'Tienes un nuevo partido disponible!'})
    }
  }

  render() {
    const {navigation} = this.props
    if (!this.state.redirectUrl && !this.state.message) {
      return (
        <View style={styles.container}>
          <ImageTitle background={require('../FindMatch/imgs/titleImage.png')} title='Match Extra' />
          <Text style={styles.details}>{'Si se te acabaron tus partidos, puedes adquirir otro por solo $5.500.\n\nPuedes comprar tantos como quieras!'}</Text>
          <Button
            style={styles.button}
            titleStyle={styles.buttonTitle}
            title='Continuar'
            onPress={this.buyExtraMatch}
          />
        </View>
      )
    } else if (this.state.message) {
      return (
        <View style={styles.container}>
          <ImageTitle background={require('../FindMatch/imgs/titleImage.png')} title='Match Extra' />
          <Text style={styles.newMatch}>{this.state.message}</Text>
          <Text style={styles.details}>{'Si se te acabaron tus partidos, puedes adquirir otro por solo $5.500.\n\nPuedes comprar tantos como quieras!'}</Text>
          <Button
            style={styles.button}
            titleStyle={styles.buttonTitle}
            title=''
            onPress={this.buyExtraMatch}
          />
        </View>
      )
    } else {
      return (
        <WebView
          style={styles.webView}
          source={{uri: this.state.redirectUrl}}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      )
    }
  }
}
