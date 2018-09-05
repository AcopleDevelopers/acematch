import React from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'

const moment = global.moment

if (!moment) {
  throw new Error('Moment is required in global variable')
}

export default class TimeField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
    useHint: PropTypes.bool,
    label: PropTypes.any,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
    passProps: PropTypes.object,
    format: PropTypes.string
  }

  static defaultProps = {
    format: 'HH:mm'
  }

  state = {text: ''}

  @autobind
  setToday() {
    this.props.onChange(new Date())
  }

  // 12:2 9:0  9:78

  getValue() {
    const value = this.props.value
    if (value && value.length === 3 && value.charAt(1) === ':') {
      return this.hourChange(value, 1)
    }
    if (value && value.length === 4 && value.charAt(2) === ':') {
      return this.hourChange(value, 2)
    }
    if (value && value.length === 4 && value.charAt(1) === ':') {
      return this.hourChange(value, 3)
    }
    return this.props.value
      ? this.props.value.length === 5
        ? this.props.value
        : this.state.text
      : this.state.text
  }

  replaceTexts(text, previous) {
    if (previous.length > text.length) return
    if (text.length === 2) {
      this.onChange(text + ':')
      return true
    }
  }

  hourChange(text, type) {
    if (type === 1) return `0${text}0`
    if (type === 2) return `${text}0`
    if (type === 3) return `0${text}`
  }

  onChange(text) {
    if (text === 'n') {
      return this.props.onChange(new Date())
    }
    if (this.replaceTexts(text, this.state.text)) return
    this.setState({text})
    if (text.length !== 5) return this.props.onChange(null)
    const newValue = moment(text, this.props.format)
    if (!newValue.isValid()) return this.props.onChange(null)
    this.props.onChange(text)
  }

  @autobind
  onBlur() {
    if (!this.props.value) {
      this.setState({text: ''})
    }
  }

  render() {
    return (
      <div>
        <div className="os-input-container">
          <input
            className="os-input-text"
            value={this.getValue()}
            onChange={event => this.onChange(event.target.value)}
            onBlur={this.onBlur}
            {...this.props.passProps}
          />
        </div>
        <div className="os-input-error">{this.props.errorMessage}</div>
      </div>
    )
  }
}
