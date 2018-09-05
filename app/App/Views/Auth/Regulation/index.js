import React from 'react'
import PropTypes from 'prop-types'
import Info from 'App/components/Info'

export default class TermsAndConditions extends React.Component {
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
        title="Reglamento de Ace Match"
        texts={[
          {
            content:
              'Ace Match ha estimado necesario establecer ciertas normas específicas relacionadas a los partidos de tenis que se disputarán entre los Usuarios de la aplicación “Ace Match”.'
          },
          {
            content:
              'Es de exclusiva responsabilidad del Usuario leer estas disposiciones y dar cabal cumplimiento a las obligaciones, prohibiciones, normas de orden, conducta y seguridad que se establecen, por lo que su incumplimiento se sancionará según se establece en este mismo instrumento.'
          },
          {
            content:
              'Estas disposiciones podrán ser modificadas en cualquier momento, de manera que las normas que se dicten en forma posterior se emitan, se entenderán formar parte integrante del presente Reglamento.'
          },
          {
            content:
              'Estas normas se consideran parte integrante de los Términos y Condiciones de Uso de Ace Match, las que se encuentran publicadas tanto en el sitio web www.acematch.cl (en adelante “el Sitio Web) como en la misma aplicación.'
          },
          {
            content:
              '1. El día y hora de los partidos se determinará en atención a la disponibilidad de los Usuarios de una misma categoría y al horario de uso de las canchas de tenis que tenga cada uno de los Clubes o Centros Deportivos asociados a Ace Match.'
          },
          {
            content:
              '2. Los jugadores deberán presentarse en la cancha designada al menos 5 (cinco) minutos antes del horario del partido. '
          },
          {
            content:
              '3. El tiempo máximo de duración de cada partido es de 1 1/2 (una y media) hora.'
          },
          {
            content:
              '4. Independiente de la Membresía elegida por el Usuario, el jugador que gana un partido obtiene 2 (dos) puntos.'
          },
          {
            content: '5. El jugador que pierde un partido recibe 1 (un) punto.'
          },
          {
            content:
              '6. El jugador que no se presenta a disputar el partido, no obtiene puntos y se le aplicará 1 (un) punto negativo.'
          },
          {
            content:
              '7. El jugador que no llegue al desafío dentro de los 15 (quince) minutos siguientes a la hora de inicio del partido, perderá por WO.'
          },
          {
            content:
              '8. Cada partido se jugará a 2 (dos) set con tie break. En caso de empate a 1 (un) set, se define con un súper tie break (10 puntos).'
          },
          {
            content:
              '9. Se aplicará el Reglamento Internacional de Tenis (ITF) para todos los partidos.'
          },
          {
            content:
              '10. También se aplicarán las normas que cada Club o Centro Deportivo establezca en sus reglamentos para el uso de las canchas.'
          },
          {
            content:
              '11. Ace Match proveerá a los Usuarios de pelotas, botellas de agua (máximo 1 por jugador) y un árbitro general para cada encuentro.'
          },
          {
            content:
              '12. Es responsabilidad del Usuario llevar tenida deportiva, raqueta de tenis y zapatillas adecuadas a la superficie de la cancha, como también todos aquellos implementos adicionales que estime necesarios para la práctica del deporte (por ejemplo, muñequeras, gorro, toalla, etc.). '
          },
          {
            content:
              '13. En caso de que un Usuario tenga 3 WO consecutivos injustificados dentro de un período de 6 (seis) meses, será suspendido por 1 (un) mes para disputar partidos a través de Ace Match, sin que ello implique el reembolso o devolución del monto pagado por la Membresía respectiva durante el período de suspensión. Cumplida la suspensión, el Usuario podrá ser sancionado nuevamente si incurre en la misma conducta durante un nuevo período de 6 (seis) meses.'
          },
          {
            content:
              '14. En caso de acumulación de 3 (tres) puntos negativos por conducta antideportiva, el Usuario será suspendido de Ace Match por el plazo de 1 (un) mes, sin que ello implique el reembolso o devolución del monto pagado por la Membresía respectiva durante el período de la suspensión. Cumplida la suspensión, el Usuario podrá ser sancionado nuevamente si incurre en la misma conducta.'
          },
          {
            content:
              '15. Los mejores 15 (quince) partidos de cada Usuario será considerados para elaborar el ranking de Ace Match. Esta información se encontrará disponible para todos los Usuarios en su Perfil o Cuenta.'
          },
          {
            content:
              '16. Habrán 4 (cuatro) categorías de jugadores separadas por nivel y por ranking nacional e internacional (A-B-C-D).'
          },
          {
            content:
              '17. Los partidos serán enlazados o cerrados a través de la aplicación con un mínimo de 24 (veinticuatro) horas antes del inicio del encuentro.'
          },
          {
            content:
              '18. Un Usuario podrá suspender o cambiar un partido programado 24 horas antes del inicio del encuentro.'
          },
          {
            content:
              '19. En el evento que un Usuario suspenda el match, su adversario recibirá una notificación con la información de la cancelación, pudiendo el primero reagendar su partido nuevamente. '
          },
          {
            content:
              '20. En caso de que el partido deba suspenderse por lluvia u otras inclemencias del tiempo, o por cualquier hecho constitutivo de caso fortuito o fuerza mayor, el encuentro será reprogramado dentro del mes calendario inmediatamente siguiente.'
          },
          {
            content:
              '21. Estará disponible la opción de contar con un árbitro de silla. Para utilizar sus servicios, los dos Usuarios que vayan a disputar el partido deben estar de acuerdo antes de su inicio. Este beneficio tendrá un costo adicional a la suscripción.'
          },
          {
            content:
              '22. El árbitro de silla llevará el resultado y las estadísticas del partido en línea a través de la aplicación.'
          },
          {
            content:
              '23. No se permite fumar en las canchas, ni tampoco ingresar alimentos, animales, bicicletas y bebidas alcohólicas.'
          },
          {
            content:
              '24. Ace Match no se hará responsable por el extravío, hurto, robo o daño que puedan sufrir los efectos personales de los Usuarios dentro del Club o centro deportivo. '
          },
          {
            content:
              '25. Se recomienda a todos los Usuarios de Ace Match, someterse a un chequeo médico y kinésico previo a la práctica deportiva, sobre todo aquellos que hayan permanecido inactivos durante un período prolongado de tiempo o padezcan alguna enfermedad de carácter crónico. Ace Match no se hace responsable de accidentes y lesiones sufridas durante los partidos.'
          },
          {
            content:
              '26. Sin perjuicio de lo previsto en estas normas, Ace Match tendrá derecho, de acuerdo con la falta cometida, a revisar la continuidad del Usuario, en el evento que se incurra en una o más de las siguientes actuaciones:'
          },
          {
            content:
              '\t- Incumplan reiteradamente una cualquiera de las Normas de este Reglamento.'
          },
          {
            content:
              '\t- Desatiendan las indicaciones del árbitro general y/o del árbitro de silla, según el caso.'
          },
          {
            content:
              '\t- Atenten contra la integridad física, psíquica o moral de su contrincante, beneficiarios, socios o empleados del Club en donde se desarrolle el partido, o bien, en contra de la propiedad de todos éstos.'
          }
        ]}
        buttons={[{text: 'Atrás', onPress: () => navigation.goBack()}]}
      />
    )
  }
}
