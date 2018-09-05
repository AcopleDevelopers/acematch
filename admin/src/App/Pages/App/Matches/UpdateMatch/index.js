import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import ActualInformation from './ActualInformation'
import UpdatePlayers from './UpdatePlayers'
import UpdateMatchBlock from './UpdateMatchBlock'
import withRouterId from 'App/Decorators/withRouterId'
import gql from 'graphql-tag'

@withRouterId
@withGraphQL(gql`
  query getMatch($matchId: ID) {
    getMatch(matchId: $matchId) {
      _id
      firstPlayer
      secondPlayer
      date
      clubId
      playfieldId
      timeblockId
      createdAt
      club {
        name
      }
      playfield {
        name
      }
      timeblock {
        name
        startTime
        endTime
      }
      firstPlayerName
      secondPlayerName
    }
  }
`)
export default class UpdateMatch extends React.Component {
  static propTypes = {
    getMatch: PropTypes.object
  }

  render() {
    const {
      _id,
      firstPlayer,
      secondPlayer,
      club,
      playfield,
      date,
      timeblock,
      firstPlayerName,
      secondPlayerName
    } = this.props.getMatch
    return (
      <div className={styles.container}>
        <Container>
          <ActualInformation
            club={club}
            playfield={playfield}
            date={{date: date}}
            timeblock={timeblock}
            firstPlayerName={firstPlayerName}
            secondPlayerName={secondPlayerName}
          />
          <UpdateMatchBlock matchId={_id} />
          <UpdatePlayers matchId={_id} firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
        </Container>
      </div>
    )
  }
}
