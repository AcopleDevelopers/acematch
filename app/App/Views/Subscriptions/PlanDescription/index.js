import React from 'react'
import PropTypes from 'prop-types'
import {ScrollView, View, Alert} from 'react-native'
import Button from 'App/components/Button'
import ViewWithBackground from 'App/components/ViewWithBackground'
import Subtitle from 'App/components/texts/Subtitle'
import WhiteText from 'App/components/texts/WhiteText'
import BlueText from 'App/components/texts/BlueText'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'
import {withApollo} from 'react-apollo'

import styles from './styles'
import numeral from 'numeral'

@withMutation(gql`
  mutation createCustomer {
    createCustomer {
      success
    }
  }
`)
@withMutation(gql`
  mutation registerCard {
    registerCard
  }
`)
@withMutation(gql`
  mutation createSubscription($planId: ID) {
    createSubscription(planId: $planId) {
      id
    }
  }
`)
@withApollo
export default class PlanDescription extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    navigation: PropTypes.object,
    plan: PropTypes.object,
    createCustomer: PropTypes.func.isRequired,
    createSubscription: PropTypes.func.isRequired,
    registerCard: PropTypes.func.isRequired
  }

  static navigationOptions = {
    header: null
  }

  static defaultProps = {
    navigation: {
      navigate: (...params) => {
        console.log('navigate:\n', params)
      },
      goBack: (...params) => {
        console.log('goBack:\n', params)
      },
      state: {
        params: {
          plan: {}
        }
      }
    }
  }

  state = {
    loading: false
  }

  @autobind
  async createCustomer() {
    const {createCustomer} = this.props
    try {
      await createCustomer()
      return true
    } catch (err) {
      console.log('createCustomer error: ', err)
      return false
    }
  }

  @autobind
  async registerCard() {
    const {registerCard, navigation} = this.props
    try {
      const {registerCard: url} = await registerCard()
      return new Promise((resolve, reject) => {
        navigation.navigate('RegisterCard', {url, resolve, reject})
      })
    } catch (err) {
      console.log('registerCard error: ', err)
      throw err
    }
  }

  @autobind
  async createSubscription() {
    const {
      navigation: {
        state: {
          params: {plan}
        }
      },
      createSubscription
    } = this.props

    try {
      await createSubscription({planId: plan.id})
      return true
    } catch (err) {
      console.log('createSubscription error: ', err)
      throw err
    }
  }

  async suscribe() {
    const {client} = this.props
    try {
      this.setState({loading: true})
      await this.createCustomer()
      await this.registerCard()
      await this.createSubscription()
      this.setState({loading: false})
      client.resetStore()
    } catch (err) {
      this.setState({loading: false})
      Alert.alert(
        'Ha ocurrido un error',
        'Ocurrio un error al momento de procesar tu suscripción, intenta más tarde',
        [{text: 'OK'}]
      )
    }
  }

  render() {
    const {
      navigation: {
        navigate,
        goBack,
        state: {
          params: {plan}
        }
      }
    } = this.props
    const {loading} = this.state

    return (
      <ViewWithBackground background={require('./background.png')} loading={loading}>
        <ScrollView
          style={styles.textScroll}
          contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}>
          <View style={styles.textContainer}>
            <Subtitle>
              Has seleccionado el Plan {plan.name}, el cual tiene un valor de{' '}
              {numeral(plan.price).format('$0,')} mensual que se renovará automáticamente{'\n'}
            </Subtitle>
            <Subtitle>Detalle de la suscripción a AceMatch{'\n'}</Subtitle>
            <WhiteText style={styles.smallText}>
              Las suscripciones a AceMatch adqueridas a través de la aplicación móvil se cobrarán a
              su tarjeta de credito.{'\n\n'}Puedes cancelar o administrar tu suscripción en los
              ajustes de tu cuenta. Tu suscripción de pago será con renovación automática de manera
              mensual a no ser que canceles tu suscripción con al menos 24 horas de antelación a tu
              próxima fecha de renovación.{'\n\n'}Al suscribirte a AceMatch, confirmas y aceptas los{' '}
              <BlueText style={styles.smallText} onPress={() => navigate('TermsAndConditions')}>
                Términos y condiciones de suscripción
              </BlueText>. Consulta nuestras{' '}
              <BlueText style={styles.smallText} onPress={() => navigate('PrivacyPolicy')}>
                Políticas de privacidad
              </BlueText>
            </WhiteText>
          </View>
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <Button title="Atrás" onPress={() => goBack()} />
          <Button title="Suscribirse" onPress={() => this.suscribe()} />
        </View>
      </ViewWithBackground>
    )
  }
}
