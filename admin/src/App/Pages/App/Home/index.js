import React from 'react'
import styles from './styles.css'
import MatchesToday from './MatchesToday'
import NewUsers from './NewUsers'
import PlayingNow from './PlayingNow'
import Container from 'orionsoft-parts/lib/components/Container'

export default class Home extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.title}>
            <h1>Panel General</h1>
          </div>
          <div className={styles.subTitle}>
            Estadísticas generales sobre matches y usuarios en juego
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <MatchesToday />
            </div>
            <div className="col-xs-12 col-sm-4">
              <PlayingNow />
            </div>
            <div className="col-xs-12 col-sm-4">
              <NewUsers />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
