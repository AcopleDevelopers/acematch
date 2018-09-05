import React from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'

import styles from './styles'

class InfoItem extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    modal: PropTypes.any,
    modalInfo: PropTypes.object
  }

  state = {
    modalOpen: false
  }

  onPress = () => {
    const {modal, action} = this.props
    if (action) {
      action()
    } else if (modal) {
      this.setState({modalOpen: true})
    }
  }

  render() {
    const {label, value, action, modal: Modal, modalInfo} = this.props
    const {modalOpen} = this.state

    return (
      <View style={styles.container}>
        {Modal && (
          <Modal
            visible={modalOpen}
            close={() => this.setState({modalOpen: false})}
            {...modalInfo}
          />
        )}
        <View style={styles.content}>
          <Text style={[styles.label]}>{label}</Text>
          <Text
            style={[styles.value, (action || Modal) && styles.action]}
            onPress={this.onPress}
          >
            {value}
          </Text>
        </View>
        <View style={styles.divider} />
      </View>
    )
  }
}

export default InfoItem
