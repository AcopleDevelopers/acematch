import React from 'react'
import PropTypes from 'prop-types'
import {withApollo} from 'react-apollo'
import Button from 'orionsoft-parts/lib/components/Button'
import styles from './styles.css'
import {logout} from 'meteor-apollo-accounts'
@withApollo
export default class NoAdmin extends React.Component {
  static propTypes = {
    client: PropTypes.object
  }

  async logout() {
    await logout(this.props.client)
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Este usuario no es Administrador.</h1>
        <Button primary onClick={() => this.logout()}>
          Salir
        </Button>
      </div>
    )
  }
}
