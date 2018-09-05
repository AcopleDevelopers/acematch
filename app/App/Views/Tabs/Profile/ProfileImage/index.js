import React from 'react'
import {View, Image} from 'react-native'

import styles from './styles'

class ProfileImage extends React.Component {
  static propTypes = {
    image: Image.propTypes.source
  }
  render() {
    const {image} = this.props

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
    )
  }
}

export default ProfileImage
