import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Elements from './Elements'
import UpdateUser from './UpdateUser'
import CreateUser from './CreateUser'
import requireRole from 'orionsoft-parts/lib/decorators/requireRole'

@requireRole('superAdmin')
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/users" component={Elements} />
          <Route path="/users/createuser" component={CreateUser} />
          <Route path="/users/update/:userId" component={UpdateUser} />
        </Switch>
      </div>
    )
  }
}
