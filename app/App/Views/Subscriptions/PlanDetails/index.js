import React from 'react'
import PropTypes from 'prop-types'
import Info from 'App/components/Info'

export default class PlanDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const {navigation} = this.props
    return (
      <Info
        title="Detalle de planes"
        texts={[
          {
            content:
              'Ambos planes incluyen canchas en las sedes que disponemos, pelotas, aguas y un árbitro por cada sede, quién llevará los resultados de tu partido y las publicará en la app. Ambos planes te permiten gestionar matches con toda la comunidad de AceMatch, ver tu agenda de matches, llevar estadísticas de tu desempeño deportivo, contar con los beneficios de nuestros auspiciadores y participar de las diferentes actividades que realizaremos.'
          }
        ]}
        buttons={[{text: 'Atrás', onPress: () => navigation.goBack()}]}
      />
    )
  }
}
