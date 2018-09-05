import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import SelectClub from './SelectClub'
import gql from 'graphql-tag'

@withGraphQL(gql`
  query clubs {
    clubs {
      _id
      name
      createdAt
      playfields {
        _id
        name
      }
    }
  }
`)
export default class UpdateMatchBlock extends React.Component {
  static propTypes = {
    clubs: PropTypes.object,
    matchId: PropTypes.string
  }

  render() {
    const {clubs, matchId} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Actualizar datos del Match</h3>
          Esta sección es para cambiar el horario del partido.
        </div>
        <SelectClub data={clubs} matchId={matchId} />
      </div>
    )
  }
}
