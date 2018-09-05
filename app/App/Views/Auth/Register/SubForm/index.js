import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import {Field} from 'simple-react-form'

import styles from './styles'

export default class SubForm extends React.Component {
  static propTypes = {
    components: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  }

  renderComponents() {
    const {components, navigation} = this.props

    return components.map((component, index) => {
      const {isField, type: Component, style, ...rest} = component
      if (isField) {
        return (
          <Field
            key={index}
            style={[styles.field, style]}
            type={Component}
            navigation={navigation}
            {...rest}
          />
        )
      }
      return <Component key={index} style={style} {...rest} />
    })
  }

  render() {
    return <View style={styles.container}>{this.renderComponents()}</View>
  }
}
