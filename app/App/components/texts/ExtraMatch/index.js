import React  from 'react'
import PropTypes from 'prop-types'
import BlueText from '../BlueText'
import {Text} from 'react-native'
import autobind from 'autobind-decorator'
import { withNavigation } from 'react-navigation'

import styles from './styles'

@withNavigation
export default class ExtraMatch extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }


  render() {
    const {children, style, ...rest} = this.props
    return (
      <Text
        style={[styles.text, style]}
        {...rest}
        onPress={() => this.props.navigation.navigate('BuyExtraMatch')}
      >
        MATCH EXTRA
      </Text>
    )
  }
}

