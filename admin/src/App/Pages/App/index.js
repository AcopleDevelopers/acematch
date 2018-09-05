import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import Settings from './Settings'
import NotFound from './NotFound'
import gql from 'graphql-tag'
import Disabled from './Disabled'
import NoAdmin from './NoAdmin'
import Home from './Home'
import Users from './Users'
import Matches from './Matches'
import AdminUsers from './AdminUsers'
import Clubs from './Clubs'
import Footer from './Footer'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import forceLogin from 'orionsoft-parts/lib/decorators/forceLogin'

@withGraphQL(gql`
  query me {
    me {
      _id
      roles
      enabled
    }
  }
`)
@forceLogin
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    me: PropTypes.object
  }

  renderNoAdmin() {
    return (
      <div className={styles.container}>
        <NoAdmin />
      </div>
    )
  }

  renderDisabled() {
    return (
      <div className={styles.container}>
        <Disabled />
      </div>
    )
  }

  render() {
    const {me} = this.props
    if (
      !me.roles ||
      (!me.roles.includes('superAdmin') && !me.roles.includes('admin'))
    ) {
      return this.renderNoAdmin()
    }
    if (!me.enabled) {
      return this.renderDisabled()
    }
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.body}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
            <Route path="/matches" component={Matches} />
            <Route path="/admins" component={AdminUsers} />
            <Route path="/clubs" component={Clubs} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}
