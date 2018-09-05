import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Elements from './Elements'
import UpdateAdmin from './UpdateAdmin'
import CreateAdmin from './CreateAdmin'
import requireRole from 'orionsoft-parts/lib/decorators/requireRole'

@requireRole('superAdmin')
export default class AdminUsers extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/admins" component={Elements} />
          <Route exact path="/admins/create" component={CreateAdmin} />
          <Route path="/admins/updateadmin/:userId" component={UpdateAdmin} />
        </Switch>
      </div>
    )
  }
}
