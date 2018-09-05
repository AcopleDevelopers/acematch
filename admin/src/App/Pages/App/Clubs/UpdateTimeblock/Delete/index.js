import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation deleteTimeblock($timeblockId: ID) {
    deleteTimeblock(timeblockId: $timeblockId) {
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
    deleteTimeblock: PropTypes.func,
    timeblockId: PropTypes.string,
    clubId: PropTypes.string
  }

  state = {}

  async delete() {
    const result = window.confirm(
      `Pueden haber matches agendados para este bloque, si lo eliminas los matches se cancelarán también. ¿Deseas continuar?`
    )
    if (!result) return
    this.setState({loading: true, errorMessages: null})
    const {timeblockId, clubId} = this.props
    try {
      await this.props.deleteTimeblock({timeblockId: timeblockId})
      this.props.history.push(`/clubs/elements/${clubId}`)
      this.props.showMessage('Se ha eliminado el bloque satisfactoriamente')
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
