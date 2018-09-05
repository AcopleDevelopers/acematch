import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import {Form, Field} from 'simple-react-form'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import Save from './Save'
import getFirstPlayer from 'App/helpers/MatchFind/getFirstPlayer'
import getSecondPlayer from 'App/helpers/MatchFind/getSecondPlayer'

@withGraphQL(gql`
  query allUsers {
    allUsers {
      _id
      email
    }
  }
`)
export default class SelectPlayers extends React.Component {
  static propTypes = {
    playfieldId: PropTypes.string,
    data: PropTypes.object,
    allUsers: PropTypes.func
  }

  state = {}

  render() {
    const {data, playfieldId} = this.props
    if (!data.timeblockId || !playfieldId || !data.date) return null
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>
            Selecciona los jugadores. Almenos el primer jugador debe ser elegido
          </h3>
        </div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="label">Primer Jugador</div>
              <Field
                fieldName="firstPlayer"
                type={Select}
                options={getFirstPlayer(this.state, this.props)}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="label">Segundo Jugador</div>
              <Field
                fieldName="secondPlayer"
                type={Select}
                options={getSecondPlayer(this.state, this.props)}
              />
            </div>
          </div>
        </Form>
        <Save
          data={data}
          playfieldId={playfieldId}
          firstPlayer={this.state.firstPlayer}
          secondPlayer={this.state.secondPlayer}
        />
      </div>
    )
  }
}
