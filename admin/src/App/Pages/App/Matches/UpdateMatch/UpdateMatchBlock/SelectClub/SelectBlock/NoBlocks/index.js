import React from 'react'
import styles from './styles.css'

export default class NoBlock extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/images/danger.svg" className={styles.square2} alt="noItems" />
        </div>
        <div className={styles.message}>
          <h1>No se encontraron bloques</h1>
        </div>
      </div>
    )
  }
}
