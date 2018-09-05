import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation deletePlayfield($playfieldId: ID) {
    deletePlayfield(playfieldId: $playfieldId) {
      success
    }
  }
`)
@withRouter
@withMessage
export default class Delete extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    deletePlayfield: PropTypes.func,
    playfieldId: PropTypes.string,
    clubId: PropTypes.string
  }

  state = {}

  async delete() {
    const result = window.confirm(
      `Pueden haber matches agendados para esta cancha, si la eliminas los matches se cancelarán también. ¿Deseas continuar?`
    )
    if (!result) return
    this.setState({loading: true, errorMessages: null})
    const {playfieldId, clubId} = this.props
    try {
      await this.props.deletePlayfield({playfieldId: playfieldId})
      this.props.history.push(`/clubs/elements/${clubId}`)
      this.props.showMessage('Se ha eliminado la cancha satisfactoriamente')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          className={styles.delete}
          loading={this.state.loading}
          primary
          onClick={() => this.delete()}>
          Eliminar
        </Button>
      </div>
    )
  }
}
