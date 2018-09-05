import React from 'react'
import {Text} from 'react-native'

import styles from './styles'

export default class BlueText extends React.Component {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    const {children, style, ...rest} = this.props
    return (
      <Text style={[styles.text, style]} {...rest}>
        {children}
      </Text>
    )
  }
}
