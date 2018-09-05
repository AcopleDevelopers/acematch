import React from 'react'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
  class routeParams extends React.Component {
    static propTypes = {
      match: PropTypes.object
    }
    render() {
      const {params} = this.props.match
      return <ComposedComponent {...this.props} {...params} />
    }
  }
  return routeParams
}
