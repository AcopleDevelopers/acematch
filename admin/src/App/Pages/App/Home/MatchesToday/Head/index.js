import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FaCalendar from 'react-icons/lib/fa/calendar'

export default class Head extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const data = this.props.data || []
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <FaCalendar size={60} style={{color: '#3a9fda'}} />
        </div>
        <div className={styles.number}>
          <h2 className={styles.color}>{data.length}</h2>
        </div>
        <div className={styles.text}>
          <h2 className={styles.color}>matches para hoy!</h2>
        </div>
      </div>
    )
  }
}
