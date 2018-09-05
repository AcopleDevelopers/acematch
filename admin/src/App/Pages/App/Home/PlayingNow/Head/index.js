import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FaBell from 'react-icons/lib/fa/bell'

export default class Head extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const data = this.props.data || []
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <FaBell size={60} style={{color: '#69ab68'}} />
        </div>
        <div className={styles.number}>
          <h2 className={styles.color}>{data.length}</h2>
        </div>
        <div className={styles.text}>
          <h2 className={styles.color}>matches jugándose!</h2>
        </div>
      </div>
    )
  }
}
