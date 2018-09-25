import React from 'react'
import PropTypes from 'prop-types'
import {View, Image} from 'react-native'
import Title from 'App/components/texts/Title'

import styles from './styles'

class ImageTitle extends React.Component {
  static propTypes = {
    background: Image.propTypes.source,
    title: Title.propTypes.children,
    leftComponent: PropTypes.any,
    centerComponent: PropTypes.any,
    rightComponent: PropTypes.any
  }

  renderLeftComponent() {
    const {leftComponent} = this.props
    return leftComponent
      ? React.cloneElement(leftComponent, {style: styles.leftComponent})
      : null
  }

  renderCenterComponent() {
    const {centerComponent} = this.props
    return centerComponent
      ? React.cloneElement(centerComponent, {style: styles.centerComponent})
      : null
  }

  renderRightComponent() {
    const {rightComponent} = this.props
    return rightComponent
      ? React.cloneElement(rightComponent, {style: styles.rightComponent})
      : null
  }

  render() {
    const {background, title} = this.props

    return (
      <View style={styles.container}>
        <Image source={background} style={styles.image} />
        <Title numberOfLines={2} style={styles.title}>
          {title}
        </Title>
        <View style={styles.bottomComponents}>
          <View style={styles.left}>{this.renderLeftComponent()}</View>
          <View style={styles.center}>{this.renderCenterComponent()}</View>
          <View style={styles.right}>{this.renderRightComponent()}</View>
        </View>
      </View>
    )
  }
}

export default ImageTitle
