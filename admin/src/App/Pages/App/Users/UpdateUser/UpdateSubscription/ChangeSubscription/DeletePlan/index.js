import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import Button from 'orionsoft-parts/lib/components/Button'
import {withApollo} from 'react-apollo'

@withMutation(gql`
  mutation deleteUserSubscription($userId: ID, $subscriptionId: ID) {
    deleteUserSubscription(userId: $userId, subscriptionId: $subscriptionId) {
      success
    }
  }
`)
@withApollo
@withMessage
export default class DeletePlan extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    user: PropTypes.object,
    deleteUserSubscription: PropTypes.func
  }

  state = {}

  async delete() {
    this.setState({loading: true, errorMessages: null})
    const {user} = this.props
    try {
      await this.props.deleteUserSubscription(
        {userId: user._id, subscriptionId: user.subscriptionId},
        {refetchQueries: ['user']}
      )
      this.props.showMessage('Subscripción cancelada satisfactoriamente')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    } finally {
      this.props.client.queryManager.resetStore()
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          className={styles.deletePlan}
          onClick={() => this.delete()}
          loading={this.state.loading}>
          Cancelar Subscripcion
        </Button>
      </div>
    )
  }
}
