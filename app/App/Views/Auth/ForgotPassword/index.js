import React from 'react'
import PropTypes from 'prop-types'
import {Text, Image, Alert} from 'react-native'
import {Form, Field} from 'simple-react-form'
import {withApollo} from 'react-apollo'
import {forgotPassword} from 'meteor-apollo-accounts'
import ViewWithBackground from 'App/components/ViewWithBackground'
import Button from 'App/components/Button'
import TextInput from 'App/components/fields/TextInput'
import {
  combineValidators,
  validatePrecenceOfFields,
  validateEmail
} from 'App/helpers/validators'
import styles from './styles'

@withApollo
class ForgotPassword extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired
  }

  state = {
    form: {
      email: ''
    }
  }

  validate() {
    const {form} = this.state
    const validation = combineValidators(
      validatePrecenceOfFields([
        {
          name: 'email',
          message: 'Debes ingresar un email'
        }
      ]),
      validateEmail('email', 'Email no válido')
    )
    const errorMessage = validation(form)

    if (errorMessage) {
      Alert.alert('Error!', errorMessage)
      return false
    }
    return true
  }

  async onSubmit() {
    const {email} = this.state.form
    const {client} = this.props

    if (!this.validate()) return

    this.setState({loading: true})
    try {
      await forgotPassword({email}, client)
    } catch (e) {
      console.log(e)
    }
    this.setState({loading: false})
    Alert.alert(
      'Email enviado!',
      'Te hemos enviado un email para que puedas recuperar tu contraseña!',
      {text: 'OK'}
    )
  }

  render() {
    const {loading} = this.state

    return (
      <ViewWithBackground
        background={require('./imgs/background.png')}
        loading={loading}
      >
        <Image
          style={styles.logo}
          source={require('./imgs/logo.png')}
          resizeMode="contain"
        />
        <Form
          state={this.state.form}
          onChange={changes => this.setState({form: changes})}
        >
          <Text style={styles.text}>
            Ingresa tu email y te enviaremos las instrucciones para recuperar tu
            contraseña
          </Text>
          <Field
            fieldName="email"
            autoCapitalize="none"
            placeholder="Email"
            keyboardType="email-address"
            spellCheck={false}
            autoCorrect={false}
            type={TextInput}
          />
        </Form>
        <Button
          style={styles.button}
          title="Entrar"
          onPress={() => this.onSubmit()}
        />
      </ViewWithBackground>
    )
  }
}

export default ForgotPassword
