import React from 'react'
import PropTypes from 'prop-types'
import {View, Image, TouchableOpacity, Alert} from 'react-native'
import {Form, Field} from 'simple-react-form'
import {withApollo} from 'react-apollo'
import {loginWithPassword} from 'meteor-apollo-accounts'
import ViewWithBackground from 'App/components/ViewWithBackground'
import Button from 'App/components/Button'
import TextInput from 'App/components/fields/TextInput'
import WhiteText from 'App/components/texts/WhiteText'
import BlueText from 'App/components/texts/BlueText'
import styles from './styles'

@withApollo
class Login extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  state = {
    form: {
      email: '',
      password: ''
    }
  }

  async onSubmit() {
    const {email, password} = this.state.form
    const {client} = this.props

    try {
      this.setState({loading: true})
      await loginWithPassword({email, password}, client)
      this.setState({loading: false})
    } catch (e) {
      this.setState({loading: false})
      Alert.alert(
        'Incorrecto',
        'El usuario no existe o la contraseña es incorrecta.',
        {text: 'OK'}
      )
    }
  }

  render() {
    const {navigation} = this.props
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
          <Field
            fieldName="email"
            autoCapitalize="none"
            placeholder="Usuario"
            keyboardType="email-address"
            spellCheck={false}
            autoCorrect={false}
            type={TextInput}
          />
          <Field
            fieldName="password"
            placeholder="Contraseña"
            secureTextEntry
            selectTextOnFocus
            type={TextInput}
          />
        </Form>
        <Button
          title="Entrar"
          style={styles.button}
          onPress={() => this.onSubmit()}
        />

        <View style={styles.space} />

        <View style={styles.row}>
          <WhiteText style={[styles.text]}>¿Nuevo? </WhiteText>
          <BlueText
            onPress={() => navigation.navigate('Register')}
            style={[styles.text, styles.boldText]}
          >
            ¡Regístrate!
          </BlueText>
        </View>

        <BlueText
          style={[styles.text, styles.boldText]}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          ¿Olvidaste tu contraseña?
        </BlueText>
        <WhiteText style={[styles.text, styles.smallText]}>
          Powered by Utips & Orionsoft
        </WhiteText>
      </ViewWithBackground>
    )
  }
}

export default Login
