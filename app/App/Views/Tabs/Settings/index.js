import React from 'react'
import PropTypes from 'prop-types'
import List from 'App/components/List'
import {withApollo} from 'react-apollo'

import options from './options'

@withApollo
class Settings extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired
  }

  render() {
    const {client} = this.props
    return (
      <List
        steps={options}
        titleBackground={require('./imgs/titleImage.png')}
        extraInfo={{client}}
      />
    )
  }
}

export default Settings
