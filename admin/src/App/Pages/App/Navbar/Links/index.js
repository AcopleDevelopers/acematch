import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {NavLink, withRouter} from 'react-router-dom'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'

const getFields = [
  {title: 'General', path: '/'},
  {title: 'Matches', path: '/matches'}
]

const superAdminFields = [
  {title: 'General', path: '/'},
  {title: 'Matches', path: '/matches'},
  {title: 'Usuarios', path: '/users'},
  {title: 'Clubs', path: '/clubs'},
  {title: 'Administradores', path: '/admins'}
]

@withGraphQL(gql`
  query me {
    me {
      _id
      roles
    }
  }
`)
@withRouter
export default class Links extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    me: PropTypes.object
  }

  renderSuperAdmin() {
    return superAdminFields.map((item, index) => {
      return (
        <NavLink
          key={index}
          to={item.path}
          activeClassName={styles.menuActive}
          className={styles.menuItem}
          exact>
          {item.title}
        </NavLink>
      )
    })
  }

  renderAdmin() {
    return getFields.map((item, index) => {
      return (
        <NavLink
          key={index}
          to={item.path}
          activeClassName={styles.menuActive}
          className={styles.menuItem}
          exact>
          {item.title}
        </NavLink>
      )
    })
  }

  render() {
    const {me} = this.props
    if (me.roles.includes('superAdmin')) {
      return <div className={styles.container}>{this.renderSuperAdmin()}</div>
    }
    return <div className={styles.container}>{this.renderAdmin()}</div>
  }
}
