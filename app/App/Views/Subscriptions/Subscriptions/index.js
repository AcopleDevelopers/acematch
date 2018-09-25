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
          title="Plan Mensual"
          body="$9.990 mensual"
          bottom="2 matches mensuales"
          onPress={() => {
            navigation.navigate('PlanDescription', {
              plan: {id: 'mensual', price: 9990, name: 'Mensual'}
            })
          }}
        />
        <Capsule
          title="Plan Semestral"
          body="10% Descuento: $53.000 cada 6 meses"
          bottom="2 matches mensuales"
          onPress={() => {
            navigation.navigate('PlanDescription', {
              plan: {id: 'semestral', price: 53000, name: 'Semestral'}
            })
          }}
        />
        <Capsule
          title="Plan Anual"
          body="20% Descuento: $95.900 cada año"
          bottom="2 matches mensuales"
          onPress={() => {
            navigation.navigate('PlanDescription', {
              plan: {id: 'anual', price: 95900, name: 'Anual'}
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
