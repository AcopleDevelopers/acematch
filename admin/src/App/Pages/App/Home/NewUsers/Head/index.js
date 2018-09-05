import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FaChild from 'react-icons/lib/fa/child'

export default class Head extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const data = this.props.data || []
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <FaChild size={60} style={{color: '#a6af60'}} />
        </div>
        <div className={styles.number}>
          <h2 className={styles.color}>{data.length}</h2>
        </div>
        <div className={styles.text}>
          <h2 className={styles.color}>nuevos usuarios este mes!</h2>
        </div>
      </div>
    )
  }
}
