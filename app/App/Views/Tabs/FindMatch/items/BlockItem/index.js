import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'

import styles from './styles'

@withMutation(
  gql`
    mutation joinMatch($data: MatchInput) {
      joinMatch(data: $data) {
        _id
        firstPlayer
        secondPlayer
      }
    }
  `
)
class BlockItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    joinMatch: PropTypes.func.isRequired,
    playfieldId: PropTypes.string.isRequired,
    timeblockId: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    textDate: PropTypes.string.isRequired,
    refetch: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
  }

  @autobind
  async joinMatch() {
    const {playfieldId, date, timeblockId, joinMatch, refetch, setLoading} = this.props
    const data = {playfieldId, date, timeblockId}
    try {
      setLoading(true)
      const result = await joinMatch({data})
      refetch()
      if (result.joinMatch.secondPlayer) {
        Alert.alert('Match agendado', 'Se ha agendado el match correctamente!', [
          {
            text: 'Ok'
          }
        ])
      } else {
        Alert.alert(
          'Match a la espera de confirmación',
          'Se ha hecho la solcitud de match correctamente!',
          [
            {
              text: 'Ok'
            }
          ]
        )
      }
    } catch (err) {
      Alert.alert('No se ha agendado su match', err.graphQLErrors[0].message, [{text: 'OK'}])
    }
    setLoading(false)
  }

  renderPlayersText() {
    const {players} = this.props

    const texts = {
      0: 'sin solicitudes',
      1: '1 solicitud',
      2: 'tomado'
    }
    return texts[players]
  }

  @autobind
  showAlert() {
    const {textDate, name} = this.props
    const {players} = this.props

    const texts = {
      0: '¡Fijarás una nueva solicitud de match!',
      1: 'Confirmar la solicitud'
    }

    const title = texts[players]

    Alert.alert(title, `¿Confirmas un match para el ${textDate} ${name}`, [
      {text: 'Sí', onPress: this.joinMatch},
      {text: 'Cancelar', style: 'destructive'}
    ])
  }

  renderIcon() {
    const {players} = this.props
    if (players === 2) return <View style={styles.icon} />
    const icon =
      players === 0 ? require('./imgs/blueArrow.png') : require('./imgs/lightBlueArrow.png')

    return (
      <TouchableWithoutFeedback onPress={this.showAlert}>
        <Image source={icon} style={styles.icon} resize />
      </TouchableWithoutFeedback>
    )
  }

  render() {
    const {name, players} = this.props
    const notAvailable = players === 2
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={[styles.name, notAvailable && styles.notAvailable]}>{name}</Text>
          <Text style={[styles.players, notAvailable && styles.notAvailable]}>
            {this.renderPlayersText()}
          </Text>
          {this.renderIcon()}
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
}

export default BlockItem
