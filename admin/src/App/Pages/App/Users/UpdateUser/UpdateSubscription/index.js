import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import CardInformation from './CardInformation'
import SubscriptionInformation from './SubscriptionInformation'
import ChangeSubscription from './ChangeSubscription'

export default class UpdateSubscription extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const {user} = this.props
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <CardInformation user={user} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <SubscriptionInformation user={user} />
            {!user.creditCard || !user.creditCard.uid ? (
              ''
            ) : (
              <ChangeSubscription user={user} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
