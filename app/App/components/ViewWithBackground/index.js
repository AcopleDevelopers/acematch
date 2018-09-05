import React from 'react'
import PropTypes from 'prop-types'
import {View, Image} from 'react-native'
import LoadingOverlay from 'App/components/LoadingOverlay'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

class ViewWithBackground extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    background: Image.propTypes.source,
    loading: PropTypes.bool
  }
  render() {
    const {children, background, loading} = this.props
    return (
      <View style={{flex: 1}}>
        <Image resizeMode="cover" style={styles.background} source={background} />
        <KeyboardAwareScrollView
          style={{flex: 1}}
          scrollEnabled={false}
          extraScrollHeight={50}
          innerContainerStyle={styles.container}
          resetScrollToCoords={{x: 0, y: 0}}
          automaticallyAdjustContentInsets={false}
          enableOnAndroid>
          <View style={[styles.container, styles.innerContainer]}>{children}</View>
        </KeyboardAwareScrollView>
        {loading && <LoadingOverlay />}
      </View>
    )
  }
}

export default ViewWithBackground
