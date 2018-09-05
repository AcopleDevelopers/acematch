import React from 'react'
import {Modal, View} from 'react-native'
import styles from './styles'
import LoadingOverlay from 'App/components/LoadingOverlay'
import PropTypes from 'prop-types'

export default class Tutorial extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.any,
    loading: PropTypes.bool
  }
  render() {
    const {visible, children, loading} = this.props

    return (
      <Modal visible={visible} transparent={true}>
        <View style={styles.outer}>
          <View style={styles.container}>{children}</View>
        </View>
        {loading && <LoadingOverlay />}
      </Modal>
    )
  }
}
