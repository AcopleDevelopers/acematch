import React from 'react'
import PropTypes from 'prop-types'
import {View, Image, Text} from 'react-native'
import Subtitle from 'App/components/texts/Subtitle'

import styles from './styles'

class ProfileBadge extends React.Component {
  static propTypes = {
    image: Image.propTypes.source,
    icon: PropTypes.any,
    content: PropTypes.string,
    label: PropTypes.string
  }

  render() {
    const {image, icon, content, label} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.badge}>
          <Image source={image} style={styles.image} resizeMode="contain" />
          <Text style={styles.content}>{content}</Text>
          {icon}
        </View>
        <Subtitle style={styles.label}>{label}</Subtitle>
      </View>
    )
  }
}

export default ProfileBadge
