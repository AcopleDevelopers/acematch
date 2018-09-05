import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Alert} from 'react-native'
import Swiper from 'react-native-swiper'
import {Form} from 'simple-react-form'
import {createUser} from 'meteor-apollo-accounts'
import {withApollo} from 'react-apollo'
import Dots from 'App/components/Dots'
import Button from 'App/components/Button'
import ViewWithBackground from 'App/components/ViewWithBackground'

import SubForm from './SubForm'
import steps from './steps'
import styles from './styles'

@withApollo
class Register extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  state = {currentStep: 0, form: {}}

  isInFirstStep() {
    return this.state.currentStep === 0
  }

  isInLastStep() {
    return this.state.currentStep === steps.length - 1
  }

  prevButtonTitle() {
    if (this.isInFirstStep()) return 'Cancelar'
    return 'Atrás'
  }

  nextButtonTitle() {
    if (this.isInLastStep()) return 'Suscripción'
    return 'Siguiente'
  }

  unblockSwipper() {
    this.setState({
      swiperBlocked: false
    })
  }

  validate() {
    const {currentStep, form} = this.state
    const errorMessage = steps[currentStep].validate(form)
    if (errorMessage) {
      this.showError(errorMessage)
      return false
    }
    return true
  }

  showError(errorMessage) {
    Alert.alert('Faltan campos!', errorMessage)
  }

  handleStepScroll(offset) {
    const {navigation} = this.props

    if (offset === -1 && this.isInFirstStep()) {
      navigation.goBack()
      return
    }

    const {swiperBlocked} = this.state
    if (swiperBlocked) return

    if (offset === 1) {
      if (!this.validate()) return
      if (this.isInLastStep()) {
        this.submit()
        return
      }
    }

    this.setState(prevState => ({
      swiperBlocked: true,
      currentStep: prevState.currentStep + offset
    }))
    this.swiper.scrollBy(offset, true)
  }

  async submit() {
    const {email, password, profile} = this.state.form
    const {client} = this.props

    try {
      this.setState({loading: true})
      await createUser({email, password, profile}, client)
      this.setState({loading: false})
    } catch (e) {
      console.log(e)
      this.setState({loading: false})
      Alert.alert(
        'Usuario ya existe',
        'Ya hay un usuario registrado con este correo electrónico.',
        {text: 'OK'}
      )
      this.handleStepScroll(-1)
    }
  }

  render() {
    const {navigation} = this.props
    const {currentStep, form, loading} = this.state
    return (
      <ViewWithBackground
        background={require('./background.png')}
        style={styles.container}
        loading={loading}
      >
        <Text style={styles.title}>Registro</Text>
        <Dots activeIndex={currentStep} dotsNumber={steps.length} />
        <Form onChange={changes => this.setState({form: changes})} value={form}>
          <Swiper
            ref={ref => {
              this.swiper = ref
            }}
            style={styles.swipper}
            onMomentumScrollEnd={() => this.unblockSwipper()}
            scrollEnabled={false}
            loop={false}
            showsPagination={false}
          >
            {steps.map((step, index) => (
              <SubForm
                key={index}
                components={step.components}
                navigation={navigation}
              />
            ))}
          </Swiper>
        </Form>
        <View style={styles.buttons}>
          <Button
            title={this.prevButtonTitle()}
            onPress={() => this.handleStepScroll(-1)}
          />
          <Button
            title={this.nextButtonTitle()}
            onPress={() => this.handleStepScroll(1)}
          />
        </View>
      </ViewWithBackground>
    )
  }
}

export default Register
