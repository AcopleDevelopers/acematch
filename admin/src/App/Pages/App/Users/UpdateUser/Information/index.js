import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import {withRouter} from 'react-router-dom'

@withRouter
export default class Information extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    user: PropTypes.object
  }

  render() {
    const {user} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.capsule}>
          <div className="row">
            <div className="col-xs-12 col-sm-10">
              <h1>{user.name}</h1>
            </div>
            <div className="col-xs-12 col-sm-2 end-sm">
              <div className={styles.button}>
                <Button onClick={() => this.props.history.push('/users')}>
                  Volver
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.subCapsule}>
            <div className={styles.subTitle}>
              <h2>Ficha de jugador</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <h3>Email: {user.email}</h3>
                <h3>Teléfono: {user.profile.number}</h3>
                <h3>Edad: {user.age}</h3>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h3>Partidos jugados: {user.playedGames}</h3>
                <h3>Partidos ganados: {user.wonMatches}</h3>
                <h3>Partidos perdidos: {user.lostMatches}</h3>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h3>Nivel de experiencia: {user.expertiseLevel}</h3>
                <h3>Ranking: {user.profile.ranking}</h3>
                <h3>Categoría: {user.profile.category}</h3>
              </div>
              <div className="col-xs-12 col-sm-2">
                <h3>Genero: {user.profile.genre}</h3>
                <h3>Altura: {user.profile.height}cm</h3>
                <h3>Peso: {user.profile.weight}kg</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
