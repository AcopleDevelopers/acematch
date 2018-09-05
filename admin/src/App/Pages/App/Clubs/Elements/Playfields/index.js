import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import {withRouter} from 'react-router-dom'

@withGraphQL(gql`
  query adminPlayfields($clubId: ID) {
    adminPlayfields(clubId: $clubId) {
      _id
      name
      description
      createdAt
      scheduledMatches
    }
  }
`)
@withRouter
export default class Playfields extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    adminPlayfields: PropTypes.object
  }

  renderNoData() {
    return <div className={styles.noItems}>No Items</div>
  }

  renderTable() {
    const playfields = this.props.adminPlayfields || []
    if (isEmpty(playfields)) return this.renderNoData()
    return playfields.map((field, index) => {
      return (
        <tr
          className={styles.cell}
          key={index}
          onClick={() =>
            this.props.history.push(`/clubs/playfieldupdate/${field._id}`)
          }>
          <td>{field.name}</td>
          <td>{field.description}</td>
          <td>{moment(field.createdAt).format('DD/MM/YYYY')}</td>
          <td>{field.scheduledMatches}</td>
        </tr>
      )
    })
  }

  renderPlayfields(data) {
    return (
      <div className={styles.matches}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Descripción</td>
              <td>Fecha</td>
              <td>Partidos</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <h3>Canchas</h3>
        {this.renderPlayfields()}
      </div>
    )
  }
}
