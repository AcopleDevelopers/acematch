import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Head from './Head'
import isEmpty from 'lodash/isEmpty'
import {withRouter} from 'react-router-dom'

@withGraphQL(gql`
  query matchesInMoment {
    matchesInMoment {
      _id
      date
      club {
        name
      }
      playfield {
        name
      }
      timeblock {
        name
      }
      firstPlayerName
      secondPlayerName
    }
  }
`)
@withRouter
export default class PlayingNow extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    matchesInMoment: PropTypes.object
  }

  renderNoData() {
    return <div className={styles.noItems}>No Items</div>
  }

  renderTable() {
    const matchesInMoment = this.props.matchesInMoment || []
    if (isEmpty(matchesInMoment)) return this.renderNoData()
    return matchesInMoment.map((match, index) => {
      return (
        <tr
          onClick={() =>
            this.props.history.push(`/matches/update/${match._id}`)
          }
          className={styles.cell}
          key={index}>
          <td>{match.club.name}</td>
          <td>{match.playfield.name}</td>
          <td>{match.timeblock.name}</td>
          <td>{match.firstPlayerName}</td>
          <td>{match.secondPlayerName}</td>
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
              <td>Club</td>
              <td>Cancha</td>
              <td>Bloque</td>
              <td>Jug.1</td>
              <td>Jug.2</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    )
  }

  render() {
    const {matchesInMoment} = this.props
    return (
      <div className={styles.container}>
        <div>
          <Head data={matchesInMoment} />
        </div>
        {this.renderMatches()}
      </div>
    )
  }
}
