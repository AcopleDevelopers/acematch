import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import ChangePlan from './ChangePlan'
import DeletePlan from './DeletePlan'

export default class UpdateSubscription extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  renderNosubscription() {
    return (
      <div className={styles.noSubscription}>
        No se puede actualizar el plan. El usuario no tiene subscripción.
      </div>
    )
  }

  render() {
    const {user} = this.props
    if (!user.subscription || !user.subscription.id) {
      return this.renderNosubscription()
    }
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <ChangePlan user={user} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <DeletePlan user={user} />
          </div>
        </div>
      </div>
    )
  }
}
