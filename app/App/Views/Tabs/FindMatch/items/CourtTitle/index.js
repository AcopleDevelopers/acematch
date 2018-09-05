import React from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'

import styles from './styles'

class CourtTitle extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const {text} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

export default CourtTitle
