import React from 'react'
import {Text} from 'react-native'

import styles from './styles'

export default class Subtitle extends React.Component {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    const {children, style, ...rest} = this.props
    return (
      <Text style={[styles.subtitle, style]} {...rest}>
        {children}
      </Text>
    )
  }
}
