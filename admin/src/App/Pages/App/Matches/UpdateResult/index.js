import React from 'react'
import PropTypes from 'prop-types'
import Container from 'orionsoft-parts/lib/components/Container'
import styles from './styles.css'
import withRouterId from 'App/Decorators/withRouterId'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import {Form, Field} from 'simple-react-form'
import GameField from './GameField'
import ArrayComponent from 'orionsoft-parts/lib/components/fields/ArrayComponent'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import Save from './Save'
import ActualInformation from '../UpdateMatch/ActualInformation'
import cloneDeep from 'lodash/cloneDeep'

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
      result {
        setNumber
        firstPlayer
        secondPlayer
      }
    }
  }
`)
export default class UpdateResult extends React.Component {
  static propTypes = {
    getMatch: PropTypes.object
  }

  componentDidMount() {
    const {result} = this.props.getMatch
    const games = cloneDeep(result)
    if (result) {
      this.setState({games})
    }
  }

  state = {}

  getPlayerOptions() {
    const {firstPlayer, secondPlayer, firstPlayerName, secondPlayerName} = this.props.getMatch
    return [
      {label: firstPlayerName, value: firstPlayer},
      {label: secondPlayerName, value: secondPlayer}
    ]
  }

  render() {
    const {
      _id,

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
          <div className={styles.title}>
            <h3>Actualizar los resultados de este Match</h3>
          </div>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div>
              <div className="label">Ganador</div>
              <div className="os-input-container">
                <Field fieldName="winner" type={Select} options={this.getPlayerOptions()} />
              </div>
            </div>
            <Field
              fieldName="games"
              type={ArrayComponent}
              draggable={false}
              addLabel="Agregar game"
              renderItem={(item, index) => (
                <Field fieldName="product" label="product" type={GameField} index={index} />
              )}
            />
          </Form>
          <Save games={this.state.games} matchId={_id} winner={this.state.winner} />
        </Container>
      </div>
    )
  }
}
