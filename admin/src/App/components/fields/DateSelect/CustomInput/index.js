import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import moment from 'moment'

export default class CustomInput extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const {value} = this.props
    return (
      <div className={styles.container}>
        <input
          ref="input"
          type="text"
          className={styles.input}
          onClick={this.props.onClick}
          value={value ? moment(value).format('DD/MM/YYYY') : ''}
        />
      </div>
    )
  }
}
