import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import CustomInput from './CustomInput'
import 'react-datepicker/dist/react-datepicker.css'

export default class DateSelect extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  }

  handleDate(changes) {
    const newValue = changes ? changes.toDate() : null
    this.props.onChange(newValue)
  }

  render() {
    const {placeholder, value} = this.props
    return (
      <div className={styles.container}>
        <DatePicker
          placeholderText={placeholder}
          selected={value ? moment(value) : null}
          onChange={changes => this.handleDate(changes)}
          timeIntervals={1}
          className={styles.input}
          customInput={<CustomInput />}
        />
      </div>
    )
  }
}
