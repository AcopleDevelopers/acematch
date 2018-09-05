import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation createTimeblock(
    $name: String
    $clubId: ID
    $startTime: String
    $endTime: String
    $activeDays: [JSON]
    $playfieldIds: [ID]
  ) {
    createTimeblock(
      name: $name
      clubId: $clubId
      startTime: $startTime
      endTime: $endTime
      activeDays: $activeDays
      playfieldIds: $playfieldIds
    ) {
      _id
      name
      createdAt
      clubId
      startTime
      endTime
      activeDays
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    createTimeblock: PropTypes.func,
    clubId: PropTypes.string,
    data: PropTypes.object
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {name, startTime, endTime, activeDays, playfieldIds} = this.props.data
    const {clubId} = this.props
    try {
      await this.props.createTimeblock({
        name,
        clubId,
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
    const {clubId} = this.props
    console.log(this.props.data)
    return (
      <div className={styles.container}>
        <div className={styles.buttons}>
          <Button primary onClick={() => this.save()} loading={this.state.loading}>
            Crear
          </Button>
          <Button onClick={() => this.props.history.push(`/clubs/elements/${clubId}`)}>
            Atras
          </Button>
        </div>
      </div>
    )
  }
}
