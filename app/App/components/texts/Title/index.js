import React from 'react'
import {Text} from 'react-native'

import styles from './styles'

export default class Title extends React.Component {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    const {children, style, ...rest} = this.props
    return (
      <Text style={[styles.title, style]} {...rest}>
        {children}
      </Text>
    )
  }
}
