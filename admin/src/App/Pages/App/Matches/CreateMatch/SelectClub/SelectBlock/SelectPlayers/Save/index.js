import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation adminCreateMatch($data: AdminMatchInput) {
    adminCreateMatch(data: $data) {
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
    playfieldId: PropTypes.string,
    data: PropTypes.object,
    adminCreateMatch: PropTypes.func,
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {data, playfieldId, firstPlayer, secondPlayer} = this.props
    const elements = {
      date: data.date,
      playfieldId: playfieldId,
      timeblockId: data.timeblockId,
      firstPlayer: firstPlayer,
      secondPlayer: secondPlayer
    }
    try {
      await this.props.adminCreateMatch({data: elements})
      this.props.history.push('/matches')
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  state = {}

  render() {
    const {data, playfieldId, firstPlayer} = this.props
    if (!data.timeblockId || !playfieldId || !data.date || !firstPlayer) { return null }
    return (
      <div className={styles.container}>
        <Button
          primary
          onClick={() => this.save()}
          loading={this.state.loading}>
          Crear Match
        </Button>
        <Button onClick={() => this.props.history.push('/matches')}>
          Volver
        </Button>
      </div>
    )
  }
}
