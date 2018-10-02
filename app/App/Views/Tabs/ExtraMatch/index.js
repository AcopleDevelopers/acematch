import React from 'react'
import PropTypes from 'prop-types'
import {View, WebView, Text} from 'react-native'
import autobind from 'autobind-decorator'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import moment from 'moment'

import ImageTitle from 'App/components/ImageTitle'
import Button from 'App/components/Button'
import styles from './styles'

@withMutation(gql`
  mutation buyExtraMatch {
    buyExtraMatch
  }
`)
@withGraphQL(gql`
  query me {
    me {
      _id
      matchesToPlay {
        amount
        dueDate
      }
    }
  }
`)
export default class BuyExtraMatch extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    me: PropTypes.object
  }

  state = {
    redirectUrl: '',
    message: ''
  }

  @autobind
  async buyExtraMatch() {
    this.setState({redirectUrl: '', message: ''})
    try {
      const response = await this.props.buyExtraMatch()
      this.setState({redirectUrl: response.buyExtraMatch})
    } catch (error) {
      console.log('No se pudo cargar el match extra:', error.message)
    }
  }

  @autobind
  onNavigationStateChange(event) {
    if (event.url.indexOf('/voucher') > -1) {
      this.setState({redirectUrl: '', message: `Tienes ${this.getMatchesToPlay()} Match extras vigentes`})
    }
  }

  @autobind
  getMatchesToPlay() {
    let totalMatches = 0
    let today = moment()
    const matchesToPlay = this.props.me.matchesToPlay || []
    matchesToPlay.forEach((matchData, index) => {
      if (today.isBefore(moment(matchData.dueDate))) {
        totalMatches += matchData.amount
      }
    })
    return totalMatches
  }

  render() {
    const {navigation} = this.props
    const descriptionText = 'Si se te acabaron tus partidos, puedes adquirir otro por solo $5.500.\n\nPuedes comprar tantos como quieras!\n\nLos Matchs extras tienen una duración de 30 días.'
    if (!this.state.redirectUrl && !this.state.message) {
      return (
        <View style={styles.container}>
          <ImageTitle background={require('../FindMatch/imgs/titleImage.png')} title='Match Extra' />
          <Text style={styles.extraMatches}>{`Tienes ${this.getMatchesToPlay()} Match extras vigentes`}</Text>
          <Text style={styles.details}>{descriptionText}</Text>
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
          <Text style={styles.details}>{descriptionText}</Text>
          <Button
            style={styles.button}
            titleStyle={styles.buttonTitle}
            title='Comprar Otro'
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
