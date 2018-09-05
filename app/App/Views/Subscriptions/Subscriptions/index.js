import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import Button from 'App/components/Button'
import Capsule from 'App/components/Capsule'
import BlueText from 'App/components/texts/BlueText'
import Title from 'App/components/texts/Title'
import Subtitle from 'App/components/texts/Subtitle'
import ViewWithBackground from 'App/components/ViewWithBackground'
import {logout} from 'meteor-apollo-accounts'
import {withApollo} from 'react-apollo'

import styles from './styles'

@withApollo
class Subscriptions extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    const {navigation, client} = this.props
    return (
      <ViewWithBackground background={require('./background.png')}>
        <Title>Suscripción</Title>
        <Subtitle>¡Elige tu plan!</Subtitle>
        <Capsule
          title="Plan básico"
          body="$25.000 mensual"
          bottom="2 matches mensuales"
          onPress={() => {
            navigation.navigate('PlanDescription', {
              plan: {id: 'basico', price: 25000, name: 'Básico'}
            })
          }}
        />
        <Capsule
          title="Plan corriente"
          body="$40.000 mensual"
          bottom="4 matches mensuales"
          onPress={() => {
            navigation.navigate('PlanDescription', {
              plan: {id: 'corriente', price: 40000, name: 'Corriente'}
            })
          }}
        />
        <View style={styles.bottom}>
          <Button style={{marginBottom: 10}} title="Atrás" onPress={() => logout(client)} />
          <BlueText onPress={() => navigation.navigate('PlanDetails')}>
            Ver detalle de planes
          </BlueText>
        </View>
      </ViewWithBackground>
    )
  }
}

export default Subscriptions
