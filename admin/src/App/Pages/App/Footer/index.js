import React from 'react'
import styles from './styles.css'

export default class Footer extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <strong>
          © 2018 AceMatch. Todos los derechos reservados. Powered by Utips &
          Orionsoft
        </strong>
      </div>
    )
  }
}
