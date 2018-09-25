import React from 'react'
import {View, Alert} from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import Title from 'App/components/texts/Title'
import BlueText from 'App/components/texts/BlueText'
import Option from './Option'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'

@withMutation(gql`
  mutation cancelSubscription {
    cancelSubscription {
      success
    }
  }
`)
@withMutation(gql`
  mutation updateSubscription($planId: ID) {
    updateSubscription(planId: $planId) {
      id
      status
    }
  }
`)
export default class ChangeSubscriptionModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    close: PropTypes.func,
    currentSubscription: PropTypes.string,
    updateSubscription: PropTypes.func,
    cancelSubscription: PropTypes.func
  }

  state = {loading: false}

  close = () => {
    const {close} = this.props
    this.setState({
      subscription: null
    })
    close()
  }

  updateSubscription = async () => {
    const {updateSubscription, currentSubscription} = this.props
    const {subscription, updatedSubscription} = this.state
    if (
      !subscription ||
      (updatedSubscription
        ? updatedSubscription === subscription
        : currentSubscription === subscription)
    ) {
      Alert.alert('Mismo Plan!', 'Este es el plan que ya tienes!')
      return
    }
    this.setState({loading: true})
    try {
      await updateSubscription({planId: subscription})

      this.setState({loading: false, updatedSubscription: subscription}, () => {
        Alert.alert('Actualizado!', 'Se ha actualizado tu plan')
      })
    } catch (err) {
      this.setState({loading: true}, () => {
        Alert.alert(
          'Error!',
          'Ocurrió un error con tu medio de pago, envianos un email a contacto@acematch.cl'
        )
      })
    }
  }

  cancelSubscription = async () => {
    const {cancelSubscription, close} = this.props
    this.setState({loading: true})
    try {
      await cancelSubscription()

      this.setState(
        {loading: false, subscription: '', updatedSubscription: 'canceled'},
        () => {
          close()
        }
      )
    } catch (err) {
      this.setState({loading: true}, () => {
        Alert.alert(
          'Error!',
          'No pudimos cancelar tu suscripción, envianos un email a contacto@acematch.cl'
        )
      })
    }
    this.setState({loading: false})
  }

  render() {
    const {visible, currentSubscription, close} = this.props
    const {loading, subscription, updatedSubscription} = this.state

    const selectedSubscription =
      subscription || updatedSubscription || currentSubscription

    return (
      <Modal visible={visible} loading={loading}>
        <Title style={styles.title}>Cambio de suscripción</Title>
        <Option
          label="Plan Mensual"
          info="$9.990/mes"
          onPress={() => this.setState({subscription: 'mensual'})}
          active={selectedSubscription === 'mensual'}
        />
        <Option
          label="Plan Semestral"
          info="$53.000/mes (10% Descuento)"
          onPress={() => this.setState({subscription: 'semestral'})}
          active={selectedSubscription === 'semestral'}
        />
        <Option
          label="Plan Anual"
          info="$95.900/mes (20% Descuento)"
          onPress={() => this.setState({subscription: 'anual'})}
          active={selectedSubscription === 'anual'}
        />
        <View style={styles.space} />
        <View style={styles.buttons}>
          <BlueText style={styles.button} onPress={this.updateSubscription}>
            Actualizar suscripción
          </BlueText>
          <BlueText
            style={[styles.button, {color: 'red'}]}
            onPress={this.cancelSubscription}
          >
            Cancelar suscripción
          </BlueText>
          <BlueText style={styles.button} onPress={close}>
            Cancelar
          </BlueText>
        </View>
      </Modal>
    )
  }
}
