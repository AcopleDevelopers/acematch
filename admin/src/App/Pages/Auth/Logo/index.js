import React from 'react'
import styles from './styles.css'

export default class Logo extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src="/images/logoPage.png" alt="Logo" />
      </div>
    )
  }
}
