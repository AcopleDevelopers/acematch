import React from 'react'
import {View, Alert} from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import Title from 'App/components/texts/Title'
import BlueText from 'App/components/texts/BlueText'
import TextInput from './TextInput'
import {Form, Field} from 'simple-react-form'
import {withApollo} from 'react-apollo'
import {changePassword} from 'meteor-apollo-accounts'

@withApollo
export default class ChangePasswordModal extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    visible: PropTypes.bool,
    close: PropTypes.func
  }
  state = {loading: false}

  close = () => {
    const {close} = this.props
    this.setState({
      currentPassword: '',
      newPassword: '',
      newPasswordVerification: ''
    })
    close()
  }

  submit = async () => {
    const {client, close} = this.props
    const {oldPassword, newPassword, newPasswordVerification} = this.state
    if (newPassword !== newPasswordVerification) {
      Alert.alert('Error!', 'Las contraseñas no coinciden')
      return
    }
    this.setState({loading: true})

    try {
      await changePassword({oldPassword, newPassword}, client)
      close()
    } catch (err) {
      console.log('error:', err.message)
      let message
      if (err.message.includes('403')) {
        message = 'La contraseña actual no es correcta'
      } else if (err.message.includes('are required')) {
        message = 'Debes ingresar tu contraseña actual y la nueva'
      }
      Alert.alert('Error!', message)
    }
    this.setState({loading: false})
  }

  render() {
    const {visible} = this.props
    const {loading} = this.state

    return (
      <Modal visible={visible} loading={loading}>
        <Title style={styles.title}>Cambio de contraseña</Title>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName="oldPassword"
            type={TextInput}
            label="Actual"
            placeholder="Contraseña actual"
            secureTextEntry={true}
          />
          <Field
            fieldName="newPassword"
            type={TextInput}
            label="Nueva"
            placeholder="Contraseña nueva"
            secureTextEntry={true}
          />
          <Field
            fieldName="newPasswordVerification"
            type={TextInput}
            label="Verificar"
            placeholder="Repetir contraseña nueva"
            secureTextEntry={true}
          />
          <View style={styles.space} />
          <View style={styles.buttons}>
            <BlueText onPress={this.close}>Cancelar</BlueText>
            <BlueText onPress={this.submit}>Listo</BlueText>
          </View>
        </Form>
      </Modal>
    )
  }
}
