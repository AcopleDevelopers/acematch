import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import dayName from 'App/helpers/days/dayName'
import Button from 'orionsoft-parts/lib/components/Button'
import moment from 'moment'
import {withRouter} from 'react-router-dom'

@withRouter
export default class ActualInformation extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    club: PropTypes.object,
    playfield: PropTypes.object,
    date: PropTypes.object,
    timeblock: PropTypes.object,
    firstPlayerName: PropTypes.string,
    secondPlayerName: PropTypes.string
  }

  renderDay(date) {
    const day = new Date(date).getDay()
    return <div>{dayName(day)}</div>
  }

  renderTable() {
    const {
      club,
      playfield,
      date,
      timeblock,
      firstPlayerName,
      secondPlayerName
    } = this.props
    return (
      <tr>
        <td>{club.name}</td>
        <td>{playfield.name}</td>
        <td>{timeblock.name}</td>
        <td>{moment(timeblock.startTime).format('HH:mm')}</td>
        <td>{moment(timeblock.endTime).format('HH:mm')}</td>
        <td>{moment(date.date).format('DD/MM/YYYY')}</td>
        <td>{this.renderDay(date.date)}</td>
        <td>{firstPlayerName || 'Sin jugador'}</td>
        <td>{secondPlayerName || 'Sin jugador'}</td>
      </tr>
    )
  }

  renderTableHeader() {
    return (
      <div className={styles.matches}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nombre del Club</td>
              <td>Cancha</td>
              <td>Bloque</td>
              <td>Hora Inicio</td>
              <td>Hora Termino</td>
              <td>Fecha</td>
              <td>Día</td>
              <td>Jugador 1</td>
              <td>Jugador 2</td>
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
        <div className={styles.title}>
          <h1>Información actual del match</h1>
        </div>
        <div className={styles.button}>
          <Button onClick={() => this.props.history.push('/matches')}>
            Volver
          </Button>
        </div>
        {this.renderTableHeader()}
      </div>
    )
  }
}
