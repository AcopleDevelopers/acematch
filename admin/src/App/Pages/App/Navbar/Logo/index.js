import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router-dom'

export default class Logo extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Link to="/">
          <img src="images/logoPage.png" alt="Logo" />
        </Link>
      </div>
    )
  }
}
