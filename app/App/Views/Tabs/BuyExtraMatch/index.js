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
    redirectUrl: ''
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

  renderInfoOrPayment() {
  }

  render() {
    const {navigation} = this.props
    if (!this.state.redirectUrl) {
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
    } else {
      return (
        <WebView
          style={styles.webView}
          source={{uri: this.state.redirectUrl}}
        />
      )
    }
  }
}
