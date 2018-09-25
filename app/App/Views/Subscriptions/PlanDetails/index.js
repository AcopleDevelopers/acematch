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
              `Todos los planes incluyen:\n - Canchas en las sedes que disponemos\n - Pelotas\n - Agua\n - Árbitro por cada sede: llevará los resultados de tu partido y las publicará en la app.\n - Gestionar matches con toda la comunidad de AceMatch\n - Ver tu agenda de matches\n - Llevar estadísticas de tu desempeño deportivo\n - Contar con los beneficios de nuestros auspiciadores\n - Participar de las diferentes actividades que realizaremos.`
          }
        ]}
        buttons={[{text: 'Atrás', onPress: () => navigation.goBack()}]}
      />
    )
  }
}
