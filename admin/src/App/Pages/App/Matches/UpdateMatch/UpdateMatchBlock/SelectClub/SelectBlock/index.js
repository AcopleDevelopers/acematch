import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import moment from 'moment'
import dayName from 'App/helpers/days/dayName'
import NoBlocks from './NoBlocks'
import Save from './Save'

export default class SelectBlock extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    matchId: PropTypes.string
  }

  state = {}

  className(index) {
    if (this.state.indexChoose === index) {
      return styles.cellSelect
    } else {
      return styles.cell
    }
  }

  renderDay(date) {
    const day = new Date(date).getDay()
    return <div>{dayName(day)}</div>
  }

  renderTableData() {
    const {queryResult} = this.props.data
    return queryResult.map((timeblock, index) => {
      return (
        <tr
          className={this.className(index)}
          key={index}
          onClick={() =>
            this.setState({
              indexChoose: index,
              blockChoose: timeblock.timeblockId,
              date: timeblock.date
            })
          }>
          <td>{timeblock.name}</td>
          <td>{moment(timeblock.startTime).format('HH:mm')}</td>
          <td>{moment(timeblock.endTime).format('HH:mm')}</td>
          <td>{moment(timeblock.date).format('DD/MM/YYYY')}</td>
          <td>{this.renderDay(timeblock.date)}</td>
          <td>{timeblock.firstPlayer || 'Sin jugador'}</td>
          <td>{timeblock.secondPlayer || 'Sin jugador'}</td>
        </tr>
      )
    })
  }

  renderTable() {
    return (
      <div className={styles.matches}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nombre del bloque</td>
              <td>Hora Inicio</td>
              <td>Hora Termino</td>
              <td>Fecha</td>
              <td>Día</td>
              <td>Jugador 1</td>
              <td>Jugador 2</td>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    )
  }

  renderNoItems() {
    return (
      <div className={styles.noItems}>
        <NoBlocks />
      </div>
    )
  }

  render() {
    const {data, matchId} = this.props
    if (!data || !data.queryResult) return null
    if (!data.queryResult.length) return this.renderNoItems()
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Selecciona un bloque</h3>
        </div>
        {this.renderTable()}
        <Save
          data={{timeblockId: this.state.blockChoose, date: this.state.date}}
          playfieldId={this.props.data.playfieldId}
          matchId={matchId}
        />
      </div>
    )
  }
}
