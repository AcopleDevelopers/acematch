import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

import styles from './styles'

class DatePicker extends React.Component {
  static propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    placeholderStyle: PropTypes.any
  }

  state = {
    visible: false
  }

  parseValue() {
    const {value} = this.props
    return value ? moment(value).format('DD-MM-YYYY') : null
  }

  showPicker() {
    this.setState(() => ({
      visible: true
    }))
  }

  hidePicker() {
    this.setState(() => ({
      visible: false
    }))
  }

  onChange(date) {
    this.props.onChange(date)
    this.hidePicker()
  }

  render() {
    const {
      value,
      placeholder,
      style,
      textStyle,
      placeholderStyle,
      ...rest
    } = this.props
    const {visible} = this.state

    const textStyles = [
      styles.text,
      value && textStyle,
      !value && placeholderStyle
    ]

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.showPicker()}>
          <View style={[styles.input, style]}>
            <Text style={textStyles}>{this.parseValue() || placeholder}</Text>
          </View>
        </TouchableWithoutFeedback>

        <DateTimePicker
          isVisible={visible}
          onConfirm={date => this.onChange(date)}
          onCancel={() => this.hidePicker()}
          titleIOS="Selecciona una fecha"
          confirmTextIOS="Confirmar"
          cancelTextIOS="Cancelar"
          {...rest}
        />
      </View>
    )
  }
}

export default DatePicker
