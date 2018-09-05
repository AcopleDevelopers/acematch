import React from 'react'
import PropTypes from 'prop-types'
import {View, WebView} from 'react-native'
import Header from './Header'
import autobind from 'autobind-decorator'

import styles from './styles'

export default class RegisterCard extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: null
  }

  @autobind
  cancel() {
    const {navigation: {state: {params: {reject}}, goBack}} = this.props
    reject('Ha ocurrido un error al momento de registrar la tarjeta')
    goBack()
  }

  handleReturn(url) {
    if (url.includes('a28abfaf.ngrok.io/enroll')) {
      const {navigation: {state: {params: {resolve}}, goBack}} = this.props
      resolve()
      goBack()
    }
  }

  render() {
    const {navigation: {state: {params: {url}}}} = this.props

    return (
      <View style={styles.container}>
        <Header cancel={this.cancel} />
        <WebView
          style={styles.webview}
          source={{uri: url}}
          onLoadStart={evt => this.handleReturn(evt.nativeEvent.url)}
        />
      </View>
    )
  }
}
