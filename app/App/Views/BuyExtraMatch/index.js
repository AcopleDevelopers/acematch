import React from 'react'
import PropTypes from 'prop-types'
import Info from 'App/components/Info'
import {View, WebView} from 'react-native'
import autobind from 'autobind-decorator'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'

@withMutation(gql`
  mutation buyExtraMatch {
    buyExtraMatch
  }
`)
export default class PlanDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    redirectUrl: ''
  }

  static navigationOptions = {
    header: null
  }

  @autobind
  async buyExtraMatch() {
    try {
      const response = await this.props.buyExtraMatch()
      this.setState({redirectUrl: response.buyExtraMatch})
    } catch (error) {
      console.log('No se pudo cargar el match extra:', error.message)
    }
  }

  renderInfoOrPayment() {
    if (!this.state.redirectUrl) {
      return (
        <Info
          title="Compra de Match Extra"
          texts={[
            {
              content: 'HOLA EXTRA MATCH INFO'
            }
          ]}
          buttons={[
            { text: 'Atrás', onPress: () => navigation.goBack() },
            { text: 'Continuar', onPress: () => this.buyExtraMatch() }
          ]}
        />
      )
    } else {
      return (
        <WebView
          style={styles.webview}
          source={{uri: url}}
          onLoadStart={evt => this.handleReturn(evt.nativeEvent.url)}
        />
      )
    }
  }

  render() {
    const {navigation} = this.props
    return (
      <View>
        <Header cancel={this.cancel} />
        {this.renderInfoOrPayment()}
      </View>
    )
  }
}
