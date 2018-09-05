import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

import styles from './styles'

export default class Dots extends React.Component {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired,
    dotsNumber: PropTypes.number.isRequired,
    style: PropTypes.object,
    activeDotStyle: PropTypes.object,
    dotStyle: PropTypes.object
  }

  renderDots() {
    const {dotsNumber, activeIndex, activeDotStyle, dotStyle} = this.props
    const dots = []
    for (let i = 0; i < dotsNumber; i++) {
      if (i === activeIndex) {
        dots.push(
          <View
            key={i}
            style={[styles.dot, styles.activeDot, activeDotStyle]}
          />
        )
      } else {
        dots.push(<View key={i} style={[styles.dot, dotStyle]} />)
      }
    }
    return dots
  }

  render() {
    const {style} = this.props

    return <View style={[styles.container, style]}>{this.renderDots()}</View>
  }
}
