import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation updateMatchInformation($matchId: ID, $data: MatchInput) {
    updateMatchInformation(matchId: $matchId, data: $data) {
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
    updateMatchInformation: PropTypes.func,
    data: PropTypes.object,
    playfieldId: PropTypes.string,
    matchId: PropTypes.string
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {data, playfieldId, matchId} = this.props
    const elements = {
      date: data.date,
      playfieldId: playfieldId,
      timeblockId: data.timeblockId
    }
    try {
      await this.props.updateMatchInformation(
        {matchId: matchId, data: elements},
        {refetchQueries: ['paginatedMatches']}
      )
      this.props.history.push('/matches')
      this.props.showMessage('Los datos del match fueron actualizados exitosamente!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {data, playfieldId} = this.props
    if (!data.timeblockId || !playfieldId || !data.date) return null
    return (
      <div className={styles.container}>
        <Button primary onClick={() => this.save()} loading={this.state.loading}>
          Actualizar
        </Button>
      </div>
    )
  }
}
