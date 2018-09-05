import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableWithoutFeedback} from 'react-native'

import styles from './styles'

export default class AcceptTerms extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    navigation: PropTypes.object.isRequired
  }

  render() {
    const {onChange, value, navigation} = this.props
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onChange(!value)}>
          <View style={styles.dot}>
            {value ? <View style={styles.innerDot} /> : null}
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Consiento la transferencia de mis datos personales a AceMatch con el
            fin de promocionar servicios tal y como se describe en la{' '}
            <Text
              style={[styles.text, styles.link]}
              onPress={() => navigation.navigate('PrivacyPolicy')}
            >
              Política de privacidad
            </Text>{' '}
            , en los{' '}
            <Text
              style={[styles.text, styles.link]}
              onPress={() => navigation.navigate('TermsAndConditions')}
            >
              Términos y Condiciones
            </Text>{' '}
            y en el{' '}
            <Text
              style={[styles.text, styles.link]}
              onPress={() => navigation.navigate('Regulation')}
            >
              Reglamento
            </Text>. Puedo retirar mi consentimiento en cualquier momento.
          </Text>
        </View>
      </View>
    )
  }
}
