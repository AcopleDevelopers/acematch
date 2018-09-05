import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import withRouterId from 'App/Decorators/withRouterId'
import Playfields from './Playfields'
import Timeblocks from './Timeblocks'
import {withRouter} from 'react-router-dom'
import Button from 'orionsoft-parts/lib/components/Button'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'

@withRouterId
@withGraphQL(gql`
  query getClub($clubId: ID) {
    getClub(clubId: $clubId) {
      _id
      name
    }
  }
`)
@withRouter
@withRouterId
export default class Elements extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    clubId: PropTypes.string,
    getClub: PropTypes.object
  }

  render() {
    const {clubId} = this.props
    const {name} = this.props.getClub
    return (
      <div className={styles.container}>
        <Container>
          <h1>Club {name}</h1>
          <div className={styles.divider} />
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Playfields clubId={clubId} />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Timeblocks clubId={clubId} />
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.buttons}>
            <Button onClick={() => this.props.history.push(`/clubs`)}>
              volver
            </Button>
            <Button
              onClick={() =>
                this.props.history.push(`/clubs/createplayfield/${clubId}`)
              }
              primary>
              Crear Cancha
            </Button>
            <Button
              onClick={() =>
                this.props.history.push(`/clubs/createblock/${clubId}`)
              }
              primary>
              Crear Bloque
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
