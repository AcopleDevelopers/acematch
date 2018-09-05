import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import {withRouter} from 'react-router-dom'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation updateMatchResult($matchId: ID, $result: [MatchResultInput], $winner: ID!) {
    updateMatchResult(matchId: $matchId, result: $result, winner: $winner) {
      success
    }
  }
`)
@withMessage
@withRouter
export default class Save extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    matchId: PropTypes.string,
    games: PropTypes.array,
    updateMatchResult: PropTypes.func,
    winner: PropTypes.string,
    history: PropTypes.object
  }

  state = {}

  enabled() {
    const {games, winner} = this.props
    if (!games) return false
    let enabled = true
    for (const game of games) {
      if (!game.setNumber || !game.firstPlayer || !game.secondPlayer || !winner) {
        enabled = false
      }
    }
    return enabled
  }

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {games, matchId, winner} = this.props
    try {
      await this.props.updateMatchResult(
        {matchId: matchId, result: games, winner},
        {refetchQueries: ['getMatch']}
      )
      this.props.history.push('/matches')
      this.props.showMessage('Resultados del Match actualizado exitosamente!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.divider} />
        <div className={styles.button}>
          <Button
            primary
            onClick={() => this.save()}
            loading={this.state.loading}
            disabled={!this.enabled()}>
            Actualizar
          </Button>
        </div>
      </div>
    )
  }
}
