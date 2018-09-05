import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'
import React from 'react'
import Views from './Views'
import Root from './Root'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Views />
      </Root>
    )
  }
}
