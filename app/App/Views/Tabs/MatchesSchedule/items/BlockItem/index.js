import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Alert} from 'react-native'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'

import styles from './styles'

@withMutation(gql`
  mutation deleteMatch($matchId: ID) {
    cancelMatch(matchId: $matchId) {
      success
    }
  }
`)
class BlockItem extends React.Component {
  static propTypes = {
    matchId: PropTypes.string,
    name: PropTypes.string,
    clubName: PropTypes.string,
    courtName: PropTypes.string,
    textDate: PropTypes.string,
    cancelable: PropTypes.boolean,
    deleteMatch: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    waiting: PropTypes.bool
  }

  @autobind
  async deleteMatch() {
    const {matchId, deleteMatch, refetch, setLoading} = this.props
    setLoading(true)
    try {
      await deleteMatch({matchId})
      refetch()
      Alert.alert('Cancelación de match', `Se canceló el partido`, [{text: 'Ok'}])
    } catch (err) {
      console.log(err)
      Alert.alert('No se ha cancelado el match', err.graphQLErrors[0].message, [{text: 'OK'}])
    }
  }

  @autobind
  showAlert() {
    const {textDate, name, clubName, courtName} = this.props
    Alert.alert(
      'Cancelación de match',
      `Seguro que quieres eliminar el match para el ${textDate} ${name} ${clubName} / ${courtName}`,
      [{text: 'Sí', onPress: this.deleteMatch}, {text: 'Cancelar', style: 'destructive'}]
    )
  }

  render() {
    const {name, clubName, courtName, cancelable, waiting} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.names}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.extra}>
              {clubName} / {courtName}
            </Text>
          </View>

          <View style={styles.right}>
            {waiting ? (
              <Text style={styles.waiting} onPress={this.showAlert}>
                Esperando contrincante
              </Text>
            ) : (
              <Text style={styles.waiting}>Confirmado</Text>
            )}
            {cancelable ? (
              <Text style={styles.cancel} onPress={this.showAlert}>
                Cancelar
              </Text>
            ) : (
              <Text style={styles.noCancel}>No se puede cancelar</Text>
            )}
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
}

export default BlockItem
