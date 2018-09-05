import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import Button from 'orionsoft-parts/lib/components/Button'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation updateMatchPlayers(
    $matchId: ID
    $firstPlayer: ID
    $secondPlayer: ID
  ) {
    updateMatchPlayers(
      matchId: $matchId
      firstPlayer: $firstPlayer
      secondPlayer: $secondPlayer
    ) {
      success
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    updateMatchPlayers: PropTypes.func,
    matchId: PropTypes.string,
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {matchId, firstPlayer, secondPlayer} = this.props
    try {
      await this.props.updateMatchPlayers(
        {matchId, firstPlayer, secondPlayer},
        {refetchQueries: ['allUsers']}
      )
      this.props.history.push('/matches')
      this.props.showMessage('Jugadores del partido actualizados exitosamente!')
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
          primary
          onClick={() => this.save()}
          loading={this.state.loading}>
          Actualizar
        </Button>
      </div>
    )
  }
}
