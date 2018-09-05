import React from 'react'
import apolloClient from './apollo'
import {ApolloProvider} from 'react-apollo'
import PropTypes from 'prop-types'
import './numeral'

export default class Root extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <ApolloProvider client={apolloClient}>{this.props.children}</ApolloProvider>
  }
}
