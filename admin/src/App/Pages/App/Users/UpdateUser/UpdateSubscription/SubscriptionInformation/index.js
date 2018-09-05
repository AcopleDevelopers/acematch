import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class SubscriptionInformation extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  renderSubscription() {
    const {subscription} = this.props.user
    return (
      <div className={styles.subscription}>
        <h1>Información de la subscripción actual del usuario.</h1>
        <ul>
          <li>
            Estado: <strong>{subscription.status}</strong>
          </li>
          <li>
            Plan: <strong>{subscription.plan.name}</strong>
          </li>
          <li>
            Precio: <strong>{subscription.plan.price}</strong>
          </li>
        </ul>
      </div>
    )
  }

  renderNoSubscription() {
    return (
      <div className={styles.noSubscription}>
        Este usuario no tiene subscripción a un plan.
      </div>
    )
  }

  render() {
    const {user} = this.props
    if (!user.subscription || !user.subscription.id) {
      return this.renderNoSubscription()
    }
    return <div className={styles.container}>{this.renderSubscription()}</div>
  }
}
