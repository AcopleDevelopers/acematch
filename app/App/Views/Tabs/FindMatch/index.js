import React from 'react'
import PropTypes from 'prop-types'
import List from 'App/components/List'
import {withApollo} from 'react-apollo'
import {withNavigationFocus} from '@patwoz/react-navigation-is-focused-hoc'

import steps from './steps'

@withNavigationFocus
@withApollo
class FindMatch extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    isFocused: PropTypes.bool.isRequired
  }

  /* eslint camelcase: 0 */
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {isFocused} = this.props
    if (!isFocused && nextProps.isFocused) {
      this.list.reset()
    }
  }

  render() {
    const {client} = this.props

    return (
      <List
        ref={ref => (this.list = ref)}
        titleBackground={require('./imgs/titleImage.png')}
        steps={steps}
        extraInfo={{client}}
        dots
        back
      />
    )
  }
}

export default FindMatch
