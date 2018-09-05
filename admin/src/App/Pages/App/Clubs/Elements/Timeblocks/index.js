import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import dayName from 'App/helpers/days/dayName'
import isEmpty from 'lodash/isEmpty'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

@withGraphQL(gql`
  query timeblocks($clubId: ID) {
    timeblocks(clubId: $clubId) {
      _id
      name
      createdAt
      startTime
      endTime
      activeDays
    }
  }
`)
@withRouter
export default class Timeblocks extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    timeblocks: PropTypes.object,
    clubId: PropTypes.string
  }

  renderNoData() {
    return <div className={styles.noItems}>No Items</div>
  }

  renderDays(days) {
    return days.map((day, index) => {
      return (
        <div className={styles.day} key={index}>
          {dayName(day)}
        </div>
      )
    })
  }

  renderTable() {
    const timeblocks = this.props.timeblocks || []
    if (isEmpty(timeblocks)) return this.renderNoData()
    const {clubId} = this.props
    return timeblocks.map((block, index) => {
      return (
        <tr
          className={styles.cell}
          key={index}
          onClick={() => this.props.history.push(`/clubs/timeblocksupdate/${block._id}/${clubId}`)}
        >
          <td>{block.name}</td>
          <td>{moment(block.startTime).format('HH:mm')}</td>
          <td>{moment(block.endTime).format('HH:mm')}</td>
          <td>{this.renderDays(block.activeDays)}</td>
        </tr>
      )
    })
  }

  renderTimeblocks(data) {
    return (
      <div className={styles.matches}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Hora Inicio</td>
              <td>Hora Termino</td>
              <td>Dias Activos</td>
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
        <h3>Bloques</h3>
        {this.renderTimeblocks()}
      </div>
    )
  }
}
