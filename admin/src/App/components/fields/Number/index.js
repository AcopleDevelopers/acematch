import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

export default class Number extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    field: PropTypes.object
  }

  state = {valid: true}

  validation(number) {
    return !/^[0-9]+$/.test(number)
  }

  getNumber(value) {
    if (!value) {
      this.props.onChange(null)
      return
    }
    if (!this.validation(value)) {
      this.props.onChange(value)
    } else {
      this.props.onChange('')
    }
  }

  render() {
    return (
      <div className={styles.osInputContainer}>
        <input
          type="text"
          className={styles.osInputText}
          placeholder={''}
          value={this.props.value && this.props.value}
          onChange={event => this.getNumber(event.target.value)}
        />
      </div>
    )
  }
}
