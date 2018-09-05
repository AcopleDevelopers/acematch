import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withApollo} from 'react-apollo'

@withMutation(gql`
  mutation updateUserSubscription($userId: ID, $planId: ID) {
    updateUserSubscription(userId: $userId, planId: $planId) {
      success
    }
  }
`)
@withApollo
@withMessage
export default class ChangePlan extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    user: PropTypes.object,
    updateUserSubscription: PropTypes
  }

  state = {}

  async change() {
    this.setState({loading: true, errorMessages: null})
    const id = this.whatPlan()
    const {user} = this.props
    try {
      await this.props.updateUserSubscription(
        {userId: user._id, planId: id},
        {refetchQueries: ['users']}
      )
      this.props.showMessage('Se ha cambiado el plan del usuario.')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    } finally {
      this.props.client.queryManager.resetStore()
    }
    this.setState({loading: false})
  }

  whatPlan() {
    const {subscription} = this.props.user
    const actualPlanId = subscription.plan.id
    if (actualPlanId === 'basico') return 'corriente'
    if (actualPlanId === 'corriente') return 'basico'
  }

  renderText() {
    return `Cambiar al plan ${this.whatPlan()}`
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          className={styles.changePlan}
          onClick={() => this.change()}
          loading={this.state.loading}>
          {this.renderText()}
        </Button>
      </div>
    )
  }
}
