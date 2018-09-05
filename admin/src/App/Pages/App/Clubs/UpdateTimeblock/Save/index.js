import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import {withRouter} from 'react-router-dom'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation updateTimeblock(
    $timeblockId: ID
    $name: String
    $startTime: String
    $endTime: String
    $activeDays: [JSON]
    $playfieldIds: [ID]
  ) {
    updateTimeblock(
      timeblockId: $timeblockId
      name: $name
      startTime: $startTime
      endTime: $endTime
      activeDays: $activeDays
      playfieldIds: $playfieldIds
    ) {
      _id
      name
      clubId
      startTime
      endTime
      activeDays
      playfieldIds
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    history: PropTypes.object,
    data: PropTypes.object,
    updateTimeblock: PropTypes.func
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {
      timeblockId,
      clubId,
      name,
      startTime,
      endTime,
      activeDays,
      playfieldIds
    } = this.props.data
    try {
      await this.props.updateTimeblock({
        timeblockId,
        name,
        startTime,
        endTime,
        activeDays,
        playfieldIds
      })
      this.props.history.push(`/clubs/elements/${clubId}`)
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {clubId} = this.props.data
    return (
      <div className={styles.container}>
        <Button primary onClick={() => this.save()} loading={this.state.loading}>
          Actualizar
        </Button>
        <Button onClick={() => this.props.history.push(`/clubs/elements/${clubId}`)}>volver</Button>
      </div>
    )
  }
}
