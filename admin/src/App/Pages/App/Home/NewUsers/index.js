import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Head from './Head'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'
import {withRouter} from 'react-router-dom'

@withGraphQL(gql`
  query newUsers {
    newUsers {
      _id
      createdAt
      name
      expertiseLevel
      profile {
        genre
        birthdate
      }
      age
    }
  }
`)
@withRouter
export default class NewUsers extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    newUsers: PropTypes.object
  }

  renderNoData() {
    return <div className={styles.noItems}>No Items</div>
  }

  renderTable() {
    const newUsers = this.props.newUsers || []
    if (isEmpty(newUsers)) return this.renderNoData()
    return newUsers.map((user, index) => {
      return (
        <tr
          className={styles.cell}
          key={index}
          onClick={() => this.props.history.push(`/users/update/${user._id}`)}>
          <td>{moment(user.createdAt).format('DD/MM/YYYY')}</td>
          <td>{user.name}</td>
          <td>{user.expertiseLevel}</td>
          <td>{user.profile.genre}</td>
          <td>{user.age}</td>
        </tr>
      )
    })
  }

  renderMatches(data) {
    return (
      <div className={styles.matches}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Incripción</td>
              <td>Nombre</td>
              <td>Nivel</td>
              <td>Sexo</td>
              <td>Edad</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    )
  }

  render() {
    const {newUsers} = this.props
    return (
      <div className={styles.container}>
        <div>
          <Head data={newUsers} />
        </div>
        {this.renderMatches()}
      </div>
    )
  }
}
