import React from 'react'
import Loading from 'orionsoft-parts/lib/components/Loading'

export default class Load extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div style={{textAlign: 'center', padding: 20, marginTop: 30}}>
        <Loading color="#000" />
      </div>
    )
  }
}
