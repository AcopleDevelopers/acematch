import React from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import styles from './styles'

export class SelectInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    placeholderStyle: PropTypes.any
  }

  state = {
    visible: false
  }

  render() {
    const {
      value,
      placeholder,
      style,
      textStyle,
      placeholderStyle,
      options,
      onChange,
      ...rest
    } = this.props

    const {visible} = this.state

    const textStyles = [
      styles.text,
      value && textStyle,
      !value && placeholderStyle
    ]

    const selectedOption =
      value && options.find(option => option.key === value).label

    return (
      <ModalSelector
        data={options}
        onChange={value => onChange(value.key)}
        initValue={placeholder}
        visible={visible}
        cancelText={'Cancelar'}
        {...rest}
      >
        <View style={[styles.input, style]}>
          <Text style={textStyles}>{selectedOption || placeholder}</Text>
        </View>
      </ModalSelector>
    )
  }
}

export default SelectInput
